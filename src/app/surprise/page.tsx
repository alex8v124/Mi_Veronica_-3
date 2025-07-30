import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import SurpriseSection from '@/components/sections/surprise';

export default function SurprisePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SurpriseSection />
      </main>
      <Footer />
    </div>
  );
}
