import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import TopNav from "../components/TopNav";
import SliderContainer from "../components/SliderContainer";

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    try {
      const response = await fetch("http://localhost:3000/characters", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      console.log(response.status);

      if (response.status !== 401 && response.status !== 500) {
        const data = await response.json();
        console.log("data");
        console.log(data);
        setCharacters(data);
      }
    } catch (err) {
      console.log("Error al obtener el usuario", err);
      alert("Error al obtener el usuario " + err);
    }
  };

  useEffect(() => {
    getCharacters();
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true); 
    return () => (window.onscroll = null);
  };

  return (
    <HomeContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <div className="img-hero">
          <img
            className="background-image"
            src="https://cdn.pixabay.com/photo/2015/05/28/01/52/court-787406_1280.jpg"
            alt="hero"
          />
        </div>
        <div className="container">
          <div className="charactersMap">
            <ul className="character-list">
              {characters.map((character) => (
                <div className="character-item" key={character.id}>
                  <li className="characterName">{character.name}</li>
                  <li>
                    <img
                      className="body-parts"
                      src={character.faceImage}
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="body-parts"
                      src={character.upperBody}
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="body-parts"
                      src={character.lowerBody}
                      alt=""
                    />
                  </li>
                  <li>
                    <img className="body-parts" src={character.shoes} alt="" />
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
.characterName {
  color: red;
  margin-bottom: 20px;
}
.charactersMap {
  display: flex;
  flex-wrap: wrap; 
  gap: 20px; 
}

.character-list {
  list-style: none; 
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap; 
  gap: 20px; 
}

.character-item {
  border: 1px solid #ccc;
  padding: 10px;
  width: calc(25% - 20px); /* Ancho del 25% con espacio entre elementos */
  box-sizing: border-box;
}

.body-parts {
  margin-right: 200px;
  max-width: 100px;
  height: auto;
}

.hero {
    position: relative;
    .background-image {
      filter: brightness(40%);
    }
    .img-hero {
      height: 100%;
      width: 100%;
    }
    .container {
      position: absolute;
      bottom: 1rem;
      .title {
        h1 {
          margin-left: 20rem;
          text-transform: uppercase;
          font-size: yellow;
          background: yellow;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          font-family: "lexend Deca", sans-serif;
          color: white;
        }
      }
      .buttons {
        display: flex;
        margin: 5rem;
        gap: 2rem;
      }
      .playBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: none;
        cursor: pointer;
      }
      .moreBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: black;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: 0.1rem solid white;
        cursor: pointer;
      }
    }
  }
`;

export default HomePage;
