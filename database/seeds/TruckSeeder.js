'use strict'

/*
|--------------------------------------------------------------------------
| TruckSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Truck = use('App/Models/Truck')

class TruckSeeder {
  async run () {
  }
}

module.exports = TruckSeeder
