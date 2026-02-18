import React from 'react';

const ForecastCard = ({ title, data }) => {
    // This is a placeholder since basic plan API access is limited for forecast
    return (
        <div className="glass-card rounded-3xl p-6 w-full mb-6">
            <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2">{title}</h3>
            <div className="text-center text-white/70 py-4">
                {data ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Placeholder for mapping data if available */}
                        <div className="bg-white/10 p-3 rounded-xl">
                            <p className="text-sm opacity-70">Morning</p>
                            <p className="font-bold text-lg">22°</p>
                        </div>
                        <div className="bg-white/10 p-3 rounded-xl">
                            <p className="text-sm opacity-70">Afternoon</p>
                            <p className="font-bold text-lg">28°</p>
                        </div>
                        <div className="bg-white/10 p-3 rounded-xl">
                            <p className="text-sm opacity-70">Evening</p>
                            <p className="font-bold text-lg">25°</p>
                        </div>
                        <div className="bg-white/10 p-3 rounded-xl">
                            <p className="text-sm opacity-70">Night</p>
                            <p className="font-bold text-lg">19°</p>
                        </div>
                    </div>
                ) : (
                    <p>Feature requires upgrade to API plan for full forecast data.</p>
                )}
            </div>
        </div>
    );
};

export default ForecastCard;
