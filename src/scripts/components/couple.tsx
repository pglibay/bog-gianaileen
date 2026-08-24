const couple = () => {
    return(
        <section id="couple" className="relative min-h-[calc(100dvh-64px)] max-w-7xl scroll-mt-16 p-10 mx-auto flex flex-col justify-center overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
                <div className="md:col-span-1">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl bg-stone-50">
                        <img 
                            src="/images/couple.jpg" 
                            alt="Gian & Aileen" 
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 border-8 border-white/20 m-4 rounded-xl pointer-events-none"></div>
                    </div>
                </div>
                <div className="md:col-span-2 space-y-12">
                    <header className="mb-12">
                        <h2 className="text-2xl text-center md:text-5xl font-serif text-slate-800 mb-4">The Couple</h2>
                        <div className="h-1 w-20 bg-dusty-rose mx-auto"></div>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <h3 className="font-bold font-serif text-slate-700">The Groom, Gian</h3>
                            <p className="text-slate-600 leading-relaxed italic">
                                Gian is a steadfast 3rd Officer who navigates the vast oceans with quiet strength and unwavering responsibility. Captivated by Aileen’s boundless warmth and joy, he simply cannot wait to call her, his wife.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-bold font-serif text-slate-700">The Bride, Aileen</h3>
                            <p className="text-slate-600 leading-relaxed italic">
                                A dedicated public servant, Aileen is drawn to Gian's quiet and steady nature, deeply cherishing how his actions speak louder than words—especially in the way he loves.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default couple