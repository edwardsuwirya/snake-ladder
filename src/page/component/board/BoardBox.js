import PionPlayer from "../player/PionPlayer";
import Box from "./Box";
import {connect} from "react-redux";

const BoardBox = ({rowIdx, game}) => {
    const boxes = [];

    const setPlayerPion = (boxIdx) => {
        const playersPion = [];
        game.playerPosition.forEach((value, i) => {
            if (boxIdx === value) {
                playersPion.push(<PionPlayer key={i} playerNum={'' + (i + 1)}/>)
            }
        });
        return playersPion;
    }
    if (rowIdx % 2 !== 0) {
        for (let i = (rowIdx * 10) + 10; i >= (rowIdx * 10) + 1; i--) {
            boxes.push(<Box key={i} boxNum={i}>
                {setPlayerPion(i)}
            </Box>)

        }
    } else {
        for (let i = (rowIdx * 10) + 1; i <= (rowIdx * 10) + 10; i++) {
            boxes.push(<Box key={i} boxNum={i}>
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

const mapStateToProps = state => {
    return {game: state.gameReducer};
};

export default connect(mapStateToProps)(BoardBox);