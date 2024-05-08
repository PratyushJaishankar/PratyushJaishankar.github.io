import AboutMe from './(components)/Aboutme/AboutMe';
import HeroSection from './(components)/HeroSection/HeroSection';
import Navbar from './(components)/Navbar/Navbar';
import "./globals.css";


export const metadata = {
  title: "Pratyush Portfolio",
  description: "Pratyush Jaishankar",
};

export default function RootLayout({ children }) {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <AboutMe />
      {children}
    </div>
  );
}
