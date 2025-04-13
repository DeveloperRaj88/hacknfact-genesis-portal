
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { 
  Send,
  CheckCircle
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  type: z.string({ required_error: 'Please select a type.' }),
  category: z.string({ required_error: 'Please select a category.' }),
  title: z.string().min(5, { message: 'Title must be at least 5 characters.' }),
  description: z.string().min(20, { message: 'Description must be at least 20 characters.' }),
});

const SubmitPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('');
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      title: '',
      description: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Here you would normally send the data to your backend
    setTimeout(() => {
      setIsSubmitted(true);
      form.reset();
    }, 500);
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    form.setValue('type', value);
    form.setValue('category', ''); // Reset category when type changes
  };

  return (
    <PageLayout>
      <div className="container mx-auto py-10 px-4 md:px-6">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Submit Your Hack or Fact</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Share your knowledge with our community. Submit your own hacks to make life easier or fascinating facts that others might find interesting.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <Card className="border-primary/20 animate-fade-in">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-primary" />
                </div>
                <CardTitle className="text-2xl">Submission Received!</CardTitle>
                <CardDescription>
                  Thank you for your contribution! Our team will review your submission and publish it soon.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button onClick={() => setIsSubmitted(false)} variant="outline">Submit Another</Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Submission Form</CardTitle>
                <CardDescription>Fill out the form below to submit your hack or fact</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="johndoe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Type</FormLabel>
                            <Select 
                              onValueChange={(value) => handleTypeChange(value)}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="hack">Hack</SelectItem>
                                <SelectItem value="fact">Fact</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              disabled={!selectedType}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {selectedType === 'hack' ? (
                                  <>
                                    <SelectItem value="technology">Technology</SelectItem>
                                    <SelectItem value="money-saving">Money Saving</SelectItem>
                                    <SelectItem value="daily-life">Daily Life</SelectItem>
                                    <SelectItem value="study">Study</SelectItem>
                                    <SelectItem value="diy-household">DIY & Household</SelectItem>
                                  </>
                                ) : selectedType === 'fact' ? (
                                  <>
                                    <SelectItem value="scientific">Scientific</SelectItem>
                                    <SelectItem value="space">Space</SelectItem>
                                    <SelectItem value="animal">Animal</SelectItem>
                                    <SelectItem value="history">History</SelectItem>
                                    <SelectItem value="human-body">Human Body</SelectItem>
                                  </>
                                ) : null}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter a catchy title" {...field} />
                          </FormControl>
                          <FormDescription>
                            A short, descriptive title for your submission
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your hack or fact in detail" 
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Provide clear and detailed information. For hacks, explain the steps. For facts, include the source if possible.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" /> Submit
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default SubmitPage;
