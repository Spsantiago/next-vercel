import { SmallPokemon } from '@/interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
    pokemon: SmallPokemon;
}

export const CardPokemon: FC<Props> = ({ pokemon: { id, img, name } }) => {
    const router = useRouter();
    const pokemonClikc = () => {
        router.push(`/pokemon/${id}`);
    };
    return (
        <>
            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                <Card isHoverable isPressable onClick={pokemonClikc}>
                    <Card.Body>
                        <Card.Image
                            src={img}
                            alt="no foto"
                            width="100%"
                            height="90px"
                        />
                    </Card.Body>
                    <Card.Footer>
                        <Row justify="space-between">
                            <Text transform="capitalize">{name}</Text>
                            <Text> #{' '} {id} </Text>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
        </>
    );
};
