import Hero from "@/component/Hero";
import Info from "@/component/Info";
import "./globals.css";
import Products from "@/component/Product";
export default function Home() {
  return (
    <div>
      <Hero />
      <div className="waves">
        <Info />
      </div>
      <Products/>
    </div>
  );
}
