import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import LetterSection from '@/components/sections/letter';

export default function LetterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <LetterSection />
      </main>
      <Footer />
    </div>
  );
}
