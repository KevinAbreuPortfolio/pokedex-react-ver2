import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Axios from 'axios'
import {Box,Bar} from '../../components/StatTable/statBarElements'
import {Accordian} from '../../components/Accordian/accordian'
import StatTable from '../../components/StatTable/statTable'
import './test.scss'
import TypeDiv from '../../components/Type/TypeElements'
import {typeColor} from '../../components/Type/TypeColor'
import {PageContainer,DetailsContainer} from '../../components/PageContainer/PageContainer'
import {GlobalStyle} from './globalStyles'
import {Pokecard,PokeImage} from './testElements'




function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function types(id){
  
  const data1 = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  Promise.all([data1]).then(values=> {
      return Promise.all(values.map(r=>r.json()))
    }).then(([info1])=>{
      console.log(info1.types)
    })

}

function decimalPlace(number){
return number / 10;
}




// types(id)

export const Test = () => {
  console.log("Hello")
  let { id } = useParams();
  //info1
  const [species,setSpecies] = useState();
  const [num,setNum] = useState();
  const [hp,setHp] = useState();
  const [atk,setAtk] = useState();
  const [def,setDef] = useState();
  const [spatk,setSpatk] = useState();
  const [spdef,setSpdef] = useState();
  const [speed,setSpeed] = useState();
  const [image,setImage] = useState();
  const [type1,setType1] = useState();
  const [type2,setType2] = useState();
  const [ability,setAbility] = useState();
  const [height,setHeight] = useState();
  const [weight,setWeight] = useState();
  

  
  //info2
  const [flavText,setFlavText] = useState();


    const data1 = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data2 = fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

    useEffect(() => {
          Promise.all([data1,data2]).then(values=> {
      return Promise.all(values.map(r=>r.json()))
    }).then(([info1,info2])=>{
      //info1
      setSpecies(info1.name.toUpperCase());
      setImage(info1.sprites.other["official-artwork"]["front_default"]);
      setNum(info1.id);
      setHp(info1.stats[0]["base_stat"]);
      setAtk(info1.stats[1]["base_stat"]);
      setDef(info1.stats[2]["base_stat"]);
      setSpatk(info1.stats[3]["base_stat"]);
      setSpdef(info1.stats[4]["base_stat"]);
      setSpeed(info1.stats[5]["base_stat"]);
      setType1(info1.types[0].type.name);
      setWeight(decimalPlace(info1.weight));
      setHeight(decimalPlace(info1.height));
      
      

      try{
        setType2(info1.types[1].type.name);
      }
      catch(err){
        console.log(err);
      }
      //info2
      setFlavText(info2.flavor_text_entries[0].flavor_text)

      

    }).catch(err => console.log(err));

    }, [data1,data2])
   

  // (() =>{
  //   // let dexNum = Math.floor(Math.random() * 899);
  //   const zeroPad = (num, places) => String(num).padStart(places, '0')
  //   Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response)=>{
  //     // console.log(response);
  //     // setSpecies(response.data.name);
  //     setSpecies(capitalizeFirstLetter(response.data.name));
  //     setNum(response.data.id);
  //     setHp(response.data.stats[0]["base_stat"]);
  //     setAtk(response.data.stats[1]["base_stat"]);
  //     setDef(response.data.stats[2]["base_stat"]);
  //     setSpatk(response.data.stats[3]["base_stat"]);
  //     setSpdef(response.data.stats[4]["base_stat"]);
  //     setSpeed(response.data.stats[5]["base_stat"]);
  //     setImage(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${zeroPad(id,3)}.png`)
  //   })
  //   // console.log("test");
  // })()
  return (
    <DetailsContainer>
      <GlobalStyle />
      <div className="centerflex">
      <h1 className="center-text">{species || "Search a Pokemon!"}</h1> 
      </div>
      <Pokecard>
        <PokeImage img={image}/>
        <div className="typeflex">
          {[type1,type2].filter(Boolean).map(type=><TypeDiv key={type} typehue={typeColor(type)}>{type}</TypeDiv>)}
        </div>
      </Pokecard>
      <Accordian name="Base Stats" class="font">
        <StatTable hp={hp} atk={atk} def={def} spatk={spatk} spdef={spdef} speed={speed}/>
      </Accordian>
      <Accordian name="Description" class="font">
        <div className="descflex font">
          <div>No.{num}</div>
          <div>Height: {height} m</div>
          <div>Weight: {weight} kg</div>
        </div>
        <p className="font">{flavText}</p>
      </Accordian>
      
    </DetailsContainer>
  );
  
}

export default Test;
