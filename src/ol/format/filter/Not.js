/**
 * @module ol/format/filter/Not
 */
import Filter from '../filter/Filter.js';

/**
 * @classdesc
 * Represents a logical `<Not>` operator for a filter condition.
 */
class Not extends Filter {

  /**
   * @param {!module:ol/format/filter/Filter} condition Filter condition.
   * @api
   */
  constructor(condition) {

    super('Not');

    /**
     * @type {!module:ol/format/filter/Filter}
     */
    this.condition = condition;

  }

}

export default Not;
