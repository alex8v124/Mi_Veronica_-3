
"use client";

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Download, Loader2, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Reason {
  id: number;
  reason: string;
}

const REASONS_PER_PAGE = 21;

export default function ReasonsSection() {
  const [allReasons, setAllReasons] = useState<Reason[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(REASONS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReasons = async () => {
      try {
        const response = await fetch('/reasons.json');
        const data = await response.json();
        setAllReasons(data);
      } catch (error) {
        console.error("Failed to fetch reasons:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReasons();
  }, []);

  const filteredReasons = useMemo(() => {
    return allReasons.filter(r =>
      r.reason.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allReasons, searchTerm]);

  const visibleReasons = useMemo(() => {
    return filteredReasons.slice(0, visibleCount);
  }, [filteredReasons, visibleCount]);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + REASONS_PER_PAGE);
  };

  return (
    <section id="reasons" className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
              src="https://mumbai.nyc3.cdn.digitaloceanspaces.com/0387_y_st/sticker-fan_19923783_a.png"
              alt="Deadpool"
              width={250}
              height={250}
              className="absolute -top-12 -left-20 opacity-40 transform -rotate-15 pointer-events-none"
          />
        </div>
      <div className="container relative z-10 px-4 md:px-6 animate-fade-in-up">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-gray-900">465 Razones para Amarte</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              Te amo 465 veces y todas con sentido. Y me quedo corto.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                    type="text"
                    placeholder="Busca una razón especial..."
                    className="pl-10 bg-white/80 border-gray-300"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setVisibleCount(REASONS_PER_PAGE);
                    }}
                    />
                </div>
                <Button asChild>
                    <a href="/VERONICAAAAAAAAAAAAAAAAAAAAAAAAAAA.pdf" download="465_Razones_Para_Amarte.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar PDF
                    </a>
                </Button>
            </div>
            
            <div className="mb-12">
              <Card className="bg-white/30 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="h-[700px] bg-white/50 rounded-md overflow-hidden shadow-inner">
                    <object data="/VERONICAAAAAAAAAAAAAAAAAAAAAAAAAAA.pdf" type="application/pdf" width="100%" height="100%">
                       <div className="p-8 text-center text-gray-500 flex flex-col items-center justify-center h-full">
                          <FileText className="h-12 w-12 mx-auto mb-4" />
                          <p>Tu navegador no soporta la previsualización de PDF.</p>
                          <p>¡No te preocupes!</p>
                          <Button asChild variant="link">
                            <a href="/VERONICAAAAAAAAAAAAAAAAAAAAAAAAAAA.pdf" download="465_Razones_Para_Amarte.pdf">
                                Descárgalo aquí para no perderte de nada.
                            </a>
                          </Button>
                        </div>
                    </object>
                  </div>
                </CardContent>
              </Card>
            </div>


            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                </div>
            ) : (
                <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {visibleReasons.map((r, index) => (
                    <Card key={r.id} className="p-4 flex items-start gap-4 transition-all hover:bg-white/50 hover:shadow-lg hover:-translate-y-1 bg-white/80 backdrop-blur-sm" style={{ animationDelay: `${index * 25}ms`}}>
                        <Badge variant="outline" className="text-primary border-primary mt-1 text-sm">{r.id}</Badge>
                        <p className="text-gray-700">{r.reason}</p>
                    </Card>
                    ))}
                </div>
                {visibleCount < filteredReasons.length && (
                    <div className="text-center mt-12">
                    <Button onClick={loadMore} size="lg" variant="outline-inverse">
                        Cargar más razones
                    </Button>
                    </div>
                )}
                {filteredReasons.length === 0 && !isLoading && (
                     <p className="text-center text-gray-500 mt-12">No se encontraron razones con ese término. ¡Pero te sigo amando!</p>
                )}
                </>
            )}
        </div>
      </div>
    </section>
  );
}
