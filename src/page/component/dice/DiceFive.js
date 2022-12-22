import DiceDot from "./DiceDot";

const DiceFive = () => {
    const DiceVert = () => (
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
            <DiceDot/>
            <DiceDot/>
        </div>
    )
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
        }}>
            <DiceVert/>
            <div>
                <DiceDot/>
            </div>
            <DiceVert/>
        </div>
    )
}
export default DiceFive;