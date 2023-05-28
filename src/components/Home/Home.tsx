
import "./Home.scss"
import LeftBar from './components/LeftBar'
import Main from './components/Main'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store'
import { useEffect } from 'react'
import { setAdmin } from '../../features/adminSlice';
import { userType } from '../../interface/interfaces';
import { BrowserRouter as Router, Outlet } from 'react-router-dom'
function Home() {
  const dispatch: AppDispatch = useDispatch()
  const getAdmin: userType | undefined = useSelector((state: any) => {
    const admin = state.users.users.length > 0 ? state.users.users.filter((e: any) => e.admin === true)[0] : undefined;
    return admin
  })

  useEffect(() => {
    if (getAdmin !== undefined) {
      dispatch(setAdmin(getAdmin));
    }
  }, [getAdmin]);
  return (
    <div className='Home'>
      <Router>
        <div className="container-home">
          {/* <Home.buble /> */}
          <LeftBar />
          <Main />
          <Outlet />
        </div>
      </Router>
    </div>
  );
}

Home.buble = () => <>
  <svg width="160" height="61" viewBox="0 0 160 61" fill="none" xmlns="http://www.w3.org/2000/svg" className='circle1'>
    <circle cx="80" cy="-19" r="77.5" stroke="url(#paint0_linear_112_25)" stroke-width="5" />
    <defs>
      <linearGradient id="paint0_linear_112_25" x1="80" y1="-128.02" x2="1.41631e-05" y2="130.804" gradientUnits="userSpaceOnUse">
        <stop stop-color="#ED5152" />
        <stop offset="1" stop-color="#F9C690" />
      </linearGradient>
    </defs>
  </svg>
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className='circle2'>
    <circle cx="25" cy="25" r="22.5" stroke="url(#paint0_linear_112_24)" stroke-width="5" />
    <defs>
      <linearGradient id="paint0_linear_112_24" x1="25" y1="-9.06863" x2="4.42598e-06" y2="71.8137" gradientUnits="userSpaceOnUse">
        <stop stop-color="#ED5152" />
        <stop offset="1" stop-color="#F9C690" />
      </linearGradient>
    </defs>
  </svg>
  <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='circle3'>
    <circle cx="35" cy="35" r="32.5" stroke="url(#paint0_linear_112_22)" stroke-width="5" />
    <defs>
      <linearGradient id="paint0_linear_112_22" x1="35" y1="-12.6961" x2="6.19638e-06" y2="100.539" gradientUnits="userSpaceOnUse">
        <stop stop-color="#ED5152" />
        <stop offset="1" stop-color="#EF5E59" />
      </linearGradient>
    </defs>
  </svg>
  <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg" className='circle4'>
    <circle cx="51" cy="51" r="48.5" stroke="url(#paint0_linear_112_20)" stroke-width="5" />
    <defs>
      <linearGradient id="paint0_linear_112_20" x1="51" y1="-18.5" x2="9.02901e-06" y2="146.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#ED5152" />
        <stop offset="1" stop-color="#00887A" />
      </linearGradient>
    </defs>
  </svg>
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className='circle5'>
    <circle cx="25" cy="25" r="22.5" stroke="url(#paint0_linear_112_21)" stroke-width="5" />
    <defs>
      <linearGradient id="paint0_linear_112_21" x1="25" y1="-9.06863" x2="4.42598e-06" y2="71.8137" gradientUnits="userSpaceOnUse">
        <stop stop-color="#ED5152" />
        <stop offset="1" stop-color="#F9C690" />
      </linearGradient>
    </defs>
  </svg>

</>;

export default Home