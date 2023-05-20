import React from 'react'
import GradienBox from '../../../../tools/GradienBox'
import "../Main.scss"
import RankTable from './RankTable'
import trophet from './trophet.svg'
function BestPlayers() {
  return (
    <div className='box-box-cont'>
        <h1 className='title-h1'>Best players</h1>
        <div className='box-cont'>
            <GradienBox mywidth="1099px" myheight="273px" myborder="40px">
              <img src={trophet} alt="" className='trophet' />
              <div className='bp-cont'>
                <RankTable/>
              </div>
              
            </GradienBox>
        </div>
    </div>
  )
}

export default BestPlayers