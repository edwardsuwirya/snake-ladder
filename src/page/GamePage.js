import {useEffect, useState} from "react";
import {jump} from "../util/jump";
import Board from "./component/board/Board";
import PionPlayer from "./component/player/PionPlayer";
import Dice from "./component/dice/Dice";
import {connect} from "react-redux";
import {
    resetRequestAction,
    setCurrentPlayerRequestAction,
    setPlayerPositionRequestAction,
    setWinnerRequestAction
} from "../state/game/gameAction";

const GamePage = ({
                      totalPlayer,
                      game,
                      setCurrentPlayerRequestAction,
                      setPlayerPositionRequestAction,
                      setWinnerRequestAction,
                      resetRequestAction,
                  }) => {
    const [counterMove, setCounterMove] = useState(null);

    useEffect(() => {
        setPlayerPositionRequestAction(Array(totalPlayer).fill(1));
    }, [game.winner]);

    useEffect(() => {
        const currPlayerPos = game.playerPosition[game.currentPlayer - 1];
        const lastPos = currPlayerPos + game.dice;
        if (lastPos <= 100) {
            setCounterMove(game.dice);
        } else if (lastPos >= 100) {
            setCounterMove(-1);
        }
    }, [game.dice])

    const reset = () => {
        resetRequestAction();
        setCounterMove(null);
    }

    const changePlayer = () => {
        if (game.currentPlayer === '' + totalPlayer) {
            setCurrentPlayerRequestAction('1');
        } else {
            const playerTurn = Number(game.currentPlayer) + 1;
            setCurrentPlayerRequestAction('' + playerTurn);
        }
    }

    useEffect(() => {
        const to = setTimeout(() => {
            if (counterMove != null) {
                if (counterMove === -1) {
                    changePlayer();
                } else if (counterMove > 0 && counterMove <= 6) {
                    setCounterMove(prevState => prevState - 1);
                    playerMovement(1);
                } else {
                    const jumpNo = jump(game.playerPosition[game.currentPlayer - 1]);
                    playerMovement(jumpNo);
                    if (game.dice !== 6 && game.dice !== 0) {
                        changePlayer();
                    }
                }

            }
        }, 500);
        if (game.playerPosition[game.currentPlayer - 1] === 100) {
            setWinnerRequestAction(game.currentPlayer);
        }
        return () => {
            clearTimeout(to);
        };
    }, [counterMove]);

    useEffect(() => {
        if (game.winner) {
            alert('Player ' + game.winner + ' is the winner');
            reset();
        }
    }, [game.winner]);


    const playerMovement = (moveNumber) => {
        const playerNo = game.currentPlayer;
        const newPos = [...game.playerPosition];
        newPos[playerNo - 1] = newPos[playerNo - 1] + moveNumber;
        setPlayerPositionRequestAction(newPos)
    }

    return (
        <div style={{margin: '24px', display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', flexDirection: 'column-reverse', gap: '5px'}}>
                <Board/>
            </div>
            <div style={{marginLeft: '64px'}}>
                <h1 style={{margin: '0px'}}>Simple Snake & Ladder</h1>
                <p style={{margin: '0px'}}>By EnigmaCamp</p>
                <p style={{marginTop: '64px'}}>Player's turn is {<PionPlayer/>}</p>
                <Dice/>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    setCurrentPlayerRequestAction,
    setPlayerPositionRequestAction,
    setWinnerRequestAction,
    resetRequestAction,
}
const mapStateToProps = state => {
    return {game: state.gameReducer};
};
export default connect(mapStateToProps, mapDispatchToProps)(GamePage);