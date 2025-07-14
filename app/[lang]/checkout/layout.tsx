export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      <div className="mx-auto max-w-5xl">{children}</div>
    </div>
  );
} 