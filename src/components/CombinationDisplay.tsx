// CombinationDisplay.tsx
import React, { useEffect } from 'react';
import { DisplayWrapper } from '../styles';
import { Toaster, toast } from 'sonner'
import sheet_sound from '../assets/sounds/sheet_sound.mp3';

interface CombinationDisplayProps {
  combination: string[];
  currentState: string;
}

const CombinationDisplay: React.FC<CombinationDisplayProps> = ({ combination, currentState }) => {
  
    const audioRef = React.createRef<HTMLAudioElement>();

    useEffect(() => {
        if (currentState) {
            toast.success(currentState);
            playSound();
        }
    }, [currentState]);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };
    
    return (
      <DisplayWrapper>

          <span style={{
              fontSize: '1em',
              fontWeight: 'bold',
              color: 'white',
              textShadow: '0 0',
              float: 'right',
              position: 'absolute',
              top: '20px',
              
          }}>
              Puedes revisar las combinaciones <a href="https://fan-spot-ab0.notion.site/Proyecto-TC-bb1284375f6549babce439dd90a6365a" target="_blank" rel="noreferrer">aquí</a>.
          </span>

          <h1>Estado actual:</h1>
          <div>{currentState}</div>

          <hr 
              style={{
                  border: '15px',
                  color: 'white',
                  backgroundColor: 'white',
                  height: 5,
                  zIndex: 1,
              }}
          />

          <h2>Combinaciones:</h2>
          <div>{combination.join(' -> ')}</div>

          <h1 style={{ 
              color: 'green',
              fontSize: '2em',
              fontWeight: 'bold',
              textShadow: '0 0 5px #fff, 0 0 1px #fff, 0 0 10px #fff, 0 0 10px green, 0 0 10px green, 0 0 20px green, 0 0 10px green, 0 0 150px green',
          }}>
              {currentState ? 'Cadena aceptada' : ''}
          </h1>

          <audio ref={audioRef} src={sheet_sound} />

          <div>
              <Toaster expand={true} richColors />
          </div>

      </DisplayWrapper>
    );
};

export default CombinationDisplay;
