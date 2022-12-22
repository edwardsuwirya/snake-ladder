import PionPlayer from "../player/PionPlayer";
import Box from "./Box";

const BoardBox = ({rowIdx, playerPos}) => {
    const boxes = [];

    const setPlayerPion = (boxIdx) => {
        const playersPion = [];
        playerPos.forEach((value, i) => {
            if (boxIdx === value) {
                playersPion.push(<PionPlayer playerNum={'' + (i + 1)}/>)
            }
        });
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

export default BoardBox;