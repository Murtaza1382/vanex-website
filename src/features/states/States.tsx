import React from "react";

const States = () => {
  return (
    <div className="bg-[#eef4ff] p-4 m-8 rounded-2xl  grid md:grid-cols-4 grid-cols-2 text-center ">
      <div className="flex flex-col justify-between items-center gap-2 p-4">
        <span className="text-[1.4rem] mb-2">👥</span>
        <span className="text-[1.5rem] font-extrabold text-[#2563eb]">
          120+
        </span>
        <span className="text-[#64748b] text-[0.85rem]">Happy Clients</span>
      </div>
      <div className="flex flex-col justify-between items-center gap-2 p-4">
        <span className="text-[1.4rem] mb-2">✅</span>
        <span className="text-[1.5rem] font-extrabold text-[#2563eb]">
          250+
        </span>
        <span className="text-[#64748b] text-[0.85rem]">
          Projects Completed
        </span>
      </div>
      <div className="flex flex-col justify-between items-center gap-2 p-4">
        <span className="text-[1.4rem] mb-2">⏱️</span>
        <span className="text-[1.5rem] font-extrabold text-[#2563eb]">10+</span>
        <span className="text-[#64748b] text-[0.85rem]">Years Experience</span>
      </div>
      <div className="flex flex-col justify-between items-center gap-2 p-4">
        <span className="text-[1.4rem] mb-2">🧑‍🤝‍🧑</span>
        <span className="text-[1.5rem] font-extrabold text-[#2563eb]">50+</span>
        <span className="text-[#64748b] text-[0.85rem]">Team Members</span>
      </div>
    </div>
  );
};

export default States;
