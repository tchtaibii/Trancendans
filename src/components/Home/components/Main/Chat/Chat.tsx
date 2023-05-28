import emoji from './emojis.svg'
import send from './send.svg'
import GradienBox from '../../../../../tools/GradienBox'
import './Chat.scss'
import test from './test.svg'

function Chat() {
    var element: any[] = [];
    for (let i = 0; i < 5; i++) {
        element.push(
            <div className="chatUser">
                <img src={test} alt="" />
                <div className="textUserChat">
                    <h1>Nicolas Potter</h1>
                    <p>Sounds good. Looking forward to it ...</p>
                </div>
            </div>
        )
    }
    const ThreeDots = () => {
        return (<svg width="0.313rem" height="1.125rem" viewBox="0 0 5 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.58333 4.83329C3.72917 4.83329 4.66667 3.89579 4.66667 2.74996C4.66667 1.60413 3.72917 0.666626 2.58333 0.666626C1.4375 0.666626 0.5 1.60413 0.5 2.74996C0.5 3.89579 1.4375 4.83329 2.58333 4.83329Z" fill="white" />
            <path d="M2.58333 6.91663C1.4375 6.91663 0.5 7.85413 0.5 8.99996C0.5 10.1458 1.4375 11.0833 2.58333 11.0833C3.72917 11.0833 4.66667 10.1458 4.66667 8.99996C4.66667 7.85413 3.72917 6.91663 2.58333 6.91663Z" fill="white" />
            <path d="M0.5 15.25C0.5 14.1041 1.4375 13.1666 2.58333 13.1666C3.72917 13.1666 4.66667 14.1041 4.66667 15.25C4.66667 16.3958 3.72917 17.3333 2.58333 17.3333C1.4375 17.3333 0.5 16.3958 0.5 15.25Z" fill="white" />
        </svg>
        )
    }
    const Emojis = () => {
        return (
            <svg width="2rem" height="2rem" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6665 14.6666C21.7711 14.6666 22.6665 13.7712 22.6665 12.6666C22.6665 11.5621 21.7711 10.6666 20.6665 10.6666C19.5619 10.6666 18.6665 11.5621 18.6665 12.6666C18.6665 13.7712 19.5619 14.6666 20.6665 14.6666Z" fill="#5C5C5C" />
                <path d="M11.3335 14.6666C12.4381 14.6666 13.3335 13.7712 13.3335 12.6666C13.3335 11.5621 12.4381 10.6666 11.3335 10.6666C10.2289 10.6666 9.3335 11.5621 9.3335 12.6666C9.3335 13.7712 10.2289 14.6666 11.3335 14.6666Z" fill="#5C5C5C" />
                <path d="M16.0002 24C19.0402 24 21.6268 21.7866 22.6668 18.6666H9.3335C10.3735 21.7866 12.9602 24 16.0002 24Z" fill="#5C5C5C" />
                <path d="M15.9865 2.66663C8.6265 2.66663 2.6665 8.63996 2.6665 16C2.6665 23.36 8.6265 29.3333 15.9865 29.3333C23.3598 29.3333 29.3332 23.36 29.3332 16C29.3332 8.63996 23.3598 2.66663 15.9865 2.66663ZM15.9998 26.6666C10.1065 26.6666 5.33317 21.8933 5.33317 16C5.33317 10.1066 10.1065 5.33329 15.9998 5.33329C21.8932 5.33329 26.6665 10.1066 26.6665 16C26.6665 21.8933 21.8932 26.6666 15.9998 26.6666Z" fill="#5C5C5C" />
            </svg>
        )
    }
    return (
        <GradienBox mywidth="1097px" myheight="850px" myborder="40px">
            <div className="chatContainer">
                <div className="chatUsers">
                    <div className="chatUsersmesage">
                        {element.map(e => {
                            return e
                        })}
                    </div>

                </div>
                <div className="chatContent">
                    <div className="header">
                        <div className="infoUser">
                            <img src={test} alt="" />
                            <div className="nameAndStatus">
                                <h1>Nicolas Potter<span /></h1>
                                <p>Active now</p>
                            </div>
                        </div>
                        <button className="more"><ThreeDots /></button>
                    </div>
                    <div className="content">
                        <div className="messageSend">
                            <button><img src={emoji} alt="" /></button>
                            {/* <input type="text" /> */}
                            <textarea placeholder='Type a message ...' name="" id=""></textarea>
                            <button className='send'><img src={send} alt="" /></button>
                        </div>
                        <div className="messages">
                            <div className="messageShow">
                                <img src={test} alt="" />
                                <p className='theTextMsg'>Hi there! I noticed that you also play Ping Pong on this website. Would you like to play a game sometime?</p>
                            </div>
                            <div className="myMessage messageShow">
                                <img src={test} alt="" />
                                <p className='theTextMsg'>Hi there! I noticed that you also play Ping Pong on this website. Would you like to play a game sometime?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GradienBox>
    )
}
export default Chat;