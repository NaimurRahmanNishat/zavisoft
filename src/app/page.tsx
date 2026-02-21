// src/app/page.tsx
import Categories from '@/components/home/Categories';
import Hero from '@/components/home/Hero';
import Review from '@/components/home/Review';
import Shop from '@/components/home/Shop';

const page = () => {
  return (
    <main className="md:pt-16 pt-8">
      <Hero/>
      <Shop/>
      <Categories/>
      <Review/>
    </main>
  )
}

export default page;
