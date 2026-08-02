import { useState } from 'react';

const PageOne = () => {
    const prinipalSponsors = {
        male: ["Mr. Arnold L. Labunog", "Mr. Arnold R. Garcia", "Mr. Cresencio Raut", "Mr. Dave Rey B. Alaan", "Mr. Eulie I. Saturinas", "Mr. Gilbert O. Suarez", "Mr. Jay L. Lancila", "Mr. Joseph P. Namor", "Mr. Mario L. Israel", "Mr. Mario Jr. S. Ubas", "Mr. Melvin C. Jabajab", "Mr. Minardo I. Romuga", "Mr. Orencio M. Apale", "Mr. Ramon Operio", "Mr. Raymond Ben K. Uy", "Mr. Renerio Daquio", "Mr. Rogelio A. Baluran", "Mr. Ruel I. Romuga", "Mr. Salvador I. Romuga", "Mr. Sercio L. Narbay", "Mr. Serecio I. Locot", "Mr. Victoriano B. Caybot"],
        female: ["Mrs. Maria Carmen B. Labunog", "Mrs. Rosette M. Garcia", "Mrs. Ma. Cecilia N. Raut", "Mrs. Irene O. Alaan", "Mrs. Jean C. Saturinas", "Mrs. Marlyn L. Suarez", "Mrs. Merlyn P. Lancila", "Mrs. Loreto T. Namor", "Mrs. Milagros B. Israel", "Ms. Ana Fe M. Manding", "Mrs. Judy U. Jabajab", "Ms. Venus I. Iyog", "Mrs. Erlinda Apale", "Ms. Gloricil P. Fudalan", "Ms. Clarice Elaine B. Davila", "Mrs. Peregrina C. Daquio", "Mrs. Rosario Fe G. Baluran", "Ms. Daisy L. Israel", "Mrs. Marciana B. Romuga", "Mrs. Rowena A. Narbay", "Mrs. Lea M. Locot", "Mrs. Conception Caybot"]
    };

    return (
        <div className="text-center">
            <div className="pb-6">
                <p className="font-bold font-serif">Mass Presider</p>
                <p>Fr. Agerio V. Paña</p>
            </div>
            <div className="grid grid-cols-2 gap-4 pb-6">
                <div className="text-right">
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
                            <li key={index} className="text-right leading-none">{name}</li>
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
        male: ["Kenneth Agripo", "Raymond Abellanosa", "Karl Patrick A. Galbo", "Nelson Agripo Jr.", "Mark Ross Kelp B. Israel", "Jeff Kenneth L. Duran"],
        female: ["Claire Jezreel I. Iyog", "Cynthia Manding", "Mary Rose Sheena B. Israel", "Mailyn G. Pacquiao", "Glorielene Mijares", "Mary Rose Rhofian Israel"]
    }

    return (
        <div className="text-center">
            <div className="grid grid-cols-2 gap-4 pb-6">
                <div className="text-right">
                    <p className="font-bold font-serif">Best Man</p>
                    <p>Mr. Gerald L. Grado</p>
                </div>
                <div className="text-left">
                    <p className="font-bold font-serif">Maid of Honor</p>
                    <p>Ms. Jenny Agripo</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-8">
                <div className="text-right">
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
                        <p>Mr. Rechie T. Caliso</p>
                        <p>Mrs. Carloe Niña T. Caliso</p>
                    </div>
                    <div>
                        <p className="font-bold font-serif">Cord</p>
                        <p>Mr. Vincy Irenie A. Polinar</p>
                        <p>Mrs. Xandra Ysabelle E. Polinar</p>
                    </div>
                </div>
            </div>

            <div className="text-center pb-6">
                <div className="pb-4">
                    <p className="font-bold font-serif">Ring Bearer</p>
                    <p>Eurelle Peterich T. Caliso</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-bold font-serif">Coin Bearer</p>
                        <p>Rohan Matthew S. Narbay</p>
                    </div>
                    <div>
                        <p className="font-bold font-serif">Bible Bearer</p>
                        <p>Joseph Kairus I. Celmar </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PageThree = () => (
    <div className="text-center">
        <div className="text-center pb-8">
            <p className="font-serif font-bold text-center">
                Flower Girls
            </p>
            <div className="grid grid-cols-2 gap-4">
                <div className="text-right">
                    <p>Mary Kaitlyn Celmar</p>
                    <p>Keeva Beatrice Quiño</p>
                </div>
                <div className="text-left">
                    <p>Mary Kylee Orapa</p>
                    <p>Nirvana Rianzo</p>
                </div>
            </div>
            <p>Veronica Astraia Barro</p>
        </div>
        <div className="pb-6">
            <div className="grid grid-cols-2 gap-4 pb-6">
                <p className="col-span-2 font-serif font-bold text-center pb-2">
                    Mass Offerers
                </p>
                <div className="text-right">
                    <p className="font-bold font-serif">Host</p>
                    <p>Engr. Rex Giovanni Rianzo</p>
                    <p>Engr. Mary Ann Rianzo</p>
                </div>
                <div className="text-left">
                    <p className="font-bold font-serif">Wine</p>
                    <p>Engr. Lee Jessica Salve</p>
                    <p>Engr. Lee Ann Salve</p>
                </div>
                <div className="text-right">
                    <p className="font-bold font-serif">Candles</p>
                    <p>Ar. Zhenkie Villanueva</p>
                    <p>Ar. Rodel Besas</p>
                </div>
                <div className="text-left">
                    <p className="font-bold font-serif">Fruits</p>
                    <p>Ar. Danessa Anino</p>
                    <p>Ms. Clowena Trigo</p>
                </div>
                <div className="col-span-2">
                    <p className="font-bold font-serif">Flowers</p>
                    <p>Ms. Elaisha Paula Mondano</p>
                    <p>Ms. Imma Conception Mondano</p>
                </div>
            </div>
        </div>

        <div>
            <div className="grid grid-cols-2 gap-4 pb-4">
                <p className="col-span-2 font-serif font-bold text-center pb-2">
                    Liturgical Sponsors
                </p>
                <div className="text-right">
                    <p className="font-bold font-serif">First Reading</p>
                    <p>Ar. Christian Rey Lumantao</p>
                </div>
                <div className="text-left">
                    <p className="font-bold font-serif">Responsorial Psalm</p>
                    <p>Ms. Churchill Dhea Naranjo</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="text-right">
                    <p className="font-bold font-serif">Second Reading</p>
                    <p>Engr. Nika Bungabong</p>
                </div>
                <div className="text-left">
                    <p className="font-bold font-serif">Prayers of the Faithful</p>
                    <p>Engr. Sheena Duliguez</p>
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