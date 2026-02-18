import React from 'react';

const RecentSearches = ({ searches, onSearch, onClear }) => {
    if (!searches || searches.length === 0) return null;

    return (
        <div className="w-full max-w-md mx-auto mb-6">
            <div className="flex justify-between items-end mb-2 px-2">
                <h3 className="text-white/70 text-sm font-medium">Recent</h3>
                <button
                    onClick={onClear}
                    className="text-white/50 hover:text-white text-xs underline transition-colors"
                >
                    Clear
                </button>
            </div>
            <div className="flex flex-wrap gap-2">
                {searches.map((city, index) => (
                    <button
                        key={index}
                        onClick={() => onSearch(city)}
                        className="glass-input px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors flex items-center gap-1"
                    >
                        <span className="opacity-70">🕒</span>
                        {city}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default RecentSearches;
