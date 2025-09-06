import { Link } from '@inertiajs/react';

export default function Hero() {
  return (
    <section className="relative mx-auto min-h-svh max-w-10/12 px-4 sm:px-6 lg:px-8">
      <div className="py-[104px]">
        <div className="flex flex-col items-center justify-center">
          <div className="inline-flex items-center space-x-2 rounded-full bg-blue-900/40 px-3 py-1 leading-none ring-1 ring-blue-300/20">
            <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
            <span className="text-xs font-medium tracking-wide text-blue-100/90">
              Peterborough, UK
            </span>
          </div>
          <h1 className="py-[16px] text-center text-5xl font-extrabold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl">
            Elevate Your Game
            <span className="block bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Be Active Be Healthy
            </span>
            Be Happy!
          </h1>
          <p className="max-w-xl text-center text-lg leading-normal text-blue-200/60">
            World‑class coaching, elite training programs, and a culture of
            excellence for all ages and abilities.
          </p>
          <div className="flex flex-col gap-3 py-[32px] sm:flex-row">
            <Link href={route('program_group.index')} className="btn-primary">
              Explore Programs
            </Link>
            <Link href={route('faq.index')} className="btn-secondary">
              FAQs
            </Link>
          </div>
          <div className="flex items-center space-x-6 text-sm text-blue-100/80">
            <div className="flex items-center space-x-2">
              <img
                src="/storage/assets/ball.svg"
                alt="Ball"
                className="h-5 w-5 opacity-80"
              />
              <span>UEFA‑inspired drills</span>
            </div>
            <div className="hidden items-center space-x-2 sm:flex">
              <img
                src="/storage/assets/shield.svg"
                alt="Shield"
                className="h-5 w-5 opacity-80"
              />
              <span>Safeguarding first</span>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden rounded-sm bg-blue-900/30 shadow-2xl ring-1 ring-blue-300/10 backdrop-blur-md">
        <img
          src="storage/assets/fieldbg.jpeg"
          alt="Be Active Football Academy training"
          className="min-w-full rounded-sm object-cover"
        />
      </div>
    </section>
  );
}
