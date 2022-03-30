import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios'; 
export const Header= styled.header`
  height: 15vh;
`
export const CardTela= styled.div`
  border-radius: 5px;
  background-color: beige;
  width: 40vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  margin: auto;
`
export const Botao= styled.button`
  margin: auto;
  margin-right: 15px;
`
export const HeaderTela= styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  margin-left: 15px;
`
export const Titulo=styled.h3`
color:hsl(345deg 99% 69%);
`
const Profile= styled.div`
  margin: auto;
`
const PainelDoLike= styled.div`
  margin: auto;
`
const Img= styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25vw;
  height: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  
`
const ContainerImagem=styled.div`
  background-color: white;
  margin: auto;
  width: 250px;
  height: 300px;
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
        <Header/>
      <CardTela>
        <HeaderTela>
          <Titulo> astroMatch</Titulo>
          <img src="https://cdn-icons-png.flaticon.com/512/1836/1836479.png" width="25px" height="25px"/>
          <Botao onClick={prop.onClick}>
            <img src="https://cdn-icons-png.flaticon.com/512/5363/5363451.png" width="25px" height="25px"/>
          </Botao>
        </HeaderTela>
          <Profile>
            <ContainerImagem>
              <Img src={profile.photo} alt={profile.name}/>
            </ContainerImagem>
            <p>
              {profile.name}, {profile.age}
            </p>
            <p>{profile.bio}</p>
          </Profile>
        <PainelDoLike>
          <button onClick={choosePersonUnlike}>
            <img src="https://cdn-icons.flaticon.com/png/512/4302/premium/4302064.png?token=exp=1648576488~hmac=c69bbadb10d4245cecd4ea33164a686d" width="50px" height="50px"/>
            </button>
          <button onClick={choosePersonLike}>
          <img src="https://cdn-icons-png.flaticon.com/512/3237/3237429.png" width="50px" height="50px"/>
          </button>
        </PainelDoLike>
      </CardTela>
        <button onClick={clear}>
        <img src="https://cdn-icons-png.flaticon.com/512/6306/6306728.png" width="50px" height="50px"/>
        </button>
    </div>
    
  )
}
