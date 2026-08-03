import { useRef, useState, useEffect } from 'react';
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";

const Rsvp = () => {
  const weddingDate = new Date('2026-05-09T14:00:00').getTime();

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

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.25;
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    if (!showControls) return;

    const timer = setTimeout(() => setShowControls(false), 5000);
    return () => clearTimeout(timer);
  }, [showControls, isPlaying]);

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

        {/* <a 
          className="px-12 py-4 bg-dusty-rose text-white rounded-full hover:bg-[#B8935F] transition-all duration-300 transform hover:scale-105 shadow-lg tracking-widest uppercase text-sm"
          href="https://withjoy.com/phillipgotmaryied/rsvp"
          target="_blank"
        >
          Click to RSVP!
        </a> */}
        <a 
          className="px-12 py-4 bg-dusty-rose text-white rounded-full hover:bg-[#A8677A] transition-all duration-300 transform hover:scale-105 shadow-lg tracking-widest uppercase text-sm"
          href="/rsvp-closed"
        >
          Click to RSVP!
        </a>
        
      </div>

      <div className="w-full md:w-1/2 h-[80vh] md:h-[calc(100dvh-64px)] relative overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          loop
          playsInline
          poster="/images/save.png"
        >
          <source src="/images/save.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

        <button
          onClick={(e) => { e.stopPropagation(); togglePlay(); }}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
            ${isPlaying && !showControls ? "opacity-0" : "opacity-100"}`}
        >
          <div className="bg-black/40 hover:bg-black/60 text-white rounded-full p-4 transition">
            {isPlaying ? (
              <PauseIcon className="h-8 w-8" />
            ) : (
              <PlayIcon className="h-8 w-8" />
            )}
          </div>
        </button>
        {/* <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center group"
        >
          <div className="bg-black/40 group-hover:bg-black/60 text-white rounded-full p-4 transition">
            {isPlaying ? (
              <PauseIcon className="h-8 w-8" />
            ) : (
              <PlayIcon className="h-8 w-8" />
            )}
          </div>
        </button> */}
      </div>
    </section>
  );
};

export default Rsvp;