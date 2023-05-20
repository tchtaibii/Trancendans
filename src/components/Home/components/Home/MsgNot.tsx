import React, {useState, useRef } from 'react'
import test from './test.svg'
import "./MsgNot.scss"
import inviFriend from "./invitation-friend.svg"
import BellImg from "./bell.svg"
import GradienBox from '../../../../tools/GradienBox'
import { useOnClickOutside } from 'usehooks-ts'
import { useRecoilState} from 'recoil'
import { notifications } from '../../../../StateManager/StateM'

function MsgNot() {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef(null)
	const handleClickOutside = () => {
		setIsVisible(false)
	}
	useOnClickOutside(ref, handleClickOutside)
	return (
		<div className='msgNot-cont' ref={ref}>
			<GradienBox mywidth="49px" myheight="49px" myborder="10px">
				<button className='btn-msgnot'><img style={{width: '1.5rem'}} src={inviFriend} alt='' /></button>
			</GradienBox>
			<GradienBox mywidth="49px" myheight="49px" myborder="10px">
				<button onClick={() => setIsVisible(!isVisible)} className='btn-msgnot'><img style={{width: '1.5rem'}} alt='' src={BellImg} /></button>
			</GradienBox>
			{
				isVisible && <div style={{ position: 'absolute', top: '5.8125rem', width: 'fit-content' }}>
					<NotificationCont />
				</div>
			}

		</div>
	)
}
function Notification(props: any) {
	const handleClick = () => {
		props.onClick();
	};

	return (
		<div id={props.id} className="notification" onClick={handleClick}>
			<div className={!props.isRead ? "no-read" : ""}>
				<img src={props.img} alt="" />
			</div>
			<div className="noti-text">{props.text}</div>
		</div>
	);
}
function NotificationCont(props: any) {
	const [notifi, setNotificationsState] = useRecoilState(notifications);
	const markAllAsRead = () => {
		const updatedNotifications = notifi.map((not: any) => ({
			...not,
			isRead: 1
		}));
		setNotificationsState(updatedNotifications);
		console.log(updatedNotifications)
	};
	const handleNotificationClick = (index: number) => {
		const updatedNotifications = notifi.map((not: any, i: number) => {
			if (i === index) {
				return {
					...not,
					isRead: 1
				};
			}
			return not;
		});
		setNotificationsState(updatedNotifications);
	};
	return (

		<GradienBox absolute={1} mywidth="316px" myheight="408.98px" myborder="20px">
			<div className="notification-container">
				<div className="head-noti-container">
					<div className="notication-head">NOTIFICATIONS</div>
					<span className='notifi-num'>{notifi.filter((not: any) => not.isRead === 0).length}</span>
				</div>
				<div className="main-noti">
					{notifi.map((e, index) => {
						return (<Notification onClick={() => handleNotificationClick(index)} id={'noti-' + index} isRead={e.isRead} img={test} text={e.text} />);
					})}
				</div>
				<div className="fot-notification">
					<button onClick={markAllAsRead} className='mark-read'>Mark all as read</button>
				</div>
			</div>
		</GradienBox>

	)
}


export default MsgNot