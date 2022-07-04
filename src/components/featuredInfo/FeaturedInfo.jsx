import { ArrowDownward } from '@material-ui/icons'
import React from 'react'
import './featuredInfo.css'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className='featuredTitle'>Revenue</span>
            <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$10,000</span>
            <span className='featuredMoneyRate'>-11<ArrowDownward className='featuredIcon'/></span>
            </div>
            <span className='featuredSub'>Compared To last month</span>
        </div>

        <div className='featuredItem'>
            <span className='featuredTitle'>Sales</span>
            <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$10,000</span>
            <span className='featuredMoneyRate'>-11<ArrowDownward className='featuredIcon'/></span>
            </div>
            <span className='featuredSub'>Compared To last month</span>
        </div>

        <div className='featuredItem'>
            <span className='featuredTitle'>Tax</span>
            <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$10,000</span>
            <span className='featuredMoneyRate'>-11<ArrowDownward className='featuredIcon'/></span>
            </div>
            <span className='featuredSub'>Compared To last month</span>
        </div>

        <div className='featuredItem'>
            <span className='featuredTitle'>Owings</span>
            <div className='featuredMoneyContainer'>
            <span className='featuredMoney'>$10,000</span>
            <span className='featuredMoneyRate'>-11<ArrowDownward className='featuredIcon'/></span>
            </div>
            <span className='featuredSub'>Compared To last month</span>
        </div>

    </div>
  )
}
