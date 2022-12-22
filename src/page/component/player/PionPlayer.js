import pionRed from "../../../assets/pion-red.svg";
import pionBlue from "../../../assets/pion-blue.svg";

const PionPlayer = ({playerNum}) => {
    const pions = [
        <img style={{width: '24px', height: '24px'}} src={pionRed} alt="pion"/>,
        <img style={{width: '24px', height: '24px'}} src={pionBlue} alt="pion"/>
    ]
    return pions[playerNum - 1]

}

export default PionPlayer;