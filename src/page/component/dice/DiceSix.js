import DiceDot from "./DiceDot";

const DiceSix = () => {

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around'
        }}>
            {
                [...Array(3).keys()].map(() => (
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
                        <DiceDot/>
                        <DiceDot/>
                    </div>
                ))
            }
        </div>
    )
}

export default DiceSix;