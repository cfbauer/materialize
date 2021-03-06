/**
 * @file
 * JS for Materialize.
 */
(function($, Backdrop, window, document, undefined) {

  // some sample integration with Material Design classes and Backdrop CMS elements
  Backdrop.behaviors.materialize_select = {
    attach: function(context, setting) {

      $('.l-content').css('opacity', '.1');
      Materialize.fadeInImage('.l-content');
      $('.form-select').addClass('browser-default');

      if (screen.width > 599) {
        $('.l-wrapper').addClass('card-panel hoverable');
      }

      $('.node p').addClass('flow-text');
      $('footer').addClass('page-footer');
      $('input').addClass('validate');
    }
  }

})(jQuery, Backdrop, this, this.document);
