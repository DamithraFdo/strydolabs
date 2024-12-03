'use client'
import Image from "next/image";
import { useState } from "react";

const teamData = [
  {
    name: "Damithra Fernando",
    role: "CEO",
    story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis vestibulum ullamcorper. Nullam in augue lacinia eros vestibulum aliquam. Donec quis dolor lacus. Duis magna libero, sodales ut orci non, vestibulum maximus odio. Curabitur risus sapien, hendrerit sit amet porttitor eu, tristique nec diam. Nulla porttitor fermentum nibh ut convallis. Sed tristique rhoncus nunc eu faucibus.",
    image: "/img/dummy.jpeg",
  },
  {
    name: "Anjar Tiyo",
    role: "CTO",
    story: "",
    image: "/img/dummy.jpeg",
  },
  {
    name: "Howard Ong",
    role: "Job Position",
    story: "",
    image: "/img/dummy.jpeg",
  },
  {
    name: "Olivia Wilson",
    role: "Job Position",
    story: "",
    image: "/img/dummy.jpeg",
  },
  // Add more team members as needed
  
];

export default function TeamPage() {
  const [selectedTeam, setSelectedTeam] = useState(teamData[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTeamClick = (teamMember: typeof teamData[0]) => {
    setIsTransitioning(true); 
    setTimeout(() => {
      setSelectedTeam(teamMember);
      setIsTransitioning(false);
    }, 300); 
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 md:h-screen">
      <div
        className={`w-full md:w-1/3 flex flex-col items-center transition-all duration-300 ease-in-out transform ${
          isTransitioning ? "scale-75 opacity-50" : "scale-100 opacity-100"
        }`}
      >
        <Image
          src={selectedTeam.image}
          alt={selectedTeam.name}
          className="rounded-full object-cover"
          width={200}
          height={200}
        />
        <h2 className="mt-4 text-xl font-bold">{selectedTeam.name}</h2>
        <p className="text-gray-600">{selectedTeam.role}</p>
        <p className="text-gray-600 italic text-justify">{selectedTeam.story}</p>
      </div>

      {/* Divider */}
      <div className="hidden md:block h-[50vh] border-l-4 border-orange-500 mx-4"></div>

      {/* Right Side - Team List */}
      <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 md:mt-0">
        {teamData.map((teamMember, index) => (
          <div
            key={index}
            onClick={() => handleTeamClick(teamMember)}
            className="cursor-pointer flex flex-col items-center hover:scale-105 transition-transform"
          >
            <Image
              src={teamMember.image}
              alt={teamMember.name}
              className="rounded-full object-cover"
              width={96}
              height={96}
            />
            <h3 className="mt-2 text-md font-semibold text-center">{teamMember.name}</h3>
            <p className="text-sm text-gray-500">{teamMember.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
