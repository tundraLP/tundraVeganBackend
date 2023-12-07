const { User } = require("../../db");
const bcrypt = require("bcrypt");

const createClient = async ( mail,  password,  name,  lastName,  adress) =>{
  
  

  const client = await Client.create({
    mail,
  
    password,
    name,
    lastName,
    adress
  });
  return client;
}

module.exports = createClient;
