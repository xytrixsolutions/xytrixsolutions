import AnimatedBackground from "./AnimatedBackground";
const Hero = () => (
  <section id="hero" className="relative w-full -mt-16 pt-16 ">
    <div className="absolute inset-0 flex items-center justify-center text-center p-4 z-10">
      <div className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in [animation-delay:200ms] opacity-0 translate-y-10 text-shadow-lg text-shadow-pink-50/50  drop-shadow-2xl drop-shadow-rose-700">
          <span className="text-black/75 bg-clip-text">
            Your trusted website development agency
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 opacity-0 animate-fade-in [animation-delay:400ms] translate-y-10 hover:text-white transition-colors duration-300">
          We build solutions to shape the future of your business
        </p>

        <div className="opacity-0 animate-fade-in [animation-delay:600ms] translate-y-10">
          <button className="bg-white/10 backdrop-blur-lg px-8 py-3 rounded-full text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-white/20">
            Get Started
          </button>
        </div>
      </div>
    </div>

    <AnimatedBackground />
  </section>
);
export default Hero;
