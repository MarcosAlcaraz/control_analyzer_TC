import React, { useState } from 'react'
import './App.css'

import styled from 'styled-components';
import GameController from './GameController';
import CombinationDisplay from './CombinationDisplay';
import GameController3D from './GameController3D';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


const AppWrapper = styled.div`
    display: flex;
    height: 100vh;
    position: relative;
`;

const LeftPanel = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const RightPanel = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Divider = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background-color: #ccc;
    transform: translateX(-50%);
`;

const ResetButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    font-size: 16px;
    background-color: #3498db;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
`;


const App: React.FC = () => {

    const [combination, setCombination] = useState<string[]>([]);

    // const handleReset = () => {
    //     setCombination([]);
    // };

    const handleReset = () => {
        setCombination([]);
    };

    return (
        <AppWrapper>
            <LeftPanel>
                <GameController onButtonPress={(button) => setCombination([...combination, button])} />
                {/* <Canvas>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <GameController3D onButtonPress={(button) => setCombination([...combination, button])} />
                    <OrbitControls />
                </Canvas> */}
            </LeftPanel>
            <Divider />
            <RightPanel>
                <CombinationDisplay combination={combination} />
            </RightPanel>
            <ResetButton onClick={handleReset}>Reset</ResetButton>
        </AppWrapper>
    )
}

export default App
