
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Dashboard() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const stats = [
    { label: 'All', count: 3, color: 'bg-blue-400' },
    { label: 'Overspeed', count: 0, color: 'bg-orange-400' },
    { label: 'Running', count: 0, color: 'bg-green-400' },
    { label: 'Idle', count: 0, color: 'bg-yellow-400' },
    { label: 'Stop', count: 3, color: 'bg-red-400' }
  ];

  const vehicles = [
    {
      id: '0328-AW-05',
      model: 'HARRIER',
      image: 'https://readdy.ai/api/search-image?query=Red%20sedan%20car%2C%20luxury%20vehicle%2C%20modern%20automotive%20design%2C%20side%20view%2C%20clean%20white%20background%2C%20realistic%203D%20rendering%2C%20professional%20car%20photography%2C%20high%20detail&width=80&height=60&seq=car1&orientation=landscape',
      location: 'Avenue de Molundu, Industriel, Industriel, Ville de Lubumbashi, Kimbangu, Haut-Katanga, Democratic Republic of the Congo',
      lastUpdated: '22/08/2025 15:52:25',
      todayKm: '8 km',
      speed: '0 km/h',
      fuelUsed: '0.72 L',
      since: '6 min',
      batteryLevel: 15,
      signalStrength: 4
    },
    {
      id: '0524-AW-05',
      model: 'alphard',
      image: 'https://readdy.ai/api/search-image?query=Red%20minivan%20MPV%20vehicle%2C%20family%20car%2C%20modern%20design%2C%20side%20view%2C%20clean%20white%20background%2C%20realistic%203D%20rendering%2C%20professional%20car%20photography%2C%20high%20detail&width=80&height=60&seq=car2&orientation=landscape',
      location: 'Avenue Jason Sendwe, Lubumbashi, Ville de Lubumbashi, Luvua, Haut-Katanga, Democratic Republic of the Congo',
      lastUpdated: '22/08/2025 15:52:15',
      todayKm: '11 km',
      speed: '0 km/h',
      fuelUsed: '1.75 L',
      since: '4 min',
      batteryLevel: 15,
      signalStrength: 4,
      distance: '3 km from home'
    },
    {
      id: '8086-AT-05',
      model: 'Harrier',
      image: 'https://readdy.ai/api/search-image?query=Red%20luxury%20sedan%20car%2C%20premium%20vehicle%2C%20modern%20automotive%20design%2C%20side%20view%2C%20clean%20white%20background%2C%20realistic%203D%20rendering%2C%20professional%20car%20photography%2C%20high%20detail&width=80&height=60&seq=car3&orientation=landscape',
      location: 'Avenue de Molundu, Industriel, Industriel, Ville de Lubumbashi, Kimbangu, Haut-Katanga, Democratic Republic of the Congo',
      lastUpdated: '22/08/2025 15:50:27',
      todayKm: '17 km',
      speed: '0 km/h',
      fuelUsed: '2.36 L',
      since: '2 h 42 min',
      batteryLevel: 20,
      signalStrength: 4,
      status: 'At home'
    },
    {
      id: 'QWA2',
      model: '',
      image: 'https://readdy.ai/api/search-image?query=Red%20SUV%20vehicle%2C%20off-road%20car%2C%20rugged%20design%2C%20side%20view%2C%20clean%20white%20background%2C%20realistic%203D%20rendering%2C%20professional%20car%20photography%2C%20high%20detail&width=80&height=60&seq=car4&orientation=landscape',
      location: 'Avenue Usoke, Kigoma, Ville de Lubumbashi, Rail I, Haut-Katanga, Democratic Republic of the Congo',
      lastUpdated: '22/08/2025 13:06:11',
      todayKm: '1 km',
      speed: '0 km/h',
      fuelUsed: '',
      since: '15 h 2 min',
      batteryLevel: 7,
      signalStrength: 4,
      distance: '988 m from home'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 text-white px-4 py-3 z-10" style={{ background: 'linear-gradient(90deg, #00ff00 0%, #000000 100%)' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <i className="ri-menu-line text-xl"></i>
            <span className="text-lg font-medium">Dashboard</span>
          </div>
          <i className="ri-search-line text-xl"></i>
        </div>
        
        {/* Status Bar */}
        <div className="flex items-center justify-between text-sm mt-1 opacity-90">
          <span>7:23</span>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-white rounded-sm"></div>
              <div className="w-1 h-3 bg-white rounded-sm"></div>
              <div className="w-1 h-3 bg-white/50 rounded-sm"></div>
              <div className="w-1 h-3 bg-white/30 rounded-sm"></div>
            </div>
            <i className="ri-wifi-line"></i>
            <span className="bg-white/20 px-2 py-0.5 rounded text-xs">58</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 pb-20 md:pb-6">
        {/* Stats Cards */}
        <div className="flex gap-2 px-4 mb-6 overflow-x-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`${stat.color} text-white rounded-xl p-2 md:p-3 w-[72px] md:w-[96px] flex-shrink-0 text-center cursor-pointer transition-all transform scale-60 md:scale-100 shadow-lg border-2 border-white/20 ${selectedFilter === stat.label ? 'scale-105 shadow-xl' : ''}`}
              onClick={() => setSelectedFilter(stat.label)}
            >
                              <div className="flex flex-col items-center">
                  <div className="text-lg md:text-2xl font-bold text-white drop-shadow-sm">{stat.count}</div>
                  <div className="flex flex-col items-center gap-0.5 mt-0.5">
                  {stat.label === 'All' && <i className="ri-car-line text-white/90 text-sm"></i>}
                  {stat.label === 'Overspeed' && <i className="ri-speed-line text-white/90 text-sm"></i>}
                  {stat.label === 'Running' && <i className="ri-play-circle-line text-white/90 text-sm"></i>}
                  {stat.label === 'Idle' && <i className="ri-time-line text-white/90 text-sm"></i>}
                  {stat.label === 'Stop' && <i className="ri-stop-circle-line text-white/90 text-sm"></i>}
                  <div className="text-xs font-semibold text-white/95 leading-tight drop-shadow-sm text-center">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vehicle List */}
        <div className="px-4 space-y-2">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="backdrop-blur-md bg-white/90 border border-white/60 rounded-lg p-2 md:p-3 shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)' }}>
              {/* Desktop Layout */}
              <div className="hidden md:flex gap-6">
                {/* Left Section - Vehicle Image and Info */}
                <div className="flex-shrink-0">
                  {/* Vehicle Image - Bigger Size */}
                  <div className="w-48 h-26 rounded-lg overflow-hidden bg-gray-100 mb-2">
                    <img 
                      src={vehicle.image} 
                      alt={`Vehicle ${vehicle.id}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  
                  {/* Vehicle ID and Model - Better Alignment */}
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{vehicle.id}</div>
                      <div className="text-xs text-gray-600">({vehicle.model})</div>
                    </div>
                  </div>
                </div>
                
                {/* Center Section - Empty space for alignment */}
                <div className="flex-1 pt-16"></div>
                
                {/* Right Section - Statistics with Roadmap Design */}
                <div className="flex-shrink-0 w-48">
                  {/* Top Right Icons */}
                  <div className="flex items-center justify-end gap-2 mb-2">
                    {/* Battery Icon */}
                    <div className="w-6 h-4 bg-green-500 rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs font-medium">{vehicle.batteryLevel}</span>
                    </div>
                    {/* Signal Strength */}
                    <div className="flex flex-col gap-0.5">
                      {[...Array(4)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-1 h-0.5 ${i < vehicle.signalStrength ? 'bg-green-500' : 'bg-gray-300'} rounded-sm`}
                        ></div>
                      ))}
                    </div>
                    {/* Refresh Icon */}
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium">{vehicle.batteryLevel}</span>
                    </div>
                  </div>
                  
                  {/* Roadmap Statistics */}
                  <div className="space-y-1.5 text-xs relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>
                    
                    {/* Last Updated */}
                    <div className="flex items-center justify-between relative">
                      <div className="text-gray-500 text-left flex-1">Last Updated</div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full relative z-10 mx-2"></div>
                      <div className="text-right flex-1">
                        <div className="text-gray-900">22/08/2025</div>
                        <div className="text-gray-900">15:52:25</div>
                      </div>
                    </div>
                    
                    {/* Today km */}
                    <div className="flex items-center justify-between relative">
                      <div className="text-gray-500 text-left flex-1">Today km</div>
                      <div className="w-2 h-2 bg-pink-500 rounded-full relative z-10 mx-2"></div>
                      <div className="text-gray-900 text-right flex-1">{vehicle.todayKm}</div>
                    </div>
                    
                    {/* Speed */}
                    <div className="flex items-center justify-between relative">
                      <div className="text-gray-500 text-left flex-1">Speed</div>
                      <div className="w-2 h-2 bg-green-500 rounded-full relative z-10 mx-2"></div>
                      <div className="text-right flex-1">
                        <div className="text-gray-900">{vehicle.speed}</div>
                      </div>
                    </div>
                    
                    {/* Fuel Used */}
                    <div className="flex items-center justify-between relative">
                      <div className="text-gray-500 text-left flex-1">Fuel Used</div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full relative z-10 mx-2"></div>
                      <div className="text-right flex-1">
                        <div className="text-gray-900">{vehicle.fuelUsed || '-'}</div>
                      </div>
                    </div>
                    
                    {/* Since */}
                    <div className="flex items-center justify-between relative">
                      <div className="text-gray-500 text-left flex-1">Since</div>
                      <div className="w-2 h-2 bg-purple-500 rounded-full relative z-10 mx-2"></div>
                      <div className="text-right flex-1">
                        <div className="text-gray-900">{vehicle.since}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Address at bottom - spans full width */}
                <div className="mt-2 pt-1 border-t border-gray-100">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-xs text-gray-600 leading-relaxed">{vehicle.location}</span>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="flex gap-3">
                  {/* Left Side - Car Image and Car Name */}
                  <div className="flex-shrink-0">
                                      {/* Vehicle Image */}
                  <div className="w-32 h-18 rounded-lg overflow-hidden bg-gray-100 mb-1">
                    <img 
                      src={vehicle.image} 
                      alt={`Vehicle ${vehicle.id}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                    
                    {/* Vehicle ID and Model - Below Car */}
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{vehicle.id}</div>
                        <div className="text-xs text-gray-600">({vehicle.model})</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side - All Other Text */}
                  <div className="flex-1 space-y-1.5">
                    {/* Top Right Icons */}
                    <div className="flex items-center justify-end gap-2">
                      {/* Battery Icon */}
                      <div className="w-6 h-3 bg-gray-200 rounded-sm border border-gray-300 relative">
                        <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gray-400 rounded-r-sm"></div>
                        <div 
                          className="h-full bg-green-500 rounded-sm"
                          style={{ width: `${vehicle.batteryLevel}%` }}
                        ></div>
                      </div>
                      {/* Signal Strength Icon */}
                      <div className="flex items-end gap-0.5 h-4">
                        {[...Array(4)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-1 rounded-sm ${i < vehicle.signalStrength ? 'bg-green-500' : 'bg-gray-300'}`}
                            style={{ height: `${(i + 1) * 25}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Statistics - Vertical List with Roadmap Line */}
                    <div className="space-y-1 text-xs relative">
                      {/* Vertical connecting line */}
                      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>
                      
                      {/* Last Updated */}
                      <div className="flex items-center justify-between relative">
                        <div className="text-gray-500 flex-1">Last Updated</div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full relative z-10 mx-2"></div>
                        <div className="text-right flex-1">
                          <div className="text-gray-900">22/08/2025</div>
                          <div className="text-gray-900">15:52:25</div>
                        </div>
                      </div>
                      
                      {/* Today km */}
                      <div className="flex items-center justify-between relative">
                        <div className="text-gray-500 flex-1">Today km</div>
                        <div className="w-2 h-2 bg-pink-500 rounded-full relative z-10 mx-2"></div>
                        <div className="text-right flex-1">
                          <div className="text-gray-900">{vehicle.todayKm}</div>
                        </div>
                      </div>
                      
                      {/* Speed */}
                      <div className="flex items-center justify-between relative">
                        <div className="text-gray-500 flex-1">Speed</div>
                        <div className="w-2 h-2 bg-green-500 rounded-full relative z-10 mx-2"></div>
                        <div className="text-right flex-1">
                          <div className="text-gray-900">{vehicle.speed}</div>
                        </div>
                      </div>
                      
                      {/* Fuel Used */}
                      <div className="flex items-center justify-between relative">
                        <div className="text-gray-500 flex-1">Fuel Used</div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full relative z-10 mx-2"></div>
                        <div className="text-right flex-1">
                          <div className="text-gray-900">{vehicle.fuelUsed || '-'}</div>
                        </div>
                      </div>
                      
                      {/* Since */}
                      <div className="flex items-center justify-between relative">
                        <div className="text-gray-500 flex-1">Since</div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full relative z-10 mx-2"></div>
                        <div className="text-right flex-1">
                          <div className="text-gray-900">{vehicle.since}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Address at bottom - Mobile */}
                <div className="mt-2 pt-1 border-t border-gray-100">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-1 flex-shrink-0"></div>
                    <span className="text-xs text-gray-600 leading-relaxed">{vehicle.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile Footer Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-2xl">
        <div className="flex items-center justify-around py-3 px-2">
          {/* Dashboard */}
          <div className="flex flex-col items-center py-3 px-4 rounded-2xl border border-green-200/30 shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(0, 255, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%)' }}>
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1755942313/dashboard_16597209_vlmpy9.png" 
                alt="Dashboard" 
                className="w-6 h-6 mb-2"
              />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xs font-semibold text-green-700 tracking-wide">Dashboard</span>
          </div>
          
          {/* Live Map */}
          <div className="flex flex-col items-center py-3 px-4 rounded-2xl hover:bg-gray-50/80 transition-all duration-300 group">
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1755942314/gps_723176_xx1iew.png" 
                alt="Live Map" 
                className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
            <span className="text-xs font-medium text-gray-600 group-hover:text-blue-600 transition-colors duration-300">Live Map</span>
          </div>
          
          {/* Fuel */}
          <div className="flex flex-col items-center py-3 px-4 rounded-2xl hover:bg-gray-50/80 transition-all duration-300 group">
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1755942314/petrol_2311296_m3cncg.png" 
                alt="Fuel" 
                className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-orange-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
            <span className="text-xs font-medium text-gray-600 group-hover:text-orange-600 transition-colors duration-300">Fuel</span>
          </div>
          
          {/* Reports */}
          <div className="flex flex-col items-center py-3 px-4 rounded-2xl hover:bg-gray-50/80 transition-all duration-300 group">
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1755942314/experiment-results_9619668_zvcn7x.png" 
                alt="Reports" 
                className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-green-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
            <span className="text-xs font-medium text-gray-600 group-hover:text-green-600 transition-colors duration-300">Reports</span>
          </div>
        </div>
      </div>
    </div>
  );
}
