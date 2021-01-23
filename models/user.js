// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, Sequelize) {
 
  var User = sequelize.define('user', {

      id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },

      firstname: {
          type: Sequelize.STRING,
          notEmpty: true
      },

      lastname: {
          type: Sequelize.STRING,
          notEmpty: true
      },

     username: {
        type: Sequelize.TEXT
     },

     about: {
         type: Sequelize.TEXT
     },

      email: {
          type: Sequelize.STRING,
          validate: {
              isEmail: true
          }
      },

      password: {
          type: Sequelize.STRING,
          allowNull: false
      },

    last_login: {
        type: Sequelize.DATE
    },

      status: {
          type: Sequelize.ENUM('active', 'inactive'),
          defaultValue: 'active'
      }


  });

  return User;

};
