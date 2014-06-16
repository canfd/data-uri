/**
 * data-uri - A data-uri feature detector for can.js
 * @version v1.0.0
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
     *     can.use('data-uri')
     *
     */
    can.define('data-uri', {
        check : function check () {
            var data = new Image();
            
            data.onload = data.onerror = function(){
                if(this.width == 1 || this.height == 1){
                    //ja der browser kann
                }
            }
            data.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

         
        }
    });

})();
