import { useCallback } from "react";
import Particles from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

const ParticleCard = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Particles
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="absolute bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
        <h1 className="text-4xl font-bold text-white mb-4">Card Interativo</h1>
        <p className="text-white/80 text-lg">
          Este é um card com partículas interativas usando React, TypeScript e Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default ParticleCard; 