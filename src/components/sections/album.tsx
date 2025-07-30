
"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Video } from 'lucide-react';
import { useEffect, useState } from 'react';

const initialPhotos = [
  {
    type: 'video',
    src: 'https://scontent-lim1-1.cdninstagram.com/o1/v/t2/f2/m82/AQOnI5XgP-MvjBNFaZZkFgjKxKTw9_9Gu0z9YbtRxQiDTok1ETIRKnPRz3VBh7X9Q0_HoLMnPl9E5lP8JGf--6Z1PK_20ZOTtogASZA.mp4?_nc_cat=104&_nc_sid=5e9851&_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=Hjwxdx49LjcQ7kNvwHj5Tyk&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MzIxNzE0NDMwNzM1Mzk2LCJhc3NldF9hZ2VfZGF5cyI6NTgxLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MTIsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=bad78542e3092ad0&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9CMDQ0MEI4NDVDQzBFMDk3RDkxQjIzNUVCNkVCMjhCNV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HUGRKaUJoeHozVEtseE1KQUR3YlNVMXF6ajhtYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmyNDnpZ-mkgEVAigCQzMsF0AozMzMzMzNGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfSOLMNGAU2mVbG8yBVJl6qIhphgqmvKgYh06bhjLycVpQ&oe=688A865D',
    aiHint: 'new video',
    caption: 'Donde nuestra historia comenzó a escribirse.',
  },
  {
    type: 'video',
    src: 'https://scontent-lim1-1.cdninstagram.com/o1/v/t2/f2/m82/AQMX7D-ORkTx1KeypLhcqSe9EaUriGsXxQJXjVI5QEGoe89OLgds3ZSCA_TTRi-FMtZR1qfJuBUYtdYDEkleCKzQJoc2Lw-LBoWiLj4.mp4?_nc_cat=109&_nc_sid=5e9851&_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=Ptjl5uj14T8Q7kNvwHeW43t&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTQ1MTgzOTkzOTAwMzk3MiwiYXNzZXRfYWdlX2RheXMiOjY4NiwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE0LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=f3a11cc68940f8f4&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9FRTQ1RjU1ODlERUFEOUVDM0YxRTIzN0VDNzgxM0Q4N192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQWxIalJaUEdCcTBBU1lDQUtLSnJORTFMdVZ3YnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmiJmuvZqclAUVAigCQzMsF0AtZmZmZmZmGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfQv0CpfjlUx8poyaFJHsmBz_7RNjyD5sXNgMI60NGqXcQ&oe=688A834E',
    aiHint: 'beautiful woman video',
    caption: 'Cómplices de baile y de vida.',
  },
  {
    type: 'image',
    src: 'https://scontent-lim1-1.cdninstagram.com/v/t51.29350-15/412613177_1935092300221511_6184041341818200670_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjEwNzd4MTA3Ny5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_cat=111&_nc_oc=Q6cZ2QFf87RA7z6kOIP5yntz8OqDK0GJJmD3YJcoW8XKLxsfEFX0DmwkFKO2CwtOaYff7EQ&_nc_ohc=9yJxcRPwQssQ7kNvwHqJDXi&_nc_gid=cRO3UbAnOr9qWirH0o8Rtw&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzI2NTc3MTk3NzE3MDIwNjY0OA%3D%3D.3-ccb7-5&oh=00_AfQ4FR8qMvtAvytU5N4LMVEYURa3JQIMWE3OITFeqcrvVg&oe=688E7B04&_nc_sid=22de04',
    aiHint: 'beautiful woman smiling',
    caption: 'En la profundidad de tu mirada encuentro mi paz.',
  },
  {
    type: 'video',
    src: '/TikVid.io_7428674219891887366-hd.mp4',
    aiHint: 'tiktok video 2',
    caption: 'Tu risa, mi melodía favorita.',
  },
  {
    type: 'video',
    src: 'https://scontent-lim1-1.cdninstagram.com/o1/v/t2/f2/m82/AQMoGTAFD4NLpdK7CJDf-_gaRI8GMR8VoCy1wYy5Y4m7uqz0MVIaaiBCKkvctsB7d6XfSryqNTP-D7BcI19893TTByfZHEPxkuqM0AM.mp4?_nc_cat=110&_nc_sid=5e9851&_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=W8nvZYlX07oQ7kNvwG-wFGl&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6ODkxNzg0NjM4NDg4MDI5LCJhc3NldF9hZ2VfZGF5cyI6NjM4LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NywidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=bcead806900d372f&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9ERDQ4RkQ4RkYxMTZERkQ1RUE4OUE0MzQ0OEUxQzNBRV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRVpkbkJjNHE4SjZ4WFFGQUU0VVhPWlFTMXM2YnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmuve-qdnElQMVAigCQzMsF0AcEWhysCDFGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfRiV8ELmPVDc59b7iQ9202DrXQX7ebIVOWYbYfUsqP8cA&oe=688A6823',
    aiHint: 'happy woman video',
    caption: 'Siempre tú, siempre nosotros.',
  },
  {
    type: 'image',
    src: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/486827166_2093051114496930_4012583767699295035_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFNiyQ-rCxLlWal4ruYbwKkYVbab-NeRTphVtpv415FOpx69XNr5CAP-mMUduARDtvPcz1QxbomF9ai6cDrouk9&_nc_ohc=00IwhLfWGdYQ7kNvwHfdwdF&_nc_oc=AdlWLpIjCkcnHnvismSs5lbCXhAnKW35yf7gTiMdnZs_WaOl2DLpo-cMArdV0caKqwE&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=s7OVbGsDphfmGBKC5V2Scg&oh=00_AfTycvjlwt9fuUGnLIdz282ndc5oflFAFsxvE3wkHUsmDA&oe=688E4BB5',
    aiHint: 'woman posing nature',
    caption: 'La reina en su habitat natural.',
  },
  {
    type: 'video',
    src: 'https://scontent-lim1-1.cdninstagram.com/o1/v/t2/f2/m367/AQMy7wvs_n1b2fOLP3UHCSJNWSOyKIBiOsrA2vY7vSYDW9Fy6qr9tsuzxV7R4P4Wlcm8sijFLLA4PyxgeA_L1kiMmOPe23RHSFuzYgM.mp4?_nc_cat=108&_nc_sid=5e9851&_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=yhPqHTNeAe0Q7kNvwGM6Yxw&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6Nzg4NDM5MjIzMzM3MDc0LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjYsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=2200d604e32cc50d&_nc_vs=HBksFQIYQGlnX2VwaGVtZXJhbC83RTREMUU1NEM1OUQ5RjdDNzBDRjExMDUwNTk5RkU5NV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HS28xcXh2Zzd3U0kwc3NCQUw5dDBNTHFVWVYtYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm5IGs_ZnF5gIVAigCQzMsF0A6O6XjU_fPGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfR5r4O1N92YJ9izLycFBqqmQU_sy8zedNYQlm9T2fS42A&oe=688E5E45',
    aiHint: 'instagram reel',
    caption: 'Nuestros pasos, un mismo compás.',
  },
  {
    type: 'image',
    src: 'https://scontent-lim1-1.cdninstagram.com/v/t51.29350-15/484838464_623004530518580_2312658730167314129_n.heic?stp=dst-jpg_e35_s480x480_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTQzOC5zZHIuZjI5MzUwLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_cat=108&_nc_oc=Q6cZ2QEvq0ZpFkvEdBRAAaFEO-6M7MYTKNzOvRywHPq7OqIObERHSpqrr3ZVyBFVUY38t-0&_nc_ohc=Yk0Dj15kKMgQ7kNvwGcl4gX&_nc_gid=mOa_zaB5n1pnNXdbS6Sz3Q&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzU4ODUxNjgxODEzMTk2NjIwOA%3D%3D.3-ccb7-5&oh=00_AfQBA1bIaBYBBPvIeQvzFtPVArYe_TwwhobkAhJZLgTPww&oe=688E53E7&_nc_sid=b41fef',
    aiHint: 'woman stylish outfit',
    caption: 'Simplemente, perfecta.',
  },
   {
    type: 'image',
    src: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/486945650_2092398991228809_1511908838705997979_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEjBm8A-dFjus9xOZr_l-FCplZdozhH6VumVl2jOEfpW8b_zw1kg5LTS6Xlb335HjOdTYeNh5I0GTI2yWD5OTD1&_nc_ohc=tDxPr8WhpKAQ7kNvwHk2FyX&_nc_oc=AdmcShP5ah5B5Iif9qS4iaLht3tuPfps8xbhjhlK_gS0X2-PolqHOqf9QLP0BldYDe8&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=JnGmdcbqsPwck2K0tw9KvQ&oh=00_AfQeE7IlFrqbHFoIQPpug0BfbGmpVi24l1ZAYywBffSu_Q&oe=688E7934',
    aiHint: 'close-up woman face',
    caption: 'La mirada que me enamora.',
  },
  {
    type: 'video',
    src: 'https://scontent-lim1-1.cdninstagram.com/o1/v/t2/f2/m86/AQPcYBKwchFA4G8NtKXMtDdWjQWIjizpA-mTELhdP-czssm43YISlj-nvtoBcoppuuAbGwQof_dkfgYFlTsGOHOexYhY_LKdq7xxqvk.mp4?_nc_cat=110&_nc_sid=5e9851&_nc_ht=scontent-lim1-1.cdninstagram.com&_nc_ohc=3Ocx_5NYU2wQ7kNvwHIoZUx&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTIzNzI0OTUxNDQ2OTQ3OSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=e5df5e59dee83c1f&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC85NDRCRTM0MDIwMTMyODg4MDI5OTg5NEQ5MTkwNzdBM192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQVdQU0IxbXNtY0ZsdHNDQUt4NGNXeXV4QmxGYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmzuH3nLPRsgQVAigCQzMsF0At-VgQYk3TGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_zt=28&oh=00_AfQLPr9gUIIr_7nZhH2QuGC4UoNJRe2Aumar4BmQY__Pcg&oe=688A6867',
    aiHint: 'happy woman video',
    caption: 'Cada instante contigo es un tesoro.',
  },
  {
    type: 'video',
    src: '/TikVid.io_7288910305818823941-hd.mp4',
    aiHint: 'tiktok video',
    caption: 'Momentos únicos que solo tú y yo entendemos.',
  },
   {
    type: 'image',
    src: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/486078365_2091218378013537_4537849145457061698_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFiSrACEh0hMe6FTjIsc1_lP1v0eEcHbpI_W_R4Rwdukt7yaQ816cboNiKh3XQWwkU6Uz5XpphwuUYHAleQnfdJ&_nc_ohc=iGTiJcKB7zsQ7kNvwGNuUHI&_nc_oc=Adn6fnNvztItKSPOC6XDECejMA5nmZIwOSVhf5mxMSffRD28ydCePkLoCXe7OYhT-Co&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=4YIUFH2m58Mx0PgRw7Pl7Q&oh=00_AfSm5dM7T4IbB3QF-Ki8BLClBAxEExHknrEkrQU53qgGwg&oe=688E77DC',
    aiHint: 'woman looking away',
    caption: 'Tú y tu linda esencia.',
  },
];

