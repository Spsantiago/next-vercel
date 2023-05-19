import { useState } from 'react';

import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Card, Grid, Image, Text, Button, Container } from '@nextui-org/react';

import confetti from 'canvas-confetti'

import { getPokemonInfo, localFavorites } from '@/utils';
import { Layout } from '@/components/layouts';
import { pokeAPI } from '@/api';
import { Pokemon } from '@/interfaces';

interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
   
    
    const [inFavorites, setinFavorites] = useState(localFavorites.inFavorites(pokemon.id))
    const onToggleFavorite=()=>{
    localFavorites.toggleFavorite(pokemon.id)
        setinFavorites( !inFavorites)
        if (inFavorites) return
            confetti ({
                zIndex:999,
                particleCount:100,
                spread:160,
                angle:100,
                origin:{
                    x:1,
                    y:0.5
                }
            })
   }

    return (
        <>
            <Layout title={pokemon.name}>
                <Grid.Container css={{ marginTop: '5 px' }} gap={2}>
                    <Grid xs={12} sm={4}>
                        <Card isHoverable css={{ padding: '30px' }}>
                            <Card.Body>
                                <Image
                                    src={
                                        pokemon.sprites.other?.dream_world
                                            .front_default || 'no foto'
                                    }
                                    alt="no foto"
                                    width="100%"
                                    height={200}
                                />
                            </Card.Body>
                        </Card>
                    </Grid>

                    <Grid xs={12} sm={8}>
                        <Card>
                            <Card.Header
                                css={{ justifyContent: 'space-between' }}
                            >
                                <Text h1 transform="capitalize">
                                    {pokemon.name}
                                </Text>
                                <Button
                                    color={'gradient'}
                                    ghost ={!inFavorites}
                                    onPress={onToggleFavorite}
                                >
                                    {inFavorites? 'Eliminar de favoritos':'Agregar a favoritos'}
                                    
                                </Button>
                            </Card.Header>
                            <Card.Body>
                                <Text h3>Sprites:</Text>
                                <Container
                                    direction="row"
                                    display="flex"
                                    gap={0}
                                >
                                    <Image
                                        src={pokemon.sprites.front_default}
                                        alt="no foto"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src={pokemon.sprites.back_default}
                                        alt="no foto"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src={pokemon.sprites.front_shiny}
                                        alt="no foto"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src={pokemon.sprites.back_shiny}
                                        alt="no foto"
                                        width={100}
                                        height={100}
                                    />
                                </Container>
                            </Card.Body>
                        </Card>
                    </Grid>
                </Grid.Container>
            </Layout>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);

    return {
        paths: pokemon151.map((id) => ({ params: { id } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string };
 
    return {
        props: {
            pokemon: await getPokemonInfo(id),
        },
    };
};
export default PokemonPage;
