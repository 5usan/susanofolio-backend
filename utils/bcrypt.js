import bcrypt from "bcrypt";
const saltRounds = 15;

const bcryptHandler = {
  encryptPassword: (password) => {
    return bcrypt.hash(password, saltRounds);
  },

  compairPassword: (password, databasePassword) => {
    return bcrypt.compare(password, databasePassword);
  },
};

export default bcryptHandler;
