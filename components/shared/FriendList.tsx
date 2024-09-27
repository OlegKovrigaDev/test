import { cn } from '@/lib/utils'
import { FriendItemProps, FriendsProps } from '@/types'
import { Avatar, AvatarFallback, AvatarImage } from '../ui'

export const FriendList = ({ friends }: FriendsProps) => (
	<ul className='w-60 flex flex-col gap-[7px]'>
		{friends.map(({ id, avatar, name, isOnline }) => (
			<FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
		))}
	</ul>
)

const FriendItem = ({ avatar, name, isOnline }: FriendItemProps) => (
	<li className='flex gap-2 items-center border border-neutral-200 bg-white text-neutral-950 shadow rounded-[4px] px-2 py-1'>
		<span
			className={cn(
				'rounded-full size-4',
				isOnline ? 'bg-green-500' : 'bg-red-500'
			)}
		/>
		<Avatar className='bg-slate-200 size-12 rounded'>
			<AvatarImage src={avatar} alt={name} />
			<AvatarFallback className='bg-slate-200 size-12 rounded'>
				{name}
			</AvatarFallback>
		</Avatar>
		<p>{name}</p>
	</li>
)
