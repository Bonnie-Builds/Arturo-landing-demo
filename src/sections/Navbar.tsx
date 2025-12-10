import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Platform', href: '#features' },
    { name: 'Solutions', href: '#use-cases' },
    { name: 'Security', href: '#security' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
          Arturo
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium text-neutral-400 hover:text-white transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white text-[13px]">
            Login
          </Button>
          <Button variant="primary" size="sm" className="h-8 text-[13px] px-5">
            Request Access
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-mono text-neutral-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-4">
            <Button variant="secondary" className="w-full">Login</Button>
            <Button variant="primary" className="w-full">Request Access</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
