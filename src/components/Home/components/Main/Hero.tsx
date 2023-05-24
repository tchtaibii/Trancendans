import GradienBox from '../../../../tools/GradienBox'
import PlayImg from "../../../../assets/img/Play.svg"
import "./Hero.scss"
import { userType } from '../../../../interface/interfaces'
import { useSelector } from 'react-redux';
import { TypeAnimation } from 'react-type-animation';
function Hero() {
  const users: any = useSelector((state: any) => state.users);
  const user = users.users.filter((item: any) => item.admin === true);
  const data: userType | undefined = user.length > 0 ? user[0] : undefined;
  return (
    <GradienBox mywidth="1101px" myheight="173px" myborder="40px">
      <div className='hero-cont'>
        <div className='part1'>
          {
            data &&
            <TypeAnimation
              sequence={[
                '',
                200,
                'Hello ! ' + data.login + '.',
                3000,
                'Welcome to our ft_transcendence',
                3000,
                'have fun ;)',
                2800,
                () => {
                  console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="h1"
              cursor={true}
              repeat={Infinity}
              style={{ textTransform: 'capitalize' }}
              speed={1}
              deletionSpeed={0}
            />

          }

          {/* <h1 style={{ textTransform: 'capitalize' }}>{data && 'Hello ! ' + data.login + '.'}</h1> */}
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