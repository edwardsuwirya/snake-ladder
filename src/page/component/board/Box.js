import trophy from "../../../assets/trophy.svg";
import {jump} from "../../../util/jump";

const Box = (props) => {
    const {boxNum} = props;
    const m = jump(boxNum);
    let notes;
    let color = 'whitesmoke';
    if (boxNum === 100) {
        notes = <span> <img style={{width: '24px', height: '24px'}} src={trophy} alt="trophy"/></span>
        color = 'lightblue';
    } else {
        if (m > 0) {
            notes = `u->${props.boxNum + m}`;
            color = 'lightgreen';
        } else if (m < 0) {
            notes = `d->${props.boxNum + m}`
            color = 'orange';
        } else {
            notes = '';
        }
    }


    return (
        <div style={{height: '72px', width: '72px', backgroundColor: color, borderColor: 'gray'}}>
            <div style={{marginLeft: '5px', marginTop: '5px', fontWeight: 'bolder'}}>
                <span style={{fontSize: '12px'}}>{props.boxNum} {notes}</span>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}
export default Box;