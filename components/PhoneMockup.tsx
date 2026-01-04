import React from 'react';
import ScreenshotCarousel from './ScreenshotCarousel';

interface PhoneMockupProps {
    currentIndex: number;
    screenshots: string[];
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ currentIndex, screenshots }) => {
    return (
        <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[640px] mx-auto z-10 select-none perspective-[2000px]">
            {/* Reflection behind phone */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-white/5 via-transparent to-white/5 blur-3xl rounded-full opacity-30 animate-pulse"></div>

            {/* Phone Frame */}
            <div className="w-full h-full bg-[#0f172a] rounded-[3.5rem] p-3 border-[8px] border-[#1e293b] ring-1 ring-white/20 relative transform-style-3d rotate-y-[-12deg] rotate-x-[5deg] shadow-[50px_50px_100px_rgba(0,0,0,0.7),-10px_-10px_30px_rgba(255,255,255,0.02)] transition-all duration-700 hover:rotate-y-[-5deg] hover:rotate-x-[2deg] hover:scale-[1.03]">

                {/* Speaker/Notch Area */}
                

                {/* Inner Screen Border */}
                <div className="w-full h-full bg-black rounded-[2.8rem] overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] border border-white/5">
                    {/* Screen content */}
                    <ScreenshotCarousel currentIndex={currentIndex} screenshots={screenshots} />
                </div>

                {/* Realistic Side Buttons */}
                <div className="absolute -left-[10px] top-32 w-[2px] h-12 bg-[#334155] rounded-l-sm border-l border-white/20 shadow-lg"></div>
                <div className="absolute -left-[10px] top-48 w-[2px] h-12 bg-[#334155] rounded-l-sm border-l border-white/20 shadow-lg"></div>
                <div className="absolute -right-[10px] top-40 w-[2px] h-20 bg-[#334155] rounded-r-sm border-r border-white/20 shadow-lg"></div>

                {/* Screen Gloss Overlay */}
                <div className="absolute inset-2 top-10 bottom-10 rounded-[2.5rem] bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-30 opacity-50"></div>
            </div>

            {/* Phone Stand Shadow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-black/40 blur-2xl rounded-[100%] transform -rotate-x-12"></div>
        </div>
    );
};

export default PhoneMockup;
