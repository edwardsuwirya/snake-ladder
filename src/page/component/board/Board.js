import BoardBox from "./BoardBox";

const Board = ({playerPos = []}) => {
    return (
        <>
            {
                [...Array(10).keys()].map((idx) => (
                    <BoardBox rowIdx={idx} playerPos={playerPos}/>
                ))
            }
        </>
    );
}

export default Board;