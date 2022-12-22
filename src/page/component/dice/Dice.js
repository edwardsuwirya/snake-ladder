import DiceOne from "./DiceOne";
import DiceTwo from "./DiceTwo";
import DiceThree from "./DiceThree";
import DiceFour from "./DiceFour";
import DiceFive from "./DiceFive";
import DiceSix from "./DiceSix";

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
        default:
            throw new Error('Number not allowed');
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

export default Dice;