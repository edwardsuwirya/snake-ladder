import DiceDot from "./DiceDot";

const DiceThree = () => {
    return (
        <div style={{display: 'flex', width: '100%', flexDirection: 'column'}}>
            <div style={{alignSelf: 'flex-end', flexGrow: 1, margin: '10px'}}>
                <DiceDot/>
            </div>
            <div style={{alignSelf: 'center', flexGrow: 1, margin: '10px'}}>
                <DiceDot/>
            </div>
            <div style={{flexGrow: 1, margin: '10px'}}>
                <DiceDot/>
            </div>
        </div>
    )
}

export default DiceThree;