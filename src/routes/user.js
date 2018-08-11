const express  = require('express')
const router = express.Router()

const UserModel = require('../model/User')


const create = function(req, res) {
  const userParams = req.body
  UserModel.sync({})
    .then(() => {
      return UserModel.create(userParams)
    })
    .then((userCreated) => {
      res.json(userCreated).status(201)
    })
}
router.post('',create)

const index = function(req, res) {
  UserModel.findAll({}).then(users => {
    res.json(users).status(200)
  })
}
router.get('',index)

const view = function(req, res) {
  UserModel.findOne({where: {id: req.params.id}}).then(user => {
    res.json(user).status(200)
  })
}
router.get('/:id', view)

const remove = function(req, res){
  UserModel.findOne({where: {id: req.params.id}}).then(user => {
    res.status(204).end()
  })
}
router.delete('/:id',remove)

// const update = function(req, res) {
//   UserModel.findOne({where: {id: req.params.id}}).sync({}).update(req.params.body).then(user => {
//     res.json(user).status(201)
//   })
// }
// router.put('/:id', update)

module.exports = {
  router,
  create,
  index,
  view,
  update,
  remove
}

