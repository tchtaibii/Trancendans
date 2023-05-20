import { atom } from 'recoil';
import Iaward from './award.svg'

export type user = {
	login: string;
	level: number;
	lastGame: string | null;
	avatar: string;
	points: number,
	status: boolean;
	friends: user[],
	award: string,
};
const hboukili: user = {
	login: "hboukili",
	level: 2.0,
	lastGame: "won",
	avatar: "https://cdn.intra.42.fr/users/6c3254ce8284773a5434fc4975c8f21f/hboukili.jpg",
	points: 3660,
	status: false,
	friends: [],
	award: Iaward
};
const schoukou: user = {
	login: "schoukou",
	level: 6,
	lastGame: "lose",
	avatar: "https://cdn.intra.42.fr/users/561324f840ae97d18056fdff7420095a/schoukou.jpg",
	points: 10660,
	status: true,
	friends: [],
	award: Iaward
};
const aaizza: user = {
	login: "aaizza",
	level: 0,
	lastGame: null,
	avatar: "https://cdn.intra.42.fr/users/150000b335de20e92f5b2cce56740da8/aaizza.jpg",
	points: 0,
	status: false,
	friends: [],
	award: Iaward
};

const me: user = {
	login: "tchtaibi",
	level: 6.9,
	lastGame: 'won',
	avatar: "https://cdn.intra.42.fr/users/d00282f766753d56196928b23a2f9b00/tchtaibi.jpg",
	points: 11660,
	status: true,
	friends: [hboukili, schoukou, aaizza],
	award: Iaward
};
hboukili.friends.push(schoukou, me, aaizza);
schoukou.friends.push(aaizza, me, hboukili);
aaizza.friends.push(me, hboukili, schoukou);

export const otherData = atom({
	key: 'otherData',
	default: { hboukili, schoukou, aaizza, me }
});
export const Mydata = atom({
	key: 'mydata',
	default: me,
});

export const notifications = atom({
	key: 'notifications',
	default: [
	  {
		avatar: '',
		text: 'Bob has invited you to a game of Ping Pong! Accept or decline the invitation now.',
		isRead: 0,
	  },
	  {
		avatar: '',
		text: 'ali has invited you to a game of Ping Pong! Accept or decline the invitation now.',
		isRead: 0,
	  },
	  {
		avatar: '',
		text: 'hamza has invited you to a game of Ping Pong! Accept or decline the invitation now.',
		isRead: 0,
	  },
	  {
		avatar: '',
		text: 'han has invited you to a game of Ping Pong! Accept or decline the invitation now.',
		isRead: 0,
	  }
	]
  });
  