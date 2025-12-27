import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = '', width = 40, height = 40 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />

      {/* M Letter */}
      <path
        d="M 25 70 L 25 35 L 35 50 L 45 35 L 45 70"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* K Letter */}
      <path
        d="M 55 70 L 55 35 M 75 35 L 55 55 L 75 70"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
