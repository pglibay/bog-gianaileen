import { useState, useEffect } from 'react';

const Rsvp = () => {
  const weddingDate = new Date('2026-09-26T14:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section id="rsvp" className="flex flex-col md:flex-row scroll-mt-16 min-h-[calc(100dvh-64px)] w-full text-stone-800">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 lg:p-16 space-y-12">
        <div className="text-center">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-5xl font-serif text-slate-800 mb-4">Counting Down the Days</h2>
                <div className="h-1 w-24 bg-dusty-rose mx-auto"></div>
            </div>

          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-light">{value}</span>
                <span className="text-xs uppercase tracking-widest text-stone-500">{unit}</span>
              </div>
            ))}
          </div>
        </div>
        <a 
          className="px-12 py-4 bg-dusty-rose text-white rounded-full hover:bg-[#A8677A] transition-all duration-300 transform hover:scale-105 shadow-lg tracking-widest uppercase text-sm"
          href="https://forms.gle/piSLLTAbc7ZTBE3F6"
        >
          Click to RSVP!
        </a>
        
      </div>

      <div className="w-full md:w-1/2 h-[80vh] md:h-[calc(100dvh-64px)] relative overflow-hidden">
        <img 
          src="/images/save.jpg" 
          alt="The Wedding" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
};

export default Rsvp;