import { Inter } from "@next/font/google";
import HelloSection from "../Components/Home/HelloSection";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-orange-50 text-black">
      <HelloSection />
    </div>
  );
}
