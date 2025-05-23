"use client";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

/**
 * Componente que encapsula la configuración de partículas
 */
const ParticlesWrapper = () => {
  return (
    <Particles
      className="absolute inset-0 z-1"
      init={loadSlim}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: { value: 35, density: { enable: true, value_area: 1200 } },
          color: { value: "#ffffff" },
          opacity: { 
            value: 0.08,
            random: true,
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0.04,
              sync: false
            }
          },
          size: { 
            value: 1.5,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              size_min: 0.5,
              sync: false
            }
          },
          shape: { type: "circle" },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            outMode: "out",
            attract: { enable: false },
          },
          lineLinked: {
            enable: true,
            distance: 200,
            color: "#ffffff",
            opacity: 0.015,
            width: 0.3,
          },
        },
        interactivity: { 
          detect_on: "canvas",
          events: { 
            onhover: { 
              enable: true,
              mode: "grab",
              parallax: {
                enable: true,
                smooth: 20,
                force: 30
              }
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 150,
              line_linked: {
                opacity: 0.1
              }
            }
          }
        },
        retina_detect: true
      }}
    />
  );
};

export default ParticlesWrapper;