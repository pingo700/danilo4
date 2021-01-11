'use strict'

/*
|--------------------------------------------------------------------------
| ManobraSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Manobra = use('App/Models/Manobra')

class ManobraSeeder {
  async run () {
    const manobra = [
      {nome_manobra: "Ollie"},
      {nome_manobra: "Varial"},
      {nome_manobra: "Kick Flip"},
      {nome_manobra: "Varial Flip"},
      {Dificuldade: "Facil"},
      {Dificuldade: "Medio"},
      {Dificuldade: "Dificil"},
      {Dificuldade: "Pro"},
    ];
    await Manobra.createMany(manobra);
  }
}

module.exports = ManobraSeeder
