import React from 'react'
import "./chart.css"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



export default function Chart({title,data,datakey}) {


  return (
    <div className='chart'> 
   <h3> {title}</h3>
   <ResponsiveContainer width="100%" aspect={4/1}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={datakey} stroke='black'/>
          <YAxis/>
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#94c6f8" />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
