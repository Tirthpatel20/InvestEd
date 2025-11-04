import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                <span className="text-white font-bold text-xl">IP</span>
              </div>
              <span className="font-bold text-xl">InvestPro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering investors with education, advisory services, and a supportive community.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/plans" className="text-sm text-muted-foreground hover:text-primary transition-colors">Investment Plans</Link></li>
              <li><Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Team</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} InvestPro. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Investments carry risk. Please read our disclaimer carefully.
          </p>
        </div>
      </div>
    </footer>
  );
};
