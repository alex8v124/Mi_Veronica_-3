
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Trash2, Camera, Download, PlusCircle, FileText } from 'lucide-react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

interface Cita {
  id: number;
  photo1: string | null;
  photo2: string | null;
  date: string;
  description: string;
}

const INITIAL_VISIBLE_CITAS = 10;
const CITAS_TO_LOAD = 10;

const ImagePlaceholder = ({ onUpload, onRemove, hasImage }: { onUpload: () => void; onRemove: () => void; hasImage: boolean; }) => (
    <div className="relative aspect-square w-full rounded-md border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50/50 hover:bg-gray-100/50 transition-colors group">
        <button onClick={onUpload} className="z-10">
            <div className="text-center text-gray-500">
                <Camera className="h-8 w-8 mx-auto" />
                <p className="text-xs mt-1">Subir Foto</p>
            </div>
        </button>
        {hasImage && (
             <Button
                variant="destructive"
                size="icon"
                className="absolute top-1 right-1 h-6 w-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                    e.stopPropagation();
                    onRemove();
                }}
             >
                <Trash2 className="h-4 w-4" />
            </Button>
        )}
    </div>
);


const CitaCard = ({ cita, onCitaChange }: { cita: Cita, onCitaChange: (citaId: number, field: keyof Cita, value: any) => void }) => {
    const fileInputRef1 = useRef<HTMLInputElement>(null);
    const fileInputRef2 = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, photoSlot: 'photo1' | 'photo2') => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onCitaChange(cita.id, photoSlot, reader.result as string);
            };
            reader.readAsDataURL(file);
        }
        e.target.value = '';
    };

    return (
        <Card className="transform transition-all duration-300 hover:shadow-xl bg-white/50 backdrop-blur-sm h-full flex flex-col">
            <CardHeader>
                <CardTitle className='font-headline text-center text-gray-800'>Cita {cita.id}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <input type="file" accept="image/*" ref={fileInputRef1} onChange={(e) => handleFileChange(e, 'photo1')} className="hidden" />
                    <input type="file" accept="image/*" ref={fileInputRef2} onChange={(e) => handleFileChange(e, 'photo2')} className="hidden" />
                    
                    {cita.photo1 ? (
                        <div className="relative aspect-square w-full group">
                            <Image src={cita.photo1} alt={`Cita ${cita.id} - Foto 1`} fill className="rounded-md object-cover" />
                             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => onCitaChange(cita.id, 'photo1', null)}>
                                    <Trash2 className="h-5 w-5 mr-2"/> Quitar
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <ImagePlaceholder 
                            onUpload={() => fileInputRef1.current?.click()} 
                            onRemove={() => {}} 
                            hasImage={false}
                        />
                    )}

                    {cita.photo2 ? (
                         <div className="relative aspect-square w-full group">
                            <Image src={cita.photo2} alt={`Cita ${cita.id} - Foto 2`} fill className="rounded-md object-cover" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => onCitaChange(cita.id, 'photo2', null)}>
                                    <Trash2 className="h-5 w-5 mr-2"/> Quitar
                                </Button>
                            </div>
                        </div>
                    ) : (
                       <ImagePlaceholder 
                            onUpload={() => fileInputRef2.current?.click()} 
                            onRemove={() => {}} 
                            hasImage={false}
                        />
                    )}
                </div>
                 <div className="space-y-2">
                    <Input 
                        type="date" 
                        value={cita.date}
                        onChange={(e) => onCitaChange(cita.id, 'date', e.target.value)}
                        className="bg-teal-700/80 text-white border-teal-600/70 dark:[color-scheme:dark]"
                    />
                    <Textarea
                        placeholder="Describe este momento..."
                        value={cita.description}
                        onChange={(e) => onCitaChange(cita.id, 'description', e.target.value)}
                        className="bg-teal-700/80 text-white border-teal-600/70 resize-none"
                        rows={2}
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default function CitasSection() {
    const [citas, setCitas] = useState<Cita[]>([]);
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_CITAS);

    useEffect(() => {
        try {
            const savedCitas = localStorage.getItem('citasData');
            if (savedCitas) {
                const parsedCitas = JSON.parse(savedCitas);
                const sanitizedCitas = parsedCitas.map((c: any) => ({
                    id: c.id,
                    photo1: c.photo1 || null,
                    photo2: c.photo2 || null,
                    date: c.date || '',
                    description: c.description || '',
                }));
                setCitas(sanitizedCitas);
            } else {
                setCitas(Array.from({ length: 100 }, (_, i) => ({ id: i + 1, photo1: null, photo2: null, date: '', description: '' })));
            }
        } catch (error) {
            console.error("Failed to parse citas from localStorage", error);
            setCitas(Array.from({ length: 100 }, (_, i) => ({ id: i + 1, photo1: null, photo2: null, date: '', description: '' })));
        }
    }, []);

    useEffect(() => {
        if(citas.length > 0){
            try {
                localStorage.setItem('citasData', JSON.stringify(citas));
            } catch (error) {
                console.error("Failed to save citas to localStorage", error);
            }
        }
    }, [citas]);

    const handleCitaChange = (citaId: number, field: keyof Cita, value: any) => {
        setCitas(prevCitas =>
            prevCitas.map(c =>
                c.id === citaId ? { ...c, [field]: value } : c
            )
        );
    };

    const exportData = () => {
        const dataStr = JSON.stringify(citas, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = 'nuestras_citas.json';
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    };

    const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileReader = new FileReader();
        if (event.target.files && event.target.files[0]) {
            fileReader.readAsText(event.target.files[0], "UTF-8");
            fileReader.onload = e => {
                const result = e.target?.result;
                if (typeof result === 'string') {
                    try {
                        const importedCitas = JSON.parse(result);
                        if (Array.isArray(importedCitas) && importedCitas.every(c => 'id' in c)) {
                             const sanitizedCitas = importedCitas.map((c: any) => ({
                                id: c.id,
                                photo1: c.photo1 || null,
                                photo2: c.photo2 || null,
                                date: c.date || '',
                                description: c.description || '',
                            }));
                            setCitas(sanitizedCitas);

                            const lastRegisteredCita = sanitizedCitas.filter(c => c.date || c.description || c.photo1 || c.photo2).sort((a,b) => b.id - a.id)[0];
                            const lastId = lastRegisteredCita ? lastRegisteredCita.id : 0;
                            
                            if (lastId > INITIAL_VISIBLE_CITAS) {
                                const nextMultipleOfTen = Math.ceil(lastId / 10) * 10;
                                setVisibleCount(nextMultipleOfTen);
                            } else {
                                setVisibleCount(INITIAL_VISIBLE_CITAS);
                            }

                        } else {
                            alert("Archivo de importación inválido.");
                        }
                    } catch (error) {
                        alert("Error al leer el archivo. Asegúrate de que sea un archivo JSON válido.");
                        console.error("Error parsing imported JSON", error);
                    }
                }
            };
        }
        event.target.value = '';
    };

    const fileImportRef = useRef<HTMLInputElement>(null);

    const loadMoreCitas = () => {
        setVisibleCount(prev => prev + CITAS_TO_LOAD);
    }

    return (
        <section id="citas" className="bg-gradient-to-br from-teal-200/60 to-blue-200/60 text-gray-800 py-16 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 animate-fade-in-up">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-gray-900">Nuestras 100 Citas</h2>
                        <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                            Un álbum para nuestros momentos más especiales. Llenemos cada uno de recuerdos.
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mb-8">
                  <Card className="bg-white/30 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="h-[700px] bg-white/50 rounded-md overflow-hidden shadow-inner">
                        <object data="/Nuestras_citas u.u V&amp;A.pdf" type="application/pdf" width="100%" height="100%">
                           <div className="p-8 text-center text-gray-500 flex flex-col items-center justify-center h-full">
                              <FileText className="h-12 w-12 mx-auto mb-4" />
                              <p>Tu navegador no soporta la previsualización de PDF.</p>
                              <p>¡No te preocupes!</p>
                              <Button asChild variant="link">
                                <a href="/Nuestras_citas u.u V&amp;A.pdf" download>
                                    Descárgalo aquí para no perderte de nada.
                                </a>
                              </Button>
                            </div>
                        </object>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                 <div className="max-w-5xl mx-auto mb-8 flex justify-center gap-4">
                    <Button onClick={exportData}>
                        <Upload className="mr-2 h-4 w-4" />
                        Exportar Recuerdos
                    </Button>
                     <input type="file" accept=".json" ref={fileImportRef} onChange={importData} className="hidden" />
                    <Button variant="outline-inverse" onClick={() => fileImportRef.current?.click()}>
                        <Download className="mr-2 h-4 w-4" />
                        Importar Recuerdos
                    </Button>
                </div>

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {citas.slice(0, visibleCount).map((cita, index) => (
                        <div key={cita.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms`}}>
                           <CitaCard cita={cita} onCitaChange={handleCitaChange} />
                        </div>
                    ))}
                </div>
                 {visibleCount < citas.length && (
                    <div className="mt-12 text-center">
                        <Button onClick={loadMoreCitas} size="lg" variant="outline-inverse">
                            <PlusCircle className="mr-2 h-5 w-5" />
                            Cargar más
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
