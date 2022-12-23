import pionRed from "../../../assets/pion-red.svg";
import pionBlue from "../../../assets/pion-blue.svg";
import {connect} from "react-redux";

const PionPlayer = (props) => {
    const {playerNum, game} = props
    const pions = [
        <img style={{width: '24px', height: '24px'}} src={pionRed} alt="pion"/>,
        <img style={{width: '24px', height: '24px'}} src={pionBlue} alt="pion"/>
    ]
    if (playerNum) {
        return pions[playerNum - 1]
    } else {
        return pions[game.currentPlayer - 1]
    }


}
const mapStateToProps = state => {
    return {game: state.gameReducer};
};
export default connect(mapStateToProps)(PionPlayer);