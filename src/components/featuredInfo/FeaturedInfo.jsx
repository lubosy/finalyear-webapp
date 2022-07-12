import { ArrowDownward, ArrowForward } from '@material-ui/icons'
import React ,{useState}from 'react'
import './featuredInfo.css'


export default function FeaturedInfo() {
    let currentDate = new Date().toLocaleString();
    const [dateToday, setDateToday] = useState(currentDate);

 function changeTime(){
let newtime = new Date().toLocaleString()
setDateToday(newtime)
 }
setInterval(changeTime,1000)

  return (
    <div className='featured'>
    
        <div className='featuredItem'>
            <span className='featuredTitle'>Today</span>
            <div className='featuredMoneyContainer'>
            <img className='SunLogo' src="https://img.icons8.com/fluency/48/000000/summer.png" alt="sun"/>
            <span className='featuredMoney'>{dateToday}</span>
            </div>
        </div>

<div className='dataColumns'>
        <div className='featuredItem'>
            <span className='featuredTitle'></span>
            <div className='featuredMoneyContainer featuredTempHumid'>
            <div className='weatherContentAlign'>
             <img src="https://img.icons8.com/fluency/48/FAB005/thermometer.png" alt="tempIcon"/>
            <span className='featuredMoney'>29 C</span>
             </div>
                <div className='weatherContentAlign'>
                 <img src="https://img.icons8.com/fluency/48/000000/atmospheric-pressure.png" alt='humidity'/>
                    <span className='featuredMoney'>50%</span>
            </div>
            
             </div>
        </div>

        <div className='featuredItem windAndRain'>
            <span className='featuredTitle'></span>
            <div className='featuredMoneyContainer'>
            <img src="https://img.icons8.com/fluency/48/000000/wind.png"/>
            <span className='featuredMoney'>35 knh</span>
            <span className='featuredMoneyRate'><ArrowForward className='featuredIcon'/></span>
            </div>
        </div>

        <div className='featuredItem windAndRain'>
            <span className='featuredTitle'></span>
            <div className='featuredMoneyContainer'>
            <img src="https://img.icons8.com/fluency/48/000000/intense-rain.png" alt="rain"/>
            <span className='featuredMoney'>10 mm </span>
            </div>
        </div>
        </div>
    </div>
  )
}
