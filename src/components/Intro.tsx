'use client';

import React from 'react';

export function Intro() {
  return (
    <section
      className="relative w-full h-dvh overflow-hidden bg-[#F5F6F7] flex flex-col items-center justify-between px-6 py-[8vh]"
      style={{ fontFamily: 'var(--font-hanken-grotesk), sans-serif' }}
    >
      {/* Top Header Group */}
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

          {/* Center platform — large, bottom-center */}
          <div className="absolute z-10 left-1/2 -translate-x-1/2 bottom-[-20%] sm:bottom-[-25%] md:bottom-[-30%] w-[280px] sm:w-[360px] md:w-[440px] lg:w-[500px]">
            <img
              src="assets/intro-platform.png"
              alt="Platform base"
              className="w-full drop-shadow-2xl transition-transform duration-500 ease-out hover:-translate-y-3"
            />
          </div>

          {/* Left dice cube — bottom-left */}
          <img
            src="assets/intro-leftcube.png"
            alt="Left Cube"
            className="hidden sm:block w-[180px] md:w-[280px] lg:w-[330px] z-1 absolute left-[2%] md:left-[1%] bottom-[-2%] md:bottom-[-6%] drop-shadow-xl transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-105"
          />

          {/* Left glow cube — upper-left */}
          <img
            src="assets/intro-leftglow.png"
            alt="Left Glow"
            className="w-[100px] sm:w-[140px] md:w-[210px] lg:w-[270px] z-1 absolute left-[5%] sm:left-[10%] md:left-[17%] top-[-15%] sm:top-[-20%] md:top-[-30%] drop-shadow-xl transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-105"
          />

          {/* Right stack — bottom-right */}
          <img
            src="assets/intro-rightstack.png"
            alt="Right Stack"
            className="hidden sm:block w-[150px] md:w-[220px] lg:w-[250px] z-1 absolute right-[8%] md:right-[15%] bottom-[-10%] md:bottom-[-20%] drop-shadow-xl transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-105"
          />

          {/* Right glass cube — upper-right */}
          <img
            src="assets/intro-rightglass.png"
            alt="Right Glass"
            className="w-[100px] sm:w-[150px] md:w-[230px] lg:w-[290px] z-1 absolute right-[0%] sm:right-[-2%] md:right-[-3%] top-[0%] sm:top-[-5%] md:top-[5%] lg:top-[-15%] drop-shadow-xl transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-105"
          />

        </div>
      </div>

      {/* Footer Text — pinned near bottom */}
      <div className="relative z-20 w-full flex justify-center shrink-0 mb-2 md:mb-4">
        <p className="text-sm text-[#8A8A8A] text-center max-w-[420px] leading-relaxed">
          If you have a problem worth solving,
          <br />
          we have everything else.
        </p>
      </div>
    </section>
  );
}
