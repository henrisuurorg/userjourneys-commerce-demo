'use client';

import type { getDictionary } from '@/lib/dictionaries';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { removeItem } from 'components/cart/actions';
import type { CartItem } from 'lib/shopify-mock/types';
import { useActionState } from 'react';

export function DeleteItemButton({
  item,
  optimisticUpdate,
  dictionary
}: {
  item: CartItem;
  optimisticUpdate: any;
  dictionary: Awaited<ReturnType<typeof getDictionary>>['cart'];
}) {
  const [message, formAction] = useActionState(removeItem, null);
  const merchandiseId = item.merchandise.id;
  const removeItemAction = formAction.bind(null, merchandiseId);

  return (
    <form
      action={async () => {
        optimisticUpdate(merchandiseId, 'delete');
        removeItemAction();
      }}
    >
      <button
        type="submit"
        aria-label={dictionary.delete}
        title={dictionary.delete}
        className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-neutral-500"
      >
        <XMarkIcon className="mx-[1px] h-4 w-4 text-white dark:text-black" />
      </button>
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
