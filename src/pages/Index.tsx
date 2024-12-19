import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Rules from "@/components/Rules";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="relative min-h-screen backdrop-blur-sm bg-background/90">
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