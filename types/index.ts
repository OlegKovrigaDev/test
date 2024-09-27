export type FriendItemProps = {
	id: number | string
	avatar: string
	name: string
	isOnline: boolean
}

export type FriendsProps = {
	friends: FriendItemProps[]
}

type Stats = {
	id: number
	label: string
	value: number | string
}

export type StatisticsProps = {
	title?: string
	stats: Stats[]
	className?: string
	blockClassName?: string
	color?: boolean
}

export type StatisticsItemProps = {
	stats: Stats[]
	className?: string
	color?: boolean
}

export type ProfileProps = {
	user: {
		username: string
		location: string
		avatar: string
		tag: string
	}
	stats: Stats[]
}

type History = {
	id: string
	type: string
	amount: string
	currency: string
}

export type TransactionHistoryProps = {
	items: History[]
}
