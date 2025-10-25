import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex items-center gap-2">
            Vocari AI
            <span className="text-xs font-normal bg-primary/10 text-primary px-2 py-0.5 rounded-full border border-primary/20">beta</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Button variant={isActive("/") ? "secondary" : "ghost"} asChild className="transition-all">
              <Link to="/">Home</Link>
            </Button>
            <Button variant={isActive("/about") ? "secondary" : "ghost"} asChild className="transition-all">
              <Link to="/about">About</Link>
            </Button>
            <Button variant={isActive("/pricing") ? "secondary" : "ghost"} asChild className="transition-all">
              <Link to="/pricing">Pricing</Link>
            </Button>
            <Button variant={isActive("/agent-test") ? "secondary" : "ghost"} asChild className="transition-all">
              <Link to="/agent-test">Test Agent</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;