import { heroes } from "../data/heroes";

export const getHeroesByFilter = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLowerCase();
    return heroes.filter( hero => hero.superhero.toLowerCase().includes( name ) );

};