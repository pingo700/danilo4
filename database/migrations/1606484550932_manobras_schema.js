'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ManobrasSchema extends Schema {
  up () {
    this.create('manobras', (table) => {
      table.increments()
      table.string('nome_manobra', 60).notNullable()
      table.string('Dificuldade', 60).notNullable()
      table.timestamps()
    })

  }

  down () {
    this.drop('manobras')
  }
}

module.exports = ManobrasSchema
