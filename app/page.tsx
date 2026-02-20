import Banner from "@/components/home/banner";
import CategoriesSection from "@/components/home/categories-section";
import NewDropsSection from "@/components/home/new-drops-section";

export default function Home() {
  return (
    <section>
      <Banner />
      <NewDropsSection />
      <CategoriesSection />
    </section>
  );
}
