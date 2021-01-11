'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TrucksSchema extends Schema {
  up () {
    this.create('trucks', (table) => {
      table.increments()
      table.timestamps()
    })

  }

  down () {
    this.drop('trucks')
  }
}

module.exports = TrucksSchema
