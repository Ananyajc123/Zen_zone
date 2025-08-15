import React, { useState } from 'react';

const DayTracker = () => {
  const [entries, setEntries] = useState(Array(21).fill({ completed: false, note: '' }));
  const [currentDay, setCurrentDay] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleSubmitEntry = (note) => {
    if (currentDay >= 21) return;

    const newEntries = [...entries];
    newEntries[currentDay] = { completed: true, note };
    setEntries(newEntries);
    setCurrentDay(prev => prev + 1);
    setInputValue('');
  };

  const getBackgroundColor = (index) => {
    if (!entries[index].completed) return 'bg-gray-100';
    const colors = [
      'bg-pink-200', 'bg-purple-200', 'bg-indigo-200', 'bg-blue-200', 
      'bg-green-200', 'bg-yellow-200', 'bg-orange-200'
    ];
    return colors[index % colors.length];
  };

  const getTextColor = (index) => {
    if (!entries[index].completed) return 'text-gray-500';
    const colors = [
      'text-pink-700', 'text-purple-700', 'text-indigo-700', 'text-blue-700', 
      'text-green-700', 'text-yellow-700', 'text-orange-700'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-gradient-to-br from-violet-50 to-pink-50">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          21 Day Challenge Tracker
        </h1>
      </div>

      <div className="space-y-6">
        {/* Progress Bar */}
        <div className="bg-white p-4 rounded-lg shadow-inner">
          <div className="text-lg font-semibold mb-2 text-purple-700">
            Progress: Day {currentDay}/21
          </div>
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
              style={{ width: `${(currentDay / 21) * 100}%` }}
            />
          </div>
        </div>

        {/* Current Day Input */}
        {currentDay < 21 && (
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-purple-700 mb-2">Day {currentDay + 1}</h3>
            <div className="flex gap-2">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="What did you accomplish today?"
                className="flex-1 p-2 border border-purple-200 rounded focus:border-purple-400"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && inputValue.trim()) {
                    handleSubmitEntry(inputValue);
                  }
                }}
              />
              <button 
                onClick={() => inputValue.trim() && handleSubmitEntry(inputValue)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded"
              >
                Complete Day
              </button>
            </div>
          </div>
        )}

        {/* Challenge Grid */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: Math.ceil(21/3) }, (_, weekIndex) => (
              <div key={weekIndex} className="space-y-2">
                {Array.from({ length: 3 }, (_, dayOffset) => {
                  const dayIndex = weekIndex * 3 + dayOffset;
                  if (dayIndex >= 21) return null;
                  
                  return (
                    <div 
                      key={dayIndex}
                      className={`p-4 rounded-lg transition-all duration-300 transform hover:scale-102 ${getBackgroundColor(dayIndex)}`}
                    >
                      <div className="flex flex-col">
                        <span className={`font-bold ${getTextColor(dayIndex)}`}>
                          Day {dayIndex + 1}
                        </span>
                        {entries[dayIndex].completed ? (
                          <p className={`mt-1 text-sm ${getTextColor(dayIndex)}`}>
                            {entries[dayIndex].note}
                          </p>
                        ) : (
                          <p className="text-sm text-gray-400">Not completed yet</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayTracker;