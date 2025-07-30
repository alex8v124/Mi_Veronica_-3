
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://scontent-lim1-1.cdninstagram.com/v/t51.29350-15/505407565_1758928354712793_8231036581651407785_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTQ0MC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_cat=109&_nc_oc=Q6cZ2QH9hl6YiAVJKkco3f7yDg5S8PmDXCTT9xk873wECIpMcoTjJYjqJLQrMOZiia5o_is&_nc_ohc=YtkHedb3Nm8Q7kNvwENCqba&_nc_gid=hKImbl0ud7Av_RckPZ1eVQ&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzY2MTAyMzQ0OTg4Mjc2NzgwMQ%3D%3D.3-ccb7-5&oh=00_AfTip3UDo7GLD5yJs8kLCY8J1s0gtjeKSunnGjE3Gds4TQ&oe=688E6743&_nc_sid=7a9f4b"
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
