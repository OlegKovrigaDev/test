import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui'
import { ProfileProps } from '@/types'
import { Statistics } from './Statistics'

export const Profile = ({
	user: { username, avatar, tag, location },
	stats,
}: ProfileProps) => {
	return (
		<Card className='w-60 rounded-[4px] text-center'>
			<CardHeader className='flex items-center gap-5 pb-1'>
				<Avatar className='bg-slate-200 size-24'>
					<AvatarImage src={avatar} alt={username} />
					<AvatarFallback>User</AvatarFallback>
				</Avatar>
				<CardTitle className='font-medium text-xl'>{username}</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-col gap-1'>
				<p className='text-slate-400 text-[14px]'>@{tag}</p>
				<p className='text-slate-400 text-[14px]'>{location}</p>
			</CardContent>
			<CardFooter className='block p-0 bg-slate-50'>
				<Statistics
					stats={stats}
					className='basis-1/3 border border-slate-100 h-20'
				/>
			</CardFooter>
		</Card>
	)
}
