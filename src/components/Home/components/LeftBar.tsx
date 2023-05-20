import React from 'react'
import "./LeftBar.scss"
import LogoImg from "../../Login/logo.svg";
import LogoutImg from "./Logout.svg";
import HomeImg from "./Home.svg";
import ProfImg from "./profile.svg";
import SetfImg from "./Settings.svg";
import ChatImg from "./chat.svg";
import Stream from "./stream.svg";
import LeaderBoard from "./leaderBoard.svg";

function LeftBar() {
  return (
    <div className="bar-left">
      <div className='left-bar-container'>
        <div className="left-bar">
          <img className='logoo' src={LogoImg} alt="logo" />
          <ul>
            <a className='active' href='#'><img style={{ width: '1.5rem' }} src={HomeImg} alt="Home" /></a>
            <a className='desactive' href='#'><img style={{ width: '1.5rem' }} src={ProfImg} alt="Profile" /></a>
            <a className='desactive' href='#'><img style={{ width: '1.5rem' }} src={ChatImg} alt="Chat" /></a>
            <a className='desactive' href='#'><img style={{ width: '1.5rem' }} src={Stream} alt="Play" /></a>
            <a className='desactive' href='#'><img style={{ width: '1.5rem' }} src={LeaderBoard} alt="Leader Board" /></a>
            <a className='desactive' href='#'><img style={{ width: '1.5rem' }} src={SetfImg} alt="Settings" /></a>
          </ul>
          <button className='logout'>
            <img style={{ width: '2.5rem' }} src={LogoutImg} alt="" />
          </button>
        </div>
      </div>
    </div>

  );
}

export default LeftBar;