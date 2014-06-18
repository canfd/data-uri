/**
 * can.data-uri - A data-uri feature detector for can.js
 * @version v1.0.1
 * @author Robert Böing (robert.boeing@konexmedia.com)
 * @license MIT
 *
 */
/*
 * can-data-uri
 *
 * Copyright(c) 2014 Robert Böing <robert.boeing@konexmedia.com>
 * MIT Licensed
 *
 */

/**
 * @author Robert Böing <robert.boeing@konexmedia.com>
 *
 */

/* global can */

;(function init () {

    'use strict';

    /**
     * Checks if the browser supports data-uri integration
     * 
     * Usage:
     * 
     * can.use('data-uri', function (err, supports) {
     *    if (supports) {
     *        // Do something special.
     *    }
     * });
     *
     */
    can.define('data-uri', {

        async: true,

        check : function check (done) {
            var data = new Image();

            data.onload = data.onerror = function resolve () {
                if (1 === this.width || 1 === this.height) {
                    done(null, true);
                } else {
                    done(null, false);
                }
            };

            data.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        }
    });
})();