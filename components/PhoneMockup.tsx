import React from 'react';
import ScreenshotCarousel from './ScreenshotCarousel';

interface PhoneMockupProps {
    currentIndex: number;
    screenshots: string[];
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ currentIndex, screenshots }) => {
    return (
        <div className="relative mx-auto w-[280px] h-[580px] md:w-[320px] md:h-[640px] perspective-[2200px] select-none">

            {/* Ambient Light Halo */}
            <div className="absolute -inset-20 rounded-full bg-gradient-to-tr from-indigo-500/10 via-cyan-400/5 to-fuchsia-500/10 blur-3xl opacity-60"></div>

            {/* Phone Body */}
            <div className="
    relative w-full h-full rounded-[3.5rem] p-[10px]
    bg-gradient-to-b from-slate-900 via-slate-950 to-black
    border border-white/10
    shadow-[0_60px_120px_rgba(0,0,0,0.8)]
    transform-style-3d
    rotate-y-[-14deg] rotate-x-[6deg]
    transition-all duration-700 ease-out
    hover:rotate-y-[-6deg] hover:rotate-x-[2deg] hover:scale-[1.04]
  ">

                {/* Metallic Rim */}
                <div className="absolute inset-0 rounded-[3.5rem] ring-1 ring-white/20 pointer-events-none"></div>

                {/* Screen */}
                <div className="
      relative w-full h-full rounded-[2.8rem] overflow-hidden
      bg-black border border-white/5
      shadow-[inset_0_0_30px_rgba(0,0,0,0.9)]
    ">
                    <ScreenshotCarousel currentIndex={currentIndex} screenshots={screenshots} />

                    {/* Screen Reflection */}
                    <div className="
        absolute inset-0 pointer-events-none
        bg-gradient-to-tr from-white/12 via-transparent to-transparent
        opacity-40
      " />
                </div>

                {/* Side Buttons */}
                <div className="absolute -left-[8px] top-36 h-14 w-[2px] bg-gradient-to-b from-slate-300/40 to-slate-600/40 rounded-full" />
                <div className="absolute -left-[8px] top-56 h-14 w-[2px] bg-gradient-to-b from-slate-300/40 to-slate-600/40 rounded-full" />
                <div className="absolute -right-[8px] top-44 h-20 w-[2px] bg-gradient-to-b from-slate-300/40 to-slate-600/40 rounded-full" />

                {/* Edge Glow */}
                <div className="
      absolute inset-0 rounded-[3.5rem]
      bg-gradient-to-tr from-indigo-400/10 via-transparent to-cyan-400/10
      pointer-events-none
    " />
            </div>

            {/* Floating Shadow */}
            <div className="
    absolute -bottom-12 left-1/2 -translate-x-1/2
    w-[85%] h-12
    bg-black/50 blur-3xl rounded-full
  " />
        </div>

    );
};

export default PhoneMockup;
