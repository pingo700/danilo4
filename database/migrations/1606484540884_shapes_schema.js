'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ShapesSchema extends Schema {
  up () {
    this.create('shapes', (table) => {
      table.increments()
      table.string('tipo', 15).notNullable()
      table.timestamps()
    })

  }

  down () {
    this.drop('shapes')
  }
}

module.exports = ShapesSchema
