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
    </DisplayWrapper>
  );
};

export default CombinationDisplay;
