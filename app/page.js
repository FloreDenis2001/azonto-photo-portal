import CarouselHero from "./_components/CarouselHero";
import CategorySection from "./_components/CategorySection";
import RecentWork from "./_components/RecentWork";
export default function Home() {
  return (
    <div className="bg-neutral-900 grid place-items-center">
        
        <CarouselHero />
        <CategorySection />
        <RecentWork />

    </div>
  );
}
