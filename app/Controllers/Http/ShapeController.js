'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Shape = use("App/Models/Shape")

/**
 * Resourceful controller for interacting with shapes
 */
class ShapeController {
  /**
   * Show a list of all shapes.
   * GET shapes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const shapes = await  Shape.all();
    return shapes;
  }

  /**
   * Display a single shape.
   * GET shapes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

}

module.exports = ShapeController
