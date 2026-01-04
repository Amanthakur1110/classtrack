
import React from 'react';

const AndroidIcon: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M7 19a2 2 0 1 0 4 0H7ZM17 19a2 2 0 1 0 4 0h-4Zm-5-3.5A3.5 3.5 0 0 0 15.5 12H8.5A3.5 3.5 0 0 0 12 15.5ZM5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5H5Z" />
            <path fillRule="evenodd" d="M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8Zm3-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H6Z" clipRule="evenodd" />
            <path d="M8 8.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1H8.5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z" />
        </svg>
    );
};

export default AndroidIcon;
