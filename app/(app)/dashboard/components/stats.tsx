import { Subheading } from '@/components/heading'
import { Stat } from './stat'

export default function Stats() {
    return (
        <section>
            <Subheading>Overview</Subheading>
            <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                <Stat title="Total revenue" value="$2.6M" change="+4.5%" />
                <Stat title="Average order value" value="$455" change="-0.5%" />
                <Stat title="Tickets sold" value="5,888" change="+4.5%" />
                <Stat title="Pageviews" value="823,067" change="+21.2%" />
            </div>
        </section>
    )
}
