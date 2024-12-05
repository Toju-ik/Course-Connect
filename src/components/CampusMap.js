import React, { useState } from 'react';

const buildings = [
    { id: 'A', name: 'Block A', x: 50, y: 50, width: 100, height: 100, color: '#999999', hoverText: 'Block A' },
    { id: 'B', name: 'Block B', x: 200, y: 50, width: 120, height: 100, color: '#bbbbbb', hoverText: 'Next class is here' },
    { id: 'C', name: 'Block C', x: 50, y: 200, width: 150, height: 100, color: '#cccccc', hoverText: 'Class @11am in C102' },
];

const CampusMap = () => {
    const [hoveredBlock, setHoveredBlock] = useState(null);

    return (
        <svg
            viewBox="0 0 400 400"
            style={{ width: '100%', height: '100%', backgroundColor: '#cccccc' }}
        >
            {/* Render buildings */}
            {buildings.map((building) => (
                <g
                    key={building.id}
                    onMouseEnter={() => setHoveredBlock(building.hoverText)} 
                    onMouseLeave={() => setHoveredBlock(null)} 
                >
                    {/* Building Block */}
                    <rect
                        x={building.x}
                        y={building.y}
                        width={building.width}
                        height={building.height}
                        fill={building.color}
                        stroke="#000"
                        strokeWidth="2"
                    />
                    {/* Building Label */}
                    <text
                        x={building.x + building.width / 2}
                        y={building.y + building.height / 2}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#000"
                        fontSize="16"
                        fontWeight="bold"
                    >
                        {building.id}
                    </text>
                </g>
            ))}

            {/* Display Hover Text */}
            {hoveredBlock && (
                <text
                    x="200" 
                    y="380" 
                    textAnchor="middle"
                    fill="#000"
                    fontSize="18"
                    fontWeight="bold"
                    background="white"
                >
                    {hoveredBlock}
                </text>
            )}
        </svg>
    );
};

export default CampusMap;



