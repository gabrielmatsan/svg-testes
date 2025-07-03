import React from 'react';
import image from '../assets/Pontos Análise USP.avif';
import Point from './Point';

// Define the fixed points with name and link
const fixedPoints = [
  { x: 20, y: 30, name: 'Point A', link: 'https://link-a.com' },
  { x: 50, y: 60, name: 'Point B', link: 'https://link-b.com' },
  { x: 80, y: 45, name: 'Point C', link: 'https://link-c.com' },
];

const InteractiveImage: React.FC = () => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        src={image}
        alt="Análise USP"
        style={{ display: 'block', maxWidth: '100%' }} // Make image responsive
      />
      {fixedPoints.map((point, index) => (
        <Point
          key={index}
          x={point.x}
          y={point.y}
          name={point.name}
          link={point.link}
        />
      ))}
    </div>
  );
};

export default InteractiveImage;
