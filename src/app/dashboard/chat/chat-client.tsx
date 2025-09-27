'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, User, Sparkles, Send, BrainCircuit, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Message = {
  role: 'user' | 'bot';
  content: string;
};

const personalities = [
  { name: 'Supportive Pal', icon: Heart, prompt: "You are a warm, empathetic friend. Your goal is to listen and offer comfort." },
  { name: 'Mindful Guide', icon: BrainCircuit, prompt: "You are a calm, mindful guide. You help users ground themselves and see things from a different perspective." },
  { name: 'Problem Solver', icon: Sparkles, prompt: "You are a practical, solution-focused assistant. You help users break down problems and find actionable steps." },
];

export default function ChatClient() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [activePersonality, setActivePersonality] = useState(personalities[0]);
  const { toast } = useToast();

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        role: 'bot',
        content: `Thanks for sharing. It sounds like you're going through a lot. Let's talk about that. (${activePersonality.name} persona)`,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };
  
  const handleGetRecommendation = () => {
    toast({
      title: 'Analyzing Conversation...',
      description: 'Our AI is finding the best counselor for your needs.',
    });
    // This would call the GenAI flow `counselor-recommendation-from-chat`
    setTimeout(() => {
      document.getElementById('rec-dialog-trigger')?.click();
    }, 2000);
  };

  return (
    <div className="flex h-full border rounded-lg bg-card/60 dark:bg-card/40 backdrop-blur-sm border-white/20">
      <aside className="w-1/4 border-r p-4 hidden md:flex flex-col">
        <h3 className="font-semibold mb-4">AI Personalities</h3>
        <div className="space-y-2">
          {personalities.map((p) => (
            <Button
              key={p.name}
              variant={activePersonality.name === p.name ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActivePersonality(p)}
            >
              <p.icon className="mr-2 h-4 w-4" />
              {p.name}
            </Button>
          ))}
        </div>
        <div className="mt-auto">
          <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full" onClick={handleGetRecommendation}>
                  <Sparkles className="mr-2 h-4 w-4" /> Get Counselor
                </Button>
            </DialogTrigger>
            <button id="rec-dialog-trigger" className="hidden"/>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Counselor Recommendation</DialogTitle>
                <DialogDescription>
                  Based on your conversation, we think this counselor might be a good fit.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-4 py-4">
                  <Avatar>
                      <AvatarImage src="https://picsum.photos/seed/counselor1/100/100" />
                      <AvatarFallback>EC</AvatarFallback>
                  </Avatar>
                  <div>
                      <h4 className="font-semibold">Dr. Emily Carter</h4>
                      <p className="text-sm text-muted-foreground">Specializes in Cognitive Behavioral Therapy (CBT) for anxiety and stress.</p>
                  </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </aside>

      <div className="flex flex-col flex-1">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-end gap-2',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'bot' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    'max-w-xs md:max-w-md lg:max-w-lg rounded-lg p-3 text-sm',
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  )}
                >
                  {message.content}
                </div>
                 {message.role === 'user' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
             {messages.length === 0 && (
              <div className="text-center text-muted-foreground pt-16">
                <Bot className="mx-auto h-12 w-12 mb-4" />
                <p>I'm here to listen. What's on your mind?</p>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button onClick={handleSend}><Send className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
