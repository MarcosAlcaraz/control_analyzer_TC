// GameController.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import xbox_green from './assets/xbox_green1.png';
import A from './assets/buttons/A.png';
import B from './assets/buttons/B.png';
import X from './assets/buttons/X.png';
import Y from './assets/buttons/Y.png';
import LB from './assets/buttons/LB.png';
import RB from './assets/buttons/RB.png';
import LS from './assets/buttons/Stick.png';
import RS from './assets/buttons/Stick.png';
import DPad from './assets/buttons/DPad.png';
import SquareUp from './assets/buttons/Squaretransparent.png';
import SquareDown from './assets/buttons/Squaretransparent.png';
import SquareLeft from './assets/buttons/Squaretransparent.png';
import SquareRight from './assets/buttons/Squaretransparent.png';

const ControllerWrapper = styled.div`
	position: relative;
	display: inline-block;
`;

const Button = styled.button<{ position: { top: string; left: string } }>`
    position: absolute;
    top: ${(props) => props.position.top};
    left: ${(props) => props.position.left};
    width: 12%;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
`;

const ButtonImage = styled.img<{ size: { width: string; height: string } }>`
    width: ${(props) => props.size.width};
    height: ${(props) => props.size.height};
    transition: transform 0.1s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: scale(0.9);
    }
`;

const ControlImage = styled.img`
    display: block;
    margin: 0 auto;
    width: 80%;
    height: auto;
`;


interface GameControllerProps {
	onButtonPress: (button: string) => void;
}

const GameController: React.FC<GameControllerProps> = ({ onButtonPress }) => {
	
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);

    const handleButtonPress = (button: string) => {
		
        onButtonPress(button);

        // delete animate__bounceIn, animate__animated and animate__bounceIn in element with id DPad 
        const element = document.getElementById('DPad');
        if (element) {
            element.classList.remove('animate__bounceIn');
            element.classList.remove('animate__animated');
            element.classList.remove('animate__bounceIn');
        }

        switch (button) {
            case 'DPadUp':
                setRotationX(25);
                setRotationY(0);
                break;
            case 'DPadDown':
                setRotationX(-25);
                setRotationY(0);
                break;
            case 'DPadLeft':
                setRotationX(0);
                setRotationY(-25);
                break;
            case 'DPadRight':
                setRotationX(0);
                setRotationY(25);
                break;
            default:
                setRotationX(0);
                setRotationY(0);
                break;
        }

        setTimeout(() => {
            setRotationX(0);
            setRotationY(0);
        }
        , 150);
	};

	return (
		<ControllerWrapper>
			<ControlImage src={xbox_green} alt="Controller"
                className="animate__animated animate__fadeInUp animate__delay-.5s"
            />

			<Button className='animate__animated animate__bounceIn animate__delay-1s' position={{ top: '11.9%', left: '64.7%' }} onClick={() => handleButtonPress('Y')}>
                <ButtonImage src={Y}  alt="Button Y" size={{ width: '58%', height: 'auto' }}/>
			</Button>

			<Button className='animate__animated animate__bounceIn animate__delay-1s' position={{ top: '21.5%', left: '59.35%' }} onClick={() => handleButtonPress('X')}>
                <ButtonImage src={X}  alt="Button X" size={{ width: '58%', height: 'auto' }}/>
            </Button>

            <Button className='animate__animated animate__bounceIn animate__delay-1s' position={{ top: '21.5%', left: '70.13%' }} onClick={() => handleButtonPress('B')}>
                <ButtonImage src={B}  alt="Button B" size={{ width: '58%', height: 'auto' }}/>
            </Button>

            <Button className='animate__animated animate__bounceIn animate__delay-1s' position={{ top: '31.2%', left: '64.7%' }} onClick={() => handleButtonPress('A')}>
                <ButtonImage src={A}  alt="Button A" size={{ width: '58%', height: 'auto' }}/>
            </Button>

            <Button className='animate__animated animate__bounceIn animate__delay-1s' position={{ top: '0.15%', left: '22.3%' }} onClick={() => handleButtonPress('LB')}>
                <ButtonImage src={LB}  alt="Button LB" size={{ width: '144%', height: 'auto' }}/>
            </Button>

            <Button className='animate__animated animate__bounceIn animate__delay-1s' position={{ top: '0.15%', left: '60.3%' }} onClick={() => handleButtonPress('RB')}>
                <ButtonImage src={RB}  alt="Button RB" size={{ width: '144%', height: 'auto' }}/>
            </Button>

            <Button className='animate__animated animate__bounceIn animate__delay-1s' position={{ top: '19.5%', left: '23.75%' }} onClick={() => handleButtonPress('LS')}>
                <ButtonImage src={LS}  alt="Button LS" size={{ width: '74%', height: 'auto' }}/>
            </Button>

            <Button className='animate__animated animate__bounceIn animate__delay-1s' position={{ top: '40.9%', left: '54.64%' }} onClick={() => handleButtonPress('RS')}>
                <ButtonImage src={RS}  alt="Button RS" size={{ width: '74%', height: 'auto' }}/>
            </Button>

            <button
                id='DPad'
                style={{ 
                    position: 'absolute', 
                    top: '39.8%', 
                    left: '33.6%', 
                    width: '12%', 
                    padding: '0', 
                    backgroundColor: 'transparent', 
                    border: 'none', 
                    cursor: 'pointer', 
                    transition: 'transform 0.1s ease-in-out',
                    transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
                }}
                className='animate__animated animate__bounceIn animate__delay-1s'
                onClick={() => handleButtonPress('DPadDown')}>
                <img 
                    src={DPad}
                    alt="Button DPad"
                    style={{ 
                        width: '100%', 
                        height: 'auto',
                    }}        
                />
            </button>

            <Button position={{ top: '39.8%', left: '33.6%' }} onClick={() => handleButtonPress('DPadUp')}>
                <ButtonImage src={SquareUp}  alt="Button DPad" size={{ width: '33%', height: 'auto' }}/>
            </Button>

            <Button position={{ top: '53.8%', left: '33.6%' }} onClick={() => handleButtonPress('DPadDown')}>
                <ButtonImage src={SquareDown}  alt="Button DPad" size={{ width: '33%', height: 'auto' }}/>
            </Button>

            <Button position={{ top: '46.8%', left: '29.6%' }} onClick={() => handleButtonPress('DPadLeft')}>
                <ButtonImage src={SquareLeft}  alt="Button DPad" size={{ width: '33%', height: 'auto' }}/>
            </Button>
            
            <Button position={{ top: '46.8%', left: '37.6%' }} onClick={() => handleButtonPress('DPadRight')}>
                <ButtonImage src={SquareRight}  alt="Button DPad" size={{ width: '33%', height: 'auto' }}/>
            </Button>

		</ControllerWrapper>
	);
};

export default GameController;
