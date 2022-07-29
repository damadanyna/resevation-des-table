// represents the router class
const express = require("express");
const User = require("./user");
 
const router = express.Router();
 
// http://localhost:3005/api/users
router.get("/users", ()=>{
  async ( res) => {
    const Users = await User.findAndCountAll();
    res.send({
      context: Users.rows,
      total: Users.count
    });
  };
   
});
 
// http://localhost:3005/api/user/id
router.get("/user/:id", ()=>{
  async (req, res) => {
    const id = req.params.id;
    await User.findOne({ where: { id: id } }).then((item) => {
      if (item != null) {
        res.send(item);
      } else {
        res.sendStatus(404);
      }
    });
  };
   
});
 
// http://localhost:3005/api/user
/*
{
    "name": "{{$randomFullName}}",
    "email": "{{$randomEmail}}",
    "phone": "{{$randomPhoneNumber}}"
}
*/
router.post("/user", ()=>{
  async (req, res) => {
    const User = {
      name: req.body.name,
      pwd: req.body.pwd,
    };
    await User.create(User).then(() => {
      res.sendStatus(201);
    });
  };
});
 
// http://localhost:3005/api/user/id
/*
{
    "name": "{{$randomFullName}}",
    "email": "{{$randomEmail}}",
    "phone": "{{$randomPhoneNumber}}"
}
*/
router.put("/user/:id", ()=>{
  async (req, res) => {
    const id = req.params.id;
    await User.findByPk(id).then((item) => {
      if (item != null) {
        item
          .update({
            name: req.body.name,
            pwd: req.body.pwd,
          })
          .then(() => {
            res.sendStatus(204);
          });
      } else {
        res.sendStatus(404);
      }
    });
  };
});
 
// http://localhost:3005/api/user/id
router.delete("/user/:id", ()=>{
  async (req, res) => {
    const id = req.params.id;
    await User.findByPk(id).then((item) => {
      if (item != null) {
        item.destroy();
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    });
  };
});
 
module.exports = {
  routes: router
};