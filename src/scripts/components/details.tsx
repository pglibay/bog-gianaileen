import { useState } from 'react';
import Wedtimeline from "./wedtimeline"
import Wedmotif from "./wedmotif"

const Weddetails = () => (
    <section className="flex flex-col items-center justify-center text-center mx-auto">
        <div className="max-w-md">
            <img 
                src="/images/church.png" 
                alt="Church Illustration" 
                className="w-3/4 h-auto mx-auto"
            />
            <p className="text-dusty-rose font-bold font-serif">Immaculate Conception Parish Church</p>
            <p>Baclayon, Bohol, Philippines</p>
            <p>September 26, 2026 | 01:30PM</p>
            <a
                href="https://maps.app.goo.gl/sgTNau79LAEBxv858"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[8px] md:text-xs text-stone-500 italic"
            >
                Click to view on Google Maps.
            </a>
        </div>

        <div className="max-w-md">
            <img 
                src="/images/reception.png" 
                alt="Reception Illustration" 
                className="w-3/4 h-auto mx-auto"
            />
            <p className="text-dusty-rose font-bold font-serif">Dagohoy Grand Hall,</p>
            <p className="text-dusty-rose font-bold font-serif">Bohol Tropics Resort</p>
            <p>Graham Avenue, Tagbilaran City, Bohol</p>
            <p>September 26, 2026 | 04:30PM</p>
            <a
                href="https://maps.app.goo.gl/Ct72pvm1vMLuGnN97"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[8px] md:text-xs text-stone-500 italic"
            >
                Click to view on Google Maps.
            </a>
        </div>
    </section>
);

const Details = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const pages = [<Wedmotif />, <Weddetails />, <Wedtimeline />];
    
    const next = () => setCurrentIndex((i) => (i + 1) % pages.length);
    const prev = () => setCurrentIndex((i) => (i === 0 ? pages.length - 1 : i - 1));

    return(
        <section id="details" className="container min-h-[calc(100dvh-64px)] max-w-7xl scroll-mt-16 p-10 mx-auto flex flex-col justify-center">
            <div className="max-w-6xl mx-auto w-full">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-5xl font-serif text-slate-800 mb-4">The Wedding Day</h2>
                    <div className="h-1 w-24 bg-dusty-rose mx-auto"></div>
                </div>
            </div>

            <div className="relative">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                    <button 
                        onClick={prev} 
                        className="pointer-events-auto transition-all text-dusty-rose"
                        aria-label="Previous Page"
                        >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={next} 
                        className="pointer-events-auto transition-all text-dusty-rose"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="w-full transition-all duration-500 min-h-[50dvh] flex items-center justify-center px-6 text-gray-600 text-[10px] md:text-sm [&_p, &_li]: italic">
                    {pages[currentIndex]}
                </div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
                {pages.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-10 bg-dusty-rose' : 'w-4 bg-slate-200'
                }`}
                />
                ))}
            </div>
        </section>
    )
}

export default Details