
import Link from 'next/link';
import { Heart, Calendar } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-muted-foreground font-code">
      <div className="container mx-auto max-w-screen-xl p-8 md:p-12">
        <div className="bg-background rounded-lg p-4 mb-8 border border-border shadow-lg">
          <div className="flex items-center">
            <span className="text-primary mr-2">$</span>
            <span className="text-foreground">echo "Gracias por existir"</span>
          </div>
          <p className="text-primary/80 animate-pulse">Gracias por existir 💚</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8">
          <Link href="/qualities" className="hover:text-primary transition-colors">Lo que Amo</Link>
          <Link href="/letter" className="hover:text-primary transition-colors">Carta</Link>
          <Link href="/reasons" className="hover:text-primary transition-colors">465 Razones</Link>
          <Link href="/citas" className="hover:text-primary transition-colors">Nuestras 100 Citas</Link>
          <Link href="/surprise" className="hover:text-primary transition-colors">Sorpresa</Link>
        </div>
        <div className="text-center text-sm text-muted-foreground/80 border-t border-border pt-6">
           <div className="flex items-center justify-center gap-2 mb-4 text-base">
            <Calendar className="h-4 w-4 text-primary" />
            <span>Lunes, 7 de Julio de 2025</span>
            <Calendar className="h-4 w-4 text-primary" />
          </div>
          <p className="mb-2">Esto fue solo una parte de lo mucho que siento por ti...</p>
          <p className="flex items-center justify-center gap-2">
            Hecho con <Heart className="h-4 w-4 text-primary" /> y mucho cariño.
          </p>
        </div>
      </div>
    </footer>
  );
}
