'use client';

import React from 'react';

export function Intro() {
  return (
    <>
      <section
        className="relative w-full h-dvh overflow-hidden bg-[#F5F6F7] flex flex-col items-center justify-between px-6 py-[8vh]"
        style={{ fontFamily: 'var(--font-hanken-grotesk), sans-serif' }}
      >
        <div className="relative z-20 w-full max-w-[900px] flex flex-col items-center text-center mx-auto mt-4 md:mt-8">
          <p className="text-sm font-normal text-[#9A9A9A] mb-3 tracking-wide">
            What is SIIF?
          </p>

          <h1 className="text-[22px] md:text-[28px] lg:text-[36px] font-semibold leading-normal md:leading-[1.4] tracking-tight text-[#4A4A4A]">
            SJCET&apos;s structured home for early-stage{' '}
            <br className="hidden md:block" />
            <span className="text-[#FF3B3B]">founders mentorship</span>,{' '}
            <span className="text-[#FF3B3B]">prototyping</span>,{' '}
            <span className="text-[#FF3B3B]">funding</span>,
            <br className="hidden md:block" />
            and a community that pushes back.
          </h1>
        </div>

        {/* 3D Shapes Area */}
        <div className="relative w-full max-w-[1400px] grow mt-4 md:mt-8 mx-auto z-1">
          <div className="absolute inset-0">

            <div className="absolute z-10 left-1/2 -translate-x-1/2 bottom-[-20%] sm:bottom-[-25%] md:bottom-[-30%] w-[280px] sm:w-[360px] md:w-[440px] lg:w-[500px]">
              <img
                src="assets/intro-platform.png"
                alt="Platform base"
                className="w-full drop-shadow-2xl transition-transform duration-500 ease-out hover:-translate-y-3"
              />
            </div>

            <img
              src="assets/intro-leftcube.png"
              alt="Left Cube"
              className="hidden sm:block w-[180px] md:w-[280px] lg:w-[330px] z-1 absolute left-[2%] md:left-[1%] bottom-[-2%] md:bottom-[-6%] drop-shadow-xl transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-105"
            />

            <img
              src="assets/intro-leftglow.png"
              alt="Left Glow"
              className="w-[100px] sm:w-[140px] md:w-[210px] lg:w-[270px] z-1 absolute left-[5%] sm:left-[10%] md:left-[17%] top-[-15%] sm:top-[-20%] md:top-[-30%] drop-shadow-xl transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-105"
            />

            <img
              src="assets/intro-rightstack.png"
              alt="Right Stack"
              className="hidden sm:block w-[150px] md:w-[220px] lg:w-[250px] z-1 absolute right-[8%] md:right-[15%] bottom-[-10%] md:bottom-[-20%] drop-shadow-xl transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-105"
            />

            <img
              src="assets/intro-rightglass.png"
              alt="Right Glass"
              className="w-[100px] sm:w-[150px] md:w-[230px] lg:w-[290px] z-1 absolute right-[0%] sm:right-[-2%] md:right-[-3%] top-[0%] sm:top-[-5%] md:top-[5%] lg:top-[-15%] drop-shadow-xl transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-105"
            />
          </div>
        </div>

        <div className="relative z-20 w-full flex justify-center shrink-0 mb-2 md:mb-4">
          <p className="text-sm text-[#8A8A8A] text-center max-w-[420px] leading-relaxed">
            If you have a problem worth solving,
            <br />
            we have everything else.
          </p>
        </div>
      </section>

      {/* Stats + Video Showcase Section */}
      <section
        className="w-full bg-[#F5F6F7] flex justify-center py-[60px] md:py-[80px] px-6"
        style={{ fontFamily: 'var(--font-hanken-grotesk), sans-serif' }}
      >
        <div className="max-w-[1100px] w-full grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-[32px] md:gap-[48px] items-center">
          <div className="w-full h-[200px] md:h-[260px] bg-[#E5E5E5] rounded-[24px] flex items-center justify-center relative shadow-[inset_4px_4px_10px_rgba(0,0,0,0.05),inset_-4px_-4px_10px_rgba(255,255,255,0.8)] cursor-pointer group overflow-hidden">
            <div className="w-0 h-0 border-t-18 border-t-transparent border-l-30 border-l-[#9A9A9A] border-b-18 border-b-transparent transition-transform duration-200 ease-out group-hover:scale-110 z-10"></div>
            {/* <iframe src="YOUR_VIDEO_URL" className="absolute inset-0 w-full h-full border-none z-20" allowFullScreen></iframe> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[24px] gap-y-[24px]">
            <div className="flex flex-col gap-[24px]">
              <StatCard number="50" highlight="+" label="Startups Incubated" />
              <StatCard number="80" highlight="+" label="Mentors & Experts" />
            </div>
            <div className="flex flex-col gap-[24px] sm:mt-[40px] md:mt-[60px]">
              <StatCard number="2Cr" highlight="₹+" label="Funding Raised" />
              <StatCard number="100" highlight="+" label="Industry Partners" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StatCard({ number, highlight, label }: { number: string; highlight: string; label: string }) {
  return (
  <div className="p-[5px] rounded-[32px] bg-linear-to-r from-[#FFFFFF] to-[#FDFDFD]">
    <div className="bg-[#F8F8F8] rounded-[28px] p-[28px_24px] flex flex-col justify-center min-h-[140px] shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out hover:-translate-y-2">  
        <div className="flex items-baseline gap-[2px]">
          <span className="text-[44px] lg:text-[54px] font-bold text-[#4A4A4A] tracking-tight leading-none">
            {number}
          </span>
          <span className="text-[44px] lg:text-[54px] font-bold tracking-tight leading-none bg-linear-to-r from-[#F12837] to-[#B40591] bg-clip-text text-transparent">
            {highlight}
          </span>
        </div>

        <p className="text-[15px] lg:text-[17px] font-medium text-[#666666] mt-[10px] tracking-wide">
          {label}
        </p>
      </div>
    </div>
  );
}