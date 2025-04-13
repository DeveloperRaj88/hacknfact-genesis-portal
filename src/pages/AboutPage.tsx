
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Users, Info, Target, Heart } from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';

// Team member data
const teamMembers = [
  {
    name: "Raj Srivastava",
    role: "BCA Student",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&h=400&auto=format&fit=crop"
  },
  {
    name: "Team Member",
    role: "Developer",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&h=400&auto=format&fit=crop"
  },
  {
    name: "Team Member",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&h=400&auto=format&fit=crop"
  },
  {
    name: "Team Member",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&h=400&auto=format&fit=crop"
  }
];

const AboutPage: React.FC = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [carouselApi, setCarouselApi] = React.useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  // Auto-slide carousel
  useEffect(() => {
    if (isDialogOpen && carouselApi) {
      intervalRef.current = setInterval(() => {
        carouselApi.scrollNext();
      }, 2000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [carouselApi, isDialogOpen]);

  // Function to handle dialog state
  const handleDialogOpenChange = (open: boolean) => {
    setIsDialogOpen(open);
  };
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl font-bold text-primary">About hackNfact</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              An innovative platform designed to deliver practical life hacks and fascinating facts
              that enhance everyday learning
            </p>
          </div>

          {/* Our Objective Section */}
          <Card className="border-border hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-3 text-center md:text-left">
                <h2 className="text-2xl font-semibold">Our Objective</h2>
                <p className="text-muted-foreground">
                  Our aim is to deliver innovative hacks and fascinating facts to educate, engage, and inspire users. 
                  We believe knowledge should be accessible, practical, and fun. By providing a diverse range of content, 
                  we help our users develop new skills, broaden their horizons, and find joy in learning.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Our Mission Section */}
          <Card className="border-border hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-3 text-center md:text-left">
                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p className="text-muted-foreground">
                  Created by Raj Srivastava, a BCA student at the School of Management Sciences in Varanasi, 
                  our mission is to simplify lives and spark curiosity through knowledge. We aim to create 
                  a creative hub where knowledge meets daily life usefulness, empowering people to live smarter 
                  and learn continuously.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Know Us Button and Dialog */}
          <div className="flex justify-center py-8">
            <Dialog onOpenChange={handleDialogOpenChange}>
              <DialogTrigger asChild>
                <Button size="lg" className="animate-pulse hover:animate-none">
                  <Users className="mr-2" />
                  Know Us
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl">Meet Our Team</DialogTitle>
                </DialogHeader>

                {/* Team Carousel */}
                <div className="py-4">
                  <Carousel setApi={setCarouselApi} opts={{ loop: true }} className="w-full max-w-md mx-auto">
                    <CarouselContent>
                      {teamMembers.map((member, index) => (
                        <CarouselItem key={index} className="flex flex-col items-center">
                          <div className="overflow-hidden rounded-lg aspect-square relative w-full max-w-[300px] mx-auto">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="object-cover w-full h-full transition-transform hover:scale-105"
                            />
                          </div>
                          <div className="text-center mt-4">
                            <h3 className="font-semibold text-lg">{member.name}</h3>
                            <p className="text-muted-foreground">{member.role}</p>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-center mt-4 gap-2">
                      <CarouselPrevious className="static translate-y-0 mx-0" />
                      <CarouselNext className="static translate-y-0 mx-0" />
                    </div>
                  </Carousel>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Creator Info */}
          <Card className="border-border hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
              <div className="bg-primary/10 p-4 rounded-full">
                <Info className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">About the Creator</h2>
                <p className="text-muted-foreground">
                  Raj Srivastava is a passionate BCA student at the School of Management Sciences in Varanasi.
                  With a keen interest in technology and education, he created hackNfact to share knowledge
                  and practical solutions with others.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
