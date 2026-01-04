import React from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    isSelected: boolean;
    onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, color, isSelected, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full text-left p-6 rounded-3xl transition-all duration-500 border relative group overflow-hidden ${isSelected
                    ? 'bg-white/10 border-white/20 shadow-2xl scale-[1.02]'
                    : 'bg-white/5 border-white/5 hover:bg-white/8 hover:border-white/10'
                }`}
        >
            {/* Glow Background for selected state */}
            {isSelected && (
                <div
                    className="absolute inset-0 opacity-10 blur-2xl pointer-events-none transition-colors duration-1000"
                    style={{ backgroundColor: color }}
                ></div>
            )}

            <div className="relative z-10 flex items-start space-x-5">
                <div
                    className={`p-3 rounded-2xl transition-all duration-500 ${isSelected ? 'scale-110 shadow-lg' : 'opacity-60'
                        }`}
                    style={{
                        backgroundColor: isSelected ? `${color}20` : 'rgba(255,255,255,0.05)',
                        color: isSelected ? color : '#ffffff'
                    }}
                >
                    {icon}
                </div>

                <div className="flex-1">
                    <h3 className={`text-lg font-bold transition-colors duration-500 ${isSelected ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                        }`}>
                        {title}
                    </h3>
                    <p className={`text-sm leading-relaxed mt-1 transition-colors duration-500 ${isSelected ? 'text-white/70' : 'text-white/40 group-hover:text-white/50'
                        } ${isSelected ? '' : 'line-clamp-2'}`}>
                        {description}
                    </p>
                </div>
            </div>

            {/* Active Indicator Bar */}
            <div className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full transition-all duration-700 ${isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`} style={{ backgroundColor: color }}></div>
        </button>
    );
};

export default FeatureCard;
