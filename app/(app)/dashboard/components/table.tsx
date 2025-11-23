import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { Subheading } from '@/components/heading'

const transactions = [
  { date: '2025-01-01', type: 'deposit', amount: '$100' },
  { date: '2025-01-02', type: 'deposit', amount: '$200' },
  { date: '2025-01-03', type: 'deposit', amount: '$140' },
  { date: '2025-01-04', type: 'donation', amount: '$200' },
  { date: '2025-01-05', type: 'deposit', amount: '$200' },
  { date: '2025-01-06', type: 'withdrawal', amount: '$200' },
  { date: '2025-01-07', type: 'reward', amount: '' },
]

export default function TransactionsTable() {
  return (
    <section>
        <Subheading className="mb-4">transactions</Subheading>
        <Table className="border-t">
        <TableHead>
            <TableRow>
            <TableHeader>date</TableHeader>
            <TableHeader>type</TableHeader>
            <TableHeader>amount</TableHeader>
            </TableRow>
        </TableHead>
        <TableBody>
            {transactions.map((transaction) => (
            <TableRow key={transaction.date}>
                <TableCell className="font-medium">{transaction.date}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell className="text-zinc-500">{transaction.amount}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </section>
  )
}