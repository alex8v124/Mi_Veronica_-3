import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import SunflowerSection from '@/components/sections/sunflower';

export default function SunflowerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-1">
        <SunflowerSection />
      </main>
      <Footer />
    </div>
  );
}
