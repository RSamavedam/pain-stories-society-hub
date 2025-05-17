
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-pain-50 border-t border-pain-100">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-pain-600 mr-2" />
              <span className="font-serif font-bold text-lg text-pain-800">Pain Relief Society</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Increasing awareness and understanding of chronic pain conditions through patient experiences.
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
              <li><a href="#" className="text-muted-foreground hover:text-pain-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-pain-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-3">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-pain-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-pain-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-pain-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for updates.
            </p>
            <form className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 rounded-l-md border border-r-0 border-pain-200 px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-pain-500 focus:border-transparent"
              />
              <button 
                type="submit" 
                className="rounded-r-md border border-pain-600 bg-pain-600 px-3 py-2 text-sm font-medium text-white hover:bg-pain-700 focus:outline-none focus:ring-2 focus:ring-pain-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-pain-100 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Pain Relief Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
