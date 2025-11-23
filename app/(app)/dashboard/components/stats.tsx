import { Subheading } from '@/components/heading'
import { Stat } from './stat'

export default function Stats() {
    return (
        <section>
            <Subheading>overview</Subheading>
            <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                <Stat title="saved amount" value="$2.6M" change="+4.5%" />
                <Stat title="funded amount" value="$455" change="-0.5%" />
                <Stat title="rewards" value="123" change="+4.5%" />
                <Stat title="funding received" value="$1234" change="+21.2%" />
            </div>
        </section>
    )
}
