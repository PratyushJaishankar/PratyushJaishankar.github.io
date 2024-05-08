const AboutMe = () => {
  return (
    <div className="bg-black text-white py-8 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* First Part */}
          <div>
            <img src="/aboutme.jpeg" alt="Your Photo" className="rounded-full w-48 h-48 mx-auto mb-4" />
            <p className="text-lg mb-4">
              Hello! My name is [Your Name] and I'm a [Your Profession] based in [Your Location]. I have a passion for [Your Interests or Skills] and have been working in the field for [Years of Experience] years.
            </p>
            <p className="text-lg mb-4">
              In my career, I've had the opportunity to [Highlight one or two key accomplishments or projects]. My strengths lie in [Your Strengths or Skills].
            </p>
          </div>
          {/* Second Part */}
          <div>
            <p className="text-lg mb-4">
              A third-year student pursuing a degree in Electronics and Communication, I possess a solid understanding of technology. Despite my background, I've developed strong programming skills and gained practical experience through projects. With problem-solving abilities and effective communication skills, I am ready to transition into software engineering. I am committed to contributing positively and advancing in this field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
