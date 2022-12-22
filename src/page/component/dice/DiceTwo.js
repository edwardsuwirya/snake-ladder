import DiceDot from "./DiceDot";

const DiceTwo = () => {
    return (
        <div style={{display: 'flex', width: '100%', flexDirection: 'column',justifyContent:'space-evenly'}}>
            <div style={{alignSelf: 'flex-end', margin: '10px'}}>
                <DiceDot/>
            </div>
            <div style={{alignSelf: 'flex-start', margin: '10px'}}>
                <DiceDot/>
            </div>
        </div>
    )
}

export default DiceTwo;