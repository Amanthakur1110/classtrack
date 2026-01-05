import React from 'react';
import AndroidIcon from './icons/AndroidIcon';
import { incrementDownloadCount } from '../utils/counter';

interface DownloadButtonProps {
    onDownload?: (newCount: number) => void;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ onDownload }) => {
    const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
        try {
            // Start the increment call immediately
            const incrementPromise = incrementDownloadCount();

            // For a fast UI, we could update the count locally even before the API returns,
            // but for now we'll just wait for the promise.
            const newCount = await incrementPromise;

            if (onDownload) {
                onDownload(newCount);
            }
        } catch (error) {
            console.error('Download tracking failed:', error);
        }
    };

    return (
        <a
            href="https://github.com/Amanthakur1110/classtrack/releases/download/classtrack/classtrack.apk"
            onClick={handleClick}
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transform hover:-translate-y-1 active:scale-95"
        >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>

            <div className="relative flex items-center space-x-4">
                <div className="p-2 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-500">
                    <AndroidIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-widest group-hover:text-white/70 transition-colors">Get it for</span>
                    <span className="text-xl font-bold text-white tracking-tight">Android APK</span>
                </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </a>
    );
};

export default DownloadButton;
