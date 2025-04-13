
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">About hackNfact</h1>
      <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
        <p>hackNfact is an innovative platform designed to deliver practical life hacks and fascinating facts that enhance everyday learning.</p>
        <p>Created by Raj Srivastava, a BCA student at the School of Management Sciences in Varanasi, our mission is to simplify lives and spark curiosity through knowledge.</p>
      </div>
    </div>
  );
};

export default AboutPage;
