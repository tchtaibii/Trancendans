import GradienBox from '../../../../tools/GradienBox'
import PlayImg from "../../../../assets/img/Play.svg"
import "./Hero.scss"
import { useRecoilValue } from 'recoil';
import { Mydata } from '../../../../StateManager/StateM'
import { useSelector } from 'react-redux';
function Hero() {
  const data = useRecoilValue(Mydata);
  // const data = useSelector((state:any) => state.users.users).filter((e:any) => e.admin === true)[0];
  return (
    <GradienBox mywidth="1101px" myheight="173px" myborder="40px">
      <div className='hero-cont'>
        <div className='part1'>
          <h1 style={{ textTransform: 'capitalize' }}>{'Hello ! ' + data.login + '.'}</h1>
          <p>Ready for a gaming surprise ? Click 'Play' to start a random game and see what awaits !</p>
        </div>
        <a className='playhero' href='/#' >
          <div className="backgroundA"></div>
          <div className="contA">
            <h4>Play</h4>
            <img alt='' src={PlayImg} />
          </div>
        </a>
      </div>
    </GradienBox>
  )
}

export default Hero