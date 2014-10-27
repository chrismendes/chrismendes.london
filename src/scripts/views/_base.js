// -------
// Base View
// -------
define([
    'jquery',
    'underscore',
    'backbone',
    'text!../../templates/_header.html',
    'text!../../templates/_footer.html'
], function($, _, Backbone, htmlHeader, htmlFooter) {

    'use strict';

    var BaseView = Backbone.View.extend({

        el:             '.js-page-container',
        id:             null,
        background:     null,
        theme:          null,
        data:           null,

        onBeforeRender: function() {},

        onBeforeRenderBase: function() {
            this.clearThemeClasses();
        },

        onAfterRenderBase: function() {
            this.setMenuActiveItem();
            this.setMobileMenuButtonHandlers();
        },

        render: function() {
            this.onBeforeRenderBase();
            this.onBeforeRender();

            // Set background colour
            if(this.background !== null) {
                $('body').addClass('theme-bg-'+this.background);
            }

            // Set page theme colour
            if(this.theme !== null) {
                $('body').addClass('theme-'+this.theme);
            }

            // Set header
            var header = _.template(htmlHeader);
            $('header').html(header());

            // Set footer
            var footer = _.template(htmlFooter);
            $('footer').html(footer());

            // Set page contents
            this.$el.html(this.template(this.data));

            this.onBeforeShow();

            var self = this;
            $('.js-fadein').fadeIn(400, function() {
                self.onAfterRenderBase();
                self.onAfterRender();
            });

            return this;
        },

        onAfterRender: function() {},

        onBeforeShow: function() {},

        destroy: function() {
            this.stopListening();
            this.undelegateEvents();
            this.unbind();
        },

        showModal: function(modalID, onComplete) {
            // Acquire new modal content
            var modalTarget = '.js-modal-content-' + modalID;
            var modalContent = {
                header: $(modalTarget+' .js-modal-content-header').html(),
                body:   $(modalTarget+' .js-modal-content-body').html()
            };
            // Determine large or small modal
            if($(modalTarget).attr('data-modal-large') === 'false') {
                $('.js-modal .modal-dialog').removeClass('modal-lg');
            } else {
                $('.js-modal .modal-dialog').addClass('modal-lg');
            }
            // Set header contents
            if(typeof modalContent.header !== 'undefined') {
                $('.js-modal').removeClass('modal-no-header');
                $('.js-modal-header').html(modalContent.header);
            } else {
                $('.js-modal-header').empty();
                $('.js-modal').addClass('modal-no-header');
            }
            // Set body contents and show
            $('.js-modal-body').html(modalContent.body);
            $('.js-modal').modal();

            // Run callback if specified
            if(typeof onComplete !== 'undefined') {
                onComplete();
            }
        },

        closeModal: function() {
            $('.js-modal').modal('hide');
        },

        // Return jQuery element for clicked box, whether box itself or child element clicked
        identifyClickedBox: function(e) {
            return (e.target.tagName !== 'DIV') ? $(e.target).parent() : $(e.target);
        },

        clearThemeClasses: function() {
            var addSlideUp = ($('body').hasClass('slideup'));
            $('body').attr('class', '');
            if(addSlideUp) {
                $('body').addClass('slideup');
            }
        },

        setMenuActiveItem: function() {
            $('.js-menu li').removeClass('is-active');
            $('.js-menu-' + this.id).addClass('is-active');
        },

        setMobileMenuButtonHandlers: function() {
            $('.js-open-mobile-menu').click(function(e) {
                e.preventDefault();
                $('body').addClass('mobile-menu-open');
            });
            $('.js-close-mobile-menu').click(function(e) {
                e.preventDefault();
                $('body').removeClass('mobile-menu-open');
            });
        }

    });

    return BaseView;

});