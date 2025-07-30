import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ReasonsSection from '@/components/sections/reasons';

export default function ReasonsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ReasonsSection />
      </main>
      <Footer />
    </div>
  );
}
