import Particles from "./Particles";
import FloatingShapes from "./FloatingShapes";

export default function AnimatedBackground() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <Particles />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent blur-lg animate-wave" />
      <FloatingShapes />
    </div>
  );
}
