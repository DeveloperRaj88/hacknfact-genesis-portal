
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Lightbulb, 
  Rocket, 
  Zap 
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';

const FeatureCard: React.FC<{ 
  icon: React.ElementType, 
  title: string, 
  description: string 
}> = ({ icon: Icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg transition hover:scale-105">
    <Icon className="w-12 h-12 mb-4 text-primary" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Index: React.FC = () => {
  return (
    <PageLayout>
      <div className="bg-gradient-to-br from-background via-secondary/20 to-background py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-primary">
            hackNfact
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Discover practical life hacks and fascinating facts that transform everyday learning into an extraordinary journey of knowledge.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <FeatureCard 
              icon={BookOpen}
              title="Life Hacks"
              description="Practical solutions to simplify your daily challenges"
            />
            <FeatureCard 
              icon={Lightbulb}
              title="Intriguing Facts"
              description="Explore mind-blowing knowledge from diverse domains"
            />
            <FeatureCard 
              icon={Rocket}
              title="Continuous Learning"
              description="Stay curious and grow with bite-sized, actionable insights"
            />
            <FeatureCard 
              icon={Zap}
              title="Community Driven"
              description="Share and discover hacks from global learners"
            />
          </div>

          <div className="space-x-4">
            <Link 
              to="/hacks" 
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition"
            >
              Explore Hacks
            </Link>
            <Link 
              to="/facts" 
              className="inline-block border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary/10 transition"
            >
              Discover Facts
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
