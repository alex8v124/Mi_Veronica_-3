
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Heart, Gift, Flower } from 'lucide-react';

const ConfettiPiece = ({ style }: { style: React.CSSProperties }) => (
    <div className="absolute w-2 h-4" style={style}></div>
);

const ConfettiExplosion = () => {
    const colors = ['#e11d48', '#f43f5e', '#fda4af', '#fde047'];
    const pieces = Array.from({ length: 50 }).map((_, i) => {
        const style: React.CSSProperties = {
            left: `${Math.random() * 100}%`,
            top: `${-20 + Math.random() * -80}px`,
            backgroundColor: colors[i % colors.length],
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `fall ${2 + Math.random() * 2}s ${Math.random() * 1}s linear forwards`,
        };
        return <ConfettiPiece key={i} style={style} />;
    });

    return (
        <>
         <style jsx>{`
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(${Math.random() * 360 + 360}deg);
                    opacity: 0;
                }
            }
        `}</style>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">{pieces}</div>
        </>
    );
};


export default function SurpriseSection() {
    const [isRevealed, setIsRevealed] = useState(false);

    const handleReveal = () => {
        setIsRevealed(true);
    };

    return (
        <section id="surprise" className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image 
                  src="https://i.pinimg.com/736x/a8/a2/bc/a8a2bc695b7d34b5c4851b67f0462f14.jpg"
                  alt="Inuyasha"
                  width={300}
                  height={300}
                  className="absolute -bottom-10 -right-16 opacity-50 transform rotate-12 pointer-events-none"
              />
            </div>
            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center animate-fade-in-up">
                 <div className="space-y-2 mb-8">
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-gray-900">Una Sorpresa Final</h2>
                    <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                        Solo una pregunta más...
                    </p>
                </div>
                
                <div className={`relative w-full max-w-md h-64 flex items-center justify-center rounded-xl shadow-lg border border-gray-200 p-8 transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 ${isRevealed ? 'bg-rose-400/50' : 'bg-white/50 backdrop-blur-sm'}`}>
                    {isRevealed && <ConfettiExplosion />}
                    {!isRevealed && (
                        <Button onClick={handleReveal} size="lg" className="group text-lg animate-pulse">
                            ¿Adivina quién es mi persona favorita?
                           <Gift className="ml-2 h-5 w-5 group-hover:animate-bounce" />
                        </Button>
                    )}
                    {isRevealed && (
                       <div className="text-center animate-fade-in">
                            <div className="relative h-16 w-16 mx-auto mb-4">
                                <Heart className="absolute h-16 w-16 text-white drop-shadow-lg animate-fade-in-up fill-white" style={{ animationDelay: '200ms' }} />
                                <Flower className="absolute h-10 w-10 text-rose-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '350ms' }} />
                            </div>
                            <p className="text-2xl font-bold font-headline text-white drop-shadow-md animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                                ¡Tú! Siempre has sido tú.
                            </p>
                            <p className="mt-2 text-white/90 drop-shadow-md animate-fade-in-up" style={{ animationDelay: '600ms' }}>Y te adoro por eso.</p>
                       </div>
                    )}
                </div>
            </div>
        </section>
    );
}
