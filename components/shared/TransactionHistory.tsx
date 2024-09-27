import { TransactionHistoryProps } from '@/types'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '../ui'

export const TransactionHistory = ({ items }: TransactionHistoryProps) => {
	return (
		<Table className='w-auto border border-slate-300 text-center'>
			<TableHeader className='bg-blue-400 text-xs'>
				<TableRow>
					<TableHead className='text-center border-r border-slate-300 text-white uppercase font-bold'>
						Type
					</TableHead>
					<TableHead className='text-center border-r border-slate-300 text-white uppercase font-bold'>
						Amount
					</TableHead>
					<TableHead className='text-center text-white uppercase font-bold'>
						Currency
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody className='text-slate-500 text-xs'>
				{items.map(({ id, type, amount, currency }) => (
					<TableRow key={id} className='even:bg-slate-200'>
						<TableCell className='border-r border-slate-300'>{type}</TableCell>
						<TableCell className='border-r border-slate-300'>
							{amount}
						</TableCell>
						<TableCell>{currency}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}
