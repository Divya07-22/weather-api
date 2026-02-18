import React from 'react';

const MarineCard = ({ data }) => {
    // Placeholder for marine data visualization
    return (
        <div className="glass-card rounded-3xl p-6 w-full mb-6">
            <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Marine Weather
            </h3>

            <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 p-4 rounded-xl">
                    <p className="text-sm opacity-70">Swell Height</p>
                    <p className="font-bold text-xl">1.2m</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                    <p className="text-sm opacity-70">Swell Period</p>
                    <p className="font-bold text-xl">8s</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                    <p className="text-sm opacity-70">Water Temp</p>
                    <p className="font-bold text-xl">21°C</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                    <p className="text-sm opacity-70">Tide</p>
                    <p className="font-bold text-xl">High</p>
                </div>
            </div>
            <p className="text-xs text-center mt-4 opacity-50">* Demo data shown if API access restricted</p>
        </div>
    );
};

export default MarineCard;
