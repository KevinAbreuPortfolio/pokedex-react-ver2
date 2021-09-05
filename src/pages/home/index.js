import React, {useState,useEffect} from 'react'; 
import {Route,Switch,Link} from 'react-router-dom';
import Axios from 'axios';
import Test from '../test';
import {Box,Bar} from './homeElements'
import {PokeContainer,PokeInfo,Container,ButtonLink,PokeInput,PokeButton,PokeDetails, ButtonNav} from '../home/homeElements'
import {PokeImage} from './PokeCard/pokeCardElements'
// import {PokeCard} from '../../components/PokeCard/pokeCard'
import GlobalStyle from './globalStyles'
import {PageContainer} from '../../components/PageContainer/PageContainer'
import './home.scss'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Home() {
  const [species,setSpecies] = useState();
  const [num,setNum] = useState();
  const [hp,setHp] = useState();
  const [atk,setAtk] = useState();
  const [def,setDef] = useState();
  const [spatk,setSpatk] = useState();
  const [spdef,setSpdef] = useState();
  const [speed,setSpeed] = useState();
  const [image,setImage] = useState();
  let randNum = Math.floor(Math.random() * 899);
  
  const getPokemon = (number) =>{
    
    if(number === undefined){
      console.log("NOPE");
      return
    }
    const zeroPad = (num, places) => String(num).padStart(places, '0')
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${isNaN(number)?number.toLowerCase():number}`).then((response)=>{
      // console.log(response);
      // setSpecies(response.data.name);
      setSpecies(response.data.species.name.toUpperCase());
      setNum(response.data.id);
      setHp(response.data.stats[0]["base_stat"]);
      setAtk(response.data.stats[1]["base_stat"]);
      setDef(response.data.stats[2]["base_stat"]);
      setSpatk(response.data.stats[3]["base_stat"]);
      setSpdef(response.data.stats[4]["base_stat"]);
      setSpeed(response.data.stats[5]["base_stat"]);
      setImage(response.data.sprites.other["official-artwork"]["front_default"]);
      console.log(response.data.sprites.other["official-artwork"]["front_default"]);
      // setImage(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${zeroPad(dexNum,3)}.png`)
    }).catch(err => console.log(err));
    
  }

  
  const [value,setValue] = useState();
  const handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    getPokemon(value)
  }
}
  
  return (
    <>
    <PageContainer>

      <GlobalStyle />
      <div className="centerflex">
        <h1 className="center-text">{species || "POKÉDEX"}</h1> 
      </div>

      <PokeImage img={image}>
        
      </PokeImage>
      <div className="inputFlex">
        <PokeInput type="text" placeholder="Enter Pokemon name or National Dex Number" onKeyPress={handleKeyPress} onChange={e => setValue(e.target.value) }></PokeInput>
        
      <ButtonNav>
        <PokeButton onClick={()=>getPokemon(randNum)}>Random</PokeButton>
        <Link to={`/${num}`}>
        <PokeButton>
          More Details
        </PokeButton>
        </Link>
        <PokeButton onClick={()=>getPokemon(value)}>Search</PokeButton>
      </ButtonNav>
      </div>
      
        {/* <div></div> */}
        {/* <div></div>
        <div></div> */}
      
    </PageContainer>
    </>
  );
}

export default Home;
