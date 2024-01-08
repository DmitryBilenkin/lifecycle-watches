import Clock from '../Clock/Clock';
import './ClocksView.css';

function ClocksView(props) {

  return (
    <div className='clocksview-container'>
      {props.clocksData.map((e, ind) => <Clock key={ind} name={e.name} timeZone={e.timeZone} ind={ind} deleteClock={props.deleteClock}/>)}
    </div>
  )
}

export default ClocksView;
