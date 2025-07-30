import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AlbumSection from '@/components/sections/album';

export default function AlbumPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AlbumSection />
      </main>
      <Footer />
    </div>
  );
}