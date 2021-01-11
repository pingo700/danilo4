'use strict'

/*
|--------------------------------------------------------------------------
| MarcaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Marca = use('App/Models/Marca')

class MarcaSeeder {
  async run () {
    const marcas = [
      {nome: "Adidas"},
      {nome: "Nike"},
      {nome: "SKTBR"},
      {nome: "Allstar"},
      {qualidade: "Ruim"},
      {qualidade: "Bom"},
      {qualidade: "Médio"},
      {qualidade: "Excelente"},
    ];
    await Marca.createMany(marcas);
  }
}

module.exports = MarcaSeeder
