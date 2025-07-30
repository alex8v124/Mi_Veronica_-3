import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import QualitiesSection from '@/components/sections/qualities';

export default function QualitiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <QualitiesSection />
      </main>
      <Footer />
    </div>
  );
}
