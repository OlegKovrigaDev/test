import { generateColor } from '@/helper'
import { cn } from '@/lib/utils'
import { StatisticsItemProps, StatisticsProps } from '@/types'

export const StatisticsItem = ({
	stats,
	color,
	className,
}: StatisticsItemProps) => (
	<>
		{stats.map(({ id, label, value }) => (
			<li
				key={id}
				className={cn('flex flex-col justify-center', className)}
				style={{ backgroundColor: color ? generateColor() : undefined }}
			>
				<span
					className='text-slate-400 text-xs'
					style={{ color: color ? 'white' : undefined }}
				>
					{label}
				</span>
				<span className='font-medium'>{value}</span>
			</li>
		))}
	</>
)

export const Statistics = ({
	title,
	stats,
	className,
	blockClassName,
	color,
}: StatisticsProps) => (
	<div className={cn('text-center w-60', blockClassName)}>
		{title && (
			<h2 className='font-semibold text-slate-600 uppercase py-4'>{title}</h2>
		)}
		<ul className='flex flex-wrap justify-between text-center'>
			<StatisticsItem stats={stats} color={color} className={className} />
		</ul>
	</div>
)
