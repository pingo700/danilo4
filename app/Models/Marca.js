'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Marca extends Model {
    shapes(){
        return this.hasMany("App/Models/Shape");
    }
    tenis(){
        return this.hasMany("App/Models/Tenis");
    }
    trucks(){
        return this.hasMany("App/Models/Trucks");
    }
}

module.exports = Marca
