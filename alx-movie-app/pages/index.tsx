import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Button from '@/components/layout/Button';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Welcome to <span className="text-blue-600">CineSeek</span>
              </h1>
              <p className="text-xl text-gray-600">
                Your modern movie discovery application. Browse, search, and explore movies from our comprehensive database.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Getting Started</h2>
              <p className="text-gray-700">
                Edit the <code className="bg-gray-200 px-2 py-1 rounded">pages/index.tsx</code> file to customize this page. 
                Explore our application features and start discovering amazing movies!
              </p>
            </div>

            <div className="flex gap-4">
              <Link href="/movies">
                <Button label="Explore Movies" className="bg-blue-600 hover:bg-blue-700" />
              </Link>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button label="Learn Next.js" className="bg-gray-600 hover:bg-gray-700" />
              </a>
            </div>
          </div>

          {/* Right Content - Next.js Logo */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center p-8">
              <Image
                src="/next.svg"
                alt="Next.js logo"
                width={200}
                height={80}
                priority
                className="dark:invert"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Browse Movies', desc: 'Discover thousands of movies' },
                { title: 'Search & Filter', desc: 'Find movies by year and genre' },
                { title: 'Movie Details', desc: 'View detailed information' },
                { title: 'Responsive Design', desc: 'Works on all devices' },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Built With Modern Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { name: 'Next.js 14', icon: '⚡' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'Tailwind CSS', icon: '🎨' },
              { name: 'Font Awesome', icon: '⭐' },
            ].map((tech, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl">{tech.icon}</div>
                <p className="font-semibold text-gray-900">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
