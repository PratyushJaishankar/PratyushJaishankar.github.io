import AboutMe from './(components)/Aboutme/AboutMe';
import HeroSection from './(components)/HeroSection/HeroSection';
import Navbar from './(components)/Navbar/Navbar';
import "./globals.css";

const Dashboard = () => {
  return <div><div className="bg-black">
  <Navbar />
  <HeroSection />
  <AboutMe />
</div></div>;
};

export default Dashboard;

