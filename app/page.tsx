import {
	FriendList,
	Profile,
	Statistics,
	TransactionHistory,
} from '@/components/shared'
import { friends, statistics, stats, transaction, user } from '@/data'

const Home = () => {
	return (
		<div className='flex'>
			<div className='flex flex-col'>
				<Profile user={user} stats={statistics} />
				<Statistics
					title='Upload stats'
					stats={stats}
					color
					className='size-[59.5px] text-white'
					blockClassName='border border-neutral-200 bg-white text-neutral-950 shadow rounded-[4px]'
				/>
				<FriendList friends={friends} />
			</div>
			<TransactionHistory items={transaction} />
		</div>
	)
}

export default Home
