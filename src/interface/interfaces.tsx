export type userType = {
	login: string;
	level: number;
	lastGame: string | null;
	avatar: string;
	points: number,
	status: boolean;
	admin: boolean;
};
export type NotificationType = {
	id: number,
	avatar: String,
	text: String,
	isRead: boolean
  }