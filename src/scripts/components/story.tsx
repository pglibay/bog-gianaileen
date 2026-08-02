const story = () => {
    return(
        <section id="story" className="relative z-10 scroll-mt-16 min-h-[calc(100dvh-64px)] flex flex-col justify-center p-10">
            <div className="max-w-6xl mx-auto w-full">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-5xl font-serif text-slate-800 mb-4">Our Story</h2>
                    <div className="h-1 w-24 bg-dusty-rose mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="flex flex-col items-center text-center group">
                        <div className="relative w-full overflow-hidden rounded-2xl shadow-md mb-6 bg-white p-2">
                            <img 
                                src="/images/story1.jpg" 
                                alt="When we met" 
                                className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <span className="text-dusty-rose font-sans font-bold tracking-widest uppercase text-xs">February 14, 2020</span>
                        <h3 className="text-xl font-serif my-2 text-slate-800">The First Hello</h3>
                        <p className="text-slate-600 text-sm leading-relaxed px-4">
                            The quick brown fox jumps over the lazy dog.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center group">
                        <div className="relative w-full overflow-hidden rounded-2xl shadow-md mb-6 bg-white p-2">
                        <img 
                            src="/images/story2.jpg" 
                            alt="Our Relationship" 
                            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                        />
                        </div>
                        <span className="text-dusty-rose font-sans font-bold tracking-widest uppercase text-xs">February 14, 2020</span>
                        <h3 className="text-xl font-serif my-2 text-slate-800">It's Official</h3>
                        <p className="text-slate-600 text-sm leading-relaxed px-4">
                            Grumpy wizards made toxic brew for the evil Queen and Jack.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center group">
                        <div className="relative w-full overflow-hidden rounded-2xl shadow-md mb-6 bg-white p-2">
                        <img 
                            src="/images/story3.jpg" 
                            alt="The Proposal" 
                            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                        />
                        </div>
                        <span className="text-dusty-rose font-sans font-bold tracking-widest uppercase text-xs">February 14, 2020</span>
                        <h3 className="text-xl font-serif my-2 text-slate-800">The Big "Yes"</h3>
                        <p className="text-slate-600 text-sm leading-relaxed px-4">
                            The quick brown fox jumps over the lazy dog.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center group">
                        <div className="relative w-full overflow-hidden rounded-2xl shadow-md mb-6 bg-white p-2">
                        <img 
                            src="/images/story4.jpg" 
                            alt="The Wedding" 
                            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                        />
                        </div>
                        <span className="text-dusty-rose font-sans font-bold tracking-widest uppercase text-xs">February 14, 2020</span>
                        <h3 className="text-xl font-serif my-2 text-slate-800">Our Wedding Day</h3>
                        <p className="text-slate-600 text-sm leading-relaxed px-4">
                            The day we say "I Do" and start our forever. We can't wait to see you there!
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default story