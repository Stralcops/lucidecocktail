import React, { useRef, useEffect } from 'react';
import anime from 'animejs';
import './AnimatedTitle.css';
interface TitleProps {
  text: string;
  id: string;
}

const AnimatedTitle: React.FC<TitleProps> = ({ text, id}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (titleRef.current) {
        const letters = titleRef.current.children;
        Array.from(letters).forEach(letter => {
          const rect = (letter as HTMLElement).getBoundingClientRect();
          const dx = event.clientX - (rect.left + rect.width / 2);
          const dy = event.clientY - (rect.top + rect.height / 2);
          const dist = Math.sqrt(dx * dx + dy * dy);
          const offset = Math.min(Math.max(100 - dist, 0), 50);

          anime({
            targets: letter,
            translateX: dx > 0 ? -offset : offset,
            translateY: dy > 0 ? -offset : offset,
            duration: 500,
            easing: 'easeOutElastic(1, .5)'
          });
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id={id}>
    <h1  className='bebas-neue-regular' ref={titleRef}> 
      {text.split('').map((letter, index) => (
        <span key={index} style={{ display: 'inline-block' }}>
          {letter}
        </span>
      ))}
    </h1>
    </div>
  );
};

export default AnimatedTitle;
