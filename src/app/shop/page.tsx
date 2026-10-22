import type { Metadata } from "next";
import { Button } from "@/components/button";
import { getProducts } from "@/lib/content";

export const metadata: Metadata = { title: "Shop | DoTA" };

export default function ShopPage() {
  const products = getProducts();

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-16 md:px-6 lg:px-8 xl:px-16">
      <header className="mb-16 space-y-6">
        <p className="font-mono text-mono-sm uppercase">( SHOP )</p>
        <h1 className="text-display-lg font-semibold">Shop</h1>
        <p className="text-lead text-ink-muted">Shop page team</p>
      </header>
      <ul>
        {products.map((product) => (
          <li key={product.slug} className="grid items-center gap-6 border-b border-black py-8 md:grid-cols-[1fr_auto_8rem_auto]">
            <h2 className="text-h3 font-medium">{product.name}</h2>
            <span className="font-mono text-mono-md uppercase">₹{product.priceINR.toLocaleString("en-IN")}</span>
            <span className="font-mono text-mono-sm uppercase">{product.status.replaceAll("-", " ")}</span>
            <Button variant="secondary" href={product.orderUrl} aria-label={`Order ${product.name}`} className="justify-self-start">Order</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
