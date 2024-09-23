import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  label: string;
  href?: string;
  bgColor: string;
  textColor: string;
  hoverBgColor: string;
  width?: string;
  height?: string;
  border?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  bgColor,
  textColor,
  hoverBgColor,
  width = 'auto',
  height = 'auto',
  border = 'none',
}) => {
  return (
    <Link href={href || ''} legacyBehavior>
      <a
        className={`px-4 py-2 rounded-lg inline-flex items-center transition-colors duration-300`}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          width,
          height,
          border,
        }}
        // Using Tailwind's hover class dynamically in the style object
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = hoverBgColor;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = bgColor;
        }}
      >
        {label}
      </a>
    </Link>
  );
};

export default Button;
