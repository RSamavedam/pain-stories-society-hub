
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

const Logo = ({ className = "", size = "medium" }: LogoProps) => {
  const sizeClasses = {
    small: "h-6",
    medium: "h-8",
    large: "h-12"
  };

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/5f0ed9ef-bbd4-4436-b64f-c113b3afe370.png" 
        alt="Pain Relief Society Logo" 
        className={`${sizeClasses[size]} mr-2`}
      />
      <span className="font-serif font-bold text-xl text-brown">
        Pain Relief Society
      </span>
    </Link>
  );
};

export default Logo;
