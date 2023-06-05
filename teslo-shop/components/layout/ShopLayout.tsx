import Head from 'next/head';
import { FC } from 'react';
import { Navbar, SideMenu } from '../ui';

interface Props {
    title: string;
    pageDescription: string;
    imageFullURL?: string;
    children: React.ReactNode;
}

export const ShopLayout: FC<Props> = ({
    title,
    pageDescription,
    imageFullURL,
    children,
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={pageDescription} />

                <meta name='og:title' content={title} />
                <meta name='og:description' content={pageDescription} />
                {imageFullURL && (
                    <meta name='og:image' content={imageFullURL} />
                )}
            </Head>

            <nav>
                <Navbar/>
            </nav>
           <SideMenu/>

            <main
                style={{
                    margin: '80px auto ',
                    maxWidth: '1440px',
                    padding: '0 30px',
                }}
            >
                {children}
            </main>

            <footer></footer>
        </>
    );
};
