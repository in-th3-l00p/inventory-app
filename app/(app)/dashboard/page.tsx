import Stats from "./components/stats";
import { Heading } from "@/components/heading";

export default function DashboardPage() {
    return (
        <main className="space-y-10">
            <Heading>Good afternoon, Erica</Heading>
            <Stats />
        </main>
    )
}