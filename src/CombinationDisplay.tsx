// CombinationDisplay.tsx
import React from 'react';
import styled from 'styled-components';

const DisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface CombinationDisplayProps {
  combination: string[];
}

const CombinationDisplay: React.FC<CombinationDisplayProps> = ({ combination }) => {
  return (
    <DisplayWrapper>
      <h2>Combinaciones:</h2>
      <div>{combination.join(' -> ')}</div>

      <h1 style={{ 
        color: 'green',
        fontSize: '2em',
        fontWeight: 'bold',
        textShadow: '0 0 5px #fff, 0 0 1px #fff, 0 0 10px #fff, 0 0 10px green, 0 0 10px green, 0 0 20px green, 0 0 10px green, 0 0 150px green',

      }}>
        Cadena aceptada
      </h1>

    </DisplayWrapper>
  );
};

export default CombinationDisplay;
