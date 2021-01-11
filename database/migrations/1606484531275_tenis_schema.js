'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TenisSchema extends Schema {
  up () {
    this.create('tenis', (table) => {
      table.increments()
      table.timestamps()
    })

  }

  down () {
    this.drop('tenis')
  }
}

module.exports = TenisSchema
