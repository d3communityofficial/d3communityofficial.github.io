'use client';

import { Github, Twitter, Linkedin, Youtube, Instagram, CalendarDays, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import AppLogo from './AppLogo';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className='flex justify-between items-center gap-4 sm:gap-0 px-2'>
      <div className='flex items-center gap-4'>
        <div className='w-12 h-12 rounded-2xl shadow-lg border border-white/10 overflow-hidden'>
          <AppLogo />
        </div>
        <div>
          <h1 className='font-bold sm:text-4xl text-2xl leading-none tracking-tight'>Digital Dreamers Den</h1>
        </div>
      </div>
      <div className='flex gap-3 items-center'>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className='w-10 h-10 rounded-full bg-dark-card border border-dark-border cursor-pointer flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-dark-primary transition-all'
          aria-label='Toggle theme'
        >
          {theme === 'dark' ? <Sun className='w-5 h-5' /> : <Moon className='w-5 h-5' />}
        </button>

        <a
          href='#'
          className='w-10 h-10 hidden rounded-full bg-dark-card border border-dark-border sm:flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-dark-primary transition-all'
          aria-label='GitHub'
        >
          <Github className='w-5 h-5' />
        </a>
        <a
          href='#'
          className='w-10 h-10 hidden rounded-full bg-dark-card border border-dark-border sm:flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-dark-primary transition-all'
          aria-label='Twitter'
        >
          <Twitter className='w-5 h-5' />
        </a>
        <a
          href='#'
          className='w-10 h-10 hidden rounded-full bg-dark-card border border-dark-border sm:flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-dark-primary transition-all'
          aria-label='LinkedIn'
        >
          <Linkedin className='w-5 h-5' />
        </a>
        <a
          href='#'
          className='w-10 h-10 hidden rounded-full bg-dark-card border border-dark-border sm:flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-dark-primary transition-all'
          aria-label='YouTube'
        >
          <Youtube className='w-5 h-5' />
        </a>
        <a
          href='#'
          className='w-10 h-10 hidden rounded-full bg-dark-card border border-dark-border sm:flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-dark-primary transition-all'
          aria-label='Instagram'
        >
          <Instagram className='w-5 h-5' />
        </a>
        <a
          href='#'
          className='w-10 h-10 hidden rounded-full bg-dark-card border border-dark-border sm:flex items-center justify-center text-dark-muted hover:text-dark-text hover:border-dark-primary transition-all'
          aria-label='Meetup Registration'
        >
          <CalendarDays className='w-5 h-5' />
        </a>
      </div>
    </header>
  );
}
