'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Shape extends Model {
    marcas(){
        return this.belongsTo("App/Models/Marcas");
    }
}

module.exports = Shape
