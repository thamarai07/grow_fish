import Hero from "@/component/Hero";
import Info from "@/component/Info";
import "./globals.css";
export default function Home() {
  return (
    <div>
      <Hero />
      <div className="waves">
        <Info />
      </div>
    </div>
  );
}
