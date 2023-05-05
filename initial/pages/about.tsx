
import Image from 'next/image';

import { MainLayout}  from '../components/layouts/MainLayout';
import React from 'react';
import { Darklayout } from '@/components/layouts/Darklayout';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <>
        
                <div className='description'>
                    <p>
                        Get started by editing&nbsp;
                        <code className='code'>pages/about.jsx</code>
                    </p>
                </div>

                <div className='center'>
                    <Image
                        className='logo'
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                </div>

                <div className='grid'>

                    <Link
                        href="/contact"
                        className='card'
                        rel="noopener noreferrer"
                    >
                        <h2>
                            Cont <span>-&gt;</span>
                        </h2>
                        
                    </Link>
                    <Link
                        href="/"
                        className='card'
                        rel="noopener noreferrer"
                    >
                        <h2>
                            Index <span>-&gt;</span>
                        </h2>
                      
                    </Link>
                </div>
          
        </>
    );
}
AboutPage.getLayout = function getLayout( page : JSX.Element) {
    return (
      <MainLayout>
        <Darklayout>
         { page }
        </Darklayout>
      </MainLayout>
    )
  }