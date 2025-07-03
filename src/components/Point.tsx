import React from 'react';
import './Point.css';

interface PointProps {
  x: number;
  y: number;
  name: string;
  link: string;
}

const Point: React.FC<PointProps> = ({ x, y, name, link }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="point-container"
      style={{ left: `${x}%`, top: `${y}%` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="point" />
      </a>
      {isHovered && <div className="point-name">{name}</div>}
    </div>
  );
};

export default Point;
