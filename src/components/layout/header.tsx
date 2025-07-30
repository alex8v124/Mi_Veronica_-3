"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

const navLinks = [
  { href: '/qualities', label: 'Lo que Amo' },
  { href: '/album', label: 'Álbum' },
  { href: '/playlist', label: 'Playlist' },
  { href: '/letter', label: 'Carta' },
  { href: '/reasons', label: '465 Razones' },
  { href: '/citas', label: 'Nuestras 100 Citas' },
  { href: '/surprise', label: 'Sorpresa' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-r from-gray-500/10 via-gray-400/20 to-gray-500/10 backdrop-blur-sm shadow-[0_4px_14px_rgba(0,0,0,0.05)]">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image 
                src="https://cdn-icons-png.flaticon.com/512/4336/4336297.png"
                alt="Alstroemeria Icon"
                width={32}
                height={32}
                className="transform transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="font-bold font-headline sm:inline-block text-white">
              Para ma chérie <Heart className="inline-block h-4 w-4 text-primary fill-current" />, mi novia :3 &lt;3
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
           <nav className="hidden md:flex gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-2 text-base text-white hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 bg-background/95 backdrop-blur-lg border-r-border/30">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Image 
                    src="https://cdn-icons-png.flaticon.com/512/4336/4336297.png"
                    alt="Alstroemeria Icon"
                    width={28}
                    height={28}
                    className="mr-2"
                />
                <span className="font-bold font-headline text-white">Para ma chérie...</span>
              </Link>
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
