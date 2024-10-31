import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {Button} from 'antd'
import { useEffect, useState } from 'react'

function Progress(){
    const [time, setTime] = useState(30)
    const [progressVal, setProgressVal] = useState(0)
    const [timeFormatted, setTimeFormatted] = useState('25:00')
    const [isOn, setIsOn] = useState(false)
    const [isBreak, setIsBreak] = useState(false)
    const [maxVal, setMaxVal] = useState(1500)

    const focusTime = 1500
    const breakTime = 300

    useEffect(() => {
        let timer 

        if(isOn && time > 0) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime - 1)
                setProgressVal(prevProgressVal => prevProgressVal + 1)
                formatTime(time)
            }, 1000)
        } else if(isOn && time === 0){
            setIsOn(false)
            setIsBreak(true)
            setProgressVal(0)
            setTime(breakTime)
            setMaxVal(breakTime)
        }

        if(isBreak && time > 0) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime - 1)
                setProgressVal(prevProgressVal => prevProgressVal + 1)
                formatTime(time)
            }, 1000)
        } else if(isBreak && time === 0) {
            setIsOn(true)
            setIsBreak(false)
            setProgressVal(0)
            setTime(focusTime)
            setMaxVal(focusTime)
        }

        return () => clearInterval(timer)
    }, [time, isOn,isBreak])

    const formatTime = (time) => {
        let minutes = Math.floor(time / 60)
        let seconds = Math.floor(time % 60)
        
        setTimeFormatted(`
            ${minutes  < 10 ?  '0' + minutes : minutes}:
            ${seconds < 10 ? '0'+ seconds : seconds}
            `)
    }

    return (
        <div className='progress-container'>
            <CircularProgressbar 
                value={progressVal}
                maxValue={maxVal}
                text={`${timeFormatted}`} 
                styles={buildStyles({
                    strokeLinecap: 'round',
                    pathColor: `rgba(43, 40, 128, 1)`,
                    textColor: '#fefefe',
                    trailColor: 'rgba(40, 32, 55,.6)',
                    fontFamily: 'sans serif'
            })}
            />
            <span>
                {isOn ? 'Stay focused' : 'Take a break'}
            </span>
            <Button 
                style={{background:'#2b2880', color:'#fefefe', fontWeight:'700', border:'none'}}
                onClick={() => setIsOn(prevIsOn => !prevIsOn)}>
                {isOn ? 'Pause timer': 'Start Timer'}
            </Button>
        </div>
    )
} 

export default Progress