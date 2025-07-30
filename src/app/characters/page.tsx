import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import CharactersSection from '@/components/sections/characters';

export default function CharactersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <CharactersSection />
      </main>
      <Footer />
    </div>
  );
}
