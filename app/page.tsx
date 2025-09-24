
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Dashboard() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeSection, setActiveSection] = useState('dashboard');

  const stats = [
    { label: 'All', count: 3, color: 'bg-blue-400' },
    { label: 'Overspeed', count: 0, color: 'bg-orange-400' },
    { label: 'Running', count: 0, color: 'bg-green-400' },
    { label: 'Idle', count: 0, color: 'bg-yellow-400' },
    { label: 'Stop', count: 3, color: 'bg-red-400' },
    { label: 'Unreachable', count: 1, color: 'bg-gray-400' },
    { label: 'New', count: 2, color: 'bg-purple-400' },
    { label: 'Inactive', count: 0, color: 'bg-slate-400' }
  ];

  const vehicles = [
    {
      id: '0328-AW-05',
      model: 'HARRIER',
      image: 'https://res.cloudinary.com/dknafpppp/image/upload/v1758730781/istockphoto-468686480-612x612_qlim26.jpg',
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
      image: 'https://res.cloudinary.com/dknafpppp/image/upload/v1758730519/ChatGPT_Image_Sep_24_2025_11_14_08_PM_hmcyq1.png',
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
      image: 'https://res.cloudinary.com/dknafpppp/image/upload/v1758730781/istockphoto-468686480-612x612_qlim26.jpg',
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
      image: 'https://res.cloudinary.com/dknafpppp/image/upload/v1758731111/istockphoto-170110040-612x612_onlfxm.jpg',
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
    <div className="min-h-screen">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 text-white px-4 py-3 z-10" style={{ background: 'linear-gradient(90deg, #4C1D95 0%, #1E1B4B 100%)' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <i className="ri-menu-line text-xl"></i>
            <span className="text-lg font-medium">Dashboard</span>
          </div>
          <i className="ri-search-line text-xl"></i>
        </div>
      </div>

              {/* Content */}
        <div className="pt-20 pb-20 md:pb-6">
          {activeSection === 'dashboard' && (
            <>
              {/* Stats Cards - Fixed Position */}
              <div className="fixed top-12 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200/50">
                <div className="flex gap-4 px-4 py-4 overflow-x-auto">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className={`${stat.color} text-white rounded-xl p-1.5 md:p-2 w-[72px] md:w-[96px] h-[60px] md:h-[70px] flex-shrink-0 text-center cursor-pointer transition-all duration-300 transform scale-60 md:scale-100 shadow-2xl border border-white/20 backdrop-blur-sm relative overflow-hidden ${selectedFilter === stat.label ? 'scale-105 shadow-3xl ring-2 ring-white/40' : 'hover:scale-102 hover:shadow-3xl'}`}
                      style={{
                        background: `linear-gradient(135deg, ${stat.color.replace('bg-', '') === 'blue-400' ? '#60A5FA' : 
                                                             stat.color.replace('bg-', '') === 'orange-400' ? '#FB923C' :
                                                             stat.color.replace('bg-', '') === 'green-400' ? '#4ADE80' :
                                                             stat.color.replace('bg-', '') === 'yellow-400' ? '#FACC15' :
                                                             stat.color.replace('bg-', '') === 'red-400' ? '#F87171' :
                                                             stat.color.replace('bg-', '') === 'gray-400' ? '#9CA3AF' :
                                                             stat.color.replace('bg-', '') === 'purple-400' ? '#A78BFA' :
                                                             stat.color.replace('bg-', '') === 'slate-400' ? '#94A3B8' : '#60A5FA'} 0%, 
                                                             ${stat.color.replace('bg-', '') === 'blue-400' ? '#3B82F6' : 
                                                             stat.color.replace('bg-', '') === 'orange-400' ? '#F97316' :
                                                             stat.color.replace('bg-', '') === 'green-400' ? '#22C55E' :
                                                             stat.color.replace('bg-', '') === 'yellow-400' ? '#EAB308' :
                                                             stat.color.replace('bg-', '') === 'red-400' ? '#EF4444' :
                                                             stat.color.replace('bg-', '') === 'gray-400' ? '#6B7280' :
                                                             stat.color.replace('bg-', '') === 'purple-400' ? '#8B5CF6' :
                                                             stat.color.replace('bg-', '') === 'slate-400' ? '#64748B' : '#3B82F6'} 100%)`,
                        boxShadow: selectedFilter === stat.label ? 
                          '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)' : 
                          '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.1)'
                      }}
                      onClick={() => setSelectedFilter(stat.label)}
                    >
                      {/* Subtle overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
                                      <div className="flex flex-col items-center justify-center h-full relative z-10">
                          <div className="text-base md:text-xl font-bold text-white drop-shadow-lg filter contrast-125">{stat.count}</div>
                          <div className="flex flex-col items-center gap-0 mt-0.5">
                                                  {stat.label === 'All' && <i className="ri-car-line text-white text-xs drop-shadow-md"></i>}
                        {stat.label === 'Overspeed' && <i className="ri-speed-line text-white text-xs drop-shadow-md"></i>}
                        {stat.label === 'Running' && <i className="ri-play-circle-line text-white text-xs drop-shadow-md"></i>}
                        {stat.label === 'Idle' && <i className="ri-time-line text-white text-xs drop-shadow-md"></i>}
                        {stat.label === 'Stop' && <i className="ri-stop-circle-line text-white text-xs drop-shadow-md"></i>}
                        {stat.label === 'Unreachable' && <i className="ri-wifi-off-line text-white text-xs drop-shadow-md"></i>}
                        {stat.label === 'New' && <i className="ri-add-circle-line text-white text-xs drop-shadow-md"></i>}
                        {stat.label === 'Inactive' && <i className="ri-pause-circle-line text-white text-xs drop-shadow-md"></i>}
                          <div className="text-xs font-semibold text-white leading-tight drop-shadow-lg text-center filter contrast-125">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vehicle List - Scrollable with top padding for fixed stats */}
              <div className="pt-16 px-4 space-y-2">
              {vehicles.map((vehicle, index) => (
                <div key={index} className="backdrop-blur-md bg-white/90 border border-white/60 rounded-lg p-2 md:p-3 shadow-sm" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)' }}>
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
          </>
        )}

        {activeSection === 'live-map' && (
          <div className="px-4">
            {/* Map Header */}
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-sm border border-white/60 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Live Fleet Map</h2>
                  <p className="text-sm text-gray-600">Real-time vehicle tracking</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 px-3 py-1 rounded-full">
                    <span className="text-green-700 text-sm font-medium">Live</span>
                  </div>
                  <div className="bg-blue-50 px-3 py-1 rounded-full">
                    <span className="text-blue-700 text-sm font-medium">3 Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-sm border border-white/60 overflow-hidden">
              <div className="relative h-96 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200">
                {/* Realistic Map Background */}
                <div className="absolute inset-0">
                  {/* Water Bodies */}
                  <div className="absolute top-1/4 right-1/4 w-24 h-16 bg-blue-300/40 rounded-full blur-sm"></div>
                  <div className="absolute bottom-1/4 left-1/6 w-20 h-12 bg-blue-300/30 rounded-full blur-sm"></div>
                  
                  {/* Roads Network */}
                  <div className="absolute top-1/3 left-0 right-0 h-1 bg-gray-400/60 transform rotate-12"></div>
                  <div className="absolute top-2/3 left-0 right-0 h-1 bg-gray-400/60 transform -rotate-6"></div>
                  <div className="absolute left-1/3 top-0 bottom-0 w-1 bg-gray-400/60 transform rotate-45"></div>
                  <div className="absolute left-2/3 top-0 bottom-0 w-1 bg-gray-400/60 transform -rotate-30"></div>
                  
                  {/* Buildings/Areas */}
                  <div className="absolute top-1/6 left-1/6 w-8 h-6 bg-gray-500/40 rounded-sm"></div>
                  <div className="absolute top-1/6 right-1/4 w-6 h-8 bg-gray-500/50 rounded-sm"></div>
                  <div className="absolute bottom-1/4 right-1/6 w-10 h-7 bg-gray-500/30 rounded-sm"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-7 h-5 bg-gray-500/40 rounded-sm"></div>
                  
                  {/* Parks/Green Areas */}
                  <div className="absolute top-1/2 left-1/6 w-12 h-8 bg-green-400/30 rounded-full blur-sm"></div>
                  <div className="absolute bottom-1/6 right-1/3 w-10 h-6 bg-green-400/25 rounded-full blur-sm"></div>
                  
                  {/* Grid Pattern for Urban Feel */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-20 gap-0.5 h-full">
                      {[...Array(400)].map((_, i) => (
                        <div key={i} className="bg-gray-400 rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Fleet Vehicles on Map */}
                <div className="relative z-10 h-full">
                  {/* Vehicle 1 - Moving with realistic trail */}
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      {/* Movement Trail */}
                      <div className="absolute top-1/2 left-1/2 w-20 h-0.5 bg-blue-400/60 transform rotate-45 origin-left"></div>
                      <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-blue-400/40 transform rotate-45 origin-left translate-x-4"></div>
                      <div className="absolute top-1/2 left-1/2 w-12 h-0.5 bg-blue-400/20 transform rotate-45 origin-left translate-x-8"></div>
                      
                      {/* Vehicle Icon */}
                      <div className="w-10 h-10 bg-blue-500 rounded-full shadow-xl border-3 border-white flex items-center justify-center animate-pulse">
                        <i className="ri-car-line text-white text-base"></i>
                      </div>
                      
                      {/* Vehicle Info */}
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg shadow-lg border border-white/20 whitespace-nowrap">
                        <div className="font-semibold">HARRIER</div>
                        <div className="text-green-400 text-xs">Moving • 45 km/h</div>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle 2 - Stopped */}
                  <div className="absolute top-1/2 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-10 h-10 bg-red-500 rounded-full shadow-xl border-3 border-white flex items-center justify-center">
                        <i className="ri-car-line text-white text-base"></i>
                      </div>
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg shadow-lg border border-white/20 whitespace-nowrap">
                        <div className="font-semibold">ALPHARD</div>
                        <div className="text-red-400 text-xs">Stopped • 0 km/h</div>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle 3 - Idle */}
                  <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-10 h-10 bg-yellow-500 rounded-full shadow-xl border-3 border-white flex items-center justify-center">
                        <i className="ri-car-line text-white text-base"></i>
                      </div>
                      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg shadow-lg border border-white/20 whitespace-nowrap">
                        <div className="font-semibold">HARRIER</div>
                        <div className="text-yellow-400 text-xs">Idle • 0 km/h</div>
                      </div>
                    </div>
                  </div>

                  {/* Map Controls */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-white/60 flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-200">
                      <i className="ri-zoom-in-line text-gray-700 text-lg"></i>
                    </button>
                    <button className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-white/60 flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-200">
                      <i className="ri-zoom-out-line text-gray-700 text-lg"></i>
                    </button>
                    <button className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-white/60 flex items-center justify-center hover:bg-white hover:scale-105 transition-all duration-200">
                      <i className="ri-crosshair-line text-gray-700 text-lg"></i>
                    </button>
                  </div>

                  {/* Map Legend */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/60">
                    <div className="text-sm font-semibold text-gray-900 mb-3">Legend</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-blue-500 rounded-full shadow-sm"></div>
                        <span className="text-sm text-gray-700 font-medium">Moving</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-red-500 rounded-full shadow-sm"></div>
                        <span className="text-sm text-gray-700 font-medium">Stopped</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-sm"></div>
                        <span className="text-sm text-gray-700 font-medium">Idle</span>
                      </div>
                    </div>
                  </div>

                  {/* Scale Indicator */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-white/60">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-0.5 bg-gray-600"></div>
                      <span className="text-xs text-gray-700 font-medium">1 km</span>
                    </div>
                  </div>

                  {/* Compass */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg border border-white/60">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className="ri-compass-3-line text-gray-700 text-lg"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fleet Stats */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200/50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-blue-900">Active Vehicles</div>
                    <div className="text-2xl font-bold text-blue-700">3</div>
                  </div>
                  <i className="ri-car-line text-2xl text-blue-500"></i>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200/50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-green-900">Total Distance</div>
                    <div className="text-2xl font-bold text-green-700">156 km</div>
                  </div>
                  <i className="ri-road-map-line text-2xl text-green-500"></i>
                </div>
              </div>
            </div>

            {/* Fleet Details */}
            <div className="mt-4 bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-sm border border-white/60">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fleet Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-medium text-gray-900">HARRIER - 0328-AW-05</div>
                      <div className="text-sm text-gray-600">Avenue de Molundu, Lubumbashi</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-blue-700">Moving</div>
                    <div className="text-xs text-gray-500">45 km/h</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-red-50/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div>
                      <div className="font-medium text-gray-900">ALPHARD - 0524-AW-05</div>
                      <div className="text-sm text-gray-600">Avenue Jason Sendwe, Lubumbashi</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-red-700">Stopped</div>
                    <div className="text-xs text-gray-500">0 km/h</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-yellow-50/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div>
                      <div className="font-medium text-gray-900">HARRIER - 8086-AT-05</div>
                      <div className="text-sm text-gray-600">Avenue de Molundu, Lubumbashi</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-yellow-700">Idle</div>
                    <div className="text-xs text-gray-500">0 km/h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'fuel' && (
          <div className="px-4">
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-sm border border-white/60">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Fuel Management</h2>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-orange-900">Total Fuel Used Today</div>
                      <div className="text-2xl font-bold text-orange-600">4.83 L</div>
                    </div>
                    <i className="ri-gas-station-line text-3xl text-orange-400"></i>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-blue-900">Average Consumption</div>
                    <div className="text-xl font-bold text-blue-600">0.8 L/100km</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-green-900">Fuel Efficiency</div>
                    <div className="text-xl font-bold text-green-600">85%</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-900 mb-2">Recent Fuel Events</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Vehicle 0328-AW-05: 0.72L consumed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Vehicle 0524-AW-05: 1.75L consumed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Vehicle 8086-AT-05: 2.36L consumed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'reports' && (
          <div className="px-4">
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-sm border border-white/60">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Reports & Analytics</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-purple-900">Monthly Distance</div>
                    <div className="text-2xl font-bold text-purple-600">1,247 km</div>
                    <div className="text-xs text-purple-500 mt-1">+12% vs last month</div>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <div className="text-sm font-medium text-indigo-900">Fuel Cost</div>
                    <div className="text-2xl font-bold text-indigo-600">$89.50</div>
                    <div className="text-xs text-indigo-500 mt-1">-5% vs last month</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-900 mb-3">Performance Summary</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Efficiency Score</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">85%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Safety Score</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '92%'}}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">92%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Maintenance Score</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{width: '78%'}}></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Mobile Footer Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-violet-50/30 backdrop-blur-xl border-t border-violet-200/20 shadow-2xl" style={{ background: 'linear-gradient(135deg, rgba(237, 233, 254, 0.3) 0%, rgba(221, 214, 254, 0.2) 100%)' }}>
        <div className="flex items-center justify-around py-3 px-2">
          {/* Dashboard */}
          <div 
            className={`flex flex-col items-center py-3 px-4 rounded-2xl cursor-pointer active:scale-95 transition-all duration-200 ${
              activeSection === 'dashboard' 
                ? 'border border-green-200/30 shadow-lg bg-gradient-to-br from-green-50 to-green-100/50' 
                : 'hover:bg-gray-50/80 hover:scale-105'
            }`}
            onClick={() => setActiveSection('dashboard')}
          >
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1755942313/dashboard_16597209_vlmpy9.png" 
                alt="Dashboard" 
                className={`w-6 h-6 mb-2 transition-all duration-200 ${
                  activeSection === 'dashboard' ? 'scale-110' : 'group-hover:scale-110'
                }`}
              />
              {activeSection === 'dashboard' && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              )}
            </div>
            <span className={`text-xs font-semibold tracking-wide transition-colors duration-200 ${
              activeSection === 'dashboard' ? 'text-green-700' : 'text-gray-600'
            }`}>Dashboard</span>
          </div>
          
          {/* Live Map */}
          <div 
            className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 group cursor-pointer active:scale-95 ${
              activeSection === 'live-map' 
                ? 'border border-blue-200/30 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100/50' 
                : 'hover:bg-gray-50/80 hover:scale-105'
            }`}
            onClick={() => setActiveSection('live-map')}
          >
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1755942314/gps_723176_xx1iew.png" 
                alt="Live Map" 
                className={`w-6 h-6 mb-2 transition-transform duration-300 ${
                  activeSection === 'live-map' ? 'scale-110' : 'group-hover:scale-110'
                }`}
              />
              {activeSection === 'live-map' && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              )}
              <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
            <span className={`text-xs font-medium transition-colors duration-300 ${
              activeSection === 'live-map' ? 'text-blue-600 font-semibold' : 'text-gray-600 group-hover:text-blue-600'
            }`}>Live Map</span>
          </div>
          
          {/* Fuel */}
          <div 
            className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 group cursor-pointer active:scale-95 ${
              activeSection === 'fuel' 
                ? 'border border-orange-200/30 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100/50' 
                : 'hover:bg-gray-50/80 hover:scale-105'
            }`}
            onClick={() => setActiveSection('fuel')}
          >
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1755942314/petrol_2311296_m3cncg.png" 
                alt="Fuel" 
                className={`w-6 h-6 mb-2 transition-transform duration-300 ${
                  activeSection === 'fuel' ? 'scale-110' : 'group-hover:scale-110'
                }`}
              />
              {activeSection === 'fuel' && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              )}
              <div className="absolute inset-0 bg-orange-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
            <span className={`text-xs font-medium transition-colors duration-300 ${
              activeSection === 'fuel' ? 'text-orange-600 font-semibold' : 'text-gray-600 group-hover:text-orange-600'
            }`}>Fuel</span>
          </div>
          
          {/* Reports */}
          <div 
            className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 group cursor-pointer active:scale-95 ${
              activeSection === 'reports' 
                ? 'border border-green-200/30 shadow-lg bg-gradient-to-br from-green-50 to-green-100/50' 
                : 'hover:bg-gray-50/80 hover:scale-105'
            }`}
            onClick={() => setActiveSection('reports')}
          >
            <div className="relative">
              <img 
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1755942314/experiment-results_9619668_zvcn7x.png" 
                alt="Reports" 
                className={`w-6 h-6 mb-2 transition-transform duration-300 ${
                  activeSection === 'reports' ? 'scale-110' : 'group-hover:scale-110'
                }`}
              />
              {activeSection === 'reports' && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              )}
              <div className="absolute inset-0 bg-green-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
            <span className={`text-xs font-medium transition-colors duration-300 ${
              activeSection === 'reports' ? 'text-green-600 font-semibold' : 'text-gray-600 group-hover:text-green-600'
            }`}>Reports</span>
          </div>
        </div>
      </div>
    </div>
  );
}
