'use client'
const HeroSection = () => {
//   const { useClient } = useClient();


  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 transition-opacity delay-500 opacity-100">Embark on a New Journey</h1>
        <p className="text-lg mb-8 transition-opacity delay-1000 opacity-100">Passionate About Cloud Computing, Evolving in DevOps</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-opacity delay-1500 opacity-100"
        //   onClick={handleDownloadClick}
        >
        <a href="/PratyushJaishankarResume.pdf" download="cv">Download CV</a>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
