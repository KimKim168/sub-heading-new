import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const Index = () => {
  return (
    <div className="bg-white dark:bg-gray-800 flex justify-center items-center w-screen h-screen">
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#016475]/50 via-[#016475] to-[#016475]/70 relative overflow-hidden">
        {/* <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ4MCIgaGVpZ2h0PSI2NTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+ICAgIDxwYXRoIGQ9Ik03MzkuNSAzOTguNWwtNi41LTEgNi41LTEgMS02LjUgMS02LjUgMS02LjUgMS02LjUgNi41LTEgNi41LTEgNi41LTEgNi41LTEgMS02LjUgMS02LjUgMS02LjUgMS02LjUgNi41LTEgNi41LTEgNi41LTEgNi41LTEgMS02LjUgMS02LjUgMS02LjUgMS02LjUgNi41LTEgNi41LTEgNi41LTEgNi41LTEiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjIpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] opacity-20"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-500/30 rounded-full filter blur-3xl"></div>
          <div className="absolute top-0 -right-20 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-red-500/20 rounded-full filter blur-3xl"></div>
        </div> */}

        <div className="w-full max-w-md backdrop-blur-xl bg-white/10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 relative z-10">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-block p-3 bg-white/10 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Login</h2>
              <p className="text-white/80">Enter your email and password below to log in</p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">Email address</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-2">Password</label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition-all duration-300"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-white/20 rounded bg-white/10"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-white/80">Remember me</label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-white text-purple-800 font-medium rounded-lg shadow-lg shadow-[#016475]/10 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#016475]/70 transition-all duration-300"
              >
                Log in
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  {/* <span className="px-2 bg-transparent text-white/60">veya şununla devam et</span> */}
                </div>
              </div>

              {/* <div className="mt-6 grid grid-cols-3 gap-3">
                <button className="flex justify-center items-center py-2 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors duration-300">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>

                <button className="flex justify-center items-center py-2 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors duration-300">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>

                <button className="flex justify-center items-center py-2 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors duration-300">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387..."/>
                  </svg>
                </button>
              </div> */}
            </div>

            {/* <p className="mt-8 text-center text-sm text-white/80">
              Hesabınız yok mu?{' '}
              <a href="#" className="font-medium text-white hover:text-white/80 transition-colors duration-300">
                Hemen kaydolun
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
