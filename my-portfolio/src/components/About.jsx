const About = () => {
    return (
      <div className="about-section py-16 bg-gray-900 group relative">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-8">About Me</h2>
  
          <div className="text-white max-w-4xl mx-auto px-4">
            <p className="text-lg mb-6">
              Welcome to my portfolio! I specialize in creating web development solutions tailored to your needs.
              With years of experience in development and design, I ensure that your vision becomes a reality.
            </p>
            <p className="text-lg mb-6">
              I have a deep passion for creating intuitive and responsive websites that provide the best user experience.
              Whether you are looking for a simple landing page or a complex web application, I have the expertise to help you succeed.
            </p>
            <p className="text-lg mb-6">
              My commitment to quality and attention to detail ensures that I deliver projects on time and within budget. I value communication and collaboration throughout the development process, ensuring that you are always informed and involved.
            </p>
          </div>
  
          <div className="mt-8 px-4">
            <h3 className="text-2xl font-semibold text-white mb-4">My Mission</h3>
            <p className="text-lg text-gray-400">
              My mission is to provide exceptional web development services that empower businesses to grow and succeed in the digital world. I aim to deliver user-friendly, innovative, and scalable solutions for every project I take on.
            </p>
          </div>
        </div>
        
        {/* Purple Border on Hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-xl transition-colors duration-300" />
      </div>
    );
  };
  
  export default About;
