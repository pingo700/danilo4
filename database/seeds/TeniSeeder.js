'use strict'

/*
|--------------------------------------------------------------------------
| TeniSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Tenis = use('App/Models/Tenis')

class TeniSeeder {
  async run () {
  }
}

module.exports = TeniSeeder
