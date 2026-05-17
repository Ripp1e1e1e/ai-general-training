import Header from "@/components/training/layout/Header";
import Sidebar from "@/components/training/layout/Sidebar";
import MobileNav from "@/components/training/layout/MobileNav";
import Footer from "@/components/training/layout/Footer";
import HeroSection from "@/components/training/sections/HeroSection";
import Ch01Basics from "@/components/training/sections/Ch01Basics";
import Ch02Prompts from "@/components/training/sections/Ch02Prompts";
import Ch03Tools from "@/components/training/sections/Ch03Tools";
import Ch04Debug from "@/components/training/sections/Ch04Debug";
import CheatSheet from "@/components/training/sections/CheatSheet";

export default function TrainingPage() {
  return (
    <>
      <Header />
      <div className="flex justify-center pt-16">
        <div className="flex w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Sidebar />
          <main className="flex-1 min-w-0">
            <HeroSection />
            <div className="max-w-4xl mx-auto px-6">
              <div className="border-t border-zinc-200" />
            </div>
            <Ch01Basics />
            <div className="max-w-4xl mx-auto px-6">
              <div className="border-t border-zinc-200" />
            </div>
            <Ch02Prompts />
            <div className="max-w-4xl mx-auto px-6">
              <div className="border-t border-zinc-200" />
            </div>
            <Ch03Tools />
            <div className="max-w-4xl mx-auto px-6">
              <div className="border-t border-zinc-200" />
            </div>
            <Ch04Debug />
            <div className="max-w-4xl mx-auto px-6">
              <div className="border-t border-zinc-200" />
            </div>
            <CheatSheet />
          </main>
        </div>
      </div>
      <Footer />
      <MobileNav />
    </>
  );
}
