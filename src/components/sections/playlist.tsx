
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, ArrowRight } from 'lucide-react';

const songs = [
  { title: "Young And Beautiful - Lana Del Rey", reason: "Porque sé que me amarás incluso cuando ya no sea joven y hermosa." },
  { title: "Entrégate - Luis Miguel", reason: "Porque esta canción es una petición, una promesa y una declaración de amor." },
  { title: "It's All Coming Back to Me Now - Céline Dion", reason: "Porque cada momento contigo se vuelve un recuerdo imborrable." },
  { title: "Mi Corazón Encantado - Aaron Montalvo", reason: "Porque tu sonrisa tan resplandeciente a mi corazón deja encantado." },
]

export default function PlaylistSection() {
  return (
    <section id="playlist" className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
              src="https://freepngimg.com/save/31643-inuyasha-image/1500x1439"
              alt="Inuyasha"
              width={350}
              height={350}
              className="absolute -bottom-10 -right-20 opacity-40 transform rotate-12 pointer-events-none"
          />
          <Image 
            src="https://png.pngtree.com/png-vector/20250115/ourmid/pngtree-alstroemeria-3d-rendered-flower-beautifully-isolated-on-a-white-background-with-png-image_15201064.png"
            alt="Alstroemeria"
            width={250}
            height={250}
            className="absolute -top-12 -left-20 opacity-50 transform -rotate-12 pointer-events-none"
          />
        </div>
      <div className="container relative z-10 px-4 md:px-6 animate-fade-in-up">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-gray-900">Tu Playlist Personal</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              Canciones que marcan el inicio de un sentimiento infinito.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
             <iframe 
                className="w-full h-full"
                src="https://open.spotify.com/embed/playlist/1ScwMPnrMN5hCJ2BOXUSbx" 
                allow="encrypted-media"
                loading="lazy"
              ></iframe>
          </div>
          <div className="flex flex-col gap-4">
            {songs.map((song, index) => (
              <div key={song.title} className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`}}>
                <Music className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800">{song.title}</h4>
                  <p className="text-sm text-gray-600">{song.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
         <div className="flex justify-center mt-12">
          <Button asChild size="lg" className="group">
            <Link href="/letter">
              Leer mi carta para ti
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
