import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const BackgroundAnimation = () => {
    const particlesInit = async (tsParticles) => {
        await loadFull(tsParticles);
    };

    const particlesLoaded = (container) => {

    };
    return (
        <Particles id="tsparticles" options={
            {
                fpsLimit: 100,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "bubble",
                        },
                        onHover: {
                            enable: false,
                            mode: "bubble",
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 200,
                            size: 30,
                            duration: 0.1,
                            opacity: 0.3
                          },
                    },
                },
                particles: {
                    color: {
                        value: "#283252",
                    },
                    links: {
                        color: "#283252",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.2,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }
        } init={particlesInit} loaded={particlesLoaded} />
    )
}

export default BackgroundAnimation