'use client'

import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300 bg-gradient-to-r from-indigo-50 via-white to-purple-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/ots-logo.svg" alt="OTS" className="h-8 w-8 sm:h-10 sm:w-10" />
            <span className="text-xl sm:text-2xl font-bold text-gray-900">OTS</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/signup" className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors">
              Sign Up
            </Link>
            <Link href="/login" className="bg-indigo-600 text-white px-3 py-2 sm:px-4 text-sm sm:text-base rounded-lg hover:bg-indigo-700 transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 pt-24 sm:pt-32">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="text-indigo-600">Professional</span>
            <br />
            <span style={{color: '#f59e0b'}}>
              profile showcase
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            OTS is your digital identity platform. Create, customize, and share your professional profile with the world. Showcase your skills, experience, and achievements in one beautiful place.
          </p>
          <div className="flex justify-center">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40">
              {/* Main Logo */}
              <div className="absolute inset-0 w-24 h-24 sm:w-32 sm:h-32 mx-auto my-auto animate-logo-actions">
                <img src="/ots-logo.svg" alt="OTS" className="w-full h-full" />
              </div>
              
              {/* Blinking Eyes */}
              <div className="absolute top-8 left-12 w-2 h-2 bg-white rounded-full animate-blink"></div>
              <div className="absolute top-8 right-12 w-2 h-2 bg-white rounded-full animate-blink"></div>
              
              {/* Code Brackets */}
              <div className="absolute top-6 -left-2 text-2xl text-yellow-400 animate-code opacity-0">&lt;</div>
              <div className="absolute top-6 -right-2 text-2xl text-yellow-400 animate-code opacity-0">/&gt;</div>
              
              {/* Kiss Dots */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1 animate-kiss opacity-0">
                <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
              </div>
              
              {/* Sparkles */}
              <div className="absolute top-2 left-2 text-lg animate-sparkle opacity-0">✨</div>
              <div className="absolute bottom-2 right-2 text-lg animate-sparkle opacity-0">⭐</div>
            </div>
          </div>
          <style jsx>{`
            @keyframes logo-actions {
              0% { transform: scale(1) rotate(0deg); }
              20% { transform: scale(1.1) rotate(2deg); }
              40% { transform: scale(0.95) rotate(-1deg); }
              60% { transform: scale(1.05) rotate(1deg); }
              80% { transform: scale(1.02) rotate(-0.5deg); }
              100% { transform: scale(1) rotate(0deg); }
            }
            @keyframes blink {
              0%, 90%, 100% { opacity: 1; transform: scaleY(1); }
              95% { opacity: 0; transform: scaleY(0.1); }
            }
            @keyframes code {
              0%, 70%, 100% { opacity: 0; transform: translateX(0); }
              75%, 85% { opacity: 1; transform: translateX(-5px); }
            }
            @keyframes kiss {
              0%, 40%, 60%, 100% { opacity: 0; transform: translateX(-50%) translateY(0); }
              45%, 55% { opacity: 1; transform: translateX(-50%) translateY(-10px); }
            }
            @keyframes sparkle {
              0%, 80%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
              85%, 95% { opacity: 1; transform: scale(1) rotate(180deg); }
            }
            .animate-logo-actions {
              animation: logo-actions 4s ease-in-out infinite;
            }
            .animate-blink {
              animation: blink 3s ease-in-out infinite;
            }
            .animate-code {
              animation: code 4s ease-in-out infinite;
            }
            .animate-kiss {
              animation: kiss 4s ease-in-out infinite 1s;
            }
            .animate-sparkle {
              animation: sparkle 4s ease-in-out infinite 2s;
            }
          `}</style>
        </div>

        {/* Profile Types - Parcel Style */}
        <div className="mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">One Profile, Endless Possibilities</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Create a single comprehensive profile and make it visible across different platforms based on your purpose. 
              Whether you're job hunting, finding love, building business connections, or offering services - 
              <span className="font-semibold text-indigo-600"> your profile, once created, can be seen everywhere you choose.</span>
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            
            {/* Job Profile Card */}
            <div className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.5" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Job Profile</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Create your resume and job profile to connect with related teams based on your quality match type and skills</p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span>Perfect for Naukri, LinkedIn →</span>
              </div>
            </div>

            {/* Marriage Profile Card */}
            <div className="group bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Marriage Profile</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Connect with people who match your values, lifestyle, and relationship goals through intelligent compatibility matching</p>
              <div className="flex items-center text-pink-600 font-semibold">
                <span>Perfect for Shaadi.com, Jeevansathi →</span>
              </div>
            </div>

            {/* Dating Profile Card */}
            <div className="group bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Dating Profile</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Match with people who share your interests and vibe through personality-based compatibility algorithms</p>
              <div className="flex items-center text-red-600 font-semibold">
                <span>Perfect for Tinder, Bumble →</span>
              </div>
            </div>

            {/* Business Profile Card */}
            <div className="group bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v0a2 2 0 002-2h6l2 2h6a2 2 0 012 2v1M3 7l3 3 3-3" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Business Profile</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Connect with entrepreneurs and business partners who align with your vision and industry expertise</p>
              <div className="flex items-center text-orange-600 font-semibold">
                <span>Perfect for Entrepreneurs →</span>
              </div>
            </div>

          </div>
          
          {/* Additional Profiles Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
            
            {/* Hiring Profile Card */}
            <div className="group bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Hiring Profile</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Find quality candidates who match your company culture and role requirements through smart talent matching</p>
              <div className="flex items-center text-green-600 font-semibold">
                <span>Perfect for HR, Recruiters →</span>
              </div>
            </div>

            {/* Service Profile Card */}
            <div className="group bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Service Profile</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Connect with clients who value your service quality and expertise through skill-based matching systems</p>
              <div className="flex items-center text-purple-600 font-semibold">
                <span>Perfect for Urban Company, TaskRabbit →</span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Features Grid */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          <div className="text-center p-6 sm:p-8">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Multiple Templates</h3>
            <p className="text-gray-600">Choose from various profile templates designed for different purposes and platforms.</p>
          </div>

          <div className="text-center p-8">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy Control</h3>
            <p className="text-gray-600">Control who sees what information. Different privacy settings for different profile types.</p>
          </div>

          <div className="text-center p-8">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy Sharing</h3>
            <p className="text-gray-600">Share your profiles across platforms with custom links and QR codes.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 sm:p-12 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Ready to showcase yourself?</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-4">Join thousands of professionals building their digital presence with OTS.</p>
          <Link href="/signup" className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors inline-block">
            Create Your Profile
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <img src="/ots-logo.svg" alt="OTS" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-900">OTS</span>
          </div>
          <div className="flex justify-center items-center space-x-6 mb-4">
            <a href="mailto:akkikr494@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-gray-600 hover:text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a href="https://wa.me/919801295690" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-gray-600 hover:text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
              </svg>
            </a>
            <a href="https://github.com/akshaykr-98" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-gray-600 hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="www.linkedin.com/in/akshay-kumar-9b303517a" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-gray-600 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/mrakshaykr/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-gray-600 hover:text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
          <p className="text-gray-600 text-center">© 2024 OTS. Built with ❤️ for developers.</p>
        </div>
      </footer>
    </div>
  )
}