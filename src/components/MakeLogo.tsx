import React from 'react';

interface MakeLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'limestone' | 'burgundy';
  size?: 'sm' | 'md' | 'lg';
}

export const MakeLogo: React.FC<MakeLogoProps> = ({
  className = '',
  variant = 'limestone',
  size = 'md',
}) => {
  // Color mappings
  const colorMap = {
    light: '#FFFFFF',
    dark: '#242D36',
    limestone: '#E0D9C9',
    burgundy: '#59212C',
  };

  const fill = colorMap[variant];

  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-11',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 tracking-wider select-none ${className}`}>
      {/* Approved Architectural Arch Window Icon */}
      <svg
        className={`${sizeClasses[size]} w-auto aspect-[20/28] shrink-0`}
        viewBox="0 0 20 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer Arch Frame */}
        <path
          d="M1 27V10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10V27H1Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        {/* Internal Window Mullions */}
        <path d="M10 1V27" stroke={fill} strokeWidth="1.25" strokeLinecap="round" />
        <path d="M1 10H19" stroke={fill} strokeWidth="1.25" strokeLinecap="round" />
        <path d="M1 19H19" stroke={fill} strokeWidth="1.25" strokeLinecap="round" />
      </svg>

      {/* MAKE Typography Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className="text-lg md:text-xl font-medium tracking-[0.22em] uppercase"
          style={{
            color: fill,
            fontFamily: "'Rawline', 'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
          }}
        >
          MAKE
        </span>
        <span
          className="text-[8px] md:text-[9px] tracking-[0.38em] uppercase opacity-75 mt-0.5"
          style={{
            color: fill,
            fontFamily: "'Nohemi', 'Plus Jakarta Sans', sans-serif",
          }}
        >
          DEVELOPERS
        </span>
      </div>
    </div>
  );
};
