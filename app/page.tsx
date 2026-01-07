import Header from '../components/Header';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Page() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Destinations />
      <Testimonials />
      <CTA />
    </main>
  );
}
