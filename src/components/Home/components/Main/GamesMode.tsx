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


function GamesMode() {
	const [direction, setDirection] = useState<string>('-23.875rem');

	const variants = {
		initial: (D: string) => ({
			x: D,
		}),
		animate: {
			x: 0,
		},
		exit: (D: string) => ({
			x: D === '23.875rem' ? '-23.875rem' : '23.875rem',
		}),
	};
	// var GameModesArr = [
	// 	<motion.div
	// 		key='classicS'
	// 		variants={variants}
	// 		custom={direction}
	// 		initial='initial'
	// 		animate='animate'
	// 		exit='exit'
	// 		transition={{
	// 			x: { duration: 0.6 },
	// 		}}
	// 	>
	// 		<BOxGame idA='classicA' imgID='classicIMG' classB="classic" titleB="Classic" StitleB='Challenge the computer' linkB="#" imgB={classicI} />
	// 	</motion.div>,
	// 	<motion.div
	// 		key='AIS'
	// 		variants={variants}
	// 		custom={direction}
	// 		initial='initial'
	// 		animate='animate'
	// 		exit='exit'
	// 		transition={{
	// 			x: { duration: 0.6 },
	// 		}}
	// 	>
	// 		<BOxGame idA='aiA' imgID='aiIMG' classB="ai" titleB="AI Mode" StitleB='Traditional gameplay' linkB="#" imgB={aiI} />
	// 	</motion.div>,
	// 	<motion.div
	// 		key='friendsS'
	// 		variants={variants}
	// 		custom={direction}
	// 		initial='initial'
	// 		animate='animate'
	// 		exit='exit'
	// 		transition={{
	// 			x: { duration: 0.6 },
	// 		}}
	// 	>
	// 		<BOxGame idA='friendA' imgID='friendIMG' classB="friend" titleB="Friends Mode" StitleB='Social play, easy invites' linkB="#" imgB={friendI} />
	// 	</motion.div>,
	// 	<motion.div
	// 		key='friends2'
	// 		variants={variants}
	// 		custom={direction}
	// 		initial='initial'
	// 		animate='animate'
	// 		exit='exit'
	// 		transition={{
	// 			x: { duration: 0.6 },
	// 		}}
	// 	>
	// 		<BOxGame idA='friendA' imgID='friendIMG' classB="friend" titleB="Friends Mode" StitleB='Social play, easy invites' linkB="#" imgB={friendI} />
	// 	</motion.div>,
	// 	<motion.div
	// 		key='friends2d'
	// 		variants={variants}
	// 		custom={direction}
	// 		initial='initial'
	// 		animate='animate'
	// 		exit='exit'
	// 		transition={{
	// 			x: { duration: 0.6 },
	// 		}}
	// 	>
	// 		<BOxGame idA='friendA' imgID='friendIMG' classB="friend" titleB="Friends Mode" StitleB='Social play, easy invites' linkB="#" imgB={friendI} />
	// 	</motion.div>,
	// 	<motion.div
	// 		key='friendsss2'
	// 		variants={variants}
	// 		custom={direction}
	// 		initial='initial'
	// 		animate='animate'
	// 		exit='exit'
	// 		transition={{
	// 			x: { duration: 0.6 },
	// 		}}
	// 	>
	// 		<BOxGame idA='friendA' imgID='friendIMG' classB="friend" titleB="Friends Mode" StitleB='Social play, easy invites' linkB="#" imgB={friendI} />
	// 	</motion.div>
	// ];
	const [GameModesArr, setGameModesArr] = useState<any[]>([
		<BOxGame idA='classicA' imgID='classicIMG' classB="classic" titleB="Classic" StitleB='Challenge the computer' linkB="#" imgB={classicI} />,
		<BOxGame idA='aiA' imgID='aiIMG' classB="ai" titleB="AI Mode" StitleB='Traditional gameplay' linkB="#" imgB={aiI} />,
		<BOxGame idA='friendA' imgID='friendIMG' classB="friend" titleB="Friends Mode" StitleB='Social play, easy invites' linkB="#" imgB={friendI} />,
		<BOxGame idA='friendA' imgID='friendIMG' classB="friend" titleB="Friends Mode" StitleB='Social play, easy invites' linkB="#" imgB={friendI} />,
	])

	const [slideArray, setArraySlide] = useState<any[]>(GameModesArr.map((e: any, index: number) => {
		return (
			<motion.div
				key={index + '--slider'}
				variants={variants}
				custom={direction}
				initial='initial'
				animate='animate'
				exit='exit'
				transition={{
					x: { duration: 0.6 },
				}}
			>
				{e}
			</motion.div>
		)
	}));

	const NextSlide = () => {
		setDirection('23.875rem');
		const newArray = GameModesArr.slice();
		const lastEl: any = newArray.pop();
		newArray.unshift(lastEl);
		setGameModesArr(newArray.slice());
		setArraySlide(GameModesArr.map((e: any, index: number) => {
			return (
				<motion.div
					key={index + '-s-slider'}
					variants={variants}
					custom={direction}
					initial='initial'
					animate='animate'
					exit='exit'
					transition={{
						x: { duration: 0.6 },
					}}
				>
					{e}
				</motion.div>
			)
		}));
	};

	const PrevSlide = () => {
		setDirection('-23.875rem');
		const newArray = GameModesArr.slice();
		const firstEl: any = newArray.shift();
		newArray.push(firstEl);
		setGameModesArr(newArray.slice());
		setArraySlide(GameModesArr.map((e: any, index: number) => {
			return (
				<motion.div
					key={index + '--slider'}
					variants={variants}
					custom={direction}
					initial='initial'
					animate='animate'
					exit='exit'
					transition={{
						x: { duration: 0.6 },
					}}
				>
					{e}
				</motion.div>
			)
		}));
	};

	return (
		<div className='box-box-cont'>
			<h1 className='title-h1'>Games mode</h1>
			<div className='box-cont gamesmodeCont'>
				<AnimatePresence initial={false} custom={direction}>
					{slideArray.map((slide, index) => (
						<motion.div key={`slide-${index}`}>
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