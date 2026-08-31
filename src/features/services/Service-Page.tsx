import React from "react";

const ServicePage = () => {
  return (
    <main>
      <div className="flex flex-col justify-center items-center text-center px-8 mt-10">
        <h3 className="text-[#2563eb] text-[0.8rem] tracking-[0.06em] my-3 font-bold uppercase">
          our services
        </h3>
        <h1 className="font-extrabold text-[2.1rem] leading-[1.2] mb-4">
          What We Do
        </h1>
        <p className="text-[#64748b] mb-6">
          We provide wide range of digital services to help businesses grow and
          succeed online.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6 px-4 mx-4 my-12">
        <div className="px-6 py-10 border border-[#eef4ff] shadow rounded-lg hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ease-in-out">
          <span className="bg-[#eef4ff] p-3 rounded-md text-2xl">💻</span>
          <h1 className="font-bold text-[1.1rem] mb-3 mt-6">Web Development</h1>
          <p className="text-[0.92rem] text-[#64748b] leading-6">
            We build fast, responsive and modern websites that convert visitors
            into customers.
          </p>
        </div>
        <div className="px-6 py-10 border border-[#eef4ff] shadow rounded-lg hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ease-in-out">
          <span className="bg-[#eef4ff] p-3 rounded-md text-2xl">📱</span>
          <h1 className="font-bold text-[1.1rem] mb-3 mt-6">
            Mobile Development
          </h1>
          <p className="text-[0.92rem] text-[#64748b] leading-6">
            We create high performance mobile apps for iOS and Android
            platforms.
          </p>
        </div>
        <div className="px-6 py-10 border border-[#eef4ff] shadow rounded-lg hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ease-in-out">
          <span className="bg-[#eef4ff] p-3 rounded-md text-2xl">🎨</span>
          <h1 className="font-bold text-[1.1rem] mb-3 mt-6">UI/UX Design</h1>
          <p className="text-[0.92rem] text-[#64748b] leading-6">
            We design beautiful and intuitive interfaces that provide great user
            experience.
          </p>
        </div>
        <div className="px-6 py-10 border border-[#eef4ff] shadow rounded-lg hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ease-in-out">
          <span className="bg-[#eef4ff] p-3 rounded-md text-2xl">📊</span>
          <h1 className="font-bold text-[1.1rem] mb-3 mt-6">
            Digital Marketing
          </h1>
          <p className="text-[0.92rem] text-[#64748b] leading-6">
            We help you reach your audience and grow your brand with digital
            marketing.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ServicePage;
