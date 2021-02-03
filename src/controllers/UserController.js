const knex = require('../database')
const util = require('./utils')


module.exports = {
  async index(req, res, next) {
    const results = await knex('users')
    // criar filtro
    return res.json(results)
  },
  async totalUsers(req, res, next){
    const model = await knex.table("users").count('id')
    return res.json(model)
  },
  async listUser(req, res, next) {
    //
  },
  async createUser(req, res, next) {
    try {
      const created_at = util.timeStamp
      const {usuario, email, senha, cargo} = req.body
      await knex('users').insert({usuario, email, senha, cargo})
      return res.status(201).send()
    } catch (error) {
      console.log('Error : ' + error)
      next(error)
    }
  },
  async updateUser(req, res, next) {
    try {
      const {usuario, email, senha, cargo} = req.body
      const {id} = req.params

      await knex('users')
        .update({usuario, email, senha, cargo, created_at})
        .where({id})
      
      return res.status(200).send()

    } catch (error) {
      console.log('Error : ' + error)
      next(error)
    }
  },
  async deleteUser(req, res, next) {
    try {
      const { id } = req.params
      await knex('users')
        .where({id})
        .del()
      return res.status(200).send()
    } catch (error) {
      console.log('Error : ' + error)
      next(error)
    }
  }
}