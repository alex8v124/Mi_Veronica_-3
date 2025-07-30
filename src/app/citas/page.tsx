import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CitasSection from '@/components/sections/citas';

export default function CitasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <CitasSection />
      </main>
      <Footer />
    </div>
  );
}
