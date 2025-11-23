import { Heading } from "@/components/heading";
import Stats from "./components/stats";
import TransactionsTable from "./components/table";

export default function DashboardPage() {
    return (
        <main className="space-y-18">
            <Heading>good afternoon, Erica</Heading>
            <Stats />
            <TransactionsTable />
        </main>
    )
}