// Fisher-Yates shuffle algorithm
const shuffleArray = (array: any[]) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};


export default function AlbumSection() {
  const [photos, setPhotos] = useState<typeof initialPhotos>([]);

  useEffect(() => {
    const firstItem = initialPhotos[0];
    const restItems = initialPhotos.slice(1);
    const shuffledRest = shuffleArray(restItems);
    setPhotos([firstItem, ...shuffledRest]);
  }, []);

  return (
    <section id="album" className="bg-gradient-to-br from-teal-200/60 to-blue-200/60 text-gray-800 py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 animate-fade-in-up">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-gray-900">Álbum de mi Amorchi :3</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
              Una colección de momentos que capturan tu esencia única.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((media, index) => (
            <div key={index} className="animate-fade-in-up group" style={{ animationDelay: `${index * 150}ms`}}>
                <Card className="overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white/50 backdrop-blur-sm">
                  <div className="relative aspect-[3/4] w-full">
                      {media.type === 'image' ? (
                        <Image
                          src={media.src || 'https://placehold.co/600x800.png'}
                          alt={media.caption}
                          data-ai-hint={media.aiHint}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : media.type === 'video' ? (
                         <div className="w-full h-full bg-black flex items-center justify-center">
                           {media.src ? (
                              <video src={media.src} className="w-full h-full object-cover" controls playsInline loop autoPlay muted />
                           ) : (
                              <div className="text-white text-center p-4">
                                <Video className="h-16 w-16 mx-auto text-primary/50 mb-4" />
                                <p className="font-semibold">Próximamente un vídeo</p>
                                <p className="text-sm text-white/70">Un recuerdo especial está por llegar.</p>
                              </div>
                           )}
                        </div>
                      ) : null}
                  </div>
                   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-md font-semibold drop-shadow-lg">{media.caption}</p>
                  </div>
                </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

    