import { MainLayout } from "@/components/layouts/MainLayout";
import Link from "next/link";
import Image from 'next/image';
export default function PricingPage() {
    return (
        <MainLayout>
            <div className="description">
                <p>
                    Get started by editing&nbsp;
                    <code className="code">pages/Pricing.jsx</code>
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
