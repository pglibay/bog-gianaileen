import { ChevronDownIcon } from "@heroicons/react/24/outline";

const banner = () => {
    return(
        <>
            <section
                id="banner"
                className="relative min-h-[calc(100dvh-64px)] w-full flex items-center justify-center bg-center bg-cover bg-no-repeat bg-[url('/images/hero.jpeg')]"
            >
                <div className="absolute inset-0 bg-white/60" />

                <div className="relative flex flex-col items-center text-center gap-3 max-w-4xl px-4 overflow-visible">
                    <h1 className="text-2xl md:text-6xl font-cursive text-dark-rose drop-shadow-sm md:drop-shadow-lg py-2 px-2 leading-loose overflow-visible">
                        Gian Arnold
                    </h1>
                    <p className="italic text-slate-600">and</p>
                    <h1 className="text-2xl md:text-6xl font-cursive text-dark-rose drop-shadow-sm md:drop-shadow-lg py-2 px-2 leading-loose overflow-visible">
                        Aileen
                    </h1>
                    <div className="text-xs md:text-sm font-medium text-slate-600 italic">
                        <p className="mt-4">Saturday, September 26, 2026, 01:30PM</p>
                        <p className="mt-4">Immaculate Conception Parish, Baclayon, Bohol</p>
                        {/* <p>San Roque Parish, Tip-tip District, Tagbilaran City</p> */}
                    </div>
                    <a href="https://forms.gle/piSLLTAbc7ZTBE3F6" className="mt-6 inline-flex items-center justify-center rounded-full bg-dusty-rose px-8 py-3 text-white font-medium transition hover:bg-[#A8677A]">Click to RSVP!</a>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
                    <span className="text-xs italic">Scroll down to check details.</span>
                    <ChevronDownIcon className="h-4 w-4" />
                </div>
            </section>
        </>
    )
}

export default banner