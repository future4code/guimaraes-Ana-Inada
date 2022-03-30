import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios'; 
const Header= styled.header`
  height: 15vh;
`
const CardTelaInício= styled.div`
  border-radius: 5px;
  background-color: beige;
  width: 30%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  margin: auto;
`
const Botao= styled.div`
  margin: auto;
`
const Profile= styled.div`
  margin: auto;
`
const Img= styled.img`
  width: 80%;
  height: auto;
`
export default function CardPrincipal(prop) {
  const [profile, setProfile]=useState([]);
  const fetchProfileToChoose=()=>{
    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`)
    .then((res)=>{
      console.log(res.data.profile);
      setProfile(res.data.profile)
    })
    .catch((err) => console.log(err))
  }

  useEffect(()=>{
    fetchProfileToChoose()
  },[])

  const choosePersonLike=()=>{
    const body= {
      id:profile.id,
      choice:true, 
  }
    axios
    .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person`,
    body
    )
    .then((res)=>{
      fetchProfileToChoose()
    })
    .catch((err) => console.log(err))
  }

  const choosePersonUnlike=()=>{
    const body= {
      id:profile.id,
      choice:false, 
  }
    axios
    .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person`,
    body
    )
    .then((res)=>{
      fetchProfileToChoose()
    })
    .catch((err) => console.log(err))
  }
  const clear=()=>{
    axios
    .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear`)
    .then((res)=>{
      fetchProfileToChoose()
    })
    .catch((err)=>console.log(err))
  }
  return (
    <div>
        <Header>
            
        </Header>
        <CardTelaInício>
        <h3> astroMatch</h3>
        <button onClick={prop.onClick}>Matches</button>
          <Profile>
            <Img src={profile.photo} alt={profile.name}/>
            <p>
              {profile.name}, {profile.age}
            </p>
            <p>{profile.bio}</p>
          </Profile>
        <Botao>
          <button onClick={choosePersonUnlike}>
            <img src="https://cdn-icons.flaticon.com/png/512/4302/premium/4302064.png?token=exp=1648576488~hmac=c69bbadb10d4245cecd4ea33164a686d" width="50px" height="50px"/>
            </button>
          <button onClick={choosePersonLike}>
          <img src="https://cdn-icons-png.flaticon.com/512/3237/3237429.png" width="50px" height="50px"/>
          </button>
        </Botao>
        </CardTelaInício>
        <button onClick={clear}>
        <img src="https://cdn-icons-png.flaticon.com/512/6306/6306728.png" width="50px" height="50px"/>
        </button>
    </div>
    
  )
}
