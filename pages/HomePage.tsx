import React, { useState, useEffect } from 'react';
import PhoneMockup from '../components/PhoneMockup';
import DownloadButton from '../components/DownloadButton';
import FeatureCard from '../components/FeatureCard';
import { APP_FEATURES } from '../config/features';

// Icons map
const ICONS: Record<string, React.ReactNode> = {
    calendar: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    ),
    share: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
    ),
    bell: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
    ),
    chart: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    )
};

const HomePage: React.FC = () => {
    const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

    // Feature Rotation Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentFeatureIndex((prev) => (prev + 1) % APP_FEATURES.length);
        }, 6000); // Slower rotation for better readability

        return () => clearInterval(timer);
    }, []);

    if (!APP_FEATURES || APP_FEATURES.length === 0) {
        return <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white font-heading">Loading Experience...</div>;
    }

    const currentFeature = APP_FEATURES[currentFeatureIndex];

    return (
        <div className="min-h-screen w-full relative overflow-x-hidden bg-[#020617] text-white selection:bg-pink-500/30 selection:text-white">

            {/* Immersive Background Particles/Glows */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div
                    className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] transition-colors duration-[2000ms] opacity-[0.15] mix-blend-screen animate-pulse"
                    style={{ backgroundColor: currentFeature.color }}
                ></div>
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] transition-colors duration-[2000ms] opacity-[0.15] mix-blend-screen animate-pulse delay-1000"
                    style={{ backgroundColor: currentFeature.color }}
                ></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-150"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]"></div>
            </div>

            {/* Content Sidebar / Main Grid */}
            <div className="relative z-10 w-full min-h-screen flex flex-col p-6 md:p-12 lg:p-20 xl:p-24 space-y-32">

                {/* Hero Section: Text Content & Phone Mockup side-by-side */}
                <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-24 min-h-[70vh]">

                    {/* Left Section: Content */}
                    <div className="w-full xl:w-3/5 flex flex-col justify-center items-center xl:items-start text-center xl:text-left space-y-12">

                        {/* Header Group */}
                        <div className="space-y-8 reveal-up" style={{ animationDelay: '200ms' }}>
                            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass border border-white/10 shadow-xl mb-4">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase font-heading">Platform v1.0 is Live</span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-[0.95] font-heading">
                                Download Our <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-pink-500 animate-gradient bg-[length:200%_auto]">
                                    ClassTrack App
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-white/50 font-medium max-w-xl leading-relaxed">
                                Organize your academic journey with the most advanced schedule manager ever built. Sleek, fast, and completely free.
                            </p>

                            {/* CTA Group - Now below description */}
                            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-4">
                                <DownloadButton />
                                <div className="text-center sm:text-left border-l border-white/10 pl-8">
                                    <p className="text-xs font-bold text-white/30 uppercase tracking-[0.3em] font-heading mb-1">Coming Soon to</p>
                                    <span className="text-sm font-bold text-white/60">iOS & Web Platform</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Interactive Phone Display (Now side-by-side in Hero) */}
                    <div className="w-full xl:w-2/5 flex items-center justify-center relative py-12 xl:py-0 scale-in" style={{ animationDelay: '400ms' }}>
                        {/* Focus Glow under phone */}
                        <div
                            className="absolute w-[300px] h-[300px] rounded-full blur-[80px] transition-colors duration-1000 opacity-20 pointer-events-none"
                            style={{ backgroundColor: currentFeature.color }}
                        ></div>

                        <PhoneMockup
                            currentIndex={currentFeatureIndex}
                            screenshots={APP_FEATURES.map(f => f.screenshot)}
                        />

                        {/* Circular Floating Elements for depth */}
                        <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-teal-500/30 blur-sm animate-float"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-purple-500/30 blur-sm animate-float [animation-delay:2s]"></div>
                    </div>
                </div>

                {/* Features Section below Hero */}
                <div className="w-full flex flex-col items-center space-y-16 py-12">
                    <div className="max-w-2xl text-center space-y-4">
                        <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-purple-500 mx-auto rounded-full mb-6"></div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">Experience Excellence</h2>
                        <p className="text-white/40 text-lg leading-relaxed">Explore the features that make ClassTrack the ultimate academic companion.</p>
                    </div>

                    <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-up" style={{ animationDelay: '600ms' }}>
                        {APP_FEATURES.map((feature, index) => (
                            <div key={feature.id} className="h-full">
                                <FeatureCard
                                    title={feature.title}
                                    description={feature.description}
                                    icon={ICONS[feature.icon] || ICONS['chart']}
                                    color={feature.color}
                                    isSelected={currentFeatureIndex === index}
                                    onClick={() => setCurrentFeatureIndex(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Minimal Footer */}
                <footer className="relative z-20 mt-0 pb-0">
                    <div className="text-center space-y-3 text-white/30 text-xs tracking-wide">

                        {/* GitHub */}
                        <a
                            href="https://github.com/amanthakur1110"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white/50 transition-colors"
                        >
                            github.com/amanthakur1110
                        </a>

                        {/* Copyright */}
                        <p>
                            © {new Date().getFullYear()} ClassTrack. Designed & built by Aman Thakur.
                        </p>

                    </div>
                </footer>




            </div>

        </div>
    );
};

export default HomePage;
