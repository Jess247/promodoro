import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {Button} from 'antd'
import { useEffect, useState } from 'react'

function Progress(){
    const [time, setTime] = useState(1500)
    const [timeFormatted, setTimeFormatted] = useState('25:00')

    useEffect(() => {
        const timer = setInterval(() => {

        }, 1000)
    }, [])

    return (
        <div className='progress-container'>
            <CircularProgressbar 
                value={time}
                maxValue={1500}
                text={`${timeFormatted}`} 
                styles={buildStyles({
                    strokeLinecap: 'round',
                    pathColor: `rgba(43, 40, 128, 1)`,
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