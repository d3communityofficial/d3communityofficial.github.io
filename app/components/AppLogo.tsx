'use client';

import React from 'react';

export default function AppLogo() {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='w-full h-full'
    >
      <defs>
        <linearGradient id='d3-gradient-header' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' style={{ stopColor: '#004aad', stopOpacity: 1 }} />
          <stop offset='100%' style={{ stopColor: '#0066ff', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width='32' height='32' rx='8' fill='url(#d3-gradient-header)' />
      <text
        x='16'
        y='14'
        fontFamily='system-ui, -apple-system, sans-serif'
        fontSize='16'
        fontWeight='800'
        fill='white'
        textAnchor='middle'
        dominantBaseline='middle'
      >
        D3
      </text>
      <text
        x='16'
        y='24'
        fontFamily='system-ui, -apple-system, sans-serif'
        fontSize='4'
        fontWeight='600'
        fill='white'
        textAnchor='middle'
        dominantBaseline='middle'
      >
        community
      </text>
    </svg>
  );
}
