import { useState } from 'react';

const PageOne = () => {
    const prinipalSponsors = {
        male: ["Mr. Dave Rey B. Alaan", "Engr. Orencio M. Apale", "PLT Rogelio A. Baluran", "Mr. Victoriano B. Caybot", "Capt. Renerio Daquio", "Mr. Arnold R. Garcia", "Mr. Melvin C. Jabajab", "Mr. Mario L. Israel", "Engr. Arnold L. Labunog", "Mr. Jay L. Lancila", "Mr. Serecio I. Locot", "Mr. Joseph P. Namor", "Mr. Sercio L. Narbay", "Mr. Ramon Operio", "Mr. Cresencio Raut", "Mr. Minardo I. Romuga", "Engr. Ruel I. Romuga", "Mr. Salvador I. Romuga", "Mr. Eulie I. Saturinas", "Engr. Gilbert O. Suarez", "Mr. Mario Jr. S. Ubas", "Atty. Raymond Ben K. Uy"],
        female: ["Mrs. Irene O. Alaan", "Engr. Erlinda A. Apale", "Mrs. Rosario Fe G. Baluran", "Mrs. Conception Caybot", "Mrs. Peregrina C. Daquio", "Mrs. Rosette M. Garcia", "Mrs. Judy U. Jabajab", "Mrs. Milagros B. Israel", "Mrs. Maria Carmen B. Labunog", "Mrs. Merlyn P. Lancila", "Mrs. Lea M. Locot", "Mrs. Loreto T. Namor, CPA", "Mrs. Rowena A. Narbay", "Ms. Gloricil P. Fudalan", "Mrs. Ma. Cecilia N. Raut", "Mrs. Venus I. Iyog", "Ms. Daisy L. Israel", "Mrs. Marciana B. Romuga", "Mrs. Jean C. Saturinas", "Mrs. Marlyn L. Suarez", "Ms. Ana Fe M. Manding", "Ms. Clarice Elaine B. Davila"]
    };

    return (
        <div className="text-center">
            <div className="pb-6">
                <p className="font-bold font-serif">Mass Presider</p>
                <p>Fr. Agerio V. Paña</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pb-6">
                <div className="text-right [direction:rtl]">
                    <p className="font-bold font-serif">Parents of the Groom</p>
                    <p>Mr. Arnulfo S. Sansan</p>
                    <p>Mrs. Gigi I. Sansan</p>
                </div>
                <div className="text-left">
                    <p className="font-bold font-serif">Parents of the Bride</p>
                    <p>Mr. Gaudioso Lancila</p>
                    <p>Mrs. Estrellita A. Lancila</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-center pb-6">
                <p className="col-span-2 font-serif font-bold text-center">
                    Principal Sponsors
                </p>

                <div className="space-y-4">
                    <ul className="space-y-2">
                        {prinipalSponsors.male.map((name, index) => (
                            <li key={index} className="text-right leading-none [direction:rtl]">{name}</li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-4">
                    <ul className="space-y-2">
                        {prinipalSponsors.female.map((name, index) => (
                            <li key={index} className="text-left leading-none">{name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const PageTwo = () => {
    const party = {
        male: ["Mr. Kenneth Agripo", "Mr. Raymond Abellanosa", "Mr. Karl Patrick A. Galbo", "Mr. Nelson Agripo Jr.", "Engr. Mark Ross Kelp B. Israel", "Mr. Jeff Kenneth L. Duran"],
        female: ["Ms. Claire Jezreel I. Iyog", "Ms. Cynthia Manding", "Engr. Mary Rose Sheena B. Israel", "Ms. Mailyn G. Pacquiao", "Ms. Glorielene Mijares", "Engr. Mary Rose Rhofian B. Israel"]
    }

    return (
        <div className="text-center">
            <div className="grid grid-cols-2 gap-4 pb-6">
                <div className="text-right [direction:rtl]">
                    <p className="font-bold font-serif">Best Man</p>
                    <p>Mr. Gerald L. Grado</p>
                </div>
                <div className="text-left">
                    <p className="font-bold font-serif">Maid of Honor</p>
                    <p>Ms. Jenny Agripo</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pb-6">
                <div className="text-right [direction:rtl]">
                    <p className="font-bold font-serif"></p>
                    <p></p>
                </div>
                <div className="text-left">
                    <p className="font-bold font-serif">Man of Honor</p>
                    <p>Mr. Pedz Ocdenaria Quiñal</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-8">
                <div className="text-right [direction:rtl]">
                    <p className="font-bold font-serif mb-1">Groomsmen</p>
                    <ul className="space-y-2">
                        {party.male.map((name, index) => (
                            <li key={index} className="leading-none">{name}</li>
                        ))}
                    </ul>
                </div>
                <div className="text-left">
                    <p className="font-bold font-serif mb-1">Bridesmaids</p>
                    <ul className="space-y-2">
                        {party.female.map((name, index) => (
                            <li key={index} className="leading-none">{name}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="text-center pb-6">
                <p className="col-span-2 font-serif font-bold text-center pb-4">
                    Secondary Sponsors
                </p>
                <div className="pb-4">
                    <p className="font-bold font-serif">Candle</p>
                    <p>Mr. Jose Melvin V. Celmar</p>
                    <p>Mrs. Mary Rose Riscille I. Celmar</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-bold font-serif">Veil</p>
                        <p>Engr. Rechie T. Caliso</p>
                        <p>Mrs. Carloe Niña T. Caliso</p>
                    </div>
                    <div>
                        <p className="font-bold font-serif">Cord</p>
                        <p>Mr. Vincy Irenie A. Polinar</p>
                        <p>Engr. Xandra Ysabelle E. Polinar</p>
                    </div>
                </div>
            </div>

            <div className="text-center pb-6">
                <div className="grid grid-cols-2 gap-4 pb-4">
                    <div className="text-right [direction:rtl]">
                        <p className="font-bold font-serif">Bible Bearer</p>
                        <p>Joseph Kairus I. Celmar </p>
                    </div>
                    <div className="text-left">
                        <p className="font-bold font-serif">Ring Bearer</p>
                        <p>Eurelle Peterich T. Caliso</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-right [direction:rtl]">
                        <p className="font-bold font-serif">Coin Bearer</p>
                        <p>Rohan Matthew S. Narbay</p>
                    </div>
                    <div className="text-left">
                        <p className="font-bold font-serif">Banner Bearer</p>
                        <p>Rhea A. Narbay</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PageThree = () => (
    <div className="text-center">
        <div className="text-center pb-4">
            <p className="font-serif font-bold text-center">
                Flower Girls
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-right [direction:rtl]">
                    <p>Mary Kaitlyn I. Celmar</p>
                    <p>Aubrielle Fatima T. Caliso</p>
                </div>
                <div className="text-left">
                    <p>Fiamae D. Talaboc</p>
                    <p>Jomaine D. Macabudbud</p>
                </div>
            </div>
        </div>
        <div className="pb-2">
            <div className="grid grid-cols-2 gap-4 pb-6">
                <p className="col-span-2 font-serif font-bold text-center pb-2">
                    Mass Offerers
                </p>
                <div className="text-right [direction:rtl]">
                    <p className="font-bold font-serif">Host</p>
                    <p>Ms. Mian Bernadette T. Cirujales</p>
                </div>
                <div className="text-left">
                    <p className="font-bold font-serif">Wine</p>
                    <p>Ms. Shena Mary P. Añasco</p>
                </div>
                <div className="text-right [direction:rtl]">
                    <p className="font-bold font-serif">Flowers</p>
                    <p>Mr. Francis G.  Baobao</p>
                    <p>Mr. Christopher R. Manhilot</p>
                </div>
                <div className="text-left">
                    <p className="font-bold font-serif">Fruits</p>
                    <p>Mr. Raph Alvin A. Asas</p>
                    <p>Ms. Bernadette A. Calizar</p>
                </div>
                <div className="col-span-2">
                    <p className="font-bold font-serif">Candles</p>
                    <p>Engr. Phillip Glenn A. Libay</p>
                    <p>Ar. Mary Rose Cecille I.  Libay</p>
                </div>
            </div>
        </div>

        <div>
            <div className="grid grid-cols-2 gap-4 pb-4">
                <p className="col-span-2 font-serif font-bold text-center pb-2">
                    Liturgical Sponsors
                </p>
                <div className="text-right [direction:rtl]">
                    <p className="font-bold font-serif">First Reading</p>
                    <p>Mr. Ralphfelvin M. Potane</p>
                </div>
                <div className="text-left">
                    <p className="font-bold font-serif">Responsorial Psalm</p>
                    <p>Ms. Clarissa Marie A. Talucod</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="text-right [direction:rtl]">
                    <p className="font-bold font-serif">Second Reading</p>
                    <p>Mrs. Jo Kariza Celeste D. Ebojo</p>
                </div>
                <div className="text-left">
                    <p className="font-bold font-serif">Prayers of the Faithful</p>
                    <p>Ms. Churchill Dhea I. Naranjo</p>
                </div>
            </div>
        </div>
    </div>
);

const Entourage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const pages = [<PageOne />, <PageTwo />, <PageThree />];

    const next = () => setCurrentIndex((i) => (i + 1) % pages.length);
    const prev = () => setCurrentIndex((i) => (i === 0 ? pages.length - 1 : i - 1));

    return(
        <section id="entourage" className="container min-h-[calc(100dvh-64px)] max-w-7xl scroll-mt-16 p-10 mx-auto flex flex-col justify-center">
            <div className="max-w-6xl mx-auto w-full">
    
                <div className="text-center mb-4">
                    <h2 className="text-2xl md:text-5xl font-serif text-slate-800 mb-2">The Entourage</h2>
                    <div className="h-1 w-24 bg-dusty-rose mx-auto"></div>
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

                    <div className="w-full transition-all duration-500 min-h-[50dvh] flex items-center justify-center px-6 text-gray-600 text-[10px] whitespace-nowrap md:text-sm [&_p, &_li]: italic">
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
            </div>
        </section>
    )
}

export default Entourage