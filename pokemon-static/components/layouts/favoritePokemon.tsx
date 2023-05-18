import { Card, Grid, Row, Text } from '@nextui-org/react'
import { FavoriteCardPokemon } from './favoriteCardPokemon';



interface Props{
    pokemon:number[]
}

export const FavoritePokemon = ({pokemon}:Props) => {
  return (

    <Grid.Container gap={2} direction="row" justify="flex-start">
    {pokemon.map((id) => (
        <FavoriteCardPokemon id={id} key={id}/>
         ))}

                   
</Grid.Container>
  )}