import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import './Logo.css';
import { ReactComponent as LucideLogoSvg } from './assets/logo_without_bg.svg';

const Logo: React.FC = () => {
  const logoRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      const paths = logoRef.current.querySelectorAll('path');
      console.log('Paths found:', paths); // Pour déboguer

      paths.forEach((path) => {
        const length = path.getTotalLength();
        console.log('Path length:', length); // Pour déboguer
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        console.log('Path style:', path.style.strokeDasharray, path.style.strokeDashoffset); // Pour déboguer
      });

      anime({
        targets: paths,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: (el, i) => i * 250,
        direction: 'alternate',
        loop: true
      });
    }
  }, []);

  return (
    <div className="logo-container">
      <LucideLogoSvg ref={logoRef} className="logo-svg" />
    </div>
  );
}

export default Logo;
