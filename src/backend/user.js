// represents the  model
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./db_config");
 
class User extends Model {}
 
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    modelName: "user_",
    timestamps: false
  }
);
 
module.exports = User;