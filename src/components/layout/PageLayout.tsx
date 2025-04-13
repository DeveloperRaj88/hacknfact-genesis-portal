
import React from 'react';
import Navigation from './Navigation';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-muted/30 py-6 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} hackNfact. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;
