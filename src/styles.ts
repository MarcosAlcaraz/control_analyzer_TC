import styled from 'styled-components';


// ----------------- App -----------------//

export const AppWrapper = styled.div`
    display: flex;
    height: 100vh;
    position: relative;
`;

export const LeftPanel = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const RightPanel = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Divider = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background-color: #ccc;
    transform: translateX(-50%);
`;

export const ResetButton = styled.button`
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
    transition: 0.2s ease-in-out;
    &:hover {
        background-color: #2980b9;
        transform: translate(-50%, -50%) scale(1.05);
    }
    &:active {
        background-color: #2471a3;
    }
`;



//----------------- Display Combination -----------------//

export const DisplayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;



// ----------------- GameController -----------------//

export const ControllerWrapper = styled.div`
	position: relative;
	display: inline-block;
`;

export const Button = styled.button<{ position: { top: string; left: string } }>`
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

export const ButtonImage = styled.img<{ size: { width: string; height: string } }>`
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

export const ControlImage = styled.img`
    display: block;
    margin: 0 auto;
    width: 80%;
    height: auto;
`;



