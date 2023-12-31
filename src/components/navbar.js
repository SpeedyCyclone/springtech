import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "../components/hamburger";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router'


export default function Navbar() {
    const router = useRouter()
    const { data: session, status } = useSession();

    return (
        <div className={styles.flex}>
            <div>
                <Link href="/">
                    <Image
                        className={styles.logo}
                        alt=""
                        src="/logo.svg"
                        priority="true"
                        height={10}
                        width={10}
                    />
                </Link>
            </div>
            <nav className={styles.navbar}>
                <ul>
                    <Link href="/" className="link">
                        <li>Home</li>
                    </Link>
                    <Link href="/about" className="link" >
                        <li>About</li>
                    </Link>
                    <Link href="/products" className="link">
                        <li>Products</li>
                    </Link>
                    <Link href="/contact" className="link">
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                {status === "authenticated" ? (
                    <Link href="/profile" className={styles.special}>
                        Epsilon
                    </Link>
                ) : (
                    <Link
                        href="/api/auth/signin"
                        className={styles.special}
                        onClick={() => signIn(undefined, { callbackUrl: "/profile" })}
                    >
                        Epsilon
                    </Link>
                )}
            </div>
            <Hamburger />
        </div>
    );
}
