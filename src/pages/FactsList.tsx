
import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FlaskConical, Rocket, Rat, BookOpen, Heart } from 'lucide-react';

interface FactProps {
  text: string;
}

const Fact: React.FC<FactProps> = ({ text }) => {
  return (
    <div className="border-l-4 border-primary/50 pl-4 py-2 mb-4 bg-muted/20 rounded-r-md hover:bg-muted/30 transition-all">
      <p className="text-foreground">{text}</p>
    </div>
  );
};

interface FactCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  facts: string[];
  color?: string;
}

const FactCategory: React.FC<FactCategoryProps> = ({ title, description, icon, facts, color = "from-primary/5 to-muted/20" }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-border/60 hover:border-primary/30">
      <CardHeader className={`bg-gradient-to-r ${color} pb-6`}>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-md text-primary">
            {icon}
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {facts.map((fact, index) => (
          <Fact key={index} text={fact} />
        ))}
      </CardContent>
    </Card>
  );
};

const FactsList: React.FC = () => {
  const factCategories = [
    {
      title: "Scientific Facts",
      description: "Mind-blowing discoveries from the world of science",
      icon: <FlaskConical className="h-6 w-6" />,
      facts: [
        "Lightning strikes the Earth about 8.6 million times per day.",
        "One teaspoon of a neutron star would weigh about 6 billion tons.",
        "There are more atoms in a single glass of water than glasses of water in all the oceans on Earth.",
        "Honey never spoils - archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat."
      ],
      color: "from-blue-50/30 to-muted/10"
    },
    {
      title: "Space Facts",
      description: "Fascinating revelations about our universe",
      icon: <Rocket className="h-6 w-6" />,
      facts: [
        "The footprints left by astronauts on the Moon will last for at least 100 million years.",
        "One day on Venus is longer than one year on Earth.",
        "The largest known star, UY Scuti, is so big that if placed in our solar system, it would extend beyond Jupiter's orbit.",
        "There are more stars in the universe than grains of sand on all of Earth's beaches combined."
      ],
      color: "from-indigo-50/30 to-muted/10"
    },
    {
      title: "Animal Facts",
      description: "Extraordinary truths about the animal kingdom",
      icon: <Rat className="h-6 w-6" />,
      facts: [
        "Octopuses have three hearts, nine brains, and blue blood.",
        "A group of flamingos is called a 'flamboyance'.",
        "Koalas sleep up to 22 hours a day.",
        "Hummingbirds are the only birds that can fly backwards.",
        "Elephants are the only mammals that can't jump."
      ],
      color: "from-green-50/30 to-muted/10"
    },
    {
      title: "History Facts",
      description: "Surprising moments from our collective past",
      icon: <BookOpen className="h-6 w-6" />,
      facts: [
        "The ancient Egyptians slept on pillows made of stone.",
        "Oxford University is older than the Aztec Empire.",
        "The shortest war in history was between Britain and Zanzibar in 1896. It lasted just 38 minutes.",
        "Vikings used the bones of slain animals to make their armor more intimidating, giving rise to the term 'berserk'."
      ],
      color: "from-amber-50/30 to-muted/10"
    },
    {
      title: "Human Body Facts",
      description: "Amazing insights about our own biology",
      icon: <Heart className="h-6 w-6" />,
      facts: [
        "Your brain uses 20% of the oxygen and blood in your body.",
        "The human nose can detect about 1 trillion different scents.",
        "In your lifetime, your heart will beat approximately 2.5 billion times.",
        "The acid in your stomach is strong enough to dissolve zinc.",
        "Your body contains enough iron to make a 3-inch nail."
      ],
      color: "from-red-50/30 to-muted/10"
    }
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6 text-primary">Fascinating Facts</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Expand your knowledge with our collection of mind-blowing facts from across science, history, space, 
            and beyond. Learning becomes an adventure when you discover the extraordinary in our everyday world.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {factCategories.map((category, index) => (
            <FactCategory
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
              facts={category.facts}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default FactsList;
