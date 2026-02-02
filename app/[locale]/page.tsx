import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import SignatureCollections from '@/components/home/SignatureCollections';
import ExclusiveOffer from '@/components/home/ExclusiveOffer';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <SignatureCollections />
      <ExclusiveOffer />
      <Testimonials />
      <FAQ />
    </>
  );
}
