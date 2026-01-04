import React from 'react';

interface ScreenshotCarouselProps {
    currentIndex: number;
    screenshots: string[];
}

const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = ({ currentIndex, screenshots = [] }) => {
    return (
        <div className="relative w-full h-full overflow-hidden bg-gray-900 rounded-[3rem] border-4 border-gray-800">
            {/* Gradient overlay for better text visibility (optional) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10 pointer-events-none"></div>

            {screenshots.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`App screenshot ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform ${index === currentIndex
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                        }`}
                />
            ))}
        </div>
    );
};

export default ScreenshotCarousel;
