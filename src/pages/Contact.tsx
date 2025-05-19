
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="bg-pain-50 py-12">
        <div className="container">
          <h1 className="font-serif text-4xl font-bold text-center mb-4 text-brown">Contact Us</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-muted-foreground">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-pain-100">
              <CardContent className="p-6 md:p-8">
                <h2 className="font-serif text-2xl font-bold mb-6">Get in Touch</h2>
                
                <div className="w-full flex justify-center">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSd3gXhP95Rtn6uGtPrCh8cNWfJjI7is99QudblDnFmStT597A/viewform?embedded=true" 
                    width="640" 
                    height="876" 
                    className="border-0 w-full" 
                    title="Contact Form"
                  >
                    Loading…
                  </iframe>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="border-pain-100 mb-6">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-medium mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-pain-600 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@painreliefsociety.org" className="text-pain-600 hover:underline">
                        info@painreliefsociety.org
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-pain-600 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+11234567890" className="text-pain-600 hover:underline">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-pain-600 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium">Address</p>
                      <address className="not-italic text-muted-foreground">
                        123 Healing Street<br />
                        Wellness City, WC 12345<br />
                        United States
                      </address>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-pain-100">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-medium mb-4">Share Your Story</h3>
                <p className="text-muted-foreground mb-4">
                  Have an experience with chronic pain that you'd like to share? Your story could help others on their journey.
                </p>
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-pain-600 mt-0.5 mr-3" />
                  <a href="mailto:stories@painreliefsociety.org" className="text-pain-600 hover:underline">
                    stories@painreliefsociety.org
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
