import AboutMe from './(components)/Aboutme/AboutMe';
import HeroSection from './(components)/HeroSection/HeroSection';
import Navbar from './(components)/Navbar/Navbar';
import "./globals.css";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
