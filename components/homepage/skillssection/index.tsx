"use client";

import Image from "next/image";

export default function SkillsSection() {
  const skills = [
    { name: "Adobe", url: "/img/skills/exxcel-removebg-preview.png" },
    { name: "National Bank", url: "/img/skills/mysql-removebg-preview.png" },
    { name: "Coca Cola", url: "/img/skills/powerbi-removebg-preview.png" },
    { name: "Mattered", url: "/img/skills/python-removebg-preview.png" },
    { name: "Subway", url: "/img/skills/sqlmanagementstudio-removebg-preview.png" },
    { name: "Codecademy", url: "/img/skills/exxcel-removebg-preview.png" },
  ];

  return (
        <div className="w-full py-32 overflow-hidden relative bg-white rounded-b-[100px]">
      <div className="flex space-x-12 animate-marquee">
        {[...skills, ...skills].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center ms-28 justify-center max-h-16"
          >
            <Image
              src={client.url}
              alt={client.name}
              width={100}
              height={90}
              className="grayscale hover:grayscale-0 transition-all duration-300 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Tailwind Keyframes */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
          width: calc(2 * ${skills.length} * 12rem);  
        }
      `}</style>
    </div>
  );
}
