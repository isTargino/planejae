export function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold text-purple-700">
          Planejaê
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium text-gray-600">
          <a href="#" className="underline decoration-transparent underline-offset-4 transition-all duration-300 ease-out hover:text-purple-700 hover:decoration-purple-700">Dashboard</a>
          <a href="#" className="underline decoration-transparent underline-offset-4 transition-all duration-300 ease-out hover:text-purple-700 hover:decoration-purple-700">Transações</a>
        </div>
      </div>
    </nav>
  );
}
