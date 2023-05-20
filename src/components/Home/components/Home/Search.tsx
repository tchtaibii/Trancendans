import React from 'react'
import "./Search.scss"
import SearImg from "./search.svg"
import GradienBox from '../../../../tools/GradienBox'
function Search() {
  return (
    <GradienBox className="" mywidth="369px" myheight="49px" myborder="20px">
      <div className='cont'>
        <input type='text' placeholder='Search...' className='search-input' />
        <button className='search-btn'>
          <img src={SearImg} alt="search" />
        </button>
      </div>
    </GradienBox>
  )
  
}

export default Search