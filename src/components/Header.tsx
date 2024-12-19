import { Rocket } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-secondary/50 backdrop-blur-sm border-b border-white/10 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="w-8 h-8 text-primary animate-pulse" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            Aethar Craft
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;