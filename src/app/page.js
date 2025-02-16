import ContentCards from "@/components/ContentCards";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import NewsSlider from "@/components/NewsSlider";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       
    //   </main>
      
    // </div>
    <main>
      <HeroSection/>
      <ContentCards/>
      <NewsSlider/>

      <Footer/>
    </main>
  );
}
