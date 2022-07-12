import React from 'react'
import Chart from '../charts/Chart'
import FeaturedInfo from '../featuredInfo/FeaturedInfo'
import'./home.css'
import {data} from "../charts/dummydata"
import WidgetSm from '../widgetSm/WidgetSm'
import WidgetLg from '../widgetLg/WidgetLg'


export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart title="Temperature and Humidity" data={data} datakey="Names"/>
    <div className='homeWidgets'>
    <WidgetSm/>
    </div>
       </div>
  )
}
