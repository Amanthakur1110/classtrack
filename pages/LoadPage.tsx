import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadPage: React.FC = () => {
    const [binId, setBinId] = useState<string | null>(null);
    const [status, setStatus] = useState<'analyzing' | 'redirecting' | 'fallback'>('analyzing');
    const navigate = useNavigate();

    useEffect(() => {
        // More robust binId extraction
        const getParam = (name: string) => {
            const hash = window.location.hash;
            const searchParams = new URLSearchParams(hash.split('?')[1] || window.location.search);
            return searchParams.get(name);
        };

        const id = getParam('binId') || getParam('bid');
        setBinId(id);

        if (id) {
            // Simulated transition for better feel
            const phase1 = setTimeout(() => setStatus('redirecting'), 1200);

            const phase2 = setTimeout(() => {
                const deepLinkUrl = `classtrack://load?binId=${id}`;
                window.location.href = deepLinkUrl;

                // Fallback timer
                setTimeout(() => {
                    setStatus('fallback');
                    // navigate('/'); // Optional auto-redirect
                }, 4000);
            }, 2000);

            return () => {
                clearTimeout(phase1);
                clearTimeout(phase2);
            };
        } else {
            const timeout = setTimeout(() => navigate('/'), 2000);
            return () => clearTimeout(timeout);
        }
    }, [navigate]);

    return (
        <div className="min-h-screen w-full bg-[#020617] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-heading">

            {/* Immersive Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-teal-500/10 via-transparent to-purple-500/10 opacity-50 blur-[100px]"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
            </div>

            <div className="relative z-10 w-full max-w-sm flex flex-col items-center text-center space-y-12">

                {/* Logo Section */}
                <div className="space-y-6 reveal-up">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700"></div>
                        <div className="w-24 h-24 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] flex items-center justify-center shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-transparent"></div>
                            <svg className="w-12 h-12 text-teal-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Status Section */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-black tracking-tighter">
                        {status === 'analyzing' && <span className="animate-pulse">Analyzing Link...</span>}
                        {status === 'redirecting' && <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Opening ClassTrack</span>}
                        {status === 'fallback' && <span className="text-white/80">Almost There</span>}
                    </h2>
                    <p className="text-white/40 font-medium max-w-xs mx-auto leading-relaxed">
                        {status === 'analyzing' && "Preparing your synchronized academic experience."}
                        {status === 'redirecting' && "Connecting to your local application safely."}
                        {status === 'fallback' && "If the app didn't open automatically, use the option below."}
                    </p>
                </div>

                {/* Interactive Loading Bar */}
                <div className="w-full max-w-[240px] h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                    <div
                        className={`h-full bg-gradient-to-r from-teal-400 to-emerald-600 transition-all duration-[2000ms] ease-out rounded-full ${status === 'analyzing' ? 'w-1/3' : 'w-full'
                            }`}
                    ></div>
                </div>

                {/* Action Section */}
                <div className={`transition-all duration-700 ${status === 'fallback' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                    <div className="space-y-6">
                        <button
                            onClick={() => binId && (window.location.href = `classtrack://load?binId=${binId}`)}
                            className="w-full px-8 py-4 bg-teal-500 text-white font-bold rounded-2xl shadow-xl shadow-teal-500/20 hover:bg-teal-400 transition-all active:scale-95"
                        >
                            Open ClassTrack
                        </button>

                        <div className="flex flex-col space-y-3">
                            <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Don't have the app?</p>
                            <button
                                onClick={() => navigate('/')}
                                className="text-sm font-bold text-teal-400/60 hover:text-teal-400 transition-colors"
                            >
                                Get ClassTrack App
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Footer */}
            <div className="absolute bottom-12 left-0 right-0 text-center opacity-10">
                <p className="text-[10px] font-black tracking-[0.5em] uppercase">Secure Handshake Protocol</p>
            </div>
        </div>
    );
};

export default LoadPage;
