import React from 'react';

interface ScreenshotCarouselProps {
    currentIndex: number;
    screenshots: string[];
}

const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = ({
    currentIndex,
    screenshots = [],
}) => {
    return (
        <div className="relative w-full h-full overflow-hidden rounded-[2.8rem] bg-black">

            {/* Subtle display vignette */}
            <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-black/10 via-transparent to-black/25" />

            {screenshots.map((src, index) => {
                const isActive = index === currentIndex;

                return (
                    <img
                        key={index}
                        src={src}
                        alt={`App screenshot ${index + 1}`}
                        className={`
              absolute inset-0 w-full h-full object-cover
              transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
              will-change-transform will-change-opacity
              ${isActive
                                ? 'opacity-100 scale-[1] translate-x-0 z-10'
                                : index < currentIndex
                                    ? 'opacity-0 scale-[0.98] -translate-x-6 z-0'
                                    : 'opacity-0 scale-[0.98] translate-x-6 z-0'}
            `}
                    />
                );
            })}

            {/* Glass highlight */}
            <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-40" />
        </div>
    );
};

export default ScreenshotCarousel;
