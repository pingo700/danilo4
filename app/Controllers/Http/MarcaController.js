'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Marca = use("App/Models/Marca")
/**
 * Resourceful controller for interacting with marcas
 */
class MarcaController {
  /**
   * Show a list of all marcas.
   * GET marcas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const marca = await  Marca.all();
    return marca;
  }

 
  /**
   * Display a single marca.
   * GET marcas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }
}
module.exports=MarcaController



