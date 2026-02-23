import Dashboard from './components/Dashboard';
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-md bg-black py-4 border-b border-gray-800 rounded-t-2xl">
        <div className="px-4 flex justify-between items-center">
          <h1 className="text-3xl font-serif font-light text-white">EV Charge Optimizer</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Schedule</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Stations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Settings</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="w-full max-w-md bg-gray-950 p-6 rounded-b-2xl shadow-lg flex-grow">
        <Dashboard />
      </main>
    </div>
  );
}
