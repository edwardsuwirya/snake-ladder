import './App.css';
import {useEffect, useRef, useState} from "react";
import pionRed from './assets/pion-red.svg';
import pionBlue from './assets/pion-blue.svg';
import trophy from './assets/trophy.svg';

const DiceDot = () => {
    return <div style={{height: '10px', width: '10px', backgroundColor: 'red', borderRadius: '50%'}}></div>

}

const DiceOne = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            <DiceDot/>
        </div>
    )
}
const DiceTwo = () => {
    return (
        <div style={{display: 'flex', width: '100%', flexDirection: 'column'}}>
            <div style={{alignSelf: 'flex-end', flexGrow: 1, margin: '10px', alignItems: 'center'}}>
                <DiceDot/>
            </div>
            <div style={{flexGrow: 1, margin: '10px', alignItems: 'center'}}>
                <DiceDot/>
            </div>
        </div>
    )
}
const DiceThree = () => {
    return (
        <div style={{display: 'flex', width: '100%', flexDirection: 'column'}}>
            <div style={{alignSelf: 'flex-end', flexGrow: 1, margin: '10px'}}>
                <DiceDot/>
            </div>
            <div style={{alignSelf: 'center', flexGrow: 1, margin: '10px'}}>
                <DiceDot/>
            </div>
            <div style={{flexGrow: 1, margin: '10px'}}>
                <DiceDot/>
            </div>
        </div>
    )
}
const DiceFour = () => {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{alignSelf: 'flex-start', flexGrow: 1, margin: '10px'}}>
                    <DiceDot/>
                </div>
                <div style={{alignSelf: 'flex-end', flexGrow: 1, margin: '10px'}}>
                    <DiceDot/>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{alignSelf: 'flex-start', flexGrow: 1, margin: '10px'}}>
                    <DiceDot/>
                </div>
                <div style={{alignSelf: 'flex-end', flexGrow: 1, margin: '10px'}}>
                    <DiceDot/>
                </div>
            </div>
        </div>
    )
}
const DiceFive = () => {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{alignSelf: 'flex-start', flexGrow: 1, margin: '10px'}}>
                    <DiceDot/>
                </div>
                <div style={{alignSelf: 'flex-end', flexGrow: 1, margin: '10px'}}>
                    <DiceDot/>
                </div>
            </div>
            <div>
                <DiceDot/>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{alignSelf: 'flex-start', flexGrow: 1, margin: '10px'}}>
                    <DiceDot/>
                </div>
                <div style={{alignSelf: 'flex-end', flexGrow: 1, margin: '10px'}}>
                    <DiceDot/>
                </div>
            </div>
        </div>
    )
}
const DiceSix = () => {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{alignSelf: 'flex-start', flexGrow: 1, margin: '10px'}}>
                    <DiceDot/>
                </div>
                <div style={{alignSelf: 'flex-end', flexGrow: 1, margin: '10px'}}>
                    <DiceDot/>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{alignSelf: 'flex-start', flexGrow: 1, margin: '10px'}}>
                    <DiceDot/>
                </div>
                <div style={{alignSelf: 'flex-end', flexGrow: 1, margin: '10px'}}>
                    <DiceDot/>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{alignSelf: 'flex-start', flexGrow: 1, margin: '10px'}}>
                    <DiceDot/>
                </div>
                <div style={{alignSelf: 'flex-end', flexGrow: 1, margin: '10px'}}>
                    <DiceDot/>
                </div>
            </div>
        </div>
    )
}

const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Dice = (props) => {
    let diceNum;
    const {num, onRoll} = props;
    switch (num) {
        case 1:
            diceNum = <DiceOne/>
            break;
        case 2:
            diceNum = <DiceTwo/>
            break;
        case 3:
            diceNum = <DiceThree/>
            break;
        case 4:
            diceNum = <DiceFour/>
            break;
        case 5:
            diceNum = <DiceFive/>
            break;
        case 6:
            diceNum = <DiceSix/>
            break;
    }
    return (
        <div style={{
            height: '96px',
            width: '96px',
            backgroundColor: 'whitesmoke',
            display: 'flex',
            margin: '24px',
            borderRadius: '20px'
        }} onClick={onRoll}>
            {diceNum}
        </div>
    )
}

