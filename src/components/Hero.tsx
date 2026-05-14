import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <>
      <style>{`
        @keyframes hero-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes hero-float {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes hero-reveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-tape-slide {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .hero-marquee-track {
          display: flex;
          width: max-content;
          animation: hero-marquee 22s linear infinite;
        }
        .hero-float { animation: hero-float 4s ease-in-out infinite; }
        .hero-stagger-1 { animation: hero-reveal 0.8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .hero-stagger-2 { animation: hero-reveal 0.8s cubic-bezier(0.16,1,0.3,1) 0.12s forwards; opacity: 0; }
        .hero-stagger-3 { animation: hero-reveal 0.8s cubic-bezier(0.16,1,0.3,1) 0.24s forwards; opacity: 0; }
        .hero-tape { animation: hero-tape-slide 1s ease forwards 0.5s; transform-origin: left; transform: scaleX(0); }
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-bungee { font-family: 'Bungee', cursive; }
      `}</style>

      <section className="relative w-full overflow-hidden bg-[#F4F4F4]">
        {/* Marquee tape */}
        <div className="absolute top-8 -left-10 -right-10 h-14 bg-yellow-300 border-y-2 border-black rotate-[-2deg] flex items-center overflow-hidden z-0 pointer-events-none">
          <div className="hero-marquee-track whitespace-nowrap items-center">
            {Array.from({ length: 2 }).map((_, i) => (
              <span
                key={i}
                className="font-syne text-black text-xl font-extrabold px-4 uppercase tracking-tighter"
              >
                Drop 02 Out Now &bull; Limited Release &bull; New Season Style &bull; Free Shipping Over ₹999 &bull; Wear What Feels True &bull;{" "}
              </span>
            ))}
          </div>
        </div>

        <div className="container-app relative z-10 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-6">
          {/* Left */}
          <div className="relative w-full lg:w-1/2 flex flex-col items-start">
            <div className="hero-stagger-1 inline-flex items-center gap-2 mb-5 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              New Arrivals
            </div>

            <h1 className="hero-stagger-2 font-syne text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-black leading-[0.9] tracking-tighter mb-6">
              Wear what <br />
              <span className="relative inline-block">
                feels
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 hero-tape" />
              </span>{" "}
              <span className="text-blue-600">true.</span>
            </h1>

            <p className="hero-stagger-3 text-lg text-gray-700 max-w-md mb-10 leading-relaxed">
              Minimalist apparel built for everyday. High-grade fabrics, honest
              cuts, and that perfect fit you've been looking for.
            </p>

            <div className="hero-stagger-3 flex flex-wrap gap-4">
              <Link
                to="/collections"
                className="group relative font-syne bg-black text-white px-8 py-5 text-base sm:text-lg font-bold uppercase overflow-hidden transition-all hover:pr-12 active:scale-95"
              >
                <span className="relative z-10">Shop Collections</span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-2xl z-10">
                  →
                </span>
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>

              <Link
                to="/men"
                className="font-syne border-2 border-black px-8 py-5 text-base sm:text-lg font-bold uppercase transition-all hover:bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                Shop Men
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="absolute -top-2 -left-2 sm:-top-6 sm:-left-6 z-20 hero-float">
              <div className="font-bungee bg-white border-2 border-black px-4 py-2 rotate-[-12deg] text-black text-xs sm:text-sm shadow-[4px_4px_0px_0px_rgba(37,99,235,1)]">
                Verified 100% Cotton
              </div>
            </div>

            <div
              className="absolute bottom-8 -right-2 sm:bottom-10 sm:-right-4 z-20 hero-float"
              style={{ animationDelay: "-1s" }}
            >
              <div className="font-bungee bg-blue-600 border-2 border-black p-3 rounded-full rotate-[15deg] text-white text-[10px] sm:text-xs w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center text-center leading-tight shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Eco Conscious Label
              </div>
            </div>

            <div className="relative rounded-[40px] overflow-hidden border-2 border-black bg-gray-200 group w-full max-w-lg">
              <img
                src={heroImg}
                alt="Model wearing Applix Wear oversized t-shirt"
                width={1600}
                height={2000}
                className="w-full aspect-[4/5] object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/60 to-transparent">
                <p className="font-syne text-white text-xl sm:text-2xl font-bold uppercase italic">
                  The Essential T-Shirt in Stone White
                </p>
              </div>
            </div>

            <div className="absolute -right-4 top-1/2 -translate-y-1/2 h-64 w-8 bg-black items-center justify-center rotate-3 hidden md:flex">
              <span className="font-syne text-white text-[10px] uppercase font-bold tracking-[0.3em] whitespace-nowrap rotate-90">
                Applix Wear • Applix Wear • Applix
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
