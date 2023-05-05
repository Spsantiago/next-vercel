import Image from 'next/image';
import { Inter } from 'next/font/google';

import { MainLayout } from '../../components/layouts/MainLayout';

export default function contact() {
    return (
        <MainLayout>
            <div className="description">
                <p>
                    Get started by editing&nbsp;
                    <code className="code">pages/contact.jsx</code>
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
                <a href="/" className="card" rel="noopener noreferrer">
                    <h2>
                        Index <span>-&gt;</span>
                    </h2>
                </a>

                <a href="/" className="card" rel="noopener noreferrer">
                    <h2>
                        About <span>-&gt;</span>
                    </h2>
                </a>
            </div>
        </MainLayout>
    );
}
