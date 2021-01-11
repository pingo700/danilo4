'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Manobra = use("App/Models/Manobra")
/**
 * Resourceful controller for interacting with manobras
 */
class ManobraController {
  /**
   * Show a list of all manobras.
   * GET manobras
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const manobras = await  Manobra.all();
    return manobras;
  }


  /**
   * Display a single manobra.
   * GET manobras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }


}

module.exports = ManobraController;
