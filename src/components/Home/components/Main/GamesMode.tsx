import GradienBox from '../../../../tools/GradienBox'
import "./GamesMode.scss"
import classicI from '../../../../assets/img/classicM.svg'
import aiI from '../../../../assets/img/aiM.svg'
import friendI from '../../../../assets/img/friendM.svg'
import { useEffect, useState } from 'react'


function BOxGame(props: any) {
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
					<img id={props.imgID} src={props.imgB} alt="" />
				</div>
			</div>
		</GradienBox>
	)
}

const GameModesArr = [
	<BOxGame idA='classicA' imgID='classicIMG' classB="classic" titleB="Classic" StitleB='Challenge the computer' linkB="#" imgB={classicI} />,
	<BOxGame idA='aiA' imgID='aiIMG' classB="ai" titleB="AI Mode" StitleB='Traditional gameplay' linkB="#" imgB={aiI} />,
	<BOxGame idA='friendA' imgID='friendIMG' classB="friend" titleB="friends mode" StitleB='Social play, easy invites' linkB="#" imgB={friendI} />
]

function GamesMode() {
	const [slideArray, setArraySlide] = useState<any[]>([]);
	useEffect(() => {
		setArraySlide([GameModesArr[0], GameModesArr[1], GameModesArr[2], GameModesArr[GameModesArr.length % GameModesArr.length]]);
	}, [])
	const NextSlide = () => {
		const arraytmp = slideArray;
		console.log('before : ', arraytmp.length)
		const firstEl: any = arraytmp.shift();
		console.log('after : ', arraytmp.length)
		arraytmp.push(firstEl);
		setArraySlide([...arraytmp]);
		// console.log('before : ', slideArray)
	}
	const PrevSlide = () => {
		const arraytmp = slideArray;
		console.log('before : ', arraytmp.length)
		const lastEl: any = arraytmp.pop();
		console.log('after : ', arraytmp.length)
		arraytmp.unshift(lastEl);
		setArraySlide([...arraytmp]);
		// console.log('before : ', slideArray)
	}
	return (
		<div className='box-box-cont'>
			<h1 className='title-h1'>Games mode</h1>
			<div className='box-cont gamesmodeCont'>
				{
					slideArray.filter((e, index) => index != slideArray.length - 1)
				}
			</div>
			<button onClick={() => { PrevSlide() }}>NEXT</button>
			<button onClick={() => { NextSlide() }}>PREV</button>
		</div>
	)
}

export default GamesMode