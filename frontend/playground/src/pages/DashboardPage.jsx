import React from "react";

export default function DashboardPage({ onLogout }) {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white text-gray-700 rounded-lg shadow-[5px_5px_15px_rgba(0,0,0,0.15)] w-96 p-8 text-center">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <p className="text-gray-600 mb-6">
          🎉 Welcome to your dashboard!
        </p>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
