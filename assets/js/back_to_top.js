/**
 * @file
 * JS for Back To Top link.
 */

(function ($, Drupal, once) {

  'use strict';

  var scrollListenerAttached = false;

  function toggleBackToTop() {
    $('.back-to-top__link').toggleClass('is-visible', $(window).scrollTop() > 250);
  }

  Drupal.behaviors.govcms8_uikit_starter_BackToTop = {
    attach: function (context, settings) {
      var $body = $('body, html');
      var backToTop = $(once('govcms8-uikit-starter-back-to-top', '.back-to-top__link', context));

      if (!scrollListenerAttached) {
        $(window).on('scroll.govcms8UIKitBackToTop', toggleBackToTop);
        scrollListenerAttached = true;
        toggleBackToTop();
      }

      // Scroll smoothly to top on click.
      backToTop.on('click', function (event) {
        $body.animate({
          scrollTop: 0
        }, 800, function () {
          $body.attr('tabindex','-1').focus().removeAttr('tabindex');
        });
        event.preventDefault();
      });

    }
  };

})(jQuery, Drupal, once);
