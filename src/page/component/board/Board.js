import BoardBox from "./BoardBox";

const Board = () => {
    return (
        <>
            {
                [...Array(10).keys()].map((idx) => (
                    <BoardBox key={idx} rowIdx={idx}/>
                ))
            }
        </>
    );
}

export default Board;