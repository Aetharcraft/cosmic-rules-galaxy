const Footer = () => {
  return (
    <footer className="bg-secondary/50 backdrop-blur-sm border-t border-white/10 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Aethar Craft. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;