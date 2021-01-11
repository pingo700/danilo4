'use strict'

/*
|--------------------------------------------------------------------------
| ShapeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Shape = use('App/Models/Shape')

class ShapeSeeder {
  async run () {
    const shapes = [
      {tipo: "Marfim"},
      {tipo: "Maple"},
      {tipo: "Fiber Glass"},
      {tipo: "Maple Fiber glass"},
    ];
    await Shape.createMany(shapes);
  }
}
module.exports = ShapeSeeder
