import { Spacer, Text, useTheme, Link } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';

export const Navbar = () => {
    const { theme } = useTheme();
    return (
        <div
            style={{
                backgroundColor: theme?.colors.accents1.value,
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                padding: '0px 2px',
                flexDirection: 'row',
                justifyContent: 'start',
                color: 'red',
            }}
        >
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
                alt="no foto"
                width={80}
                height={80}
            />

            <Link href="/">
                <Text color="#fff" h2>
                    {' '}
                    P{' '}
                </Text>
                <Text color="#fff" h3>
                    {' '}
                    ókemon{' '}
                </Text>
            </Link>

            <Spacer css={{ flex: '1' }} />
            <NextLink href="/favorites" passHref>
                <div>
                    <Text color="white">Favoritos</Text>
                </div>
            </NextLink>
        </div>
    );
};
