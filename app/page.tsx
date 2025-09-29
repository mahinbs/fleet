"use client";

import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const stats = [
    { label: "All", count: 3, color: "bg-blue-400" },
    { label: "Overspeed", count: 0, color: "bg-orange-400" },
    { label: "Running", count: 0, color: "bg-green-400" },
    { label: "Idle", count: 0, color: "bg-yellow-400" },
    { label: "Stop", count: 3, color: "bg-red-400" },
    { label: "Unreachable", count: 1, color: "bg-gray-400" },
    { label: "New", count: 2, color: "bg-purple-400" },
    { label: "Inactive", count: 0, color: "bg-slate-400" },
  ];

  const vehicles = [
    {
      id: "0328-AW-05",
      model: "HARRIER",
      image:
        "https://res.cloudinary.com/dknafpppp/image/upload/v1758730781/istockphoto-468686480-612x612_qlim26.jpg",
      location:
        "Avenue de Molundu, Industriel, Industriel, Ville de Lubumbashi, Kimbangu, Haut-Katanga, Democratic Republic of the Congo",
      lastUpdated: "22/08/2025 15:52:25",
      todayKm: "8 km",
      speed: "0 km/h",
      fuelUsed: "0.72 L",
      since: "6 min",
      batteryLevel: 15,
      signalStrength: 4,
    },
    {
      id: "0524-AW-05",
      model: "alphard",
      image:
        "https://res.cloudinary.com/dknafpppp/image/upload/v1758730519/ChatGPT_Image_Sep_24_2025_11_14_08_PM_hmcyq1.png",
      location:
        "Avenue Jason Sendwe, Lubumbashi, Ville de Lubumbashi, Luvua, Haut-Katanga, Democratic Republic of the Congo",
      lastUpdated: "22/08/2025 15:52:15",
      todayKm: "11 km",
      speed: "0 km/h",
      fuelUsed: "1.75 L",
      since: "4 min",
      batteryLevel: 15,
      signalStrength: 4,
      distance: "3 km from home",
    },
    {
      id: "8086-AT-05",
      model: "Harrier",
      image:
        "https://res.cloudinary.com/dknafpppp/image/upload/v1758730781/istockphoto-468686480-612x612_qlim26.jpg",
      location:
        "Avenue de Molundu, Industriel, Industriel, Ville de Lubumbashi, Kimbangu, Haut-Katanga, Democratic Republic of the Congo",
      lastUpdated: "22/08/2025 15:50:27",
      todayKm: "17 km",
      speed: "0 km/h",
      fuelUsed: "2.36 L",
      since: "2 h 42 min",
      batteryLevel: 20,
      signalStrength: 4,
      status: "At home",
    },
    {
      id: "QWA2",
      model: "",
      image:
        "https://res.cloudinary.com/dknafpppp/image/upload/v1758731111/istockphoto-170110040-612x612_onlfxm.jpg",
      location:
        "Avenue Usoke, Kigoma, Ville de Lubumbashi, Rail I, Haut-Katanga, Democratic Republic of the Congo",
      lastUpdated: "22/08/2025 13:06:11",
      todayKm: "1 km",
      speed: "0 km/h",
      fuelUsed: "",
      since: "15 h 2 min",
      batteryLevel: 7,
      signalStrength: 4,
      distance: "988 m from home",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div
        className="fixed top-0 left-0 right-0 text-white px-4 py-3 z-10"
        style={{
          background: "linear-gradient(90deg, #4C1D95 0%, #1E1B4B 100%)",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
            <span className="text-lg font-medium">Dashboard</span>
          </div>
          <i className="ri-search-line text-xl"></i>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Mobile Menu Sidebar */}
          <div 
            className="fixed top-0 left-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl border-r border-white/20 transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header */}
            <div 
              className="px-6 py-4 border-b border-gray-200/50"
              style={{
                background: "linear-gradient(90deg, #4C1D95 0%, #1E1B4B 100%)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 hover:bg-white/10 rounded-lg transition-colors duration-200"
                  >
                    <i className="ri-close-line text-xl text-white"></i>
                  </button>
                  <span className="text-lg font-medium text-white">Menu</span>
                </div>
              </div>
            </div>

            {/* Menu Content */}
            <div className="p-6 space-y-6">
              {/* Navigation Items */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Navigation</h3>
                
                <button
                  onClick={() => {
                    setActiveSection("dashboard");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                    activeSection === "dashboard"
                      ? "bg-green-50 border border-green-200 text-green-700"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <img
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1755942313/dashboard_16597209_vlmpy9.png"
                    alt="Dashboard"
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Dashboard</span>
                </button>

                <button
                  onClick={() => {
                    setActiveSection("live-map");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                    activeSection === "live-map"
                      ? "bg-blue-50 border border-blue-200 text-blue-700"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <img
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1755942314/gps_723176_xx1iew.png"
                    alt="Live Map"
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Live Map</span>
                </button>

                <button
                  onClick={() => {
                    setActiveSection("fuel");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                    activeSection === "fuel"
                      ? "bg-orange-50 border border-orange-200 text-orange-700"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <img
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1755942314/petrol_2311296_m3cncg.png"
                    alt="Fuel"
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Fuel Management</span>
                </button>

                <button
                  onClick={() => {
                    setActiveSection("reports");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                    activeSection === "reports"
                      ? "bg-green-50 border border-green-200 text-green-700"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <img
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1755942314/experiment-results_9619668_zvcn7x.png"
                    alt="Reports"
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Reports & Analytics</span>
                </button>

                <button
                  onClick={() => {
                    setActiveSection("geo-fencing");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                    activeSection === "geo-fencing"
                      ? "bg-purple-50 border border-purple-200 text-purple-700"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <img
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1759126547/images_2_otm4cw.png"
                    alt="Geo Fencing"
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Geo Fencing</span>
                </button>

                <button
                  onClick={() => {
                    setActiveSection("profile");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                    activeSection === "profile"
                      ? "bg-blue-50 border border-blue-200 text-blue-700"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <img
                    src="https://res.cloudinary.com/dknafpppp/image/upload/v1759126806/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw_ce3lva.webp"
                    alt="Profile"
                    className="w-5 h-5"
                  />
                  <span className="font-medium">Profile</span>
                </button>

                <button
                  onClick={() => {
                    setActiveSection("settings");
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                    activeSection === "settings"
                      ? "bg-gray-50 border border-gray-200 text-gray-700"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <i className="ri-settings-line text-lg"></i>
                  <span className="font-medium">Settings</span>
                </button>
              </div>

              {/* Quick Stats */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-xs text-blue-600 font-medium">Total Vehicles</div>
                    <div className="text-lg font-bold text-blue-700">3</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-xs text-green-600 font-medium">Active</div>
                    <div className="text-lg font-bold text-green-700">3</div>
                  </div>
                </div>
              </div>

              {/* Settings */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Settings</h3>
                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors duration-200">
                  <i className="ri-settings-line text-lg"></i>
                  <span className="font-medium">Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors duration-200">
                  <i className="ri-user-line text-lg"></i>
                  <span className="font-medium">Profile</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors duration-200">
                  <i className="ri-logout-box-line text-lg"></i>
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="pt-20 pb-20 md:pb-6">
        {activeSection === "dashboard" && (
          <>
            {/* Stats Cards - Fixed Position */}
            <div className="fixed top-12 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200/50">
              <div className="flex gap-4 px-4 py-4 overflow-x-auto">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`${
                      stat.color
                    } text-white rounded-xl p-1.5 md:p-2 w-[72px] md:w-[96px] h-[60px] md:h-[70px] flex-shrink-0 text-center cursor-pointer transition-all duration-300 transform scale-60 md:scale-100 shadow-2xl border border-white/20 backdrop-blur-sm relative overflow-hidden ${
                      selectedFilter === stat.label
                        ? "scale-105 shadow-3xl ring-2 ring-white/40"
                        : "hover:scale-102 hover:shadow-3xl"
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${
                        stat.color.replace("bg-", "") === "blue-400"
                          ? "#60A5FA"
                          : stat.color.replace("bg-", "") === "orange-400"
                          ? "#FB923C"
                          : stat.color.replace("bg-", "") === "green-400"
                          ? "#4ADE80"
                          : stat.color.replace("bg-", "") === "yellow-400"
                          ? "#FACC15"
                          : stat.color.replace("bg-", "") === "red-400"
                          ? "#F87171"
                          : stat.color.replace("bg-", "") === "gray-400"
                          ? "#9CA3AF"
                          : stat.color.replace("bg-", "") === "purple-400"
                          ? "#A78BFA"
                          : stat.color.replace("bg-", "") === "slate-400"
                          ? "#94A3B8"
                          : "#60A5FA"
                      } 0%, 
                                                             ${
                                                               stat.color.replace(
                                                                 "bg-",
                                                                 ""
                                                               ) === "blue-400"
                                                                 ? "#3B82F6"
                                                                 : stat.color.replace(
                                                                     "bg-",
                                                                     ""
                                                                   ) ===
                                                                   "orange-400"
                                                                 ? "#F97316"
                                                                 : stat.color.replace(
                                                                     "bg-",
                                                                     ""
                                                                   ) ===
                                                                   "green-400"
                                                                 ? "#22C55E"
                                                                 : stat.color.replace(
                                                                     "bg-",
                                                                     ""
                                                                   ) ===
                                                                   "yellow-400"
                                                                 ? "#EAB308"
                                                                 : stat.color.replace(
                                                                     "bg-",
                                                                     ""
                                                                   ) ===
                                                                   "red-400"
                                                                 ? "#EF4444"
                                                                 : stat.color.replace(
                                                                     "bg-",
                                                                     ""
                                                                   ) ===
                                                                   "gray-400"
                                                                 ? "#6B7280"
                                                                 : stat.color.replace(
                                                                     "bg-",
                                                                     ""
                                                                   ) ===
                                                                   "purple-400"
                                                                 ? "#8B5CF6"
                                                                 : stat.color.replace(
                                                                     "bg-",
                                                                     ""
                                                                   ) ===
                                                                   "slate-400"
                                                                 ? "#64748B"
                                                                 : "#3B82F6"
                                                             } 100%)`,
                      boxShadow:
                        selectedFilter === stat.label
                          ? "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)"
                          : "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 0, 0, 0.1)",
                    }}
                    onClick={() => setSelectedFilter(stat.label)}
                  >
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
                    <div className="flex flex-col items-center justify-center h-full relative z-10">
                      <div className="text-base md:text-xl font-bold text-white drop-shadow-lg filter contrast-125">
                        {stat.count}
                      </div>
                      <div className="flex flex-col items-center gap-0 mt-0.5">
                        {stat.label === "All" && (
                          <i className="ri-car-line text-white text-xs drop-shadow-md"></i>
                        )}
                        {stat.label === "Overspeed" && (
                          <i className="ri-speed-line text-white text-xs drop-shadow-md"></i>
                        )}
                        {stat.label === "Running" && (
                          <i className="ri-play-circle-line text-white text-xs drop-shadow-md"></i>
                        )}
                        {stat.label === "Idle" && (
                          <i className="ri-time-line text-white text-xs drop-shadow-md"></i>
                        )}
                        {stat.label === "Stop" && (
                          <i className="ri-stop-circle-line text-white text-xs drop-shadow-md"></i>
                        )}
                        {stat.label === "Unreachable" && (
                          <i className="ri-wifi-off-line text-white text-xs drop-shadow-md"></i>
                        )}
                        {stat.label === "New" && (
                          <i className="ri-add-circle-line text-white text-xs drop-shadow-md"></i>
                        )}
                        {stat.label === "Inactive" && (
                          <i className="ri-pause-circle-line text-white text-xs drop-shadow-md"></i>
                        )}
                        <div className="text-xs font-semibold text-white leading-tight drop-shadow-lg text-center filter contrast-125">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicle List - Scrollable with top padding for fixed stats */}
            <div className="pt-16 px-4 space-y-2">
              {vehicles.map((vehicle, index) => (
                <div
                  key={index}
                  className="backdrop-blur-md bg-white/90 border border-white/60 rounded-lg p-2 md:p-3 shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)",
                  }}
                >
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
                          <div className="text-sm font-semibold text-gray-900">
                            {vehicle.id}
                          </div>
                          <div className="text-xs text-gray-600">
                            ({vehicle.model})
                          </div>
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
                          <span className="text-white text-xs font-medium">
                            {vehicle.batteryLevel}
                          </span>
                        </div>
                        {/* Signal Strength */}
                        <div className="flex flex-col gap-0.5">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1 h-0.5 ${
                                i < vehicle.signalStrength
                                  ? "bg-green-500"
                                  : "bg-gray-300"
                              } rounded-sm`}
                            ></div>
                          ))}
                        </div>
                        {/* Refresh Icon */}
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium">
                            {vehicle.batteryLevel}
                          </span>
                        </div>
                      </div>

                      {/* Roadmap Statistics */}
                      <div className="space-y-1.5 text-xs relative">
                        {/* Vertical connecting line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>

                        {/* Last Updated */}
                        <div className="flex items-center justify-between relative">
                          <div className="text-gray-500 text-left flex-1">
                            Last Updated
                          </div>
                          <div className="w-2 h-2 bg-purple-500 rounded-full relative z-10 mx-2"></div>
                          <div className="text-right flex-1">
                            <div className="text-gray-900">22/08/2025</div>
                            <div className="text-gray-900">15:52:25</div>
                          </div>
                        </div>

                        {/* Today km */}
                        <div className="flex items-center justify-between relative">
                          <div className="text-gray-500 text-left flex-1">
                            Today km
                          </div>
                          <div className="w-2 h-2 bg-pink-500 rounded-full relative z-10 mx-2"></div>
                          <div className="text-gray-900 text-right flex-1">
                            {vehicle.todayKm}
                          </div>
                        </div>

                        {/* Speed */}
                        <div className="flex items-center justify-between relative">
                          <div className="text-gray-500 text-left flex-1">
                            Speed
                          </div>
                          <div className="w-2 h-2 bg-green-500 rounded-full relative z-10 mx-2"></div>
                          <div className="text-right flex-1">
                            <div className="text-gray-900">{vehicle.speed}</div>
                          </div>
                        </div>

                        {/* Fuel Used */}
                        <div className="flex items-center justify-between relative">
                          <div className="text-gray-500 text-left flex-1">
                            Fuel Used
                          </div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full relative z-10 mx-2"></div>
                          <div className="text-right flex-1">
                            <div className="text-gray-900">
                              {vehicle.fuelUsed || "-"}
                            </div>
                          </div>
                        </div>

                        {/* Since */}
                        <div className="flex items-center justify-between relative">
                          <div className="text-gray-500 text-left flex-1">
                            Since
                          </div>
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
                        <span className="text-xs text-gray-600 leading-relaxed">
                          {vehicle.location}
                        </span>
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
                            <div className="text-sm font-semibold text-gray-900">
                              {vehicle.id}
                            </div>
                            <div className="text-xs text-gray-600">
                              ({vehicle.model})
                            </div>
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
                                className={`w-1 rounded-sm ${
                                  i < vehicle.signalStrength
                                    ? "bg-green-500"
                                    : "bg-gray-300"
                                }`}
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
                            <div className="text-gray-500 flex-1">
                              Last Updated
                            </div>
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
                              <div className="text-gray-900">
                                {vehicle.todayKm}
                              </div>
                            </div>
                          </div>

                          {/* Speed */}
                          <div className="flex items-center justify-between relative">
                            <div className="text-gray-500 flex-1">Speed</div>
                            <div className="w-2 h-2 bg-green-500 rounded-full relative z-10 mx-2"></div>
                            <div className="text-right flex-1">
                              <div className="text-gray-900">
                                {vehicle.speed}
                              </div>
                            </div>
                          </div>

                          {/* Fuel Used */}
                          <div className="flex items-center justify-between relative">
                            <div className="text-gray-500 flex-1">
                              Fuel Used
                            </div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full relative z-10 mx-2"></div>
                            <div className="text-right flex-1">
                              <div className="text-gray-900">
                                {vehicle.fuelUsed || "-"}
                              </div>
                            </div>
                          </div>

                          {/* Since */}
                          <div className="flex items-center justify-between relative">
                            <div className="text-gray-500 flex-1">Since</div>
                            <div className="w-2 h-2 bg-purple-500 rounded-full relative z-10 mx-2"></div>
                            <div className="text-right flex-1">
                              <div className="text-gray-900">
                                {vehicle.since}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Address at bottom - Mobile */}
                    <div className="mt-2 pt-1 border-t border-gray-100">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-1 flex-shrink-0"></div>
                        <span className="text-xs text-gray-600 leading-relaxed">
                          {vehicle.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeSection === "live-map" && (
          <div className="px-4">
            {/* Animated Background Particles for Live Map */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-30"></div>
              <div className="absolute top-40 right-30 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-40"></div>
              <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse opacity-35"></div>
              <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-purple-400 rounded-full animate-ping opacity-25"></div>
              <div className="absolute top-60 left-60 w-1 h-1 bg-red-400 rounded-full animate-bounce opacity-30"></div>
            </div>

            {/* Map Header */}
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-sm border border-white/60 mb-4 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-green-50/20 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                      <i className="ri-map-line text-white text-xl"></i>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Live Fleet Map
                    </h2>
                    <p className="text-sm text-gray-600">
                      Real-time vehicle tracking
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 px-3 py-1 rounded-full relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-green-700 text-sm font-medium relative z-10 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Live
                    </span>
                  </div>
                  <div className="bg-blue-50 px-3 py-1 rounded-full relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-blue-700 text-sm font-medium relative z-10 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      3 Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-sm border border-white/60 overflow-hidden relative group hover:shadow-xl transition-all duration-500">
              {/* Animated Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-green-50/10 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative h-96 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 overflow-hidden">
                {/* Animated Background Particles */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-40"></div>
                  <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce opacity-50"></div>
                  <div className="absolute bottom-8 left-8 w-1 h-1 bg-orange-400 rounded-full animate-pulse opacity-45"></div>
                  <div className="absolute bottom-4 right-4 w-2.5 h-2.5 bg-purple-400 rounded-full animate-ping opacity-35"></div>
                </div>

                {/* Realistic Map Background */}
                <div className="absolute inset-0">
                  {/* Animated Water Bodies */}
                  <div className="absolute top-1/4 right-1/4 w-24 h-16 bg-blue-300/40 rounded-full blur-sm animate-pulse"></div>
                  <div className="absolute bottom-1/4 left-1/6 w-20 h-12 bg-blue-300/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>

                  {/* Animated Roads Network */}
                  <div className="absolute top-1/3 left-0 right-0 h-1 bg-gray-400/60 transform rotate-12 animate-pulse"></div>
                  <div className="absolute top-2/3 left-0 right-0 h-1 bg-gray-400/60 transform -rotate-6 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute left-1/3 top-0 bottom-0 w-1 bg-gray-400/60 transform rotate-45 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <div className="absolute left-2/3 top-0 bottom-0 w-1 bg-gray-400/60 transform -rotate-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

                  {/* Animated Buildings/Areas */}
                  <div className="absolute top-1/6 left-1/6 w-8 h-6 bg-gray-500/40 rounded-sm hover:bg-gray-500/60 transition-colors duration-300 cursor-pointer"></div>
                  <div className="absolute top-1/6 right-1/4 w-6 h-8 bg-gray-500/50 rounded-sm hover:bg-gray-500/70 transition-colors duration-300 cursor-pointer"></div>
                  <div className="absolute bottom-1/4 right-1/6 w-10 h-7 bg-gray-500/30 rounded-sm hover:bg-gray-500/50 transition-colors duration-300 cursor-pointer"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-7 h-5 bg-gray-500/40 rounded-sm hover:bg-gray-500/60 transition-colors duration-300 cursor-pointer"></div>

                  {/* Animated Parks/Green Areas */}
                  <div className="absolute top-1/2 left-1/6 w-12 h-8 bg-green-400/30 rounded-full blur-sm animate-pulse"></div>
                  <div className="absolute bottom-1/6 right-1/3 w-10 h-6 bg-green-400/25 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>

                  {/* Enhanced Grid Pattern with Animation */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-20 gap-0.5 h-full">
                      {[...Array(400)].map((_, i) => (
                        <div 
                          key={i} 
                          className="bg-gray-400 rounded-sm hover:bg-blue-400 transition-colors duration-300 cursor-pointer"
                          style={{ 
                            animationDelay: `${(i % 20) * 0.1}s`,
                            animation: 'pulse 3s infinite'
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Animated Traffic Flow Lines */}
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-yellow-400/60 animate-pulse"></div>
                  <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-yellow-400/40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>

                {/* Fleet Vehicles on Map */}
                <div className="relative z-10 h-full">
                  {/* Vehicle 1 - Moving with realistic trail */}
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                    <div className="relative">
                      {/* Enhanced Movement Trail with Animation */}
                      <div className="absolute top-1/2 left-1/2 w-20 h-0.5 bg-gradient-to-r from-blue-400/60 to-transparent transform rotate-45 origin-left animate-pulse"></div>
                      <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-400/40 to-transparent transform rotate-45 origin-left translate-x-4 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="absolute top-1/2 left-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-400/20 to-transparent transform rotate-45 origin-left translate-x-8 animate-pulse" style={{ animationDelay: '0.4s' }}></div>

                      {/* Enhanced Vehicle Icon with Gradient and Effects */}
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-2xl border-4 border-white flex items-center justify-center animate-pulse hover:scale-110 transition-transform duration-300 group-hover:animate-bounce">
                        <i className="ri-car-line text-white text-lg"></i>
                      </div>
                      
                      {/* Multi-layer Ripple Effect */}
                      <div className="absolute inset-0 w-12 h-12 bg-blue-400 rounded-full animate-ping opacity-30"></div>
                      <div className="absolute inset-0 w-12 h-12 bg-blue-300 rounded-full animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute inset-0 w-12 h-12 bg-blue-200 rounded-full animate-ping opacity-10" style={{ animationDelay: '1s' }}></div>

                      {/* Speed Lines */}
                      <div className="absolute -right-3 top-1/2 w-6 h-0.5 bg-blue-400 animate-pulse"></div>
                      <div className="absolute -right-5 top-1/2 w-8 h-0.5 bg-blue-300 animate-pulse" style={{ animationDelay: '0.1s' }}></div>

                      {/* Enhanced Vehicle Info */}
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-black/95 to-gray-900/95 backdrop-blur-md text-white text-xs px-4 py-3 rounded-xl shadow-2xl border border-white/30 whitespace-nowrap hover:shadow-3xl transition-all duration-300">
                        <div className="font-bold flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          HARRIER
                        </div>
                        <div className="text-green-400 text-xs font-medium">
                          Moving • 45 km/h
                        </div>
                        <div className="text-gray-300 text-xs">
                          Last update: 2 min ago
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle 2 - Stopped */}
                  <div className="absolute top-1/2 right-1/3 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                    <div className="relative">
                      {/* Enhanced Vehicle Icon with Gradient */}
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-2xl border-4 border-white flex items-center justify-center hover:scale-110 transition-transform duration-300 group-hover:animate-pulse">
                        <i className="ri-car-line text-white text-lg"></i>
                      </div>
                      
                      {/* Stationary Ripple Effect */}
                      <div className="absolute inset-0 w-12 h-12 bg-red-400 rounded-full animate-ping opacity-40"></div>
                      <div className="absolute inset-0 w-12 h-12 bg-red-300 rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
                      
                      {/* Stationary Indicator */}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-600 rounded-full border-2 border-white"></div>

                      {/* Enhanced Vehicle Info */}
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-black/95 to-gray-900/95 backdrop-blur-md text-white text-xs px-4 py-3 rounded-xl shadow-2xl border border-white/30 whitespace-nowrap hover:shadow-3xl transition-all duration-300">
                        <div className="font-bold flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          ALPHARD
                        </div>
                        <div className="text-red-400 text-xs font-medium">
                          Stopped • 0 km/h
                        </div>
                        <div className="text-gray-300 text-xs">
                          Last update: 15 min ago
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle 3 - Idle */}
                  <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                    <div className="relative">
                      {/* Enhanced Vehicle Icon with Gradient */}
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full shadow-2xl border-4 border-white flex items-center justify-center hover:scale-110 transition-transform duration-300 group-hover:animate-bounce">
                        <i className="ri-car-line text-white text-lg"></i>
                      </div>
                      
                      {/* Idle Ripple Effect */}
                      <div className="absolute inset-0 w-12 h-12 bg-yellow-400 rounded-full animate-ping opacity-35"></div>
                      <div className="absolute inset-0 w-12 h-12 bg-yellow-300 rounded-full animate-ping opacity-25" style={{ animationDelay: '0.7s' }}></div>
                      <div className="absolute inset-0 w-12 h-12 bg-yellow-200 rounded-full animate-ping opacity-15" style={{ animationDelay: '1.4s' }}></div>
                      
                      {/* Idle Indicator */}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-600 rounded-full border-2 border-white animate-pulse"></div>

                      {/* Enhanced Vehicle Info */}
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-black/95 to-gray-900/95 backdrop-blur-md text-white text-xs px-4 py-3 rounded-xl shadow-2xl border border-white/30 whitespace-nowrap hover:shadow-3xl transition-all duration-300">
                        <div className="font-bold flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                          HARRIER
                        </div>
                        <div className="text-yellow-400 text-xs font-medium">
                          Idle • 0 km/h
                        </div>
                        <div className="text-gray-300 text-xs">
                          Last update: 5 min ago
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Map Controls */}
                  <div className="absolute top-4 right-4 flex flex-col gap-3">
                    <button className="w-14 h-14 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/60 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group cursor-pointer">
                      <i className="ri-zoom-in-line text-gray-700 text-xl group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300"></i>
                    </button>
                    <button className="w-14 h-14 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/60 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group cursor-pointer">
                      <i className="ri-zoom-out-line text-gray-700 text-xl group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300"></i>
                    </button>
                    <button className="w-14 h-14 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/60 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group cursor-pointer">
                      <i className="ri-crosshair-line text-gray-700 text-xl group-hover:text-green-600 group-hover:rotate-180 transition-all duration-500"></i>
                    </button>
                    <button className="w-14 h-14 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/60 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group cursor-pointer">
                      <i className="ri-fullscreen-line text-gray-700 text-xl group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300"></i>
                    </button>
                  </div>

                  {/* Enhanced Map Legend */}
                  <div className="absolute bottom-4 left-4 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-md rounded-xl p-5 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-500 group">
                    <div className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <i className="ri-map-pin-line text-blue-600"></i>
                      Legend
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 group/item hover:bg-blue-50/50 p-2 rounded-lg transition-colors duration-300">
                        <div className="relative">
                          <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg"></div>
                          <div className="absolute inset-0 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-30"></div>
                        </div>
                        <span className="text-xs font-medium text-gray-700 group-hover/item:text-blue-700 transition-colors duration-300">Moving</span>
                      </div>
                      <div className="flex items-center gap-3 group/item hover:bg-red-50/50 p-2 rounded-lg transition-colors duration-300">
                        <div className="relative">
                          <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg"></div>
                          <div className="absolute inset-0 w-4 h-4 bg-red-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                        <span className="text-xs font-medium text-gray-700 group-hover/item:text-red-700 transition-colors duration-300">Stopped</span>
                      </div>
                      <div className="flex items-center gap-3 group/item hover:bg-yellow-50/50 p-2 rounded-lg transition-colors duration-300">
                        <div className="relative">
                          <div className="w-4 h-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full shadow-lg"></div>
                          <div className="absolute inset-0 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
                        </div>
                        <span className="text-xs font-medium text-gray-700 group-hover/item:text-yellow-700 transition-colors duration-300">Idle</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Scale Indicator */}
                  <div className="absolute bottom-4 right-4 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-md rounded-lg p-3 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-500 group">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full"></div>
                        <div className="absolute inset-0 w-20 h-1 bg-gradient-to-r from-blue-500/30 to-blue-400/30 rounded-full animate-pulse"></div>
                      </div>
                      <span className="text-xs text-gray-700 font-bold group-hover:text-blue-700 transition-colors duration-300">1 km</span>
                    </div>
                  </div>

                  {/* Enhanced Compass */}
                  <div className="absolute top-4 left-4 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-md rounded-full p-4 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-500 group cursor-pointer">
                    <div className="w-10 h-10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <i className="ri-compass-3-line text-gray-700 text-xl group-hover:text-blue-600 transition-colors duration-300"></i>
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
                    <div className="text-sm font-medium text-blue-900">
                      Active Vehicles
                    </div>
                    <div className="text-2xl font-bold text-blue-700">3</div>
                  </div>
                  <i className="ri-car-line text-2xl text-blue-500"></i>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200/50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-green-900">
                      Total Distance
                    </div>
                    <div className="text-2xl font-bold text-green-700">
                      156 km
                    </div>
                  </div>
                  <i className="ri-road-map-line text-2xl text-green-500"></i>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "fuel" && (
          <div className="px-4 space-y-6">
            {/* Animated Background Particles */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-10 left-10 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-20"></div>
              <div className="absolute top-20 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-30"></div>
              <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce opacity-25"></div>
              <div className="absolute bottom-10 right-10 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-20"></div>
            </div>

            {/* Fuel Overview Dashboard */}
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-sm border border-white/60 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-blue-50/20 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                      <i className="ri-gas-station-line text-white text-xl"></i>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Advanced Fuel Management</h2>
                    <p className="text-sm text-gray-600">Real-time fuel tracking & analytics</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-700 font-medium">Live Monitoring</span>
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 relative z-10">
                <div 
                  onClick={() => alert('View detailed consumption analytics - Feature coming soon!')}
                  className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200 relative overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center justify-between mb-2 relative z-10">
                    <div className="relative">
                      <i className="ri-gas-station-line text-2xl text-orange-500 group-hover:animate-bounce"></i>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-60"></div>
                    </div>
                    <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-full animate-pulse">Today</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-700 group-hover:text-orange-800 transition-colors duration-300">4.83 L</div>
                  <div className="text-sm text-orange-600">Total Consumption</div>
                  <div className="text-xs text-orange-500 mt-1 flex items-center gap-1">
                    <i className="ri-arrow-up-line text-green-500"></i>
                    +12% vs yesterday
                  </div>
                </div>

                <div 
                  onClick={() => alert('View efficiency analytics - Feature coming soon!')}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 relative overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center justify-between mb-2 relative z-10">
                    <div className="relative">
                      <i className="ri-speed-line text-2xl text-blue-500 group-hover:animate-spin"></i>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
                    </div>
                    <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full animate-pulse">Avg</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-700 group-hover:text-blue-800 transition-colors duration-300">0.8 L/100km</div>
                  <div className="text-sm text-blue-600">Efficiency Rate</div>
                  <div className="text-xs text-blue-500 mt-1 flex items-center gap-1">
                    <i className="ri-arrow-down-line text-red-500"></i>
                    -5% vs last week
                  </div>
                </div>

                <div 
                  onClick={() => alert('View performance score details - Feature coming soon!')}
                  className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200 relative overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center justify-between mb-2 relative z-10">
                    <div className="relative">
                      <i className="ri-trophy-line text-2xl text-green-500 group-hover:animate-bounce"></i>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
                    </div>
                    <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full animate-pulse">Best</span>
                  </div>
                  <div className="text-2xl font-bold text-green-700 group-hover:text-green-800 transition-colors duration-300">85%</div>
                  <div className="text-sm text-green-600">Efficiency Score</div>
                  <div className="text-xs text-green-500 mt-1 flex items-center gap-1">
                    <i className="ri-star-fill text-yellow-500"></i>
                    Excellent rating
                  </div>
                </div>

                <div 
                  onClick={() => alert('View cost analysis details - Feature coming soon!')}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200 relative overflow-hidden group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center justify-between mb-2 relative z-10">
                    <div className="relative">
                      <i className="ri-money-dollar-circle-line text-2xl text-purple-500 group-hover:animate-pulse"></i>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
                    </div>
                    <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full animate-pulse">Cost</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-700 group-hover:text-purple-800 transition-colors duration-300">$89.50</div>
                  <div className="text-sm text-purple-600">Daily Cost</div>
                  <div className="text-xs text-purple-500 mt-1 flex items-center gap-1">
                    <i className="ri-arrow-down-line text-green-500"></i>
                    -8% vs budget
                  </div>
                </div>
              </div>

              {/* Fuel Consumption Chart */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-6 relative overflow-hidden group hover:shadow-lg transition-all duration-500">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 left-4 w-8 h-8 border border-orange-400 rounded-full animate-spin"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border border-blue-400 rounded-full animate-ping"></div>
                </div>
                
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg">
                      <i className="ri-bar-chart-line text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">7-Day Fuel Consumption</h3>
                      <p className="text-sm text-gray-600">Interactive consumption analytics</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-orange-100 px-3 py-2 rounded-full">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-orange-700 font-medium">Consumption (L)</span>
                  </div>
                </div>
                
                <div className="h-40 flex items-end justify-between gap-3 relative z-10">
                  {[3.2, 4.1, 2.8, 5.2, 4.7, 3.9, 4.8].map((value, index) => (
                    <div key={index} className="flex flex-col items-center gap-3 group cursor-pointer">
                      <div className="relative">
                        <div 
                          className="bg-gradient-to-t from-orange-400 via-orange-500 to-orange-600 rounded-t-lg w-10 transition-all duration-700 hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 hover:scale-110 hover:shadow-lg group-hover:animate-pulse"
                          style={{ height: `${(value / 6) * 120}px` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-t-lg"></div>
                        </div>
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-bold text-orange-700">{value}L</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <span className="text-xs text-gray-600 font-medium">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span>
                        <div className="text-xs font-bold text-gray-800 mt-1 group-hover:text-orange-600 transition-colors duration-300">{value}L</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Chart Grid Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                  <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                </div>
              </div>

              {/* Vehicle Fuel Performance */}
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                    <i className="ri-car-line text-white text-sm"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Vehicle Fuel Performance</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { id: '0328-AW-05', model: 'HARRIER', consumption: '0.72L', efficiency: '92%', cost: '$12.50', status: 'excellent' },
                    { id: '0524-AW-05', model: 'ALPHARD', consumption: '1.75L', efficiency: '78%', cost: '$28.75', status: 'good' },
                    { id: '8086-AT-05', model: 'HARRIER', consumption: '2.36L', efficiency: '65%', cost: '$38.90', status: 'needs_attention' }
                  ].map((vehicle, index) => (
                    <div 
                      key={index} 
                      onClick={() => alert(`View detailed fuel analytics for ${vehicle.id} - Feature coming soon!`)}
                      className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 cursor-pointer group relative overflow-hidden"
                    >
                      {/* Animated Background */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        vehicle.status === 'excellent' ? 'bg-gradient-to-r from-green-50/50 to-transparent' :
                        vehicle.status === 'good' ? 'bg-gradient-to-r from-blue-50/50 to-transparent' :
                        'bg-gradient-to-r from-orange-50/50 to-transparent'
                      }`}></div>
                      
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="w-16 h-12 rounded-xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <img
                                src={
                                  vehicle.id === '0328-AW-05' ? "https://res.cloudinary.com/dknafpppp/image/upload/v1758730781/istockphoto-468686480-612x612_qlim26.jpg" :
                                  vehicle.id === '0524-AW-05' ? "https://res.cloudinary.com/dknafpppp/image/upload/v1758730519/ChatGPT_Image_Sep_24_2025_11_14_08_PM_hmcyq1.png" :
                                  "https://res.cloudinary.com/dknafpppp/image/upload/v1758730781/istockphoto-468686480-612x612_qlim26.jpg"
                                }
                                alt={`${vehicle.model} ${vehicle.id}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full animate-pulse ${
                              vehicle.status === 'excellent' ? 'bg-green-500' :
                              vehicle.status === 'good' ? 'bg-blue-500' : 'bg-orange-500'
                            }`}></div>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{vehicle.id}</div>
                            <div className="text-sm text-gray-600">{vehicle.model}</div>
                          </div>
                        </div>
                        <div className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-105 ${
                          vehicle.status === 'excellent' ? 'bg-green-100 text-green-800 group-hover:bg-green-200' :
                          vehicle.status === 'good' ? 'bg-blue-100 text-blue-800 group-hover:bg-blue-200' :
                          'bg-orange-100 text-orange-800 group-hover:bg-orange-200'
                        }`}>
                          {vehicle.status === 'excellent' ? 'Excellent' :
                           vehicle.status === 'good' ? 'Good' : 'Needs Attention'}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                        <div className="text-center p-3 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                          <div className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{vehicle.consumption}</div>
                          <div className="text-xs text-gray-600">Consumption</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                          <div className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{vehicle.efficiency}</div>
                          <div className="text-xs text-gray-600">Efficiency</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                          <div className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">{vehicle.cost}</div>
                          <div className="text-xs text-gray-600">Cost</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                          <div className="w-16 h-3 bg-gray-200 rounded-full mx-auto relative overflow-hidden">
                            <div 
                              className={`h-3 rounded-full transition-all duration-1000 group-hover:animate-pulse ${
                                vehicle.status === 'excellent' ? 'bg-gradient-to-r from-green-400 to-green-500' :
                                vehicle.status === 'good' ? 'bg-gradient-to-r from-blue-400 to-blue-500' : 
                                'bg-gradient-to-r from-orange-400 to-orange-500'
                              }`}
                              style={{ width: vehicle.efficiency }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 rounded-full"></div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-600 mt-2">Performance</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fuel Analytics & Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Fuel Cost Analysis */}
              <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-sm border border-white/60 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2 relative z-10">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-line-chart-line text-white text-sm"></i>
                  </div>
                  Cost Analysis
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <div className="font-medium text-blue-900">Monthly Budget</div>
                      <div className="text-sm text-blue-600">$2,500 allocated</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-700">$1,890</div>
                      <div className="text-xs text-blue-500">Used (76%)</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Fuel Cost Trend</span>
                      <span className="text-sm font-medium text-green-600">↓ 8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-700">$610</div>
                      <div className="text-xs text-green-600">Remaining</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="text-lg font-bold text-orange-700">$89.50</div>
                      <div className="text-xs text-orange-600">Daily Avg</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fuel Efficiency Insights */}
              <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-sm border border-white/60">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <i className="ri-lightbulb-line text-yellow-500"></i>
                  Efficiency Insights
                </h3>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-start gap-2">
                      <i className="ri-check-line text-green-600 mt-0.5"></i>
                      <div>
                        <div className="font-medium text-green-900">Excellent Performance</div>
                        <div className="text-sm text-green-700">HARRIER (0328-AW-05) shows 92% efficiency</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <div className="flex items-start gap-2">
                      <i className="ri-alert-line text-orange-600 mt-0.5"></i>
                      <div>
                        <div className="font-medium text-orange-900">Maintenance Alert</div>
                        <div className="text-sm text-orange-700">HARRIER (8086-AT-05) efficiency dropped to 65%</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-start gap-2">
                      <i className="ri-trophy-line text-blue-600 mt-0.5"></i>
                      <div>
                        <div className="font-medium text-blue-900">Best Practice</div>
                        <div className="text-sm text-blue-700">Morning routes show 15% better efficiency</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fuel Alerts & Notifications */}
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-sm border border-white/60">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <i className="ri-notification-3-line text-red-500"></i>
                Fuel Alerts & Recommendations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <i className="ri-alert-line text-red-600 text-sm"></i>
                    </div>
                    <div>
                      <div className="font-medium text-red-900">Low Fuel Alert</div>
                      <div className="text-sm text-red-700">Vehicle 8086-AT-05 fuel level critical</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <i className="ri-tools-line text-yellow-600 text-sm"></i>
                    </div>
                    <div>
                      <div className="font-medium text-yellow-900">Maintenance Due</div>
                      <div className="text-sm text-yellow-700">ALPHARD needs fuel filter replacement</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-lightbulb-line text-green-600 text-sm"></i>
                    </div>
                    <div>
                      <div className="font-medium text-green-900">Optimization Tip</div>
                      <div className="text-sm text-green-700">Consider route optimization to save 12% fuel</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="ri-trophy-line text-blue-600 text-sm"></i>
                    </div>
                    <div>
                      <div className="font-medium text-blue-900">Achievement</div>
                      <div className="text-sm text-blue-700">Monthly fuel savings target achieved!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-sm border border-white/60 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-green-50/10 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-flashlight-line text-white text-sm"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Quick Actions</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                <button 
                  onClick={() => alert('Add Fuel Entry - Feature coming soon!')}
                  className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-blue-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <i className="ri-add-line text-2xl text-white"></i>
                  </div>
                  <span className="font-semibold text-blue-800 group-hover:text-blue-900 transition-colors duration-300">Add Fuel Entry</span>
                  <span className="text-xs text-blue-600 text-center">Log new fuel consumption</span>
                </button>
                
                <button 
                  onClick={() => alert('Export Report - Feature coming soon!')}
                  className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-green-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <i className="ri-download-line text-2xl text-white"></i>
                  </div>
                  <span className="font-semibold text-green-800 group-hover:text-green-900 transition-colors duration-300">Export Report</span>
                  <span className="text-xs text-green-600 text-center">Download fuel analytics</span>
                </button>
                
                <button 
                  onClick={() => alert('Fuel Settings - Feature coming soon!')}
                  className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-purple-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <i className="ri-settings-3-line text-2xl text-white"></i>
                  </div>
                  <span className="font-semibold text-purple-800 group-hover:text-purple-900 transition-colors duration-300">Fuel Settings</span>
                  <span className="text-xs text-purple-600 text-center">Configure fuel preferences</span>
                </button>
                
                <button 
                  onClick={() => alert('Set Alerts - Feature coming soon!')}
                  className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:from-orange-100 hover:to-orange-200 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-orange-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <i className="ri-alarm-line text-2xl text-white"></i>
                  </div>
                  <span className="font-semibold text-orange-800 group-hover:text-orange-900 transition-colors duration-300">Set Alerts</span>
                  <span className="text-xs text-orange-600 text-center">Configure fuel notifications</span>
                </button>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-sm border border-white/60 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-tools-line text-white text-sm"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Advanced Actions</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                <button 
                  onClick={() => alert('Fuel Analytics Dashboard - Feature coming soon!')}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl hover:from-indigo-100 hover:to-indigo-200 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-indigo-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-dashboard-3-line text-white text-lg"></i>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-indigo-800 group-hover:text-indigo-900 transition-colors duration-300">Analytics Dashboard</div>
                    <div className="text-xs text-indigo-600">View detailed fuel analytics</div>
                  </div>
                </button>
                
                <button 
                  onClick={() => alert('Fuel Optimization - Feature coming soon!')}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl hover:from-emerald-100 hover:to-emerald-200 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-emerald-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-optimize-line text-white text-lg"></i>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-emerald-800 group-hover:text-emerald-900 transition-colors duration-300">Optimize Routes</div>
                    <div className="text-xs text-emerald-600">Improve fuel efficiency</div>
                  </div>
                </button>
                
                <button 
                  onClick={() => alert('Fuel Maintenance - Feature coming soon!')}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-rose-50 to-rose-100 rounded-xl hover:from-rose-100 hover:to-rose-200 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-rose-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-tools-line text-white text-lg"></i>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-rose-800 group-hover:text-rose-900 transition-colors duration-300">Maintenance</div>
                    <div className="text-xs text-rose-600">Schedule fuel system checks</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeSection === "reports" && (
          <div className="px-4">
            {/* Animated Background Particles for Reports */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-20 left-20 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-30"></div>
              <div className="absolute top-40 right-30 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-40"></div>
              <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse opacity-35"></div>
              <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-orange-400 rounded-full animate-ping opacity-25"></div>
              <div className="absolute top-60 left-60 w-1 h-1 bg-indigo-400 rounded-full animate-bounce opacity-30"></div>
            </div>

            {/* Enhanced Reports Header */}
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-sm border border-white/60 mb-6 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                      <i className="ri-bar-chart-line text-white text-xl"></i>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Reports & Analytics
                    </h2>
                    <p className="text-sm text-gray-600">
                      Comprehensive fleet insights and performance metrics
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 px-3 py-1 rounded-full relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-green-700 text-sm font-medium relative z-10 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Live Data
                    </span>
                  </div>
                  <div className="bg-blue-50 px-3 py-1 rounded-full relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-blue-700 text-sm font-medium relative z-10 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      Real-time
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Analytics Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Key Metrics Cards */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  onClick={() => alert('View detailed distance analytics - Feature coming soon!')}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 relative overflow-hidden group hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="relative">
                      <i className="ri-road-map-line text-3xl text-purple-500 group-hover:animate-bounce"></i>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-60"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-purple-700">Monthly Distance</div>
                      <div className="text-3xl font-bold text-purple-800">1,247 km</div>
                      <div className="text-xs text-purple-600 flex items-center gap-1">
                        <i className="ri-arrow-up-line text-green-500"></i>
                        +12% vs last month
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2 relative z-10">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full animate-pulse" style={{ width: "85%" }}></div>
                  </div>
                </div>

                <div 
                  onClick={() => alert('View detailed fuel cost analytics - Feature coming soon!')}
                  className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200 relative overflow-hidden group hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="relative">
                      <i className="ri-money-dollar-circle-line text-3xl text-indigo-500 group-hover:animate-pulse"></i>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-400 rounded-full animate-ping opacity-60"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-indigo-700">Fuel Cost</div>
                      <div className="text-3xl font-bold text-indigo-800">$89.50</div>
                      <div className="text-xs text-indigo-600 flex items-center gap-1">
                        <i className="ri-arrow-down-line text-green-500"></i>
                        -5% vs last month
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-indigo-200 rounded-full h-2 relative z-10">
                    <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-2 rounded-full animate-pulse" style={{ width: "72%" }}></div>
                  </div>
                </div>

                <div 
                  onClick={() => alert('View efficiency analytics - Feature coming soon!')}
                  className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 relative overflow-hidden group hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="relative">
                      <i className="ri-speed-line text-3xl text-green-500 group-hover:animate-spin"></i>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-60"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-700">Efficiency Rate</div>
                      <div className="text-3xl font-bold text-green-800">92.5%</div>
                      <div className="text-xs text-green-600 flex items-center gap-1">
                        <i className="ri-arrow-up-line text-green-500"></i>
                        +8% vs last month
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-2 relative z-10">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full animate-pulse" style={{ width: "92%" }}></div>
                  </div>
                </div>

                <div 
                  onClick={() => alert('View maintenance analytics - Feature coming soon!')}
                  className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 relative overflow-hidden group hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="relative">
                      <i className="ri-tools-line text-3xl text-orange-500 group-hover:animate-bounce"></i>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-ping opacity-60"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-orange-700">Maintenance</div>
                      <div className="text-3xl font-bold text-orange-800">78%</div>
                      <div className="text-xs text-orange-600 flex items-center gap-1">
                        <i className="ri-arrow-down-line text-red-500"></i>
                        -3% vs last month
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-orange-200 rounded-full h-2 relative z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full animate-pulse" style={{ width: "78%" }}></div>
                  </div>
                </div>
              </div>

              {/* Performance Overview */}
              <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/60 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-dashboard-3-line text-white text-sm"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Performance Overview</h3>
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between group/item hover:bg-blue-50/50 p-3 rounded-lg transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gradient-to-br from-green-500 to-green-600 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Efficiency Score</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full animate-pulse" style={{ width: "85%" }}></div>
                      </div>
                      <span className="text-sm font-bold text-gray-900">85%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between group/item hover:bg-blue-50/50 p-3 rounded-lg transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Safety Score</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full animate-pulse" style={{ width: "92%" }}></div>
                      </div>
                      <span className="text-sm font-bold text-gray-900">92%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between group/item hover:bg-blue-50/50 p-3 rounded-lg transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Maintenance Score</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full animate-pulse" style={{ width: "78%" }}></div>
                      </div>
                      <span className="text-sm font-bold text-gray-900">78%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Analytics Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Fleet Performance Chart */}
              <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/60 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 to-blue-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-line-chart-line text-white text-sm"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Fleet Performance Trend</h3>
                </div>

                <div className="relative z-10">
                  <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 relative overflow-hidden">
                    {/* Animated Chart Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-blue-100/30 opacity-50"></div>
                    
                    {/* Simulated Chart Lines */}
                    <div className="relative h-full">
                      <div className="absolute bottom-4 left-4 w-full h-32 border-l-2 border-b-2 border-gray-300"></div>
                      
                      {/* Performance Line */}
                      <div className="absolute bottom-4 left-4 w-full h-32">
                        <svg className="w-full h-full" viewBox="0 0 200 100">
                          <path
                            d="M 10 80 Q 50 60 90 40 T 170 20"
                            stroke="url(#gradient1)"
                            strokeWidth="3"
                            fill="none"
                            className="animate-pulse"
                          />
                          <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#10b981" />
                              <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      
                      {/* Data Points */}
                      <div className="absolute bottom-4 left-4 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                      <div className="absolute bottom-8 left-12 w-3 h-3 bg-blue-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-12 left-20 w-3 h-3 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">92%</div>
                      <div className="text-xs text-green-700">Current</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">88%</div>
                      <div className="text-xs text-blue-700">Average</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">95%</div>
                      <div className="text-xs text-purple-700">Peak</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vehicle Status Distribution */}
              <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/60 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-pink-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-pie-chart-line text-white text-sm"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Vehicle Status Distribution</h3>
                </div>

                <div className="relative z-10">
                  <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 relative overflow-hidden">
                    {/* Animated Pie Chart Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-pink-100/30 opacity-50"></div>
                    
                    {/* Simulated Pie Chart */}
                    <div className="relative h-full flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border-8 border-green-200 relative animate-spin" style={{ animationDuration: '10s' }}>
                        <div className="absolute inset-0 rounded-full border-8 border-blue-200 transform rotate-45"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-yellow-200 transform rotate-90"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-red-200 transform rotate-135"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-700">Active (65%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span className="text-sm text-gray-700">Idle (25%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <span className="text-sm text-gray-700">Maintenance (8%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                      <span className="text-sm text-gray-700">Offline (2%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/60 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-green-50/10 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-download-line text-white text-sm"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Export & Actions</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                <button 
                  onClick={() => alert('Export PDF Report - Feature coming soon!')}
                  className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl hover:from-red-100 hover:to-red-200 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-red-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <i className="ri-file-pdf-line text-2xl text-white"></i>
                  </div>
                  <span className="font-semibold text-red-800 group-hover:text-red-900 transition-colors duration-300">Export PDF</span>
                  <span className="text-xs text-red-600 text-center">Download report</span>
                </button>
                
                <button 
                  onClick={() => alert('Export Excel Report - Feature coming soon!')}
                  className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-green-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <i className="ri-file-excel-line text-2xl text-white"></i>
                  </div>
                  <span className="font-semibold text-green-800 group-hover:text-green-900 transition-colors duration-300">Export Excel</span>
                  <span className="text-xs text-green-600 text-center">Download data</span>
                </button>
                
                <button 
                  onClick={() => alert('Schedule Report - Feature coming soon!')}
                  className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-blue-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <i className="ri-calendar-line text-2xl text-white"></i>
                  </div>
                  <span className="font-semibold text-blue-800 group-hover:text-blue-900 transition-colors duration-300">Schedule</span>
                  <span className="text-xs text-blue-600 text-center">Auto reports</span>
                </button>
                
                <button 
                  onClick={() => alert('Share Report - Feature coming soon!')}
                  className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group border border-purple-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <i className="ri-share-line text-2xl text-white"></i>
                  </div>
                  <span className="font-semibold text-purple-800 group-hover:text-purple-900 transition-colors duration-300">Share</span>
                  <span className="text-xs text-purple-600 text-center">Send report</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeSection === "geo-fencing" && (
          <div className="px-4">
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-sm border border-white/60">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Geo Fencing
              </h2>
              <div className="space-y-4">
                {/* Active Fences */}
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-sm font-medium text-purple-900">
                        Active Geo Fences
                      </div>
                      <div className="text-2xl font-bold text-purple-600">3</div>
                    </div>
                    <img
                      src="https://res.cloudinary.com/dknafpppp/image/upload/v1759126547/images_2_otm4cw.png"
                      alt="Geo Fencing"
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="text-xs text-purple-500">
                    Monitoring vehicle boundaries
                  </div>
                </div>

                {/* Fence List */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-gray-700">Fence Zones</h3>
                  
                  {/* Fence 1 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                          <div className="font-medium text-gray-900">Home Base</div>
                          <div className="text-sm text-gray-600">500m radius</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Active</span>
                        <i className="ri-settings-3-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>

                  {/* Fence 2 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div>
                          <div className="font-medium text-gray-900">Work Zone</div>
                          <div className="text-sm text-gray-600">1km radius</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Active</span>
                        <i className="ri-settings-3-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>

                  {/* Fence 3 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <div>
                          <div className="font-medium text-gray-900">Restricted Area</div>
                          <div className="text-sm text-gray-600">2km radius</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Active</span>
                        <i className="ri-settings-3-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Alerts */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-900 mb-3">
                    Recent Geo Fence Alerts
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">
                        Vehicle 0328-AW-05 entered Restricted Area
                      </span>
                      <span className="text-xs text-gray-500 ml-auto">2 min ago</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">
                        Vehicle 0524-AW-05 left Home Base
                      </span>
                      <span className="text-xs text-gray-500 ml-auto">15 min ago</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">
                        Vehicle 8086-AT-05 entered Work Zone
                      </span>
                      <span className="text-xs text-gray-500 ml-auto">1 hour ago</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-purple-500 text-white p-3 rounded-lg font-medium hover:bg-purple-600 transition-colors duration-200">
                    <i className="ri-add-line mr-2"></i>
                    Add Fence
                  </button>
                  <button className="bg-gray-100 text-gray-700 p-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
                    <i className="ri-settings-line mr-2"></i>
                    Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "profile" && (
          <div className="px-4">
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-sm border border-white/60">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Profile
              </h2>
              
              <div className="space-y-6">
                {/* Profile Header */}
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl">
                      <img
                        src="https://res.cloudinary.com/dknafpppp/image/upload/v1759126806/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw_ce3lva.webp"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 transition-colors duration-200">
                      <i className="ri-camera-line text-sm"></i>
                    </button>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mt-4">John Doe</h3>
                  <p className="text-gray-600">Fleet Manager</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Online</span>
                  </div>
                </div>

                {/* Profile Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">3</div>
                    <div className="text-sm text-blue-800">Vehicles</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">156</div>
                    <div className="text-sm text-green-800">Total KM</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">24</div>
                    <div className="text-sm text-purple-800">Days Active</div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <i className="ri-user-settings-line text-blue-500"></i>
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        defaultValue="John Doe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        defaultValue="john.doe@fleet.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        defaultValue="+1 (555) 123-4567"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                      <input 
                        type="text" 
                        defaultValue="Fleet Operations"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Employee ID</label>
                      <input 
                        type="text" 
                        defaultValue="EMP-2024-001"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Join Date</label>
                      <input 
                        type="date" 
                        defaultValue="2024-01-15"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferences */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <i className="ri-heart-line text-red-500"></i>
                    Preferences
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Email Notifications</div>
                        <div className="text-sm text-gray-600">Receive updates via email</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">SMS Alerts</div>
                        <div className="text-sm text-gray-600">Critical alerts via SMS</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Dark Mode</div>
                        <div className="text-sm text-gray-600">Use dark theme interface</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <i className="ri-time-line text-green-500"></i>
                    Recent Activity
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <i className="ri-car-line text-blue-600 text-sm"></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Vehicle 0328-AW-05 updated</div>
                        <div className="text-xs text-gray-600">2 minutes ago</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <i className="ri-map-pin-line text-green-600 text-sm"></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Geo fence alert triggered</div>
                        <div className="text-xs text-gray-600">15 minutes ago</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <i className="ri-file-chart-line text-purple-600 text-sm"></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Monthly report generated</div>
                        <div className="text-xs text-gray-600">1 hour ago</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Account Actions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <i className="ri-shield-check-line text-orange-500"></i>
                    Account Actions
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                      <i className="ri-key-line text-blue-600"></i>
                      <span className="font-medium text-blue-800">Change Password</span>
                    </button>
                    
                    <button className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
                      <i className="ri-download-line text-green-600"></i>
                      <span className="font-medium text-green-800">Export Data</span>
                    </button>
                    
                    <button className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                      <i className="ri-notification-3-line text-purple-600"></i>
                      <span className="font-medium text-purple-800">Notification Settings</span>
                    </button>
                    
                    <button className="flex items-center gap-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-200">
                      <i className="ri-logout-box-line text-red-600"></i>
                      <span className="font-medium text-red-800">Sign Out</span>
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                    <i className="ri-save-line"></i>
                    Save Changes
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2">
                    <i className="ri-refresh-line"></i>
                    Reset Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "settings" && (
          <div className="px-4">
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-sm border border-white/60">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Settings
              </h2>
              
              <div className="space-y-6">
                {/* Profile Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <i className="ri-user-settings-line text-blue-500"></i>
                    Profile Settings
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        defaultValue="John Doe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        defaultValue="john.doe@fleet.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        defaultValue="+1 (555) 123-4567"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Fleet Manager</option>
                        <option>Dispatcher</option>
                        <option>Administrator</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Notification Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <i className="ri-notification-line text-green-500"></i>
                    Notifications
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Email Notifications</div>
                        <div className="text-sm text-gray-600">Receive alerts via email</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">SMS Alerts</div>
                        <div className="text-sm text-gray-600">Critical alerts via SMS</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Push Notifications</div>
                        <div className="text-sm text-gray-600">Real-time browser notifications</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Fleet Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <i className="ri-car-line text-purple-500"></i>
                    Fleet Configuration
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Update Interval</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>30 seconds</option>
                        <option>1 minute</option>
                        <option>5 minutes</option>
                        <option>15 minutes</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Speed Limit Alert</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>80 km/h</option>
                        <option>100 km/h</option>
                        <option>120 km/h</option>
                        <option>No limit</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Idle Timeout</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>5 minutes</option>
                        <option>15 minutes</option>
                        <option>30 minutes</option>
                        <option>1 hour</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Alert Threshold</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>10%</option>
                        <option>20%</option>
                        <option>25%</option>
                        <option>30%</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Map Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <i className="ri-map-line text-orange-500"></i>
                    Map & Display
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Show Traffic</div>
                        <div className="text-sm text-gray-600">Display traffic information on map</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Show Weather</div>
                        <div className="text-sm text-gray-600">Display weather conditions</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Dark Mode</div>
                        <div className="text-sm text-gray-600">Use dark theme interface</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Security Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <i className="ri-shield-check-line text-red-500"></i>
                    Security & Privacy
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Two-Factor Authentication</div>
                        <div className="text-sm text-gray-600">Add extra security to your account</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Data Encryption</div>
                        <div className="text-sm text-gray-600">Encrypt all fleet data</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2">
                    <i className="ri-save-line"></i>
                    Save Changes
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center gap-2">
                    <i className="ri-refresh-line"></i>
                    Reset to Default
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Footer Navigation */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 bg-violet-50/30 backdrop-blur-xl border-t border-violet-200/20 shadow-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(237, 233, 254, 0.3) 0%, rgba(221, 214, 254, 0.2) 100%)",
        }}
      >
        <div className="flex items-center justify-around py-3 px-2">
          {/* Dashboard */}
          <div
            className={`flex flex-col items-center py-3 px-4 rounded-2xl cursor-pointer active:scale-95 transition-all duration-200 ${
              activeSection === "dashboard"
                ? "border border-green-200/30 shadow-lg bg-gradient-to-br from-green-50 to-green-100/50"
                : "hover:bg-gray-50/80 hover:scale-105"
            }`}
            onClick={() => setActiveSection("dashboard")}
          >
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1755942313/dashboard_16597209_vlmpy9.png"
                alt="Dashboard"
                className={`w-6 h-6 mb-2 transition-all duration-200 ${
                  activeSection === "dashboard"
                    ? "scale-110"
                    : "group-hover:scale-110"
                }`}
              />
              {activeSection === "dashboard" && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              )}
            </div>
            <span
              className={`text-xs font-semibold tracking-wide transition-colors duration-200 ${
                activeSection === "dashboard"
                  ? "text-green-700"
                  : "text-gray-600"
              }`}
            >
              Dashboard
            </span>
          </div>

          {/* Live Map */}
          <div
            className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 group cursor-pointer active:scale-95 ${
              activeSection === "live-map"
                ? "border border-blue-200/30 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100/50"
                : "hover:bg-gray-50/80 hover:scale-105"
            }`}
            onClick={() => setActiveSection("live-map")}
          >
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1755942314/gps_723176_xx1iew.png"
                alt="Live Map"
                className={`w-6 h-6 mb-2 transition-transform duration-300 ${
                  activeSection === "live-map"
                    ? "scale-110"
                    : "group-hover:scale-110"
                }`}
              />
              {activeSection === "live-map" && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              )}
              <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
            <span
              className={`text-xs font-medium transition-colors duration-300 ${
                activeSection === "live-map"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 group-hover:text-blue-600"
              }`}
            >
              Live Map
            </span>
          </div>

          {/* Fuel */}
          <div
            className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 group cursor-pointer active:scale-95 ${
              activeSection === "fuel"
                ? "border border-orange-200/30 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100/50"
                : "hover:bg-gray-50/80 hover:scale-105"
            }`}
            onClick={() => setActiveSection("fuel")}
          >
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1755942314/petrol_2311296_m3cncg.png"
                alt="Fuel"
                className={`w-6 h-6 mb-2 transition-transform duration-300 ${
                  activeSection === "fuel"
                    ? "scale-110"
                    : "group-hover:scale-110"
                }`}
              />
              {activeSection === "fuel" && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              )}
              <div className="absolute inset-0 bg-orange-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
            <span
              className={`text-xs font-medium transition-colors duration-300 ${
                activeSection === "fuel"
                  ? "text-orange-600 font-semibold"
                  : "text-gray-600 group-hover:text-orange-600"
              }`}
            >
              Fuel
            </span>
          </div>

          {/* Reports */}
          <div
            className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 group cursor-pointer active:scale-95 ${
              activeSection === "reports"
                ? "border border-green-200/30 shadow-lg bg-gradient-to-br from-green-50 to-green-100/50"
                : "hover:bg-gray-50/80 hover:scale-105"
            }`}
            onClick={() => setActiveSection("reports")}
          >
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1755942314/experiment-results_9619668_zvcn7x.png"
                alt="Reports"
                className={`w-6 h-6 mb-2 transition-transform duration-300 ${
                  activeSection === "reports"
                    ? "scale-110"
                    : "group-hover:scale-110"
                }`}
              />
              {activeSection === "reports" && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              )}
              <div className="absolute inset-0 bg-green-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
            <span
              className={`text-xs font-medium transition-colors duration-300 ${
                activeSection === "reports"
                  ? "text-green-600 font-semibold"
                  : "text-gray-600 group-hover:text-green-600"
              }`}
            >
              Reports
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
