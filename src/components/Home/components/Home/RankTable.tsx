import PlayerRank from './PlayerRank'
import "../Main.scss"
import Iaward from "../../../../assets/img/award.svg"
import gold from "../../../../assets/img/Gold.svg"
import Silver from "../../../../assets/img/silver.svg"
import Bronze from "../../../../assets/img/bronze.svg"
import intero from "../../../../assets/img/interogation.svg"
import { useSelector } from 'react-redux'
function RankTable() {
	const rankData: any = useSelector((state: any) => state.users.users);
	var sortedArray: any[] = Object.values(rankData).sort((a: any, b: any) => b.points - a.points);
	var noPlayer = {
		login: "--",
		level: 0,
		lastGame: "--",
		avatar: intero,
		points: 0,
		status: false,
		admin: false,
		award: Iaward
	}
	var newObject: any[] = [];
	for (let index = 0; index < 6; index++) {
		if (sortedArray[index] === undefined)
			newObject.push(noPlayer);
		else {
			newObject.push(
				{
					login: sortedArray[index].login,
					level: sortedArray[index].level,
					lastGame: "--",
					avatar: sortedArray[index].avatar,
					points: sortedArray[index].points,
					status: sortedArray[index].status,
					friends: sortedArray[index].friends,
					award:
						index === 0 ? gold :
							index === 1 ? Silver :
								index === 2 ? Bronze :
									Iaward,
				})
		}
	}
	return (
		<div className="bp">
			<div className='bp-head'>
				<div className="head-">
					<h3>#</h3>
					<h3>player</h3>
					<h3>points</h3>
					<h3>Level</h3>
				</div>
				<div className="head-">
					<h3>#</h3>
					<h3 style={{ right: '1rem', position: 'relative' }}>player</h3>
					<h3 style={{ right: '0.313rem', position: 'relative' }}>points</h3>
					<h3>Level</h3>
				</div>
			</div>
			<div className="rank">
				{
					newObject.map((e, index) => {
						return <PlayerRank key={(index + 1) + 'player'} award={e.award} avatar={e.avatar} login={e.login} points={e.points} level={e.level} />
					})}
			</div>
		</div>
	)
}

export default RankTable