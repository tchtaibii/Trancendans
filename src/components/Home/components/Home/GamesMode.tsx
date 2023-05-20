import React from 'react'
import GradienBox from '../../../../tools/GradienBox'
import "./GamesMode.scss"
import classicI from './classicM.svg'
import aiI from './aiM.svg'
import friendI from './friendM.svg'
function BOxGame(props:any){
	return (
		<GradienBox mywidth="335px" myheight="195px" myborder="40px">
			<div className="ModePlay">
				<div className='Mode1'>
					<h2>{props.titleB}</h2>
					<p>{props.StitleB}</p>
					<a href={props.linkB} id={props.idA}>
						<GradienBox mywidth="120px" myheight="40px" myborder="15px">
							<div className="playnowbtn">Play now</div>
						</GradienBox>
					</a>
				</div>
				<div className={props.classB + ' photoMode'}>
					<img id={props.imgID} src={props.imgB} alt=""/>
				</div>
			</div>
		</GradienBox>
	)
}
function GamesMode() {
	return (
		<div className='box-box-cont'>
			<h1 className='title-h1'>Games mode</h1>
			<div className='box-cont'>
				<BOxGame idA='classicA' imgID='classicIMG' classB="classic" titleB="Classic" StitleB='Challenge the computer' linkB="#"  imgB={classicI}/>
				<BOxGame idA='aiA' imgID='aiIMG' classB="ai" titleB="AI Mode" StitleB='Traditional gameplay' linkB="#"  imgB={aiI}/>
				<BOxGame idA='friendA' imgID='friendIMG' classB="friend" titleB="friends mode" StitleB='Social play, easy invites' linkB="#"  imgB={friendI}/>
			</div>
		</div>
	)
}

export default GamesMode