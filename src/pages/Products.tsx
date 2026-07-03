import SolutionsSlider from '../components/SolutionsSlider';
import ResellerCTA from '../components/ResellerCTA';

export default function Products() {
  return (
    <main>
      <section className="py-16 bg-surface text-center">
        <div className="w-full max-w-7xl mx-auto px-8">
          <h1 className="text-5xl font-heading font-extrabold mb-6">
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Ready-to-deploy digital products designed to scale your operations instantly.
          </p>
        </div>
      </section>

      <SolutionsSlider />
      
      <ResellerCTA />
    </main>
  );
}
