import EcommerceCard from "@/components/EcommerceCard";
import ProfitCard from "@/components/ProfitCard";
import ProductsCard from "@/components/ProductsCard";

export default function EcommercePage() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Left: Ecommerce Card(s) */}
      <EcommerceCard />

      {/* Right: Profit Card */}
      <ProfitCard />

      {/* Right: Products Card */}
      <ProductsCard />
    </div>
  );
}
