
"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Code, BookText, ArrowRight } from 'lucide-react';

const CodeLetter = () => (
  <div className="bg-[#011627] text-sm text-gray-300 p-6 rounded-lg font-code overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-700">
     <div className="absolute inset-0 z-0">
        <Image 
            src="https://vegas.nyc3.cdn.digitaloceanspaces.com/0261_y_st_webp-m/sticker-fan_18436808_m.webp"
            alt="Venom"
            width={200}
            height={200}
            className="absolute -bottom-12 -right-12 opacity-40 transform-gpu pointer-events-none z-10"
            />
     </div>
    <pre className="relative z-10">
      <code>
        <div>
          <span className="text-pink-400">const</span> <span className="text-sky-400">miAmor</span> {'= {'}
        </div>
        <div className="pl-4">
          <span className="text-emerald-400">destino</span>: <span className="text-amber-400">"Tú"</span>,
        </div>
        <div className="pl-4">
          <span className="text-emerald-400">felicidad</span>: <span className="text-amber-400">"Estás en ella"</span>,
        </div>
        <div className="pl-4">
          <span className="text-emerald-400">promesa</span>: <span className="text-amber-400">"Siempre juntos"</span>,
        </div>
        <div className="pl-4">
          <span className="text-emerald-400">motivo</span>: {'() => {'}
        </div>
        <div className="pl-8">
          <span className="text-pink-400">return</span> <span className="text-amber-400">"Eres la pieza que completa mi código."</span>;
        </div>
        <div className="pl-4">
          {'}'},
        </div>
        <div>{'};'}</div>
      </code>
    </pre>
  </div>
);


const ManuscriptLetter = () => (
  <div className="relative bg-gray-50/80 p-8 rounded-lg border border-gray-200 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="absolute inset-0 z-0">
        <Image 
            src="https://images.vexels.com/media/users/3/147196/isolated/preview/ef9bd0e6f6f0b12e0735846300ae1d0d-ilustracion-de-girasol.png"
            alt="Girasol"
            width={150}
            height={150}
            className="absolute -bottom-8 -left-8 opacity-20 transform-gpu pointer-events-none rotate-[-15deg] z-10"
        />
        <Image 
          src="https://vegas.nyc3.cdn.digitaloceanspaces.com/0261_y_st_webp-m/sticker-fan_18436808_m.webp"
          alt="Venom"
          width={200}
          height={200}
          className="absolute -bottom-12 -right-12 opacity-40 transform-gpu pointer-events-none z-10"
        />
      </div>
    <div className="prose prose-lg prose-p:text-gray-600 text-gray-800 max-w-none prose-headings:text-primary relative z-10">
        <h3 className="font-headline text-2xl">Ma Chérie,</h3>
        <p className="text-lg">
          Si pudiera, te abrazaría en cada momento difícil y te abrigaría en cada frío, no solo con mis brazos, sino con todo lo que siento por ti. Quiero ser ese lugar donde siempre encuentres calma, apoyo y amor sin condiciones.
        </p>
        <p className="text-lg">
          Estás en mi mente al despertar y en mi paz al dormir. Eres la razón por la que sonrío más y me esfuerzo cada día. No llegaste por casualidad. Llegaste porque así debía ser.
        </p>
        <p className="text-lg">
          Y desde entonces, solo quiero verte feliz, cuidarte, y estar a tu lado en cada invierno, literal o emocional. Porque te amo, y eso nunca va a cambiar.
        </p>
        <p className="text-lg text-right mt-8">Con todo de mí,</p>
        <p className="text-lg text-right font-headline">Tu moncherripen :3</p>
    </div>
  </div>
);

export default function LetterSection() {
  return (
    <section id="letter" className="bg-gradient-to-br from-teal-200/40 to-blue-200/40">
      <div className="container px-4 md:px-6 animate-fade-in-up">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-gray-900">Una Carta Para Ti</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              Palabras que intentan describir un sentimiento indescriptible.
            </p>
          </div>
        </div>

        <Tabs defaultValue="code" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-gray-200 text-gray-500">
            <TabsTrigger value="code" className="gap-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md"><Code className="h-4 w-4" /> Modo Código</TabsTrigger>
            <TabsTrigger value="manuscript" className="gap-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md"><BookText className="h-4 w-4" /> Modo Manuscrito</TabsTrigger>
          </TabsList>
          <TabsContent value="code" className="mt-6">
            <CodeLetter />
          </TabsContent>
          <TabsContent value="manuscript" className="mt-6">
            <ManuscriptLetter />
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-12">
          <Button asChild size="lg" variant="outline-inverse" className="group">
            <Link href="/reasons">
              ¿Quieres saber cuántas razones tengo?
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
