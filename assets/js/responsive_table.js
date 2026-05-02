/**
 * @file
 * JS for wrapping tables in a div with .table-responsive class.
 */

(function ($, Drupal, once) {

  'use strict';

  Drupal.behaviors.govcms8_uikit_starter_tableResponsive = {
    attach: function (context, settings) {

      $(once('govcms8-uikit-starter-table-responsive', 'table', context)).wrap("<div class='table-responsive'></div>");

    }
  };

})(jQuery, Drupal, once);
