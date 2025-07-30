
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BrainCircuit, HeartHandshake, ShieldCheck, Smile, Star, Gem, Feather, ArrowRight } from 'lucide-react';

const qualities = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Tu Forma de Pensar',
    description: 'Admiro tu mente brillante, tu lógica y tu infinita curiosidad.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Tu Fortaleza',
    description: 'Eres increíblemente fuerte, resiliente y capaz de superar cualquier cosa.',
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: 'Cómo Cuidas a los Demás',
    description: 'Tu empatía y la forma en que te preocupas por los demás es algo hermoso.',
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: 'Tu Sentido del Humor',
    description: 'Me haces reír como nadie, incluso en los días más grises.',
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: 'Tu Talento Único',
    description: 'La pasión y habilidad que pones en todo lo que haces es inspiradora.',
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: 'Tu Autenticidad',
    description: 'Amo que seas tú misma, sin filtros y con una personalidad que brilla.',
  },
];

export default function QualitiesSection() {
  return (
    <section id="qualities" className="relative overflow-hidden">
       <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <Image 
          src="https://preview.redd.it/full-size-maomao-from-anime-ep-5-v0-46j3bvd7hzyb1.png?width=1920&format=png&auto=webp&s=b32d5403cc87e009a0a0472b9bf9b7c5b7b15660"
          alt="Maomao de fondo"
          data-ai-hint="anime apothecary background"
          fill
          className="object-contain object-center opacity-20"
        />
        <Image 
          src="https://pbs.twimg.com/profile_images/1842912410299977728/YmfI_cbH_400x400.png"
          alt="Maomao"
          width={300}
          height={300}
          className="absolute -bottom-12 -left-24 opacity-40 transform -rotate-12 pointer-events-none z-10"
          />
          <Image 
            src="https://static.vecteezy.com/system/resources/previews/009/667/947/non_2x/sunflower-bouquet-art-painting-free-png.png"
            alt="Girasoles"
            width={250}
            height={250}
            className="absolute -top-10 -right-16 opacity-50 transform rotate-12 pointer-events-none z-10"
          />
       </div>
      <div className="container relative z-10 px-4 md:px-6 animate-fade-in-up">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-gray-900">Lo Que Amo de Ti</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Estas son solo algunas de las cosas que hacen que seas tan especial para mí.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {qualities.map((quality, index) => (
            <div key={quality.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`}}>
              <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white/50 backdrop-blur-sm h-full">
                <CardHeader className="flex flex-col items-center gap-4">
                  {quality.icon}
                  <CardTitle className='font-headline text-center text-gray-800'>{quality.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm text-gray-600">{quality.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild size="lg" variant="outline-inverse" className="group">
            <Link href="/album">
              Ver nuestro álbum
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
