import { useLogin, usePrivy } from "@privy-io/react-auth";
import Link from "next/link";

export default function LoginButton({ className }: { className: string }) {
    const { login } = useLogin();
    const { ready, authenticated, user } = usePrivy();    

    if (!ready) {
        return (
            <></>
        )
    }
    if (ready && authenticated) {
        return (
            <Link className={className} href="/dashboard">
                Dashboard
            </Link>
        )
    }
    return (
        <button className={className} onClick={login}>
            Log in <span aria-hidden="true">&rarr;</span>
        </button>
    )
}