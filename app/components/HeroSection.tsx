import { ArrowRight } from 'lucide-react';
import Robot3D from './Robot3D';

export default function HeroSection() {
  return (
    <div
      data-hero-section
      className='md:col-span-2 md:row-span-2 bg-dark-card rounded-bento p-8 md:p-12 border border-dark-border bento-card relative overflow-hidden group flex flex-col justify-between'
    >
      {/* 3D Robot Model */}
      <Robot3D />

      {/* Glowing Orb Background with new brand color */}
      <div
        className='absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-0'
        style={{ background: 'radial-gradient(circle, rgba(0, 74, 173, 0.3) 0%, transparent 70%)' }}
      ></div>

      <div className='relative z-20'>
        <div
          className='inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold mb-6'
          style={{
            backgroundColor: 'rgba(0, 74, 173, 0.1)',
            borderColor: 'rgba(0, 74, 173, 0.3)',
            color: 'var(--color-primary-light)',
          }}
        >
          <span className='relative flex h-2 w-2'>
            <span
              className='animate-ping absolute inline-flex h-full w-full rounded-full opacity-75'
              style={{ backgroundColor: 'var(--color-primary-light)' }}
            ></span>
            <span
              className='relative inline-flex rounded-full h-2 w-2'
              style={{ backgroundColor: 'var(--color-primary)' }}
            ></span>
          </span>
          BUILDING THE FUTURE
        </div>

        <h2 className='text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight'>
          Dreamers <br />
          <span className='text-gradient'>Ship Code.</span>
        </h2>

        <p className='text-lg text-dark-muted mb-8 max-w-md leading-relaxed'>
          A vibrant tech community that brings together AI Full-Stack Developers to build the future.
        </p>

        <p className='text-lg text-dark-muted mb-8 max-w-md leading-relaxed'>
          We host events, workshops, and networking opportunities that connect talented engineers with cutting-edge
          technology and industry leaders.
        </p>

        <div className='flex gap-4'>
          <a
            href='#events'
            className='inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:scale-105'
            style={{ background: 'var(--gradient-primary)', color: 'white' }}
          >
            Explore Events <ArrowRight className='w-4 h-4' />
          </a>
          <a
            href='https://bento.me/d3community'
            className='inline-flex items-center gap-2 px-6 py-3 bg-dark-card border border-dark-border text-dark-text rounded-xl font-bold hover:border-dark-primary transition-colors'
          >
            Join Discord
          </a>
        </div>
      </div>
    </div>
  );
}
