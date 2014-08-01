/**
 * TodoActions
 */

"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var CartConstants = require('../constants/CartConstants');

var CartActions = {

  /**
   * @param  {object} widget
   */
  add: function(widget) {
    AppDispatcher.handleViewAction({
      actionType: CartConstants.CART_ADD,
      widget: widget
    });
  },

  /**
   * @param  {string} id
   */
  remove: function(id) {
    AppDispatcher.handleViewAction({
      actionType: CartConstants.CART_REMOVE,
      id: id
    });
  },

  /**
   * Remove all Widgets
   */
  removeAll: function() {
    AppDispatcher.handleViewAction({
      actionType: CartConstants.CART_REMOVE_ALL
    });
  }

};

module.exports = CartActions;
