import { NextPage, GetStaticProps } from 'next';

import { CardPokemon, Layout } from '../components/layouts';
import { pokeAPI } from '../api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';

interface Props {
    pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
    return (
        <Layout title="Listado de Pokémons">
            <Grid.Container gap={2} justify="flex-start">
                {pokemons.map((pokemon) => (
                    <CardPokemon key={pokemon.id} pokemon={pokemon} />
                ))}
            </Grid.Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { data } = await pokeAPI.get<PokemonListResponse>(
        '/pokemon?limit=151'
    );

    const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
        ...poke,
        id: i + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            i + 1
        }.png`,
    }));
    return {
        props: {
            pokemons: pokemons,
        },
    };
};
export default HomePage;
