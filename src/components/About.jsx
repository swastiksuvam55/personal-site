import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Self-starting and resourceful Full-stack and Blockchain developer with experience implementing front-end and back-end coding. Astute and 
        always-learning designer of user interactions on websites and databases that are sound and easy to use. Proven problem-solver with solid 
        grounding in data-driven applications and concepts. Communicates clearly with technical and non-technical team members and promotes 
        drive for customer service.

        
        </p>

        <br />

        <p className="text-xl">
        Registered photographer at Getty images. Part-time writer and fitness enthusiast.
        </p>
      </div>
    </div>
  );
};

export default About;