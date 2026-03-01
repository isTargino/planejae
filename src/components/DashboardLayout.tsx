import { Navbar } from "./Navbar" 

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6">
        {children}
      </main>
    </div>
  );
}