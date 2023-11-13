import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TopNav from "../components/TopNav";

const CreateCharacter = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    faceImage: "",
    upperBody: "",
    lowerBody: "",
    shoes: "",
    createdBy: "",
  });

  const navigate = useNavigate();
  const [userId, setUserId] = useState(""); // Declarar userId aquí

  useEffect(() => {
    const userId1 = window.localStorage.getItem("userId");
    if (userId1 !== null) {
      const userId = userId1.replace(/['"]+/g, "");
      setUserId(userId); // Actualizar el valor de userId
      // Continuar con el procesamiento usando userIdWithoutQuotes
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const [isScrolled, setIsScrolled] = useState(false);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const characterData = {
    characterId: parseInt(window.localStorage.getItem("lastId")) + 1,
    name: formValues.name,
    faceImage: formValues.faceImage,
    upperBody: formValues.upperBody,
    lowerBody: formValues.lowerBody,
    shoes: formValues.shoes,
    createdBy: window.localStorage.getItem("loggedUser").replace(/['"]+/g, ""),
  };

  const handleCreation = async () => {
    console.log(JSON.stringify(characterData));
    fetch("http://localhost:3000/characters/create", {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "Content-type": "Application/json",
      },

      body: JSON.stringify(characterData),
    })
      .then((response) => {
        console.log(response.status);
        if (
          response.status !== 401 &&
          response.status !== 500 &&
          response.status !== 409 &&
          response.status !== 404
        ) {
          response.json();
          alert("Personaje creado correctamente");
          //window.open("login.html");
          updateMyCharacters();
          console.log(characterData.characterId);
          navigate("/");
          //this.close();
        } else {
          console.log("Error al crearse el personaje");
          alert("Error al crearse el personaje ");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("Error al crear personaje", err);
        alert("Error al crear el personaje " + err);
      });
  };

  const updateMyCharacters = async () => {
    fetch("http://localhost:3000/users/" + userId + "/edit", {
      method: "PUT",
      headers: {
        Accept: "Application/json",
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        myCharacters: characterData.characterId,
      }),
    })
      .then((response) => {
        console.log(response.status);
        if (
          response.status !== 401 &&
          response.status !== 500 &&
          response.status !== 409 &&
          response.status !== 404
        ) {
          response.json();
          console.log(userId.replace(/['"]+/g, ""));
          console.log("Personaje editado correctamente");
        } else {
          console.log("Error al editar el personaje");
          alert("Error al editar el personaje ");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("Error al crear personaje", err);
        alert("Error al crear el personaje " + err);
      });
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true); //si no scrolleo
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <TopNav isScrolled={isScrolled} />
      <div className="content">
        <div className="body">
          <div className="text">
            <h2></h2>
          </div>
          <div className="button-container">
            <button onClick={handleCreation}>Crear</button>
          </div>
          <div className="form">
            <input
              type="text"
              placeholder="NOMBRE"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
            />
            <div className="options">
              <h3></h3>
              <label htmlFor="faceImage" className="faceImage">
                <input
                  type="radio"
                  name="faceImage"
                  value="https://e7.pngegg.com/pngimages/405/165/png-clipart-lionel-messi-fc-barcelona-football-player-fifa-world-player-of-the-year-lionel-messi-face-head.png"
                  checked={
                    formValues.faceImage ===
                    "https://e7.pngegg.com/pngimages/405/165/png-clipart-lionel-messi-fc-barcelona-football-player-fifa-world-player-of-the-year-lionel-messi-face-head.png"
                  }
                  onChange={handleInputChange}
                />
                <img
                  src="https://e7.pngegg.com/pngimages/405/165/png-clipart-lionel-messi-fc-barcelona-football-player-fifa-world-player-of-the-year-lionel-messi-face-head.png"
                  alt="Face 1"
                />
              </label>
              <label htmlFor="faceImage" className="faceImage">
                <input
                  type="radio"
                  name="faceImage"
                  value="https://e7.pngegg.com/pngimages/566/296/png-clipart-christiano-ronaldo-cristiano-ronaldo-real-madrid-c-f-portugal-national-football-team-uefa-champions-league-manchester-united-f-c-portugal-face-head.png"
                  checked={
                    formValues.faceImage ===
                    "https://e7.pngegg.com/pngimages/566/296/png-clipart-christiano-ronaldo-cristiano-ronaldo-real-madrid-c-f-portugal-national-football-team-uefa-champions-league-manchester-united-f-c-portugal-face-head.png"
                  }
                  onChange={handleInputChange}
                />
                <img
                  src="https://e7.pngegg.com/pngimages/566/296/png-clipart-christiano-ronaldo-cristiano-ronaldo-real-madrid-c-f-portugal-national-football-team-uefa-champions-league-manchester-united-f-c-portugal-face-head.png"
                  alt="Face 2"
                />
              </label>
              <label htmlFor="faceImage" className="faceImage">
                <input
                  type="radio"
                  name="faceImage"
                  value="https://e7.pngegg.com/pngimages/877/84/png-clipart-thierry-henry-arsenal-f-c-premier-league-france-national-football-team-fc-barcelona-arsenal-f-c-face-human.png"
                  checked={
                    formValues.faceImage ===
                    "https://e7.pngegg.com/pngimages/877/84/png-clipart-thierry-henry-arsenal-f-c-premier-league-france-national-football-team-fc-barcelona-arsenal-f-c-face-human.png"
                  }
                  onChange={handleInputChange}
                />
                <img
                  src="https://e7.pngegg.com/pngimages/877/84/png-clipart-thierry-henry-arsenal-f-c-premier-league-france-national-football-team-fc-barcelona-arsenal-f-c-face-human.png"
                  alt="Face 3"
                />
              </label>
            </div>
            <div className="options">
              <h3></h3>
              <label htmlFor="upperBody" className="upperBody">
                <input
                  type="radio"
                  name="upperBody"
                  value="https://e7.pngegg.com/pngimages/441/715/png-clipart-2018-fifa-world-cup-argentina-national-football-team-argentina-national-under-20-football-team-brazil-national-football-team-jersey-shirt-tshirt-blue.png"
                  checked={
                    formValues.upperBody ===
                    "https://e7.pngegg.com/pngimages/441/715/png-clipart-2018-fifa-world-cup-argentina-national-football-team-argentina-national-under-20-football-team-brazil-national-football-team-jersey-shirt-tshirt-blue.png"
                  }
                  onChange={handleInputChange}
                />
                <img
                  src="https://e7.pngegg.com/pngimages/441/715/png-clipart-2018-fifa-world-cup-argentina-national-football-team-argentina-national-under-20-football-team-brazil-national-football-team-jersey-shirt-tshirt-blue.png"
                  alt="Upper body 1"
                />
              </label>
              <label htmlFor="upperBody" className="upperBody">
                <input
                  type="radio"
                  name="upperBody"
                  value="https://e7.pngegg.com/pngimages/629/645/png-clipart-real-madrid-c-f-la-liga-jersey-kit-football-football-tshirt-white.png"
                  checked={
                    formValues.upperBody ===
                    "https://e7.pngegg.com/pngimages/629/645/png-clipart-real-madrid-c-f-la-liga-jersey-kit-football-football-tshirt-white.png"
                  }
                  onChange={handleInputChange}
                />
                <img
                  src="https://e7.pngegg.com/pngimages/629/645/png-clipart-real-madrid-c-f-la-liga-jersey-kit-football-football-tshirt-white.png"
                  alt="Upper body 2"
                />
              </label>
              <label htmlFor="upperBody" className="upperBody">
                <input
                  type="radio"
                  name="upperBody"
                  value="https://e7.pngegg.com/pngimages/108/449/png-clipart-fc-barcelona-la-liga-jersey-kit-football-fc-barcelona-messi-jersey-men-tshirt-blue.png"
                  checked={
                    formValues.upperBody ===
                    "https://e7.pngegg.com/pngimages/108/449/png-clipart-fc-barcelona-la-liga-jersey-kit-football-fc-barcelona-messi-jersey-men-tshirt-blue.png"
                  }
                  onChange={handleInputChange}
                />
                <img
                  src="https://e7.pngegg.com/pngimages/108/449/png-clipart-fc-barcelona-la-liga-jersey-kit-football-fc-barcelona-messi-jersey-men-tshirt-blue.png"
                  alt="Upper body 3"
                />
              </label>
            </div>
            <div className="options">
              <h3></h3>
              <label htmlFor="lowerBody" className="lowerBody">
                <input
                  type="radio"
                  name="lowerBody"
                  value="https://e7.pngegg.com/pngimages/784/456/png-clipart-shorts-argentina-national-football-team-t-shirt-swim-briefs-clothing-argentina-world-cup-2018-adidas-trunks.png"
                  checked={
                    formValues.lowerBody ===
                    "https://e7.pngegg.com/pngimages/784/456/png-clipart-shorts-argentina-national-football-team-t-shirt-swim-briefs-clothing-argentina-world-cup-2018-adidas-trunks.png"
                  }
                  onChange={handleInputChange}
                />
                <img
                  src="https://e7.pngegg.com/pngimages/784/456/png-clipart-shorts-argentina-national-football-team-t-shirt-swim-briefs-clothing-argentina-world-cup-2018-adidas-trunks.png"
                  alt="Lower body 1"
                />
              </label>
              <label htmlFor="lowerBody" className="lowerBody">
                <input
                  type="radio"
                  name="lowerBody"
                  value="https://e7.pngegg.com/pngimages/581/32/png-clipart-trunks-bermuda-shorts-product-nike-blue-soccer-ball-real-madrid-blue-white.png"
                  checked={
                    formValues.lowerBody ===
                    "https://e7.pngegg.com/pngimages/581/32/png-clipart-trunks-bermuda-shorts-product-nike-blue-soccer-ball-real-madrid-blue-white.png"
                  }
                  onChange={handleInputChange}
                />
                <img
                  src="https://e7.pngegg.com/pngimages/581/32/png-clipart-trunks-bermuda-shorts-product-nike-blue-soccer-ball-real-madrid-blue-white.png"
                  alt="Lower body 2"
                />
              </label>
              <label htmlFor="lowerBody" className="lowerBody">
                <input
                  type="radio"
                  name="lowerBody"
                  value="https://e7.pngegg.com/pngimages/720/545/png-clipart-chelsea-f-c-fc-barcelona-jersey-nike-shorts-short-trunks-electric-blue.png"
                  checked={
                    formValues.lowerBody ===
                    "https://e7.pngegg.com/pngimages/720/545/png-clipart-chelsea-f-c-fc-barcelona-jersey-nike-shorts-short-trunks-electric-blue.png"
                  }
                  onChange={handleInputChange}
                />
                <img
                  src="https://e7.pngegg.com/pngimages/720/545/png-clipart-chelsea-f-c-fc-barcelona-jersey-nike-shorts-short-trunks-electric-blue.png"
                  alt="Lower body 3"
                />
              </label>
            </div>
            <div className="options">
              <h3></h3>
              <label htmlFor="shoes" className="shoes">
                <input
                  type="radio"
                  name="shoes"
                  value="https://e7.pngegg.com/pngimages/970/779/png-clipart-european-golden-shoe-football-boot-cleat-nike-football-football-boot-outdoor-shoe.png"
                  checked={
                    formValues.shoes ===
                    "https://e7.pngegg.com/pngimages/970/779/png-clipart-european-golden-shoe-football-boot-cleat-nike-football-football-boot-outdoor-shoe.png"
                  }
                  onChange={handleInputChange}
                />
                <img
                  src="https://e7.pngegg.com/pngimages/970/779/png-clipart-european-golden-shoe-football-boot-cleat-nike-football-football-boot-outdoor-shoe.png"
                  alt="Shoes 1"
                />
              </label>
              <label htmlFor="shoes" className="shoes">
                <input
                  type="radio"
                  name="shoes"
                  value="https://e7.pngegg.com/pngimages/644/433/png-clipart-real-madrid-c-f-nike-mercurial-vapor-football-boot-cleat-boot-accessories-football-boot.png"
                  checked={
                    formValues.shoes ===
                    "https://e7.pngegg.com/pngimages/644/433/png-clipart-real-madrid-c-f-nike-mercurial-vapor-football-boot-cleat-boot-accessories-football-boot.png"
                  }
                  onChange={handleInputChange}
                />
                <img
                  src="https://e7.pngegg.com/pngimages/644/433/png-clipart-real-madrid-c-f-nike-mercurial-vapor-football-boot-cleat-boot-accessories-football-boot.png"
                  alt="Shoes 2"
                />
              </label>
              <label htmlFor="shoes" className="shoes">
                <input
                  type="radio"
                  name="shoes"
                  value="https://e7.pngegg.com/pngimages/171/681/png-clipart-adidas-nemeziz-messi-17-360-agility-fg-shoe-football-boot-cleat-adidas-messi-history-football-boot-outdoor-shoe.png"
                  checked={
                    formValues.shoes ===
                    "https://e7.pngegg.com/pngimages/171/681/png-clipart-adidas-nemeziz-messi-17-360-agility-fg-shoe-football-boot-cleat-adidas-messi-history-football-boot-outdoor-shoe.png"
                  }
                  onChange={handleInputChange}
                />
                <img
                  src="https://e7.pngegg.com/pngimages/171/681/png-clipart-adidas-nemeziz-messi-17-360-agility-fg-shoe-football-boot-cleat-adidas-messi-history-football-boot-outdoor-shoe.png"
                  alt="Shoes 3"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: green;
    height: 125vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
  }
  h2 {
    margin-top: 80px;
  }
  h3 {
    margin-bottom: 30px;
    margin-right: 40px;
  }
  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2rem;
    color: red;
    h1 {
      padding: 0rem 20rem;
    }
    h4 {
      margin-top: 1.5rem;
    }
    h6 {
      margin-top: 1.5rem;
    }
  }
  
  .options {
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-direction: row;
  }
  input {
    color: black;
    padding: 0.8rem;
    font-size: 1.2rem;
    width: 20rem;
    &:focus {
      outline: none;
    }
  }
  select {
    color: black;
    padding: 0.8rem;
    font-size: 1.2rem;
    width: 20rem;
    &:focus {
      outline: none;
    }
  }

  button {
    padding: 0.5rem 1rem;
    background-color: yellow;
    border: none;
    cursor: pointer;
    color: green;
    font-size: 1.5rem; /* Cambia el tamaño de fuente según tus necesidades */
    width: 10rem; /* Ancho reducido para permitir dos botones en la misma fila */
    display: inline-block; /* Cambiado a "inline-block" para que estén en la misma línea */
    margin: 0.5rem; /* Ajusta el margen entre los botones según tus necesidades */
  }

  .button-container {
    padding: 0.5rem 1rem;
    background-color: yellow;
    border: none;
    cursor: pointer;
    color: green;
    font-size: 1.5rem;
    display: grid; /* Utiliza un contenedor flexible para alinear los botones en la misma línea */
    justify-content: center; /* Opcional: ajusta la alineación horizontal según tus necesidades */
    margin-top: 1.5rem; /* Puedes ajustar el margen según tus necesidades */
  }
  
  .button-container button {
    margin-right: 1rem; /* Agrega un margen entre los botones si es necesario */
  }



  .form {
    display: grid;
    width: 80%;
    margin-top: 1.5rem;
    grid-template-columns: "1fr 1fr";
  }


  img {
    width: 100px;
  }
`;

export default CreateCharacter;