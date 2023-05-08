import Image from 'next/image';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';

export default function Home() {
    return (
        <MainLayout>
            <div className="description">
                <p>
                    Get started by editing&nbsp;
                    <code className="code">pages/index.jsx</code>
                </p>
            </div>

            <div className="center">
                <Image
                    className="logo"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>

            <div className="grid">
                <Link href="/about" className="card" rel="noopener noreferrer">
                    <h2>
                        Contact <span>-&gt;</span>
                    </h2>
                </Link>
                <Link href="/about" className="card" rel="noopener noreferrer">
                    <h2>
                        About <span>-&gt;</span>
                    </h2>
                </Link>
            </div>
        </MainLayout>
    );
}
