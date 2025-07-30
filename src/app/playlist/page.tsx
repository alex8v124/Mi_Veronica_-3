import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import PlaylistSection from '@/components/sections/playlist';

export default function PlaylistPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PlaylistSection />
      </main>
      <Footer />
    </div>
  );
}
