// App.tsx
import React, { useState, useEffect } from 'react'
import './App.css'
import GameController from './components/GameController';
import CombinationDisplay from './components/CombinationDisplay';
import {
    AppWrapper,
    LeftPanel,
    RightPanel,
    Divider,
    ResetButton,
} from './styles';
import { sheets, skills } from './data';

const App: React.FC = () => {

    const [combination, setCombination] = useState<string[]>([]);
    const [currentState, setCurrentState] = useState<string>(''); // Estado actual del autómata

    useEffect(() => {
        handleCombinationChange();
    }, [combination]);
    
    const handleCombinationChange = () => {
        const timeout = setTimeout(() => {
            validateCombination();
        }, 1500);

        return () => clearTimeout(timeout);
    };
    
    const validateCombination = () => {
        const allCombinations = [...sheets, ...skills];

        for (const item of allCombinations) {
            const isValidCombination = validateItemCombination(item.combination);
            if (isValidCombination) {
                setCurrentState(item.name);
                return;
            }
        }

        setCurrentState('');
    };
    
    const validateItemCombination = (itemCombination: string[]) => {
        return (
            itemCombination.length === combination.length &&
            itemCombination.every((value, index) => value === combination[index])
        );
    };
    
    const handleReset = () => {
        setCombination([]);
        setCurrentState('');
    };

    return (
        <AppWrapper>
            <LeftPanel>
                <GameController onButtonPress={(button) => setCombination([...combination, button])} />
            </LeftPanel>
            <Divider />
            <RightPanel>
                <CombinationDisplay combination={combination} currentState={currentState} />
            </RightPanel>
            <ResetButton onClick={handleReset}>Reset</ResetButton>
        </AppWrapper>
    )
}

export default App
