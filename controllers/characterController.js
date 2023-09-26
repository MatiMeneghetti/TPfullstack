require("mongoose");
const Character = require("../models/charaterModel");
const Usr = require("../models/userModel");

const getAllCharacters = async (limit, offset) => {
  const characters = await Character.find({}).limit(limit).skip(offset);

  return characters;
};

const getCharacter = async (id) => {
  const character = await Character.findById(id);
  return character;
};

const getCharactersByUser = async (userId) => {
  const user = await Usr.findById(userId);

  if (!user) {
    return false;
  } else {
    const characters = await Character.find({ createdBy: userId });

    return characters;
  }
};

const createCharacter = async (
  nombre,
  rostro,
  partSup,
  partInf,
  zapas,
  idPersonaje,
  idUsuario
) => {
  const user = await Usr.findById(userId);

  if (!user) {
    return false;
  } else {
    const character = new Character({
      nombre: nombre,
      rostro: rostro,
      partSup: partSup,
      partInf: partInf,
      zapas: zapas,
      createdBy: idUsuario,
      idPersonaje: idPersonaje,
    });
    let createdCharacter = await character.save();
    console.log("Personaje nuevo");
    console.log(createdCharacter);
    return { createdCharacter };
  }
};

const editCharacter = async (character) => {
  const result = await Character.findByIdAndUpdate(character._id, character, {
    new: true,
  });

  return result;
};

const deleteCharacter = async (id) => {
  const result = await Character.findByIdAndDelete(id);

  return result;
};

module.exports = {
  getAllCharacters,
  getCharacter,
  getCharactersByUser,
  createCharacter,
  editCharacter,
  deleteCharacter,
};