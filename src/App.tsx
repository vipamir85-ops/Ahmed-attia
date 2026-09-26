import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Hero }         from "@/components/sections/Hero";
import { Profile }      from "@/components/sections/Profile";
import { Timeline }     from "@/components/sections/Timeline";
import { Skills }       from "@/components/sections/Skills";
import { HSRFeature }   from "@/components/sections/HSRFeature";
import { Projects }     from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { ProjectMap }   from "@/components/sections/ProjectMap";
import { Experience }   from "@/components/sections/Experience";
import { Certificates } from "@/components/sections/Certificates";
import { Contact }      from "@/components/sections/Contact";
import { Navigation }   from "@/components/sections/Navigation";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      <Navigation />
      <Hero />
      <Profile />
      <Timeline />
      <Skills />
      <HSRFeature />
      <Projects />
      <Achievements />
      <ProjectMap />
      <Experience />
      <Certificates />
      <Contact />
      <footer className="border-t border-white/5 py-8 text-center text-muted-foreground">
        <p className="text-sm">© {new Date().getFullYear()} Ahmed Attia · Surveyor. All rights reserved.</p>
        <p className="text-xs mt-1.5 text-muted-foreground/40 font-mono tracking-wider">Bridges · Roads · Rail · Foundation</p>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
