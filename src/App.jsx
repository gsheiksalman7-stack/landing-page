import './App.css'
function App() {
  return (
    <>
      <div className="w-full">

        {/* Navbar */}
        <nav className="w-full fixed top-0 left-0 bg-white/70 backdrop-blur-md shadow-sm z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-indigo-600">BrandCo.</h2>

            <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
              <li className="hover:text-indigo-600 transition-colors duration-300 cursor-pointer">Home</li>
              <li className="hover:text-indigo-600 transition-colors duration-300 cursor-pointer">Features</li>
              <li className="hover:text-indigo-600 transition-colors duration-300 cursor-pointer">Pricing</li>
              <li className="hover:text-indigo-600 transition-colors duration-300 cursor-pointer">Contact</li>
            </ul>

            <button className="md:hidden text-gray-700 text-2xl">☰</button>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="text-center py-40 bg-linear-to-br from-indigo-500 to-indigo-600 text-white rounded-b-[40px] mt-16 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-slideUp">
            Build Something Amazing
          </h1>
          <p className="mt-4 text-lg opacity-90 animate-slideUp delay-150">
            Your product deserves a beautiful landing page.
          </p>
          <button className="mt-8 px-10 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-slideUp delay-300">
            Get Started
          </button>
        </header>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl transition-all duration-300 hover:bg-white hover:border-gray-300 hover:-translate-y-2 hover:shadow-lg animate-fadeInUp">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast</h3>
            <p className="text-gray-600">Optimized performance with modern tooling.</p>
          </div>

          <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl transition-all duration-300 hover:bg-white hover:border-gray-300 hover:-translate-y-2 hover:shadow-lg animate-fadeInUp delay-150">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsive</h3>
            <p className="text-gray-600">Looks great on every device.</p>
          </div>

          <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl transition-all duration-300 hover:bg-white hover:border-gray-300 hover:-translate-y-2 hover:shadow-lg animate-fadeInUp delay-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable</h3>
            <p className="text-gray-600">Built with clean, maintainable architecture.</p>
          </div>

        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-gray-500 border-t border-gray-200">
          © 2025 Your BrandCo. All rights reserved.
        </footer>
      </div>
    </>
  )
}

export default App
