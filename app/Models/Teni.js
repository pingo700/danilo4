'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Teni extends Model {
    marcas(){
        return this.belongsTo("App/Models/Marcas");
    }
}

module.exports = Teni
