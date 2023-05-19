import { NoFavorites } from '@/components/ui';

import { FavoritePokemon, Layout } from '@/components/layouts';
import { useEffect, useState } from 'react';
import { localFavorites } from '@/utils';


const FavoritesPage = () => {
    const [FavoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemon);
    }, []);

    return (
        <Layout title="Favorite Page">
            {FavoritePokemons.length === 0 ? ( <NoFavorites />) : (<FavoritePokemon pokemon={FavoritePokemons}/>)}
        </Layout>
    );
};

export default FavoritesPage;
