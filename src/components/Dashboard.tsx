import React from 'react';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Grid Data Card */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
        <img src="https://picsum.photos/seed/grid-data/200/120" alt="Grid Data" className="rounded-lg mb-4" referrerpolicy="no-referrer" />
        <h3 className="text-2xl font-serif font-light text-white mb-4">Real-time Grid Data</h3>
        <p className="text-gray-400">Current grid load: <span className="font-semibold text-green-400">75%</span></p>
        <p className="text-gray-400">Next peak: <span className="font-semibold text-yellow-400">3:00 PM - 7:00 PM</span></p>
        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200">View Details</button>
      </div>

      {/* Scheduling Card */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
        <img src="https://picsum.photos/seed/schedule/200/120" alt="Charging Schedule" className="rounded-lg mb-4" referrerpolicy="no-referrer" />
        <h3 className="text-2xl font-serif font-light text-white mb-4">Optimal Charging Schedule</h3>
        <p className="text-gray-400">Next session: <span className="font-semibold text-blue-400">Tomorrow 1:00 AM - 5:00 AM</span></p>
        <p className="text-gray-400">Cost savings: <span className="font-semibold text-green-400">15%</span></p>
        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200">Adjust Schedule</button>
      </div>

      {/* Stations Card */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center">
        <img src="https://picsum.photos/seed/stations/200/120" alt="Charging Stations" className="rounded-lg mb-4" referrerpolicy="no-referrer" />
        <h3 className="text-2xl font-serif font-light text-white mb-4">Nearby Charging Stations</h3>
        <p className="text-gray-400">Available stations: <span className="font-semibold text-purple-400">5</span></p>
        <p className="text-400">Closest: <span className="font-semibold text-purple-400">2.3 miles (Level 2)</span></p>
        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200">Find Stations</button>
      </div>
    </div>
  );
}