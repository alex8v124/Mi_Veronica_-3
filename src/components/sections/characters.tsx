
"use client";

import {
  Card,
  CardContent,
} from '@/components/ui/card';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const characters = [
  {
    name: 'Inuyasha',
    quote: '"No importa cuántas veces me derriben, siempre me levantaré por ti."',
    image: 'https://i.pinimg.com/736x/a8/a2/bc/a8a2bc695b7d34b5c4851b67f0462f14.jpg',
    aiHint: 'anime warrior',
  },
  {
    name: 'Maomao',
    quote: '"Contigo, hasta el veneno más letal parece un simple resfriado. Mi curiosidad por ti es insaciable."',
    image: 'https://pbs.twimg.com/profile_images/1842912410299977728/YmfI_cbH_400x400.png',
    aiHint: 'apothecary anime',
  },
  {
    name: 'Venom',
    quote: '"Nosotros... somos mejores juntos. Eres nuestro anfitrión perfecto."',
    image: 'https://vegas.nyc3.cdn.digitaloceanspaces.com/0261_y_st_webp-m/sticker-fan_18436808_m.webp',
    aiHint: 'dark symbiote',
  },
  {
    name: 'Deadpool',
    quote: '"¡Oye, tú! Sí, la que está leyendo esto. Él te quiere más que a las chimichangas. Y eso es mucho decir. 😎"',
    image: 'https://mumbai.nyc3.cdn.digitaloceanspaces.com/0387_y_st/sticker-fan_19923783_a.png',
    aiHint: 'red antihero',
  },
];

export default function CharactersSection() {
  return (
    <section id="characters" className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Tus Personajes Favoritos</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
              Reflejos de tu propia fuerza, inteligencia y singularidad.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {characters.map((char) => (
            <Dialog key={char.name}>
              <DialogTrigger asChild>
                <Card className={`overflow-hidden group cursor-pointer border-2 border-border/20 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl`}>
                  <div className="relative h-64 w-full">
                    <Image
                      src={char.image}
                      alt={char.name}
                      data-ai-hint={char.aiHint}
                      fill
                      className="object-contain object-center p-4 transition-transform duration-500 group-hover:scale-110"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  <CardContent className="p-4 absolute bottom-0 w-full">
                    <h3 className={`text-2xl font-headline font-bold text-white drop-shadow-md`}>{char.name}</h3>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl text-primary">{char.name}</DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-lg text-foreground/90 py-4">
                  {char.quote}
                </DialogDescription>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
