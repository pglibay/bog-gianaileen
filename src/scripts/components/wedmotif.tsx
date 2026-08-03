const wedmotif = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center mx-auto">
            <div className="max-w-md">
                <img 
                src="/images/attire.png" 
                alt="Attire Illustration" 
                className="w-3/4 h-auto mx-auto"
                />
            </div>
            <div className="space-y-4 mb-8">
                <p>We kindly request that everyone wears formal or elegant semi-formal attire in the wedding’s color palette in shades of dusty pink.</p>
                <p>Thank you for helping us create a beautiful and memorable celebration.</p>
                <div className="flex justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#B76E79] shadow-sm"></div>
                <div className="w-10 h-10 rounded-full bg-[#C08497] shadow-sm"></div>
                <div className="w-10 h-10 rounded-full bg-[#FBC5C0] shadow-sm"></div>
                <div className="w-10 h-10 rounded-full bg-[#FDE2E4] shadow-sm"></div>
                </div>
            </div>
            <div className="max-w-lg space-y-10 w-full">
                <div className="space-y-2">
                <h4 className="text-gold font-serif font-bold border-b border-slate-200 pb-2 mb-4 inline-block px-8">
                    For Sponsors
                </h4>
                <div className="space-y-1">
                    <p>Ladies: <span className="font-bold">Long Gown or Dress</span></p>
                    <p>Gentlemen: <span className="font-bold">Barong Tagalog and Slacks</span></p>
                </div>
                </div>
                <div className="space-y-2">
                <h4 className="text-gold font-serif font-bold border-b border-slate-200 pb-2 mb-4 inline-block px-8">
                    For Guests
                </h4>
                <div className="space-y-1">
                    <p>Ladies: <span className="font-bold">Cocktail Dress or Terno</span></p>
                    <p>Gentlemen: <span className="font-bold">Long Sleeves or Polo & Trouser</span></p>
                </div>
                </div>

            </div>
        </section>
    )
}

export default wedmotif