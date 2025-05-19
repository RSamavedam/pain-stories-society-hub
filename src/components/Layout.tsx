
import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-softgray-100 to-cream-50">
      <Navigation />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
