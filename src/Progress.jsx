import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {Button} from 'antd'

function Progress(){
    const percentage = 60
    return (
        <div className='progress-container'>
            <CircularProgressbar 
                value={percentage}
                text={`25:00`} 
                styles={buildStyles({
                    strokeLinecap: 'round',
                    pathColor: `rgba(43, 40, 128, ${percentage / 100})`,
                    textColor: '#fefefe',
                    trailColor: 'rgba(40, 32, 55,.6)',
                    fontFamily: 'sans serif'
            })}
        />
            <Button style={{background:'#2b2880', color:'#fefefe', fontWeight:'700', border:'none'}}>Start Timer</Button>
        </div>
    )
} 

export default Progress