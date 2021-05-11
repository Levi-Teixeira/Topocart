import axios from 'axios';
import {useState, useEffect} from 'react';

const Home = () =>{

    const [pokemon, setPokemon] = useState([]);

    useEffect(()=>{

        axios.get('https://pokeapi.co/api/v2/pokemon').then((response)=> {
        const data = response.data.results;
        setPokemon(data)
        })
        
    },[])

    console.log(pokemon)

    return(
        <div>
            {pokemon.map(item =>(
                <li>{item.name}</li>
            ))}
        </div>
    )
}

export default Home;