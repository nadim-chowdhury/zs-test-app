import Banner from "@/components/home/banner";
import CategoriesSection from "@/components/home/categories-section";
import NewDropsSection from "@/components/home/new-drops-section";
import ReviewsSection from "@/components/home/reviews-section";

export default function Home() {
  return (
    <section>
      <Banner />
      <NewDropsSection />
      <CategoriesSection />
      <ReviewsSection />
    </section>
  );
}
