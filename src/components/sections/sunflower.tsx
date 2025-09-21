"use client";

import { useEffect, useState } from 'react';

const ShootingStars = () => {
    const [stars, setStars] = useState<{ id: number; top: string; delay: string; duration: string; }[]>([]);

    useEffect(() => {
        const initialStars = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            top: `${Math.random() * 60}%`,
            delay: `${i * 2}s`,
            duration: `${Math.random() * 1.5 + 2}s`
        }));
        setStars(initialStars);

        const interval = setInterval(() => {
            if (Math.random() > 0.3) {
                setStars(prevStars => {
                    const newStar = {
                        id: Date.now(),
                        top: `${Math.random() * 60}%`,
                        delay: '0s',
                        duration: `${Math.random() * 1.5 + 2}s`
                    };
                    const updatedStars = [...prevStars, newStar];
                    // Cleanup old stars to prevent memory leak
                    if (updatedStars.length > 50) {
                        updatedStars.shift();
                    }
                    return updatedStars;
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="shooting-stars">
            {stars.map(star => (
                <div
                    key={star.id}
                    className="shooting-star"
                    style={{
                        top: star.top,
                        animationDelay: star.delay,
                        animationDuration: star.duration
                    }}
                ></div>
            ))}
        </div>
    );
};

const Flower = ({ id }: { id: number }) => {
    const petals = Array.from({ length: 12 }, (_, i) => i * 30);
    const lights = Array.from({ length: 8 }, (_, i) => i);
    return (
        <div className={`flower flower--${id}`}>
            <div className={`flower__leafs flower__leafs--${id}`}>
                {petals.map(rot => (
                    <div key={rot} className="flower__leaf" style={{ transform: `translate(-50%, -10%) rotate(${rot}deg)` }}></div>
                ))}
                <div className="flower__white-circle"></div>
                {lights.map(i => (
                    <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
                ))}
            </div>
            <div className="flower__line">
                <div className="flower__line__leaf flower__line__leaf--1"></div>
                <div className="flower__line__leaf flower__line__leaf--2"></div>
                <div className="flower__line__leaf flower__line__leaf--3"></div>
                <div className="flower__line__leaf flower__line__leaf--4"></div>
            </div>
        </div>
    );
}

const Grass = ({ id }: { id: number }) => {
    const leaves = Array.from({ length: 8 }, (_, i) => i + 1);
    return (
        <div className="growing-grass">
            <div className={`flower__grass flower__grass--${id}`}>
                <div className="flower__grass--top"></div>
                <div className="flower__grass--bottom"></div>
                {leaves.map(leafId => (
                     <div key={leafId} className={`flower__grass__leaf flower__grass__leaf--${leafId}`}></div>
                ))}
                <div className="flower__grass__overlay"></div>
            </div>
        </div>
    );
}

export default function SunflowerSection() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const flowerIds = [1, 2, 3, 4, 5];
    const grassIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <section
            id="sunflower-garden"
            className={`flex items-end justify-center min-h-screen bg-black overflow-hidden ${!loaded ? 'not-loaded' : ''}`}
            style={{ perspective: '1000px' }}
        >
            <div className="night"></div>
            <ShootingStars />
            <div className="flowers">
                {flowerIds.map(id => <Flower key={id} id={id} />)}
                
                <div className="grow-ans" style={{ '--d': '1.2s' } as React.CSSProperties}>
                    <div className="flower__g-long">
                        <div className="flower__g-long__top"></div>
                        <div className="flower__g-long__bottom"></div>
                    </div>
                </div>

                {grassIds.map(id => <Grass key={id} id={id} />)}
            </div>
             <style jsx>{`
                .not-loaded * {
                    animation-play-state: paused !important;
                }
            `}</style>
        </section>
    );
}