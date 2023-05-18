import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
    id: number;
}

export const FavoriteCardPokemon = ({ id }: Props) => {


    const router = useRouter();
    const pokemonClikc = () => {
        router.push(`/pokemon/${id}`);
    };
    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card isHoverable isPressable onClick={pokemonClikc}>
                <Card.Body>
                    <Card.Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        alt="no foto"
                        width="100%"
                        height="90px"
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between">
                        <Text transform="capitalize"></Text>
                        <Text> # {id} </Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    );
};
