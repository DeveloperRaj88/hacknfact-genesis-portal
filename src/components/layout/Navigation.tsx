
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">hackNfact</Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`hover:text-primary transition ${isActive('/') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
          >
            Home
          </Link>
          <Link 
            to="/hacks" 
            className={`hover:text-primary transition ${isActive('/hacks') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
          >
            Hacks
          </Link>
          <Link 
            to="/facts" 
            className={`hover:text-primary transition ${isActive('/facts') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
          >
            Facts
          </Link>
          <Link 
            to="/submit" 
            className={`hover:text-primary transition ${isActive('/submit') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
          >
            Submit
          </Link>
          <Link 
            to="/about" 
            className={`hover:text-primary transition ${isActive('/about') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`hover:text-primary transition ${isActive('/contact') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
          >
            Contact
          </Link>
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu button placeholder - could be expanded later */}
          <button className="text-muted-foreground p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
