import GradienBox from '../../../../tools/GradienBox'
import "./GamesMode.scss"
import classicI from '../../../../assets/img/classicM.svg'
import aiI from '../../../../assets/img/aiM.svg'
import friendI from '../../../../assets/img/friendM.svg'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


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
	);
}

const variants = {
	initial: (Direction: number) => {
		return {
			x: Direction > 0 ? '23.875rem' : '-23.875rem',
		};
	},
	animate: {
		x: 0,
	},
	exit: (Direction: number) => {
		return {
			x: Direction > 0 ? '-23.875rem' : '23.875rem',
		};
	},
};

function GamesMode() {
	const [Direction, setDirection] = useState<number>(0);

	const GameModesArr = [
		<BOxGame idA='classicA' imgID='classicIMG' classB="classic" titleB="Classic" StitleB='Challenge the computer' linkB="#" imgB={classicI} />,
		<BOxGame idA='aiA' imgID='aiIMG' classB="ai" titleB="AI Mode" StitleB='Traditional gameplay' linkB="#" imgB={aiI} />,
		<BOxGame idA='friendA' imgID='friendIMG' classB="friend" titleB="Friends Mode" StitleB='Social play, easy invites' linkB="#" imgB={friendI} />,
	];

	const [slideArray, setArraySlide] = useState<any[]>(GameModesArr);

	const NextSlide = () => {
		const arraytmp = [...slideArray];
		const lastEl = arraytmp.pop();
		arraytmp.unshift(lastEl);
		setArraySlide(arraytmp);
		setDirection(1);
	};

	const PrevSlide = () => {
		const arraytmp = [...slideArray];
		const firstEl = arraytmp.shift();
		arraytmp.push(firstEl);
		setArraySlide(arraytmp);
		setDirection(-1);
	};

	useEffect(() => {
		// setArraySlide([GameModesArr[0], GameModesArr[1], GameModesArr[2]]);
	}, []);

	return (
		<div className='box-box-cont'>
			<h1 className='title-h1'>Games mode</h1>
			<div className='box-cont gamesmodeCont'>
				<AnimatePresence initial={false} custom={Direction}>
					{slideArray.map((slide, index) => (
						<motion.div
							key={`slide-${index}`}
							variants={variants}
							custom={Direction}
							initial='initial'
							animate='animate'
							exit='exit'
							transition={{
								x: { duration: 0.6 },
							}}
						>
							{slide}
						</motion.div>
					))}
				</AnimatePresence>
			</div>
			<button onClick={PrevSlide}>PREV</button>
			<button onClick={NextSlide}>NEXT</button>
		</div>
	);
}

export default GamesMode;