'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MarcasSchema extends Schema {
  up () {
    this.create('marcas', (table) => {
      table.increments()
      table.string('nome', 60).notNullable()
      table.string('qualidade', 60).notNullable()
      table.string("faixa_de_preco",60).notNullable()
      table.timestamps()
    })

  }

  down () {
    this.drop('marcas')
  }
}

module.exports = MarcasSchema
