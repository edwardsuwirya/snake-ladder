import {useEffect, useState} from "react";
import {jump} from "../util/jump";
import {randomInteger} from "../util/randomUtil";
import Board from "./component/board/Board";
import PionPlayer from "./component/player/PionPlayer";
import Dice from "./component/dice/Dice";

const GamePage = ({totalPlayer}) => {
    const [dice, setDice] = useState(0);
    const [playerPos, setPlayerPos] = useState({
        currentPlayer: '1', pos: [1, 1]
    });
    const [counterMove, setCounterMove] = useState(0);

    const [winner, setWinner] = useState(null);


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
            currentPlayer: '0', pos: [1, 1]
        })
    }

    useEffect(() => {
        const changePlayer = () => {
            if (playerPos.currentPlayer === '' + totalPlayer) {
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
                playerPos.pos.forEach((p) => {
                    const jumpNo = jump(p);
                    playerMovement(jumpNo);
                })
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
        playerPos.pos.forEach((p, idx) => {
            const pIdx = idx + 1;
            if (playerPos.currentPlayer === '' + pIdx) {
                setPlayerPos(prevState => {
                    prevState.pos[idx] = validatePos100('' + pIdx, p);
                    return {...prevState, pos: [...prevState.pos]}
                });
            }
        })
    }


    const roll = () => {
        if (counterMove === 0 || counterMove === -1) {
            const diceNo = randomInteger(1, 6);
            setDice(diceNo);
            playerPos.pos.forEach((p, idx) => {
                const pIdx = idx + 1;
                if (playerPos.currentPlayer === '' + pIdx) {
                    console.log('rolling, curr player ' + pIdx);
                    const lastPos = p + diceNo
                    if (lastPos <= 100) {
                        setCounterMove(diceNo);
                    } else {
                        setCounterMove(-1);
                    }
                }
            })
        }
    }
    return (
        <div style={{margin: '24px', display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'column-reverse', gap: '5px'}}>
                <Board playerPos={playerPos.pos}/>
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

export default GamePage;