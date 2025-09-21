
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Img-princ-vero.jpg"
          alt="Pareja mirandose"
          data-ai-hint="couple sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 container px-4 md:px-6 animate-fade-in-up">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-primary/20 text-primary-foreground font-bold font-headline rounded-full px-4 py-2 mb-4 border border-primary/40">
            Viernes, 1 de Agosto de 2025
          </div>
          <h1 className="text-4xl font-headline font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Todo esto lo hice por ti, porque eres única 💛
          </h1>
          <p className="mt-6 text-lg text-foreground/80 md:text-xl">
            Una pequeña muestra de un sentimiento gigante.
          </p>
          <Button asChild size="lg" className="mt-8 group">
            <Link href="/qualities">
              Comenzar
              <Sparkles className="ml-2 h-5 w-5 group-hover:scale-125 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
