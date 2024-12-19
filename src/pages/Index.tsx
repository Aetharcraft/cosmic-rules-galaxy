import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Rules from "@/components/Rules";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      {/* Content with blur overlay */}
      <div className="relative min-h-screen backdrop-blur-sm bg-background/80">
        <Header />
        <main className="container mx-auto px-4">
          <Rules />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;