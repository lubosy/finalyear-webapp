import { Visibility } from '@material-ui/icons'
import React from 'react'
import CustomizedTables from '../Table'
import "./widgetSm.css"

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
<span className='widgetSmTitle'>Upcoming Weather</span>
<CustomizedTables/>
    </div>
  )
}
