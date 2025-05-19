
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-pain-50 border-t border-pain-100">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/a5d67575-6ed1-49c5-8b2f-77dd10a86244.png" 
                alt="Pain Relief Society Logo" 
                className="h-8 w-8 mr-2" 
              />
              <span className="font-serif font-bold text-lg text-pain-800">Pain Relief Society</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Increasing awareness and understanding of rare pain conditions through patient experiences.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-pain-600 transition-colors">Home</Link></li>
              <li><Link to="/pain-conditions" className="text-muted-foreground hover:text-pain-600 transition-colors">Pain Conditions</Link></li>
              <li><Link to="/treatments" className="text-muted-foreground hover:text-pain-600 transition-colors">Treatments</Link></li>
              <li><Link to="/patient-stories" className="text-muted-foreground hover:text-pain-600 transition-colors">Patient Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-3">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-pain-600 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-pain-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-pain-100 pt-6 text-center text-sm text-muted-foreground">
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/a5d67575-6ed1-49c5-8b2f-77dd10a86244.png" 
              alt="Pain Relief Society Logo" 
              className="h-10 w-10 mb-3" 
            />
            <p>© {new Date().getFullYear()} Pain Relief Society. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