const Box = (props) => {
    const {boxNum} = props;
    const m = jump(boxNum);
    let notes = '';
    let color = 'whitesmoke';
    if (boxNum === 100) {
        notes = <span> <img style={{width: '24px', height: '24px'}} src={trophy} alt="trophy"/></span>
        color = 'lightblue';
    } else {
        if (m > 0) {
            notes = `u->${props.boxNum + m}`;
            color = 'lightgreen';
        } else if (m < 0) {
            notes = `d->${props.boxNum + m}`
            color = 'orange';
        } else {
            notes = '';
        }
    }


    return (
        <div style={{height: '72px', width: '72px', backgroundColor: color, borderColor: 'gray'}}>
            <div style={{marginLeft: '5px', marginTop: '5px', fontWeight: 'bolder'}}>
                <span style={{fontSize: '12px'}}>{props.boxNum} {notes}</span>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

const jump = (pos) => {
    switch (pos) {
        case 3:
            return 14;
        case 9:
            return 4;
        case 16:
            return 31;
        case 20:
            return 58;
        case 23:
            return -19;
        case 29:
            return -22;
        case 37:
            return -12;
        case 50:
            return 22;
        case 55:
            return -45;
        case 63:
            return 18;
        case 71:
            return 24;
        case 85:
            return -5;
        case 97:
            return -23;
        default:
            return 0;
    }
}

const PionPlayer = (props) => {
    switch (props.playerNum) {
        case '1':
            return (
                <img style={{width: '24px', height: '24px'}} src={pionRed} alt="pion"/>
            )
        case '2':
            return (
                <img style={{width: '24px', height: '24px'}} src={pionBlue} alt="pion"/>
            )
    }

}

const App = () => {
    const [dice, setDice] = useState(0);
    const [playerPos, setPlayerPos] = useState({
        currentPlayer: '1', player1: 98, player2: 1
    });
    const [counterMove, setCounterMove] = useState(0);

    const [winner, setWinner] = useState(null);

    const numberOfPlayer = useRef(2);

    useEffect(() => {
        if (winner) {
            alert('Player ' + winner + ' is the winner');
            reset();
        }
    }, [winner]);

    const reset = () => {
        setDice(0);
        setWinner(null);
        setPlayerPos({
            currentPlayer: '0', player1: 1, player2: 1
        })
    }

    useEffect(() => {
        const changePlayer = () => {
            if (playerPos.currentPlayer == numberOfPlayer.current) {
                setPlayerPos(prevState => ({...prevState, currentPlayer: '1'}));
            } else {
                const playerTurn = Number(playerPos.currentPlayer) + 1;
                setPlayerPos(prevState => ({...prevState, currentPlayer: '' + playerTurn}));
            }
        }
        const to = setTimeout(() => {
            if (counterMove === -1) {
                changePlayer();
                setDice(0);
            } else if (counterMove !== 0) {
                setCounterMove(prevState => prevState - 1);
                playerMovement(1);
            } else {
                let jumpNo = jump(playerPos.player1);
                playerMovement(jumpNo);
                jumpNo = jump(playerPos.player2);
                playerMovement(jumpNo);
                if (dice !== 6 && dice !== 0) {
                    changePlayer();
                }
                setDice(0);
            }
        }, 500);
        return () => {
            clearTimeout(to);
        };
    }, [counterMove]);

    const playerMovement = (moveNumber) => {
        const validatePos100 = (playerNo, playerPos) => {
            let lastPos = playerPos + moveNumber;
            if (lastPos === 100) {
                setWinner(playerNo);
            }
            return lastPos;
        }
        switch (playerPos.currentPlayer) {
            case '1':
                setPlayerPos(prevState => ({...prevState, player1: validatePos100('1', prevState.player1)}));
                break;
            case '2':
                setPlayerPos(prevState => ({...prevState, player2: validatePos100('2', prevState.player2)}));
                break;
        }
    }

    const boxFactory = (rowIdx) => {
        const boxes = [];

        const setPlayerPion = (boxIdx) => {
            const playersPion = [];
            if (boxIdx === playerPos.player1) {
                playersPion.push(<PionPlayer playerNum={'1'}/>)
            }
            if (boxIdx === playerPos.player2) {
                playersPion.push(<PionPlayer playerNum={'2'}/>)
            }
            return playersPion;
        }
        if (rowIdx % 2 !== 0) {
            for (let i = (rowIdx * 10) + 10; i >= (rowIdx * 10) + 1; i--) {
                boxes.push(<Box boxNum={i}>
                    {setPlayerPion(i)}
                </Box>)

            }
        } else {
            for (let i = (rowIdx * 10) + 1; i <= (rowIdx * 10) + 10; i++) {
                boxes.push(<Box boxNum={i}>
                    {setPlayerPion(i)}
                </Box>)
            }
        }

        return (
            <div style={{display: 'flex', flexDirection: 'row', gap: '5px'}}>
                {boxes}
            </div>
        );
    }

    const boardFactory = () => {
        const rows = [];
        for (let i = 0; i < 10; i++) {
            rows.push(boxFactory(i));
        }
        return rows;
    }

    const roll = () => {
        if (counterMove === 0 || counterMove === -1) {
            const diceNo = randomInteger(1, 6);
            setDice(diceNo);
            switch (playerPos.currentPlayer) {
                case '1':
                    const lastPos1 = playerPos.player1 + diceNo
                    if (lastPos1 <= 100) {
                        setCounterMove(diceNo);
                    } else {
                        setCounterMove(-1);
                    }
                    break;
                case '2':
                    const lastPos2 = playerPos.player2 + diceNo
                    if (lastPos2 <= 100) {
                        setCounterMove(diceNo);
                    } else {
                        setCounterMove(-1);
                    }
                    break;
            }
        }
    }
    return (
        <div style={{margin: '24px', display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'column-reverse', gap: '5px'}}>
                {boardFactory()}
            </div>
            <div style={{marginLeft: '64px'}}>
                <h1 style={{margin: '0px'}}>Simple Snake & Ladder</h1>
                <p style={{margin: '0px'}}>By EnigmaCamp</p>
                <p style={{marginTop: '64px'}}>Player's turn is {<PionPlayer playerNum={playerPos.currentPlayer}/>}</p>
                <Dice num={dice} onRoll={roll}/>
            </div>
        </div>
    );
}

export default App;
