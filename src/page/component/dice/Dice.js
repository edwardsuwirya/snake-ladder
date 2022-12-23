import DiceOne from "./DiceOne";
import DiceTwo from "./DiceTwo";
import DiceThree from "./DiceThree";
import DiceFour from "./DiceFour";
import DiceFive from "./DiceFive";
import DiceSix from "./DiceSix";
import {rollDiceRequestAction} from "../../../state/game/gameAction";
import {connect} from "react-redux";
import {useEffect, useState} from "react";

const Dice = (props) => {
    const [diceNum, setDiceNum] = useState(<></>)
    const {game, rollDiceRequestAction} = props;

    useEffect(() => {
        switch (game.dice) {
            case 1:
                setDiceNum(<DiceOne/>)
                break;
            case 2:
                setDiceNum(<DiceTwo/>)
                break;
            case 3:
                setDiceNum(<DiceThree/>)
                break;
            case 4:
                setDiceNum(<DiceFour/>)
                break;
            case 5:
                setDiceNum(<DiceFive/>)
                break;
            case 6:
                setDiceNum(<DiceSix/>)
                break;
            default:
                setDiceNum(<></>)
                break;
        }
    }, [game.dice])


    return (
        <div style={{
            height: '96px',
            width: '96px',
            backgroundColor: 'whitesmoke',
            display: 'flex',
            margin: '24px',
            borderRadius: '20px'
        }} onClick={() => rollDiceRequestAction()}>
            {diceNum}
        </div>
    )
}

const mapDispatchToProps = {rollDiceRequestAction}
const mapStateToProps = state => {
    return {game: state.gameReducer};
};
export default connect(mapStateToProps, mapDispatchToProps)(Dice);