'use client';

import type {
    Cart,
    CartItem,
    Product,
    ProductVariant
} from 'lib/shopify-mock/types';
import React, {
    createContext,
    use,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useOptimistic,
    useState
} from 'react';

type UpdateType = 'plus' | 'minus' | 'delete';

type CartAction =
  | {
      type: 'UPDATE_ITEM';
      payload: { merchandiseId: string; updateType: UpdateType };
    }
  | {
      type: 'ADD_ITEM';
      payload: { variant: ProductVariant; product: Product };
    };

type CartContextType = {
  cartPromise: Promise<Cart | undefined>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function calculateItemCost(quantity: number, price: string): string {
  return (Number(price) * quantity).toString();
}

function updateCartItem(
  item: CartItem,
  updateType: UpdateType
): CartItem | null {
  if (updateType === 'delete') return null;

  const newQuantity =
    updateType === 'plus' ? item.quantity + 1 : item.quantity - 1;
  if (newQuantity === 0) return null;

  const singleItemAmount = Number(item.cost.totalAmount.amount) / item.quantity;
  const newTotalAmount = calculateItemCost(
    newQuantity,
    singleItemAmount.toString()
  );

  return {
    ...item,
    quantity: newQuantity,
    cost: {
      ...item.cost,
      totalAmount: {
        ...item.cost.totalAmount,
        amount: newTotalAmount
      }
    }
  };
}

function createOrUpdateCartItem(
  existingItem: CartItem | undefined,
  variant: ProductVariant,
  product: Product
): CartItem {
  const quantity = existingItem ? existingItem.quantity + 1 : 1;
  const totalAmount = calculateItemCost(quantity, variant.price.amount);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variants, ...cartProduct } = product;

  return {
    id: existingItem?.id,
    quantity,
    cost: {
      totalAmount: {
        amount: totalAmount,
        currencyCode: variant.price.currencyCode
      }
    },
    merchandise: {
      id: variant.id,
      title: variant.title,
      availableForSale: true, // Optimistic update
      selectedOptions: variant.selectedOptions,
      product: cartProduct
    }
  };
}

function updateCartTotals(
  lines: CartItem[]
): Pick<Cart, 'totalQuantity' | 'cost'> {
  const totalQuantity = lines.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = lines.reduce(
    (sum, item) => sum + Number(item.cost.totalAmount.amount),
    0
  );
  const currencyCode = lines[0]?.cost.totalAmount.currencyCode ?? 'USD';

  return {
    totalQuantity,
    cost: {
      subtotalAmount: { amount: totalAmount.toString(), currencyCode },
      totalAmount: { amount: totalAmount.toString(), currencyCode },
      totalTaxAmount: { amount: '0', currencyCode }
    }
  };
}

function createEmptyCart(): Cart {
  return {
    id: undefined,
    checkoutUrl: '',
    totalQuantity: 0,
    lines: [],
    cost: {
      subtotalAmount: { amount: '0', currencyCode: 'USD' },
      totalAmount: { amount: '0', currencyCode: 'USD' },
      totalTaxAmount: { amount: '0', currencyCode: 'USD' }
    }
  };
}

function cartReducer(state: Cart | undefined, action: CartAction): Cart {
  const currentCart = state || createEmptyCart();

  switch (action.type) {
    case 'UPDATE_ITEM': {
      const { merchandiseId, updateType } = action.payload;
      const updatedLines = currentCart.lines
        .map((item) =>
          item.merchandise.id === merchandiseId
            ? updateCartItem(item, updateType)
            : item
        )
        .filter(Boolean) as CartItem[];

      if (updatedLines.length === 0) {
        return {
          ...currentCart,
          lines: [],
          totalQuantity: 0,
          cost: {
            ...currentCart.cost,
            totalAmount: { ...currentCart.cost.totalAmount, amount: '0' }
          }
        };
      }

      return {
        ...currentCart,
        ...updateCartTotals(updatedLines),
        lines: updatedLines
      };
    }
    case 'ADD_ITEM': {
      const { variant, product } = action.payload;
      const existingItem = currentCart.lines.find(
        (item) => item.merchandise.id === variant.id
      );
      const updatedItem = createOrUpdateCartItem(
        existingItem,
        variant,
        product
      );

      const updatedLines = existingItem
        ? currentCart.lines.map((item) =>
            item.merchandise.id === variant.id ? updatedItem : item
          )
        : [...currentCart.lines, updatedItem];

      return {
        ...currentCart,
        ...updateCartTotals(updatedLines),
        lines: updatedLines
      };
    }
    default:
      return currentCart;
  }
}

export function CartProvider({
  children,
  cartPromise
}: {
  children: React.ReactNode;
  cartPromise: Promise<Cart | undefined>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CartContext.Provider value={{ cartPromise, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }

  const initialCart = use(context.cartPromise);
  const [optimisticCart, updateOptimisticCart] = useOptimistic(initialCart, cartReducer);

  const openCart = () => context.setIsOpen(true);
  const closeCart = () => context.setIsOpen(false);

  useEffect(() => {
    if (optimisticCart && optimisticCart.totalQuantity > (initialCart?.totalQuantity ?? 0)) {
      if (!context.isOpen) {
        context.setIsOpen(true);
      }
    }
  }, [optimisticCart, initialCart, context]);

  const updateCartItem = useCallback(
    (merchandiseId: string, updateType: UpdateType) => {
      updateOptimisticCart({
        type: 'UPDATE_ITEM',
        payload: { merchandiseId, updateType }
      });
    },
    [updateOptimisticCart]
  );

  const addCartItem = useCallback(
    (variant: ProductVariant, product: Product) => {
      updateOptimisticCart({ type: 'ADD_ITEM', payload: { variant, product } });
    },
    [updateOptimisticCart]
  );

  return useMemo(
    () => ({
      cart: optimisticCart,
      updateCartItem,
      addCartItem,
      openCart,
      closeCart,
      isOpen: context.isOpen
    }),
    [optimisticCart, addCartItem, updateCartItem, context.isOpen, openCart, closeCart]
  );
}
