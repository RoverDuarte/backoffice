const knex = require('../database')

function horaAtual(){
  const instante =new Date()
  return instante
}

module.exports = {
  async index(req, res, next) {
    const results = await knex('customers')
    // criar filtro
    return res.json(results)
  },
  async totalCustomers(req, res, next){
    let contador = await knex.table("customers").count('id')
    let total
    return res.json(contador)
  },
  async listCustomer(req, res, next) {
    //
  },
  async createCustomer(req, res, next) {
    try {
      const {nome, email, fone, cnpj_cpf} = req.body
      const created_at = horaAtual()
      await knex('customers').insert({nome, email, fone, cnpj_cpf, created_at})
      return res.status(201).send()
    } catch (error) {
      console.log('Error : ' + error)
      next(error)
    }
  },
  async updateCustomer(req, res, next) {
    try {
      const {nome, email, fone, cnpj_cpf} = req.body
      const {id} = req.params

      await knex('customers')
        .update({nome, email, fone, cnpj_cpf, updated_at})
        .where({id})
      
      return res.status(200).send()

    } catch (error) {
      console.log('Error : ' + error)
      next(error)
    }
  },
  async deleteCustomer(req, res, next) {
    try {
      const { id } = req.params
      await knex('customers')
        .where({id})
        .del()
      return res.status(200).send()
    } catch (error) {
      console.log('Error : ' + error)
      next(error)
    }
  }
}