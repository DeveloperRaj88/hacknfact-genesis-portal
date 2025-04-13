
import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop, DollarSign, Home, BookOpen, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HackCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  hacks?: string[];
}

const HackCategory: React.FC<HackCategoryProps> = ({ title, description, icon, hacks = [] }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-border/60 hover:border-primary/30">
      <CardHeader className="bg-gradient-to-r from-muted/30 to-background pb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-md text-primary">
            {icon}
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {hacks.length > 0 ? (
          <ul className="space-y-3">
            {hacks.map((hack, index) => (
              <li key={index} className="border-b border-border/60 pb-3 last:border-b-0 last:pb-0">
                <Link
                  to="#" 
                  className="text-foreground hover:text-primary transition flex items-center gap-2"
                >
                  <span className="bg-accent h-2 w-2 rounded-full inline-block"></span>
                  {hack}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground italic">Coming soon: New hacks will be added regularly!</p>
        )}
      </CardContent>
    </Card>
  );
};

const HacksList: React.FC = () => {
  const hackCategories = [
    {
      title: "Technology Hacks",
      description: "Smart shortcuts and tips to make technology work better for you",
      icon: <Laptop className="h-6 w-6" />,
      hacks: [
        "Speed up your browsing with keyboard shortcuts",
        "Extend your laptop battery life with these settings",
        "Recover accidentally deleted files in seconds"
      ]
    },
    {
      title: "Money Saving Hacks",
      description: "Practical ways to save money in your everyday life",
      icon: <DollarSign className="h-6 w-6" />,
      hacks: [
        "Cut your grocery bill in half with these shopping techniques",
        "Save on electricity with these simple habit changes",
        "Budget tracking apps that actually work"
      ]
    },
    {
      title: "Daily Life Hacks",
      description: "Clever solutions for common everyday challenges",
      icon: <Home className="h-6 w-6" />,
      hacks: [
        "The right way to fold clothes to maximize drawer space",
        "Quick meal prep ideas that save hours each week",
        "Stain removal tricks that actually work"
      ]
    },
    {
      title: "Study Hacks",
      description: "Methods to improve learning, retention and productivity",
      icon: <BookOpen className="h-6 w-6" />,
      hacks: [
        "The Pomodoro technique for enhanced focus",
        "Memory techniques to help remember what you study",
        "Note-taking systems that improve comprehension"
      ]
    },
    {
      title: "DIY & Household Hacks",
      description: "Creative solutions for home improvement and maintenance",
      icon: <Hammer className="h-6 w-6" />,
      hacks: [
        "Fix squeaky doors with items already in your kitchen",
        "Make your own natural cleaning products that actually work",
        "Simple home repairs anyone can do without special tools"
      ]
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6 text-primary">Life Hacks</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover innovative tips and tricks to make your life easier, more efficient, and more productive.
            Our curated hacks help you solve everyday problems with creative solutions.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hackCategories.map((category, index) => (
            <HackCategory
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
              hacks={category.hacks}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default HacksList;
