'use strict';

var homeModule = angular.module('Home', []);
var locationModule = angular.module('Location', []);
var surveyModule = angular.module('Survey', []);
var surroundingsModule = angular.module('Surroundings', ['Shared']);
var boatModule = angular.module('Boat', ['Shared']);
var sharedModule = angular.module('Shared', []);
var apartmentsModule = angular.module('Apartments', ['Shared']);
var headerModule = angular.module('Header', []);
var contactModule = angular.module('Contact', ['Shared']);
var bookingsModule = angular.module('Bookings', ['Shared']);
var bookingModule = angular.module('Booking', ['Shared', 'Apartments']);

var application = angular.module('AptWeb', [
    'ngRoute',
    'ngCookies',
    'Home',
    'Apartments',
    'Header',
    'Contact',
    'Bookings',
    'Booking',
    'Surroundings',
    'Shared',
    'ngScrollSpy',
    'pascalprecht.translate',
    'ui.bootstrap.datepicker',
    'ui.bootstrap.dropdown',
    'ui-rangeSlider',
    'angulartics',
    'angulartics.google.analytics',
    'Location',
    'Survey',
    'Boat'
]);

application.run([
    function ()
    {
        Array.prototype.remove = function() {
            var what, a = arguments, L = a.length, ax;
            while (L && this.length) {
                what = a[--L];
                while ((ax = this.indexOf(what)) !== -1) {
                    this.splice(ax, 1);
                }
            }
            return this;
        };
    }]);


application.config(['$routeProvider', '$locationProvider', '$translateProvider',
    function ($routeProvider, $locationProvider, $translateProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'web/home/home.html',
                controller: 'HomeController'
            })
            .when('/apartments', {
                templateUrl: 'web/apartments/apartments.html',
                controller: 'ApartmentsController'
            })
            .when('/location', {
                templateUrl: 'web/location/location.html',
                controller: 'LocationController'
            })
            .when('/contact', {
                templateUrl: 'web/contact/contact.html',
                controller: 'ContactController'
            })
            .when('/surroundings', {
                templateUrl: 'web/surroundings/surroundings.html',
                controller: 'SurroundingsController'
            })
            .when('/boat', {
                templateUrl: 'web/boat/boat.html',
                controller: 'BoatController'
            })
            .when('/survey', {
                templateUrl: 'web/survey/survey.html',
                controller: 'SurveyController'
            })
            .when('/bookings', {
                templateUrl: 'web/bookings/bookings.html',
                controller: 'BookingsController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);

        $translateProvider.useStaticFilesLoader({
            prefix: 'translations/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.fallbackLanguage('en');
    }
]);
/*!
 * angular-translate - v2.6.1 - 2015-03-01
 * http://github.com/angular-translate/angular-translate
 * Copyright (c) 2015 ; Licensed MIT
 */
angular.module("pascalprecht.translate",["ng"]).run(["$translate",function(a){var b=a.storageKey(),c=a.storage(),d=function(){var d=a.preferredLanguage();angular.isString(d)?a.use(d):c.put(b,a.use())};c?c.get(b)?a.use(c.get(b))["catch"](d):d():angular.isString(a.preferredLanguage())&&a.use(a.preferredLanguage())}]),angular.module("pascalprecht.translate").provider("$translate",["$STORAGE_KEY","$windowProvider",function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r={},s=[],t=a,u=[],v=!1,w="translate-cloak",x=!1,y=".",z=0,A="2.6.1",B=function(){var a,c,d=b.$get().navigator,e=["language","browserLanguage","systemLanguage","userLanguage"];if(angular.isArray(d.languages))for(a=0;a<d.languages.length;a++)if(c=d.languages[a],c&&c.length)return c;for(a=0;a<e.length;a++)if(c=d[e[a]],c&&c.length)return c;return null};B.displayName="angular-translate/service: getFirstBrowserLanguage";var C=function(){return(B()||"").split("-").join("_")};C.displayName="angular-translate/service: getLocale";var D=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},E=function(){return this.replace(/^\s+|\s+$/g,"")},F=function(a){for(var b=[],c=angular.lowercase(a),e=0,f=s.length;f>e;e++)b.push(angular.lowercase(s[e]));if(D(b,c)>-1)return a;if(d){var g;for(var h in d){var i=!1,j=Object.prototype.hasOwnProperty.call(d,h)&&angular.lowercase(h)===angular.lowercase(a);if("*"===h.slice(-1)&&(i=h.slice(0,-1)===a.slice(0,h.length-1)),(j||i)&&(g=d[h],D(b,angular.lowercase(g))>-1))return g}}var k=a.split("_");return k.length>1&&D(b,angular.lowercase(k[0]))>-1?k[0]:a},G=function(a,b){if(!a&&!b)return r;if(a&&!b){if(angular.isString(a))return r[a]}else angular.isObject(r[a])||(r[a]={}),angular.extend(r[a],H(b));return this};this.translations=G,this.cloakClassName=function(a){return a?(w=a,this):w};var H=function(a,b,c,d){var e,f,g,h;b||(b=[]),c||(c={});for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(h=a[e],angular.isObject(h)?H(h,b.concat(e),c,e):(f=b.length?""+b.join(y)+y+e:e,b.length&&e===d&&(g=""+b.join(y),c[g]="@:"+f),c[f]=h));return c};this.addInterpolation=function(a){return u.push(a),this},this.useMessageFormatInterpolation=function(){return this.useInterpolation("$translateMessageFormatInterpolation")},this.useInterpolation=function(a){return l=a,this},this.useSanitizeValueStrategy=function(a){return v=a,this},this.preferredLanguage=function(a){return I(a),this};var I=function(a){return a&&(c=a),c};this.translationNotFoundIndicator=function(a){return this.translationNotFoundIndicatorLeft(a),this.translationNotFoundIndicatorRight(a),this},this.translationNotFoundIndicatorLeft=function(a){return a?(o=a,this):o},this.translationNotFoundIndicatorRight=function(a){return a?(p=a,this):p},this.fallbackLanguage=function(a){return J(a),this};var J=function(a){return a?(angular.isString(a)?(f=!0,e=[a]):angular.isArray(a)&&(f=!1,e=a),angular.isString(c)&&D(e,c)<0&&e.push(c),this):f?e[0]:e};this.use=function(a){if(a){if(!r[a]&&!m)throw new Error("$translateProvider couldn't find translationTable for langKey: '"+a+"'");return g=a,this}return g};var K=function(a){return a?void(t=a):j?j+t:t};this.storageKey=K,this.useUrlLoader=function(a,b){return this.useLoader("$translateUrlLoader",angular.extend({url:a},b))},this.useStaticFilesLoader=function(a){return this.useLoader("$translateStaticFilesLoader",a)},this.useLoader=function(a,b){return m=a,n=b||{},this},this.useLocalStorage=function(){return this.useStorage("$translateLocalStorage")},this.useCookieStorage=function(){return this.useStorage("$translateCookieStorage")},this.useStorage=function(a){return i=a,this},this.storagePrefix=function(a){return a?(j=a,this):a},this.useMissingTranslationHandlerLog=function(){return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")},this.useMissingTranslationHandler=function(a){return k=a,this},this.usePostCompiling=function(a){return x=!!a,this},this.determinePreferredLanguage=function(a){var b=a&&angular.isFunction(a)?a():C();return c=s.length?F(b):b,this},this.registerAvailableLanguageKeys=function(a,b){return a?(s=a,b&&(d=b),this):s},this.useLoaderCache=function(a){return a===!1?q=void 0:a===!0?q=!0:"undefined"==typeof a?q="$translationCache":a&&(q=a),this},this.directivePriority=function(a){return void 0===a?z:(z=a,this)},this.$get=["$log","$injector","$rootScope","$q",function(a,b,d,j){var s,y,B,C=b.get(l||"$translateDefaultInterpolation"),L=!1,M={},N={},O=function(a,b,d,f){if(angular.isArray(a)){var h=function(a){for(var c={},e=[],g=function(a){var e=j.defer(),g=function(b){c[a]=b,e.resolve([a,b])};return O(a,b,d,f).then(g,g),e.promise},h=0,i=a.length;i>h;h++)e.push(g(a[h]));return j.all(e).then(function(){return c})};return h(a)}var k=j.defer();a&&(a=E.apply(a));var l=function(){var a=c?N[c]:N[g];if(y=0,i&&!a){var b=s.get(t);if(a=N[b],e&&e.length){var d=D(e,b);y=0===d?1:0,D(e,c)<0&&e.push(c)}}return a}();return l?l.then(function(){$(a,b,d,f).then(k.resolve,k.reject)},k.reject):$(a,b,d,f).then(k.resolve,k.reject),k.promise},P=function(a){return o&&(a=[o,a].join(" ")),p&&(a=[a,p].join(" ")),a},Q=function(a){g=a,d.$emit("$translateChangeSuccess",{language:a}),i&&s.put(O.storageKey(),g),C.setLocale(g),angular.forEach(M,function(a,b){M[b].setLocale(g)}),d.$emit("$translateChangeEnd",{language:a})},R=function(a){if(!a)throw"No language key specified for loading.";var c=j.defer();d.$emit("$translateLoadingStart",{language:a}),L=!0;var e=q;"string"==typeof e&&(e=b.get(e));var f=angular.extend({},n,{key:a,$http:angular.extend({},{cache:e},n.$http)});return b.get(m)(f).then(function(b){var e={};d.$emit("$translateLoadingSuccess",{language:a}),angular.isArray(b)?angular.forEach(b,function(a){angular.extend(e,H(a))}):angular.extend(e,H(b)),L=!1,c.resolve({key:a,table:e}),d.$emit("$translateLoadingEnd",{language:a})},function(a){d.$emit("$translateLoadingError",{language:a}),c.reject(a),d.$emit("$translateLoadingEnd",{language:a})}),c.promise};if(i&&(s=b.get(i),!s.get||!s.put))throw new Error("Couldn't use storage '"+i+"', missing get() or put() method!");angular.isFunction(C.useSanitizeValueStrategy)&&C.useSanitizeValueStrategy(v),u.length&&angular.forEach(u,function(a){var d=b.get(a);d.setLocale(c||g),angular.isFunction(d.useSanitizeValueStrategy)&&d.useSanitizeValueStrategy(v),M[d.getInterpolationIdentifier()]=d});var S=function(a){var b=j.defer();return Object.prototype.hasOwnProperty.call(r,a)?b.resolve(r[a]):N[a]?N[a].then(function(a){G(a.key,a.table),b.resolve(a.table)},b.reject):b.reject(),b.promise},T=function(a,b,c,d){var e=j.defer();return S(a).then(function(f){if(Object.prototype.hasOwnProperty.call(f,b)){d.setLocale(a);var h=f[b];"@:"===h.substr(0,2)?T(a,h.substr(2),c,d).then(e.resolve,e.reject):e.resolve(d.interpolate(f[b],c)),d.setLocale(g)}else e.reject()},e.reject),e.promise},U=function(a,b,c,d){var e,f=r[a];if(f&&Object.prototype.hasOwnProperty.call(f,b)){if(d.setLocale(a),e=d.interpolate(f[b],c),"@:"===e.substr(0,2))return U(a,e.substr(2),c,d);d.setLocale(g)}return e},V=function(a){if(k){var c=b.get(k)(a,g);return void 0!==c?c:a}return a},W=function(a,b,c,d,f){var g=j.defer();if(a<e.length){var h=e[a];T(h,b,c,d).then(g.resolve,function(){W(a+1,b,c,d,f).then(g.resolve)})}else g.resolve(f?f:V(b));return g.promise},X=function(a,b,c,d){var f;if(a<e.length){var g=e[a];f=U(g,b,c,d),f||(f=X(a+1,b,c,d))}return f},Y=function(a,b,c,d){return W(B>0?B:y,a,b,c,d)},Z=function(a,b,c){return X(B>0?B:y,a,b,c)},$=function(a,b,c,d){var f=j.defer(),h=g?r[g]:r,i=c?M[c]:C;if(h&&Object.prototype.hasOwnProperty.call(h,a)){var l=h[a];"@:"===l.substr(0,2)?O(l.substr(2),b,c,d).then(f.resolve,f.reject):f.resolve(i.interpolate(l,b))}else{var m;k&&!L&&(m=V(a)),g&&e&&e.length?Y(a,b,i,d).then(function(a){f.resolve(a)},function(a){f.reject(P(a))}):k&&!L&&m?f.resolve(d?d:m):d?f.resolve(d):f.reject(P(a))}return f.promise},_=function(a,b,c){var d,f=g?r[g]:r,h=C;if(M&&Object.prototype.hasOwnProperty.call(M,c)&&(h=M[c]),f&&Object.prototype.hasOwnProperty.call(f,a)){var i=f[a];d="@:"===i.substr(0,2)?_(i.substr(2),b,c):h.interpolate(i,b)}else{var j;k&&!L&&(j=V(a)),g&&e&&e.length?(y=0,d=Z(a,b,h)):d=k&&!L&&j?j:P(a)}return d};if(O.preferredLanguage=function(a){return a&&I(a),c},O.cloakClassName=function(){return w},O.fallbackLanguage=function(a){if(void 0!==a&&null!==a){if(J(a),m&&e&&e.length)for(var b=0,c=e.length;c>b;b++)N[e[b]]||(N[e[b]]=R(e[b]));O.use(O.use())}return f?e[0]:e},O.useFallbackLanguage=function(a){if(void 0!==a&&null!==a)if(a){var b=D(e,a);b>-1&&(B=b)}else B=0},O.proposedLanguage=function(){return h},O.storage=function(){return s},O.use=function(a){if(!a)return g;var b=j.defer();d.$emit("$translateChangeStart",{language:a});var c=F(a);return c&&(a=c),r[a]||!m||N[a]?(b.resolve(a),Q(a)):(h=a,N[a]=R(a).then(function(c){return G(c.key,c.table),b.resolve(c.key),Q(c.key),h===a&&(h=void 0),c},function(a){h===a&&(h=void 0),d.$emit("$translateChangeError",{language:a}),b.reject(a),d.$emit("$translateChangeEnd",{language:a})})),b.promise},O.storageKey=function(){return K()},O.isPostCompilingEnabled=function(){return x},O.refresh=function(a){function b(){f.resolve(),d.$emit("$translateRefreshEnd",{language:a})}function c(){f.reject(),d.$emit("$translateRefreshEnd",{language:a})}if(!m)throw new Error("Couldn't refresh translation table, no loader registered!");var f=j.defer();if(d.$emit("$translateRefreshStart",{language:a}),a)r[a]?R(a).then(function(c){G(c.key,c.table),a===g&&Q(g),b()},c):c();else{var h=[],i={};if(e&&e.length)for(var k=0,l=e.length;l>k;k++)h.push(R(e[k])),i[e[k]]=!0;g&&!i[g]&&h.push(R(g)),j.all(h).then(function(a){angular.forEach(a,function(a){r[a.key]&&delete r[a.key],G(a.key,a.table)}),g&&Q(g),b()})}return f.promise},O.instant=function(a,b,d){if(null===a||angular.isUndefined(a))return a;if(angular.isArray(a)){for(var f={},h=0,i=a.length;i>h;h++)f[a[h]]=O.instant(a[h],b,d);return f}if(angular.isString(a)&&a.length<1)return a;a&&(a=E.apply(a));var j,l=[];c&&l.push(c),g&&l.push(g),e&&e.length&&(l=l.concat(e));for(var m=0,n=l.length;n>m;m++){var q=l[m];if(r[q]&&("undefined"!=typeof r[q][a]?j=_(a,b,d):(o||p)&&(j=P(a))),"undefined"!=typeof j)break}return j||""===j||(j=C.interpolate(a,b),k&&!L&&(j=V(a))),j},O.versionInfo=function(){return A},O.loaderCache=function(){return q},O.directivePriority=function(){return z},m&&(angular.equals(r,{})&&O.use(O.use()),e&&e.length))for(var ab=function(a){return G(a.key,a.table),d.$emit("$translateChangeEnd",{language:a.key}),a},bb=0,cb=e.length;cb>bb;bb++)N[e[bb]]=R(e[bb]).then(ab);return O}]}]),angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation",["$interpolate",function(a){var b,c={},d="default",e=null,f={escaped:function(a){var b={};for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=angular.isNumber(a[c])?a[c]:angular.element("<div></div>").text(a[c]).html());return b}},g=function(a){var b;return b=angular.isFunction(f[e])?f[e](a):a};return c.setLocale=function(a){b=a},c.getInterpolationIdentifier=function(){return d},c.useSanitizeValueStrategy=function(a){return e=a,this},c.interpolate=function(b,c){return e&&(c=g(c)),a(b)(c||{})},c}]),angular.module("pascalprecht.translate").constant("$STORAGE_KEY","NG_TRANSLATE_LANG_KEY"),angular.module("pascalprecht.translate").directive("translate",["$translate","$q","$interpolate","$compile","$parse","$rootScope",function(a,b,c,d,e,f){var g=function(){return this.replace(/^\s+|\s+$/g,"")};return{restrict:"AE",scope:!0,priority:a.directivePriority(),compile:function(b,h){var i=h.translateValues?h.translateValues:void 0,j=h.translateInterpolation?h.translateInterpolation:void 0,k=b[0].outerHTML.match(/translate-value-+/i),l="^(.*)("+c.startSymbol()+".*"+c.endSymbol()+")(.*)",m="^(.*)"+c.startSymbol()+"(.*)"+c.endSymbol()+"(.*)";return function(b,n,o){b.interpolateParams={},b.preText="",b.postText="";var p={},q=function(a){if(angular.isFunction(q._unwatchOld)&&(q._unwatchOld(),q._unwatchOld=void 0),angular.equals(a,"")||!angular.isDefined(a)){var d=g.apply(n.text()).match(l);if(angular.isArray(d)){b.preText=d[1],b.postText=d[3],p.translate=c(d[2])(b.$parent);var e=n.text().match(m);angular.isArray(e)&&e[2]&&e[2].length&&(q._unwatchOld=b.$watch(e[2],function(a){p.translate=a,w()}))}else p.translate=n.text().replace(/^\s+|\s+$/g,"")}else p.translate=a;w()},r=function(a){o.$observe(a,function(b){p[a]=b,w()})},s=!0;o.$observe("translate",function(a){"undefined"==typeof a?q(""):""===a&&s||(p.translate=a,w()),s=!1});for(var t in o)o.hasOwnProperty(t)&&"translateAttr"===t.substr(0,13)&&r(t);if(o.$observe("translateDefault",function(a){b.defaultText=a}),i&&o.$observe("translateValues",function(a){a&&b.$parent.$watch(function(){angular.extend(b.interpolateParams,e(a)(b.$parent))})}),k){var u=function(a){o.$observe(a,function(c){var d=angular.lowercase(a.substr(14,1))+a.substr(15);b.interpolateParams[d]=c})};for(var v in o)Object.prototype.hasOwnProperty.call(o,v)&&"translateValue"===v.substr(0,14)&&"translateValues"!==v&&u(v)}var w=function(){for(var a in p)p.hasOwnProperty(a)&&x(a,p[a],b,b.interpolateParams,b.defaultText)},x=function(b,c,d,e,f){c?a(c,e,j,f).then(function(a){y(a,d,!0,b)},function(a){y(a,d,!1,b)}):y(c,d,!1,b)},y=function(b,c,e,f){if("translate"===f){e||"undefined"==typeof c.defaultText||(b=c.defaultText),n.html(c.preText+b+c.postText);var g=a.isPostCompilingEnabled(),i="undefined"!=typeof h.translateCompile,j=i&&"false"!==h.translateCompile;(g&&!i||j)&&d(n.contents())(c)}else{e||"undefined"==typeof c.defaultText||(b=c.defaultText);var k=o.$attr[f].substr(15);n.attr(k,b)}};b.$watch("interpolateParams",w,!0);var z=f.$on("$translateChangeSuccess",w);n.text().length&&q(""),w(),b.$on("$destroy",z)}}}}]),angular.module("pascalprecht.translate").directive("translateCloak",["$rootScope","$translate",function(a,b){return{compile:function(c){var d=function(){c.addClass(b.cloakClassName())},e=function(){c.removeClass(b.cloakClassName())},f=a.$on("$translateChangeEnd",function(){e(),f(),f=null});return d(),function(a,c,f){f.translateCloak&&f.translateCloak.length&&f.$observe("translateCloak",function(a){b(a).then(e,d)})}}}}]),angular.module("pascalprecht.translate").filter("translate",["$parse","$translate",function(a,b){var c=function(c,d,e){return angular.isObject(d)||(d=a(d)(this)),b.instant(c,d,e)};return c.$stateful=!0,c}]);
/*!
 * angular-translate - v2.6.1 - 2015-03-01
 * http://github.com/angular-translate/angular-translate
 * Copyright (c) 2015 ; Licensed MIT
 */
angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader",["$q","$http",function(a,b){return function(c){if(!(c&&(angular.isArray(c.files)||angular.isString(c.prefix)&&angular.isString(c.suffix))))throw new Error("Couldn't load static files, no files and prefix or suffix specified!");c.files||(c.files=[{prefix:c.prefix,suffix:c.suffix}]);for(var d=function(d){if(!d||!angular.isString(d.prefix)||!angular.isString(d.suffix))throw new Error("Couldn't load static file, no prefix or suffix specified!");var e=a.defer();return b(angular.extend({url:[d.prefix,c.key,d.suffix].join(""),method:"GET",params:""},c.$http)).success(function(a){e.resolve(a)}).error(function(){e.reject(c.key)}),e.promise},e=a.defer(),f=[],g=c.files.length,h=0;g>h;h++)f.push(d({prefix:c.files[h].prefix,key:c.key,suffix:c.files[h].suffix}));return a.all(f).then(function(a){for(var b=a.length,c={},d=0;b>d;d++)for(var f in a[d])c[f]=a[d][f];e.resolve(c)},function(a){e.reject(a)}),e.promise}}]);
/*!
 * angular-translate - v2.6.1 - 2015-03-01
 * http://github.com/angular-translate/angular-translate
 * Copyright (c) 2015 ; Licensed MIT
 */
angular.module("pascalprecht.translate").factory("$translateUrlLoader",["$q","$http",function(a,b){return function(c){if(!c||!c.url)throw new Error("Couldn't use urlLoader since no url is given!");var d=a.defer(),e={};return e[c.queryParameter||"lang"]=c.key,b(angular.extend({url:c.url,params:e,method:"GET"},c.$http)).success(function(a){d.resolve(a)}).error(function(){d.reject(c.key)}),d.promise}}]);
/*
 AngularJS v1.3.13
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(q,d,C){'use strict';function v(r,k,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,y){function z(){l&&(h.cancel(l),l=null);m&&(m.$destroy(),m=null);n&&(l=h.leave(n),l.then(function(){l=null}),n=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=r.current;n=y(b,function(b){h.enter(b,null,n||f).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||k()});z()});m=c.scope=b;m.$emit("$viewContentLoaded");
    m.$eval(w)}else z()}var m,n,l,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,k,h){return{restrict:"ECA",priority:-400,link:function(a,f){var b=h.current,c=b.locals;f.html(c.$template);var y=d(f.contents());b.controller&&(c.$scope=a,c=k(b.controller,c),b.controllerAs&&(a[b.controllerAs]=c),f.data("$ngControllerController",c),f.children().data("$ngControllerController",c));y(a)}}}q=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return d.extend(Object.create(a),
    f)}function k(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},h=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}var h={};this.when=function(a,f){var b=d.copy(f);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
    d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);h[a]=d.extend(b,a&&k(a,b));if(a){var c="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[c]=d.extend({redirectTo:a},k(c,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,k,q,x){function m(b){var e=s.current;
    (v=(p=l())&&e&&p.$$route===e.$$route&&d.equals(p.pathParams,e.pathParams)&&!p.reloadOnSearch&&!w)||!e&&!p||a.$broadcast("$routeChangeStart",p,e).defaultPrevented&&b&&b.preventDefault()}function n(){var u=s.current,e=p;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),c.when(e).then(function(){if(e){var a=
    d.extend({},e.resolve),b,g;d.forEach(a,function(b,e){a[e]=d.isString(b)?k.get(b):k.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(g=e.templateUrl)&&(d.isFunction(g)&&(g=g(e.params)),g=x.getTrustedResourceUrl(g),d.isDefined(g)&&(e.loadedTemplateUrl=g,b=q(g)));d.isDefined(b)&&(a.$template=b);return c.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
    e,u,b)})}function l(){var a,b;d.forEach(h,function(c,h){var g;if(g=!b){var k=f.path();g=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=g[l-1],q=k[l];p&&q&&(m[p.name]=q)}g=m}else g=null;else g=null;g=a=g}g&&(b=r(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||h[null]&&r(h[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
    h=f[1];c.push(b[h]);c.push(f[2]||"");delete b[h]}});return c.join("")}var w=!1,p,v,s={routes:h,reload:function(){w=!0;a.$evalAsync(function(){m();n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",m);a.$on("$locationChangeSuccess",n);return s}]});var B=d.$$minErr("ngRoute");q.provider("$routeParams",function(){this.$get=function(){return{}}});
    q.directive("ngView",v);q.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);

/*
 *  Angular RangeSlider Directive
 * 
 *  Version: 0.0.13
 *
 *  Author: Daniel Crisp, danielcrisp.com
 *
 *  The rangeSlider has been styled to match the default styling
 *  of form elements styled using Twitter's Bootstrap
 *
 *  Originally forked from https://github.com/leongersen/noUiSlider
 *

 This code is released under the MIT Licence - http://opensource.org/licenses/MIT

 Copyright (c) 2013 Daniel Crisp

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 */

(function () {
    'use strict';

    /**
     * RangeSlider, allows user to define a range of values using a slider
     * Touch friendly.
     * @directive
     */
    angular.module('ui-rangeSlider', [])
        .directive('rangeSlider', ['$document', function ($document) {

            // test for mouse, pointer or touch
            var eventNamespace = '.rangeSlider',

                defaults = {
                    disabled: false,
                    step: 0,
                    minRange: 0
                },

            // Determine the events to bind. IE11 implements pointerEvents without
            // a prefix, which breaks compatibility with the IE10 implementation.
                /** @const */
                actions = window.navigator.pointerEnabled ? {
                    start: 'pointerdown',
                    move: 'pointermove',
                    end: 'pointerup',
                    over: 'pointerdown',
                    out: 'mouseout'
                } : window.navigator.msPointerEnabled ? {
                    start: 'MSPointerDown',
                    move: 'MSPointerMove',
                    end: 'MSPointerUp',
                    over: 'MSPointerDown',
                    out: 'mouseout'
                } : {
                    start: 'mousedown touchstart',
                    move: 'mousemove touchmove',
                    end: 'mouseup touchend',
                    over: 'mouseover touchstart',
                    out: 'mouseout'
                },

                onEvent = actions.start + eventNamespace,
                moveEvent = actions.move + eventNamespace,
                offEvent = actions.end + eventNamespace,
                overEvent = actions.over + eventNamespace,
                outEvent = actions.out + eventNamespace,

            // get standarised clientX and clientY
                client = function (f) {
                    try {
                        return [(f.clientX || f.originalEvent.clientX || f.originalEvent.touches[0].clientX), (f.clientY || f.originalEvent.clientY || f.originalEvent.touches[0].clientY)];
                    } catch (e) {
                        return ['x', 'y'];
                    }
                },

                restrict = function (value) {

                    // normalize so it can't move out of bounds
                    return (value < 0 ? 0 : (value > 100 ? 100 : value));

                };

            return {
                restrict: 'A',
                replace: true,
                template: ['<div class="ngrs-range-slider">',
                    '<div class="ngrs-runner">',
                    '<div class="ngrs-handle ngrs-handle-min">',
                    "<i>{{model.fromDate | date:'d.M.'}}</i>",
                    '</div>',
                    '<div class="ngrs-handle ngrs-handle-max">',
                    "<i>{{model.toDate | date:'d.M.'}}</i>",
                    '</div>',
                    '<div class="ngrs-join"></div>',
                    '</div>',
                    '<div class="ngrs-range-runner">',
                    '</div>',
                    '<div>',
                    '<div class="right-border">',
                    '</div>',
                    '<div class="left-border">',
                    '</div>',
                    '</div>'
                ].join(''),
                scope: {
                    disabled: '=?',
                    min: '=',
                    max: '=',
                    model: '=',
                    onHandleDown: '&', // calls optional function when handle is grabbed
                    onHandleUp: '&', // calls optional function when handle is released
                    step: '@'
                },
                link: function (scope, element, attrs, controller) {

                    /**
                     *  FIND ELEMENTS
                     */

                    var $slider = angular.element(element),
                        handles = [element.find('.ngrs-handle-min'), element.find('.ngrs-handle-max')],
                        values = [element.find('.ngrs-value-min'), element.find('.ngrs-value-max')],
                        join = element.find('.ngrs-join'),
                        pos = 'left',
                        posOpp = 'right',
                        orientation = 0,
                        allowedRange = [0, 0],
                        range = 0,
                        down = false;

                    attrs.$observe('disabled', function (val) {
                        if (!angular.isDefined(val)) {
                            scope.disabled = defaults.disabled;
                        }

                        scope.$watch('disabled', setDisabledStatus);
                    });

                    attrs.$observe('step', function (val) {
                        if (!angular.isDefined(val)) {
                            scope.step = defaults.step;
                        }
                    });

                    attrs.$observe('model.minRange', function (val) {
                        if (!angular.isDefined(val)) {
                            scope.minRange = defaults.minRange;
                        }
                    });

                    // listen for changes to values
                    scope.$watch('model', setMinMax);

                    scope.$watch('model.from', setModelMinMax);
                    scope.$watch('model.to', setModelMinMax);

                    /**
                     * HANDLE CHANGES
                     */

                    function setDisabledStatus(status) {
                        if (status) {
                            $slider.addClass('ngrs-disabled');
                        } else {
                            $slider.removeClass('ngrs-disabled');
                        }
                    }

                    function setMinMax() {

                        if (scope.min > scope.max) {
                            throwError('min must be less than or equal to max');
                        }

                        // only do stuff when both values are ready
                        if (angular.isDefined(scope.min) && angular.isDefined(scope.max)) {

                            // make sure they are numbers

                            range = scope.max - scope.min;
                            allowedRange = [scope.min, scope.max];

                            // update models too
                            setModelMinMax();

                        }
                    }

                    function setModelMinMax() {

                        // only do stuff when both values are ready
                        if (
                            angular.isDefined(scope.model.from) &&
                            angular.isDefined(scope.model.to)
                        ) {

                            var handle1pos = restrict(((scope.model.from - scope.min) / range) * 100),
                                handle2pos = restrict(((scope.model.to - scope.min) / range) * 100);

                            if (scope.model.to - scope.model.from <= scope.model.minRange){
                                scope.model.from = Math.max(scope.min, scope.model.from);
                                scope.model.to =  scope.model.from + scope.model.minRange + 1
                            }
                            else {
                                scope.model.from = Math.max(scope.min, scope.model.from);
                                scope.model.to = Math.min(scope.max, scope.model.to);
                            }

                            // make sure the model values are within the allowed range


                            // check for no range
                            if (scope.min === scope.max && scope.model.from == scope.model.to) {

                                // reposition handles
                                angular.element(handles[0]).css(pos, '0%');
                                angular.element(handles[1]).css(pos, '100%');

                                if (scope.attachHandleValues) {
                                    // reposition values
                                    angular.element(values[0]).css(pos, '0%');
                                    angular.element(values[1]).css(pos, '100%');
                                }

                                // reposition join
                                angular.element(join).css(pos, '0%').css(posOpp, '0%');

                            } else {

                                // reposition handles
                                angular.element(handles[0]).css(pos, handle1pos + '%');
                                angular.element(handles[1]).css(pos, handle2pos + '%');

                                // reposition join
                                angular.element(join).css(pos, handle1pos + '%').css(posOpp, (100 - handle2pos) + '%');

                                // ensure min handle can't be hidden behind max handle
                                if (handle1pos > 95) {
                                    angular.element(handles[0]).css('z-index', 3);
                                }
                            }

                        }
                    }

                    function handleMove(index) {

                        var $handle = handles[index];

                        // on mousedown / touchstart
                        $handle.bind(onEvent + 'X', function (event) {

                            var handleDownClass = (index === 0 ? 'ngrs-handle-min' : 'ngrs-handle-max') + '-down',
                            //unbind = $handle.add($document).add('body'),
                                modelValue = (index === 0 ? scope.model.from : scope.model.to) - scope.min,
                                originalPosition = (modelValue / range) * 100,
                                originalClick = client(event),
                                previousClick = originalClick,
                                previousProposal = false;

                            if (angular.isFunction(scope.onHandleDown)) {
                                scope.onHandleDown();
                            }

                            // stop user accidentally selecting stuff
                            angular.element('body').bind('selectstart' + eventNamespace, function () {
                                return false;
                            });

                            // only do stuff if we are disabled
                            if (!scope.disabled) {

                                // flag as down
                                down = true;

                                // add down class
                                //$handle.addClass('ngrs-down');

                                $slider.addClass('ngrs-focus ' + handleDownClass);

                                // add touch class for MS styling
                                angular.element('body').addClass('ngrs-touching');

                                // listen for mousemove / touchmove document events
                                $document.bind(moveEvent, function (e) {
                                    // prevent default
                                    e.preventDefault();

                                    var currentClick = client(e),
                                        movement,
                                        proposal,
                                        other,
                                        per = (scope.step / range) * 100,
                                        otherModelPosition = (((index === 0 ? scope.model.to : scope.model.from) - scope.min) / range) * 100;

                                    if (currentClick[0] === "x") {
                                        return;
                                    }

                                    // calculate deltas
                                    currentClick[0] -= originalClick[0];
                                    currentClick[1] -= originalClick[1];

                                    // has movement occurred on either axis?
                                    movement = [
                                        (previousClick[0] !== currentClick[0]), (previousClick[1] !== currentClick[1])
                                    ];

                                    // propose a movement
                                    proposal = originalPosition + ((currentClick[orientation] * 100) / (orientation ? $slider.height() : $slider.width()));

                                    // normalize so it can't move out of bounds
                                    proposal = restrict(proposal);

                                    if (scope.preventEqualMinMax) {

                                        if (per === 0) {
                                            per = (1 / range) * 100; // restrict to 1
                                        }

                                        if (index === 0) {
                                            otherModelPosition = otherModelPosition - per;
                                        } else if (index === 1) {
                                            otherModelPosition = otherModelPosition + per;
                                        }
                                    }

                                    // check which handle is being moved and add / remove margin
                                    if (index === 0) {
                                        proposal = proposal > otherModelPosition ? otherModelPosition : proposal;
                                    } else if (index === 1) {
                                        proposal = proposal < otherModelPosition ? otherModelPosition : proposal;
                                    }

                                    if (scope.step > 0) {
                                        // only change if we are within the extremes, otherwise we get strange rounding
                                        if (proposal < 100 && proposal > 0) {
                                            proposal = Math.round(proposal / per) * per;
                                        }
                                    }

                                    if (proposal > 95 && index === 0) {
                                        $handle.css('z-index', 3);
                                    } else {
                                        $handle.css('z-index', '');
                                    }

                                    if (movement[orientation] && proposal != previousProposal) {

                                        if (index === 0) {

                                            // update model as we slide
                                            scope.model.from = parseFloat(parseFloat((((proposal * range) / 100) + scope.min)).toFixed(scope.decimalPlaces));

                                        } else if (index === 1) {

                                            scope.model.to = parseFloat(parseFloat((((proposal * range) / 100) + scope.min)).toFixed(scope.decimalPlaces));
                                        }

                                        // update angular
                                        scope.$apply();

                                        previousProposal = proposal;

                                    }

                                    previousClick = currentClick;

                                }).bind(offEvent, function () {

                                    if (angular.isFunction(scope.onHandleUp)) {
                                        scope.onHandleUp();
                                    }

                                    // unbind listeners
                                    $document.off(moveEvent);
                                    $document.off(offEvent);

                                    angular.element('body').removeClass('ngrs-touching');

                                    // cancel down flag
                                    down = false;

                                    // remove down and over class
                                    //$handle.removeClass('ngrs-down');
                                    //$handle.removeClass('ngrs-over');

                                    // remove active class
                                    $slider.removeClass('ngrs-focus ' + handleDownClass);

                                });
                            }

                        });
                    }

                    /**
                     * DESTROY
                     */

                    scope.$on('$destroy', function () {

                        // unbind event from slider
                        $slider.off(eventNamespace);

                        // unbind from body
                        angular.element('body').off(eventNamespace);

                        // unbind from document
                        $document.off(eventNamespace);

                        // unbind from handles
                        for (var i = 0, l = handles.length; i < l; i++) {
                            handles[i].off(eventNamespace);
                            handles[i].off(eventNamespace + 'X');
                        }

                    });

                    /**
                     * INIT
                     */

                    $slider
                        // disable selection
                        .bind('selectstart' + eventNamespace, function (event) {
                            return false;
                        })
                        // stop propagation
                        .bind('click', function (event) {
                            event.stopPropagation();
                        });

                    // bind events to each handle
                    handleMove(0);
                    handleMove(1);

                }
            };
        }]);

    // requestAnimationFramePolyFill
    // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
}());

/**
 * @license Angulartics v0.17.2
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Universal Analytics update contributed by http://github.com/willmcclellan
 * License: MIT
 */
!function(a){"use strict";a.module("angulartics.google.analytics",["angulartics"]).config(["$analyticsProvider",function(b){b.settings.trackRelativePath=!0,b.settings.ga={additionalAccountNames:void 0},b.registerPageTrack(function(c){window._gaq&&_gaq.push(["_trackPageview",c]),window.ga&&(ga("send","pageview",c),a.forEach(b.settings.ga.additionalAccountNames,function(a){ga(a+".send","pageview",c)}))}),b.registerEventTrack(function(c,d){if(d&&d.category){if(d.value){var e=parseInt(d.value,10);d.value=isNaN(e)?0:e}if(window.ga){for(var f={eventCategory:d.category||null,eventAction:c||null,eventLabel:d.label||null,eventValue:d.value||null,nonInteraction:d.noninteraction||null},g=1;20>=g;g++)d["dimension"+g.toString()]&&(f["dimension"+g.toString()]=d["dimension"+g.toString()]),d["metric"+g.toString()]&&(f["metric"+g.toString()]=d["metric"+g.toString()]);ga("send","event",f),a.forEach(b.settings.ga.additionalAccountNames,function(a){ga(a+".send","event",f)})}else window._gaq&&_gaq.push(["_trackEvent",d.category,c,d.label,d.value,d.noninteraction])}})}])}(angular);
/**
 * @license Angulartics v0.17.2
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * License: MIT
 */
!function(a){"use strict";var b=window.angulartics||(window.angulartics={});b.waitForVendorCount=0,b.waitForVendorApi=function(a,c,d,e,f){f||b.waitForVendorCount++,e||(e=d,d=void 0),!Object.prototype.hasOwnProperty.call(window,a)||void 0!==d&&void 0===window[a][d]?setTimeout(function(){b.waitForVendorApi(a,c,d,e,!0)},c):(b.waitForVendorCount--,e(window[a]))},a.module("angulartics",[]).provider("$analytics",function(){var c={pageTracking:{autoTrackFirstPage:!0,autoTrackVirtualPages:!0,trackRelativePath:!1,autoBasePath:!1,basePath:""},eventTracking:{},bufferFlushDelay:1e3,developerMode:!1},d=["pageTrack","eventTrack","setAlias","setUsername","setAlias","setUserProperties","setUserPropertiesOnce","setSuperProperties","setSuperPropertiesOnce"],e={},f={},g=function(a){return function(){b.waitForVendorCount&&(e[a]||(e[a]=[]),e[a].push(arguments))}},h=function(b,c){return f[b]||(f[b]=[]),f[b].push(c),function(){var c=arguments;a.forEach(f[b],function(a){a.apply(this,c)},this)}},i={settings:c},j=function(a,b){b?setTimeout(a,b):a()},k={$get:function(){return i},api:i,settings:c,virtualPageviews:function(a){this.settings.pageTracking.autoTrackVirtualPages=a},firstPageview:function(a){this.settings.pageTracking.autoTrackFirstPage=a},withBase:function(b){this.settings.pageTracking.basePath=b?a.element("base").attr("href").slice(0,-1):""},withAutoBase:function(a){this.settings.pageTracking.autoBasePath=a},developerMode:function(a){this.settings.developerMode=a}},l=function(b,d){i[b]=h(b,d);var f=c[b],g=f?f.bufferFlushDelay:null,k=null!==g?g:c.bufferFlushDelay;a.forEach(e[b],function(a,b){j(function(){d.apply(this,a)},b*k)})},m=function(a){return a.replace(/^./,function(a){return a.toUpperCase()})},n=function(a){var b="register"+m(a);k[b]=function(b){l(a,b)},i[a]=h(a,g(a))};return a.forEach(d,n),k}).run(["$rootScope","$window","$analytics","$injector",function(b,c,d,e){d.settings.pageTracking.autoTrackFirstPage&&e.invoke(["$location",function(a){var b=!0;if(e.has("$route")){var f=e.get("$route");for(var g in f.routes){b=!1;break}}else if(e.has("$state")){var h=e.get("$state");for(var i in h.get()){b=!1;break}}if(b)if(d.settings.pageTracking.autoBasePath&&(d.settings.pageTracking.basePath=c.location.pathname),d.settings.trackRelativePath){var j=d.settings.pageTracking.basePath+a.url();d.pageTrack(j,a)}else d.pageTrack(a.absUrl(),a)}]),d.settings.pageTracking.autoTrackVirtualPages&&e.invoke(["$location",function(a){d.settings.pageTracking.autoBasePath&&(d.settings.pageTracking.basePath=c.location.pathname+"#"),e.has("$route")&&b.$on("$routeChangeSuccess",function(b,c){if(!c||!(c.$$route||c).redirectTo){var e=d.settings.pageTracking.basePath+a.url();d.pageTrack(e,a)}}),e.has("$state")&&b.$on("$stateChangeSuccess",function(){var b=d.settings.pageTracking.basePath+a.url();d.pageTrack(b,a)})}]),d.settings.developerMode&&a.forEach(d,function(a,b){"function"==typeof a&&(d[b]=function(){})})}]).directive("analyticsOn",["$analytics",function(b){function c(a){return["a:","button:","button:button","button:submit","input:button","input:submit"].indexOf(a.tagName.toLowerCase()+":"+(a.type||""))>=0}function d(a){return c(a)?"click":"click"}function e(a){return c(a)?a.innerText||a.value:a.id||a.name||a.tagName}function f(a){return"analytics"===a.substr(0,9)&&-1===["On","Event","If","Properties","EventType"].indexOf(a.substr(9))}function g(a){var b=a.slice(9);return"undefined"!=typeof b&&null!==b&&b.length>0?b.substring(0,1).toLowerCase()+b.substring(1):b}return{restrict:"A",link:function(c,h,i){var j=i.analyticsOn||d(h[0]),k={};a.forEach(i.$attr,function(a,b){f(b)&&(k[g(b)]=i[b],i.$observe(b,function(a){k[g(b)]=a}))}),a.element(h[0]).bind(j,function(d){var f=i.analyticsEvent||e(h[0]);k.eventType=d.type,(!i.analyticsIf||c.$eval(i.analyticsIf))&&(i.analyticsProperties&&a.extend(k,c.$eval(i.analyticsProperties)),b.eventTrack(f,k))})}}}])}(angular);
angular.module('ui.bootstrap.dateparser', [])

    .service('dateParser', ['$locale', 'orderByFilter', function($locale, orderByFilter) {
      // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
      var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

      this.parsers = {};

      var formatCodeToRegex = {
        'yyyy': {
          regex: '\\d{4}',
          apply: function(value) { this.year = +value; }
        },
        'yy': {
          regex: '\\d{2}',
          apply: function(value) { this.year = +value + 2000; }
        },
        'y': {
          regex: '\\d{1,4}',
          apply: function(value) { this.year = +value; }
        },
        'MMMM': {
          regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
          apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); }
        },
        'MMM': {
          regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
          apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); }
        },
        'MM': {
          regex: '0[1-9]|1[0-2]',
          apply: function(value) { this.month = value - 1; }
        },
        'M': {
          regex: '[1-9]|1[0-2]',
          apply: function(value) { this.month = value - 1; }
        },
        'dd': {
          regex: '[0-2][0-9]{1}|3[0-1]{1}',
          apply: function(value) { this.date = +value; }
        },
        'd': {
          regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
          apply: function(value) { this.date = +value; }
        },
        'EEEE': {
          regex: $locale.DATETIME_FORMATS.DAY.join('|')
        },
        'EEE': {
          regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|')
        },
        'HH': {
          regex: '(?:0|1)[0-9]|2[0-3]',
          apply: function(value) { this.hours = +value; }
        },
        'H': {
          regex: '1?[0-9]|2[0-3]',
          apply: function(value) { this.hours = +value; }
        },
        'mm': {
          regex: '[0-5][0-9]',
          apply: function(value) { this.minutes = +value; }
        },
        'm': {
          regex: '[0-9]|[1-5][0-9]',
          apply: function(value) { this.minutes = +value; }
        },
        'sss': {
          regex: '[0-9][0-9][0-9]',
          apply: function(value) { this.milliseconds = +value; }
        },
        'ss': {
          regex: '[0-5][0-9]',
          apply: function(value) { this.seconds = +value; }
        },
        's': {
          regex: '[0-9]|[1-5][0-9]',
          apply: function(value) { this.seconds = +value; }
        }
      };

      function createParser(format) {
        var map = [], regex = format.split('');

        angular.forEach(formatCodeToRegex, function(data, code) {
          var index = format.indexOf(code);

          if (index > -1) {
            format = format.split('');

            regex[index] = '(' + data.regex + ')';
            format[index] = '$'; // Custom symbol to define consumed part of format
            for (var i = index + 1, n = index + code.length; i < n; i++) {
              regex[i] = '';
              format[i] = '$';
            }
            format = format.join('');

            map.push({ index: index, apply: data.apply });
          }
        });

        return {
          regex: new RegExp('^' + regex.join('') + '$'),
          map: orderByFilter(map, 'index')
        };
      }

      this.parse = function(input, format, baseDate) {
        if ( !angular.isString(input) || !format ) {
          return input;
        }

        format = $locale.DATETIME_FORMATS[format] || format;
        format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');

        if ( !this.parsers[format] ) {
          this.parsers[format] = createParser(format);
        }

        var parser = this.parsers[format],
            regex = parser.regex,
            map = parser.map,
            results = input.match(regex);

        if ( results && results.length ) {
          var fields, dt;
          if (baseDate) {
            fields = {
              year: baseDate.getFullYear(),
              month: baseDate.getMonth(),
              date: baseDate.getDate(),
              hours: baseDate.getHours(),
              minutes: baseDate.getMinutes(),
              seconds: baseDate.getSeconds(),
              milliseconds: baseDate.getMilliseconds()
            };
          } else {
            fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
          }

          for( var i = 1, n = results.length; i < n; i++ ) {
            var mapper = map[i-1];
            if ( mapper.apply ) {
              mapper.apply.call(fields, results[i]);
            }
          }

          if ( isValid(fields.year, fields.month, fields.date) ) {
            dt = new Date(fields.year, fields.month, fields.date, fields.hours, fields.minutes, fields.seconds,
                fields.milliseconds || 0);
          }

          return dt;
        }
      };

      // Check if date is valid for specific month (and year for February).
      // Month: 0 = Jan, 1 = Feb, etc
      function isValid(year, month, date) {
        if (date < 1) {
          return false;
        }

        if ( month === 1 && date > 28) {
          return date === 29 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
        }

        if ( month === 3 || month === 5 || month === 8 || month === 10) {
          return date < 31;
        }

        return true;
      }
    }]);

angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.position'])

    .constant('datepickerConfig', {
        formatDay: 'dd',
        formatMonth: 'MMMM',
        formatYear: 'yyyy',
        formatDayHeader: 'EEE',
        formatDayTitle: 'MMMM yyyy',
        formatMonthTitle: 'yyyy',
        datepickerMode: 'day',
        minMode: 'day',
        maxMode: 'doubleday',
        showWeeks: true,
        startingDay: 0,
        yearRange: 20,
        minDate: null,
        maxDate: null,
        shortcutPropagation: false
    })

    .controller('DatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$timeout', '$log', 'dateFilter', 'datepickerConfig', function($scope, $attrs, $parse, $interpolate, $timeout, $log, dateFilter, datepickerConfig) {
        var self = this,
            ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl;

        // Modes chain
        this.modes = ['day', 'doubleday'];

        // Configuration attributes
        angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle',
            'minMode', 'maxMode', 'showWeeks', 'startingDay', 'yearRange', 'shortcutPropagation', 'numberOfMonths'], function( key, index ) {
            self[key] = angular.isDefined($attrs[key]) ? (index < 8 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key])) : datepickerConfig[key];
        });

        // Watchable date attributes
        angular.forEach(['minDate', 'maxDate'], function( key ) {
            if ( $attrs[key] ) {
                $scope.$parent.$watch($parse($attrs[key]), function(value) {
                    self[key] = value ? new Date(value) : null;
                    self.refreshView();
                });
            } else {
                self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
            }
        });

        $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
        $scope.maxMode = self.maxMode;
        $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

        if(angular.isDefined($attrs.initDate)) {
            this.activeDate = $scope.$parent.$eval($attrs.initDate) || new Date();
            $scope.$parent.$watch($attrs.initDate, function(initDate){
                if(initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)){
                    self.activeDate = initDate;
                    self.refreshView();
                }
            });
        } else {
            this.activeDate =  new Date();
        }

        $scope.isActive = function(dateObject) {
            if (self.compare(dateObject.date, self.activeDate) === 0) {
                $scope.activeDateId = dateObject.uid;
                return true;
            }
            return false;
        };

        this.init = function( ngModelCtrl_ ) {
            ngModelCtrl = ngModelCtrl_;

            ngModelCtrl.$render = function() {
                self.render();
            };
        };

        this.render = function() {
            if ( ngModelCtrl.$viewValue ) {
                var date = new Date( ngModelCtrl.$viewValue ),
                    isValid = !isNaN(date);

                if ( isValid ) {
                    this.activeDate = date;
                } else {
                    $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
                }
                ngModelCtrl.$setValidity('date', isValid);
            }
            this.refreshView();
        };

        this.refreshView = function() {
            if ( this.element ) {
                this._refreshView();

                var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
                ngModelCtrl.$setValidity('date-disabled', !date || (this.element && !this.isDisabled(date)));
            }
        };

        this.createDateObject = function(date, format) {
            var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
            return {
                date: date,
                label: dateFilter(date, format),
                selected: model && this.compare(date, model) === 0,
                disabled: this.isDisabled(date),
                current: this.compare(date, new Date()) === 0,
                customClass: this.customClass(date)
            };
        };

        this.isDisabled = function( date ) {
            return ((this.minDate && this.compare(date, this.minDate) < 0) || (this.maxDate && this.compare(date, this.maxDate) > 0) || ($attrs.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode})));
        };

        this.customClass = function( date ) {
            return $scope.customClass({date: date, mode: $scope.datepickerMode});
        };

        // Split array into smaller arrays
        this.split = function(arr, size) {
            var arrays = [];
            while (arr.length > 0) {
                arrays.push(arr.splice(0, size));
            }
            return arrays;
        };

        $scope.select = function( date ) {
            if ( $scope.datepickerMode === self.minMode ) {
                var dt = ngModelCtrl.$viewValue ? new Date( ngModelCtrl.$viewValue ) : new Date(0, 0, 0, 0, 0, 0, 0);
                dt.setFullYear( date.getFullYear(), date.getMonth(), date.getDate() );
                ngModelCtrl.$setViewValue( dt );
                ngModelCtrl.$render();
            } else {
                self.activeDate = date;
                $scope.datepickerMode = self.modes[ self.modes.indexOf( $scope.datepickerMode ) - 1 ];
            }
        };

        $scope.move = function( direction ) {
            var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
                month = self.activeDate.getMonth() + direction * (self.step.months || 0);
            self.activeDate.setFullYear(year, month, 1);
            self.refreshView();
        };

        $scope.toggleMode = function( direction ) {
            direction = direction || 1;

            if (($scope.datepickerMode === self.maxMode && direction === 1) || ($scope.datepickerMode === self.minMode && direction === -1)) {
                return;
            }

            $scope.datepickerMode = self.modes[ self.modes.indexOf( $scope.datepickerMode ) + direction ];
        };

        // Key event mapper
        $scope.keys = { 13:'enter', 32:'space', 33:'pageup', 34:'pagedown', 35:'end', 36:'home', 37:'left', 38:'up', 39:'right', 40:'down' };

        var focusElement = function() {
            $timeout(function() {
                self.element[0].focus();
            }, 0 , false);
        };

        // Listen for focus requests from popup directive
        $scope.$on('datepicker.focus', focusElement);

        $scope.keydown = function( evt ) {
            var key = $scope.keys[evt.which];

            if ( !key || evt.shiftKey || evt.altKey ) {
                return;
            }

            evt.preventDefault();
            if(!self.shortcutPropagation){
                evt.stopPropagation();
            }

            if (key === 'enter' || key === 'space') {
                if ( self.isDisabled(self.activeDate)) {
                    return; // do nothing
                }
                $scope.select(self.activeDate);
                focusElement();
            } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
                $scope.toggleMode(key === 'up' ? 1 : -1);
                focusElement();
            } else {
                self.handleKeyDown(key, evt);
                self.refreshView();
            }
        };
    }])

    .directive( 'datepicker', function () {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'template/datepicker/datepicker.html',
            scope: {
                datepickerMode: '=?',
                dateDisabled: '&',
                customClass: '&',
                shortcutPropagation: '&?',
                numberOfMonths: '&?'
            },
            require: ['datepicker', '?^ngModel'],
            controller: 'DatepickerController',
            link: function(scope, element, attrs, ctrls) {
                var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

                if ( ngModelCtrl ) {
                    datepickerCtrl.init( ngModelCtrl );
                }
            }
        };
    })

    .directive('daypicker', ['dateFilter', function (dateFilter) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'template/datepicker/day.html',
            require: '^datepicker',
            link: function(scope, element, attrs, ctrl) {
                scope.showWeeks = ctrl.showWeeks;

                ctrl.step = { months: 1 };
                ctrl.element = element;

                var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                function getDaysInMonth( year, month ) {
                    return ((month === 1) && (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
                }

                function getDates(startDate, n) {
                    var dates = new Array(n), current = new Date(startDate), i = 0;
                    current.setHours(12); // Prevent repeated dates because of timezone bug
                    while ( i < n ) {
                        dates[i++] = new Date(current);
                        current.setDate( current.getDate() + 1 );
                    }
                    return dates;
                }

                ctrl._refreshView = function() {
                    var year = ctrl.activeDate.getFullYear(),
                        month = ctrl.activeDate.getMonth(),
                        firstDayOfMonth = new Date(year, month, 1),
                        difference = ctrl.startingDay - firstDayOfMonth.getDay(),
                        numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : - difference,
                        firstDate = new Date(firstDayOfMonth);

                    if ( numDisplayedFromPreviousMonth > 0 ) {
                        firstDate.setDate( - numDisplayedFromPreviousMonth + 1 );
                    }

                    // 42 is the number of days on a six-month calendar
                    var days = getDates(firstDate, 42);
                    for (var i = 0; i < 42; i ++) {
                        days[i] = angular.extend(ctrl.createDateObject(days[i], ctrl.formatDay), {
                            secondary: days[i].getMonth() !== month,
                            uid: scope.uniqueId + '-' + i
                        });
                    }

                    scope.labels = new Array(7);
                    for (var j = 0; j < 7; j++) {
                        scope.labels[j] = {
                            abbr: dateFilter(days[j].date, ctrl.formatDayHeader),
                            full: dateFilter(days[j].date, 'EEEE')
                        };
                    }

                    scope.title = dateFilter(ctrl.activeDate, ctrl.formatDayTitle);
                    scope.rows = ctrl.split(days, 7);

                    if ( scope.showWeeks ) {
                        scope.weekNumbers = [];
                        var thursdayIndex = (4 + 7 - ctrl.startingDay) % 7,
                            numWeeks = scope.rows.length;
                        for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
                            scope.weekNumbers.push(
                                getISO8601WeekNumber( scope.rows[curWeek][thursdayIndex].date ));
                        }
                    }
                };

                ctrl.compare = function(date1, date2) {
                    return (new Date( date1.getFullYear(), date1.getMonth(), date1.getDate() ) - new Date( date2.getFullYear(), date2.getMonth(), date2.getDate() ) );
                };

                function getISO8601WeekNumber(date) {
                    var checkDate = new Date(date);
                    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
                    var time = checkDate.getTime();
                    checkDate.setMonth(0); // Compare with Jan 1
                    checkDate.setDate(1);
                    return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
                }

                ctrl.handleKeyDown = function( key, evt ) {
                    var date = ctrl.activeDate.getDate();

                    if (key === 'left') {
                        date = date - 1;   // up
                    } else if (key === 'up') {
                        date = date - 7;   // down
                    } else if (key === 'right') {
                        date = date + 1;   // down
                    } else if (key === 'down') {
                        date = date + 7;
                    } else if (key === 'pageup' || key === 'pagedown') {
                        var month = ctrl.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
                        ctrl.activeDate.setMonth(month, 1);
                        date = Math.min(getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth()), date);
                    } else if (key === 'home') {
                        date = 1;
                    } else if (key === 'end') {
                        date = getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth());
                    }
                    ctrl.activeDate.setDate(date);
                };

                ctrl.refreshView();
            }
        };
    }])

    .directive('doubleday', ['dateFilter', function (dateFilter) {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'template/datepicker/doubleday.html',
            require: '^datepicker',
            link: function(scope, element, attrs, ctrl) {
                scope.showWeeks = ctrl.showWeeks;

                ctrl.step = { months: 1 };
                ctrl.element = element;

                var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                function getDaysInMonth( year, month ) {
                    return ((month === 1) && (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
                }

                function getDates(startDate, n) {
                    var dates = new Array(n), current = new Date(startDate), i = 0;
                    current.setHours(12); // Prevent repeated dates because of timezone bug
                    while ( i < n ) {
                        dates[i++] = new Date(current);
                        current.setDate( current.getDate() + 1 );
                    }
                    return dates;
                }

                ctrl._refreshView = function() {
                    var cal=0;
                    scope.calendars = [];
                    var year = ctrl.activeDate.getFullYear(),
                        month = ctrl.activeDate.getMonth();
                    for (; cal< ctrl.numberOfMonths; cal++) {
                        var firstDayOfMonth = new Date(year, month, 1),
                            difference = ctrl.startingDay - firstDayOfMonth.getDay(),
                            numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : -difference,
                            firstDate = new Date(firstDayOfMonth),
                            calendar = {};

                        if (numDisplayedFromPreviousMonth > 0) {
                            firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
                        }

                        // 42 is the number of days on a six-month calendar
                        var days = getDates(firstDate, 42);
                        for (var i = 0; i < 42; i++) {
                            days[i] = angular.extend(ctrl.createDateObject(days[i], ctrl.formatDay), {
                                secondary: days[i].getMonth() !== month,
                                uid: scope.uniqueId + '-' + i
                            });
                        }

                        calendar.labels = new Array(7);
                        for (var j = 0; j < 7; j++) {
                            calendar.labels[j] = {
                                abbr: dateFilter(days[j].date, ctrl.formatDayHeader),
                                full: dateFilter(days[j].date, 'EEEE')
                            };
                        }

                        calendar.title = dateFilter(firstDayOfMonth, ctrl.formatDayTitle);
                        calendar.rows = ctrl.split(days, 7);

                        if (scope.showWeeks) {
                            calendar.weekNumbers = [];
                            var thursdayIndex = (4 + 7 - ctrl.startingDay) % 7,
                                numWeeks = calendar.rows.length;
                            for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
                                calendar.weekNumbers.push(
                                    getISO8601WeekNumber(calendar.rows[curWeek][thursdayIndex].date));
                            }
                        }

                        month ++;
                        if (month == 13){
                            month = 1;
                            year++;
                        }
                        calendar.titleColspan = calculateTitleColspan(cal);
                        scope.calendars.push(calendar);
                    }
                };

                function calculateTitleColspan(index) {
                    if (index == 0 || index == (ctrl.numberOfMonths - 1))
                        return 6;
                    return 7;
                }

                ctrl.compare = function(date1, date2) {
                    return (new Date( date1.getFullYear(), date1.getMonth(), date1.getDate() ) - new Date( date2.getFullYear(), date2.getMonth(), date2.getDate() ) );
                };

                function getISO8601WeekNumber(date) {
                    var checkDate = new Date(date);
                    checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
                    var time = checkDate.getTime();
                    checkDate.setMonth(0); // Compare with Jan 1
                    checkDate.setDate(1);
                    return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
                }

                ctrl.handleKeyDown = function( key, evt ) {
                    var date = ctrl.activeDate.getDate();

                    if (key === 'left') {
                        date = date - 1;   // up
                    } else if (key === 'up') {
                        date = date - 7;   // down
                    } else if (key === 'right') {
                        date = date + 1;   // down
                    } else if (key === 'down') {
                        date = date + 7;
                    } else if (key === 'pageup' || key === 'pagedown') {
                        var month = ctrl.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
                        ctrl.activeDate.setMonth(month, 1);
                        date = Math.min(getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth()), date);
                    } else if (key === 'home') {
                        date = 1;
                    } else if (key === 'end') {
                        date = getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth());
                    }
                    ctrl.activeDate.setDate(date);
                };

                ctrl.refreshView();
            }
        };
    }])

    .constant('datepickerPopupConfig', {
        datepickerPopup: 'yyyy-MM-dd',
        html5Types: {
            date: 'yyyy-MM-dd',
            'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
            'month': 'yyyy-MM'
        },
        currentText: 'Today',
        clearText: 'Clear',
        closeText: 'Done',
        closeOnDateSelection: true,
        appendToBody: false,
        showButtonBar: true
    })

    .directive('datepickerPopup', ['$compile', '$parse', '$document', '$position', 'dateFilter', 'dateParser', 'datepickerPopupConfig',
        function ($compile, $parse, $document, $position, dateFilter, dateParser, datepickerPopupConfig) {
            return {
                restrict: 'EA',
                require: 'ngModel',
                scope: {
                    isOpen: '=?',
                    currentText: '@',
                    clearText: '@',
                    closeText: '@',
                    dateDisabled: '&',
                    customClass: '&'
                },
                link: function(scope, element, attrs, ngModel) {
                    var dateFormat,
                        closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection,
                        appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;

                    scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;

                    scope.getText = function( key ) {
                        return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
                    };

                    var isHtml5DateInput = false;
                    if (datepickerPopupConfig.html5Types[attrs.type]) {
                        dateFormat = datepickerPopupConfig.html5Types[attrs.type];
                        isHtml5DateInput = true;
                    } else {
                        dateFormat = attrs.datepickerPopup || datepickerPopupConfig.datepickerPopup;
                        attrs.$observe('datepickerPopup', function(value, oldValue) {
                            var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
                            // Invalidate the $modelValue to ensure that formatters re-run
                            // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
                            if (newDateFormat !== dateFormat) {
                                dateFormat = newDateFormat;
                                ngModel.$modelValue = null;

                                if (!dateFormat) {
                                    throw new Error('datepickerPopup must have a date format specified.');
                                }
                            }
                        });
                    }

                    if (!dateFormat) {
                        throw new Error('datepickerPopup must have a date format specified.');
                    }

                    if (isHtml5DateInput && attrs.datepickerPopup) {
                        throw new Error('HTML5 date input types do not support custom formats.');
                    }

                    // popup element used to display calendar
                    var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
                    popupEl.attr({
                        'ng-model': 'date',
                        'ng-change': 'dateSelection()'
                    });

                    function cameltoDash( string ){
                        return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
                    }

                    // datepicker element
                    var datepickerEl = angular.element(popupEl.children()[0]);
                    if (isHtml5DateInput) {
                        if (attrs.type == 'month') {
                            datepickerEl.attr('datepicker-mode', '"month"');
                            datepickerEl.attr('min-mode', 'month');
                        }
                    }

                    if ( attrs.datepickerOptions ) {
                        var options = scope.$parent.$eval(attrs.datepickerOptions);
                        if(options.initDate) {
                            scope.initDate = options.initDate;
                            datepickerEl.attr( 'init-date', 'initDate' );
                            delete options.initDate;
                        }
                        angular.forEach(options, function( value, option ) {
                            datepickerEl.attr( cameltoDash(option), value );
                        });
                    }

                    scope.watchData = {};
                    angular.forEach(['minDate', 'maxDate', 'datepickerMode', 'initDate', 'shortcutPropagation'], function( key ) {
                        if ( attrs[key] ) {
                            var getAttribute = $parse(attrs[key]);
                            scope.$parent.$watch(getAttribute, function(value){
                                scope.watchData[key] = value;
                            });
                            datepickerEl.attr(cameltoDash(key), 'watchData.' + key);

                            // Propagate changes from datepicker to outside
                            if ( key === 'datepickerMode' ) {
                                var setAttribute = getAttribute.assign;
                                scope.$watch('watchData.' + key, function(value, oldvalue) {
                                    if ( value !== oldvalue ) {
                                        setAttribute(scope.$parent, value);
                                    }
                                });
                            }
                        }
                    });
                    if (attrs.dateDisabled) {
                        datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
                    }

                    if (attrs.showWeeks) {
                        datepickerEl.attr('show-weeks', attrs.showWeeks);
                    }

                    if (attrs.customClass){
                        datepickerEl.attr('custom-class', 'customClass({ date: date, mode: mode })');
                    }

                    function parseDate(viewValue) {
                        if (angular.isNumber(viewValue)) {
                            // presumably timestamp to date object
                            viewValue = new Date(viewValue);
                        }

                        if (!viewValue) {
                            return null;
                        } else if (angular.isDate(viewValue) && !isNaN(viewValue)) {
                            return viewValue;
                        } else if (angular.isString(viewValue)) {
                            var date = dateParser.parse(viewValue, dateFormat, scope.date) || new Date(viewValue);
                            if (isNaN(date)) {
                                return undefined;
                            } else {
                                return date;
                            }
                        } else {
                            return undefined;
                        }
                    }

                    function validator(modelValue, viewValue) {
                        var value = modelValue || viewValue;
                        if (angular.isNumber(value)) {
                            value = new Date(value);
                        }
                        if (!value) {
                            return true;
                        } else if (angular.isDate(value) && !isNaN(value)) {
                            return true;
                        } else if (angular.isString(value)) {
                            var date = dateParser.parse(value, dateFormat) || new Date(value);
                            return !isNaN(date);
                        } else {
                            return false;
                        }
                    }

                    if (!isHtml5DateInput) {
                        // Internal API to maintain the correct ng-invalid-[key] class
                        ngModel.$$parserName = 'date';
                        ngModel.$validators.date = validator;
                        ngModel.$parsers.unshift(parseDate);
                        ngModel.$formatters.push(function (value) {
                            scope.date = value;
                            return ngModel.$isEmpty(value) ? value : dateFilter(value, dateFormat);
                        });
                    }
                    else {
                        ngModel.$formatters.push(function (value) {
                            scope.date = value;
                            return value;
                        });
                    }

                    // Inner change
                    scope.dateSelection = function(dt) {
                        if (angular.isDefined(dt)) {
                            scope.date = dt;
                        }
                        var date = scope.date ? dateFilter(scope.date, dateFormat) : '';
                        element.val(date);
                        ngModel.$setViewValue(date);

                        if ( closeOnDateSelection ) {
                            scope.isOpen = false;
                            element[0].focus();
                        }
                    };

                    // Detect changes in the view from the text box
                    ngModel.$viewChangeListeners.push(function () {
                        scope.date = dateParser.parse(ngModel.$viewValue, dateFormat, scope.date) || new Date(ngModel.$viewValue);
                    });

                    var documentClickBind = function(event) {
                        if (scope.isOpen && event.target !== element[0]) {
                            scope.$apply(function() {
                                scope.isOpen = false;
                            });
                        }
                    };

                    var keydown = function(evt, noApply) {
                        scope.keydown(evt);
                    };
                    element.bind('keydown', keydown);

                    scope.keydown = function(evt) {
                        if (evt.which === 27) {
                            evt.preventDefault();
                            if (scope.isOpen) {
                                evt.stopPropagation();
                            }
                            scope.close();
                        } else if (evt.which === 40 && !scope.isOpen) {
                            scope.isOpen = true;
                        }
                    };

                    scope.$watch('isOpen', function(value) {
                        if (value) {
                            scope.$broadcast('datepicker.focus');
                            scope.position = appendToBody ? $position.offset(element) : $position.position(element);
                            scope.position.top = scope.position.top + element.prop('offsetHeight');

                            $document.bind('click', documentClickBind);
                        } else {
                            $document.unbind('click', documentClickBind);
                        }
                    });

                    scope.select = function( date ) {
                        if (date === 'today') {
                            var today = new Date();
                            if (angular.isDate(scope.date)) {
                                date = new Date(scope.date);
                                date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
                            } else {
                                date = new Date(today.setHours(0, 0, 0, 0));
                            }
                        }
                        scope.dateSelection( date );
                    };

                    scope.close = function() {
                        scope.isOpen = false;
                        element[0].focus();
                    };

                    var $popup = $compile(popupEl)(scope);
                    // Prevent jQuery cache memory leak (template is now redundant after linking)
                    popupEl.remove();

                    if ( appendToBody ) {
                        $document.find('body').append($popup);
                    } else {
                        element.after($popup);
                    }

                    scope.$on('$destroy', function() {
                        $popup.remove();
                        element.unbind('keydown', keydown);
                        $document.unbind('click', documentClickBind);
                    });
                }
            };
        }])

    .directive('datepickerPopupWrap', function() {
        return {
            restrict:'EA',
            replace: true,
            transclude: true,
            templateUrl: 'template/datepicker/popup.html',
            link:function (scope, element, attrs) {
                element.bind('click', function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                });
            }
        };
    });

angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.position'])

.constant('dropdownConfig', {
  openClass: 'open'
})

.service('dropdownService', ['$document', '$rootScope', function($document, $rootScope) {
  var openScope = null;

  this.open = function( dropdownScope ) {
    if ( !openScope ) {
      $document.bind('click', closeDropdown);
      $document.bind('keydown', escapeKeyBind);
    }

    if ( openScope && openScope !== dropdownScope ) {
        openScope.isOpen = false;
    }

    openScope = dropdownScope;
  };

  this.close = function( dropdownScope ) {
    if ( openScope === dropdownScope ) {
      openScope = null;
      $document.unbind('click', closeDropdown);
      $document.unbind('keydown', escapeKeyBind);
    }
  };

  var closeDropdown = function( evt ) {
    // This method may still be called during the same mouse event that
    // unbound this event handler. So check openScope before proceeding.
    if (!openScope) { return; }

    if( evt && openScope.getAutoClose() === 'disabled' )  { return ; }

    var toggleElement = openScope.getToggleElement();
    if ( evt && toggleElement && toggleElement[0].contains(evt.target) ) {
        return;
    }

    var $element = openScope.getElement();
    if( evt && openScope.getAutoClose() === 'outsideClick' && $element && $element[0].contains(evt.target) ) {
      return;
    }

    openScope.isOpen = false;

    if (!$rootScope.$$phase) {
      openScope.$apply();
    }
  };

  var escapeKeyBind = function( evt ) {
    if ( evt.which === 27 ) {
      openScope.focusToggleElement();
      closeDropdown();
    }
  };
}])

.controller('DropdownController', ['$scope', '$attrs', '$parse', 'dropdownConfig', 'dropdownService', '$animate', '$position', '$document', function($scope, $attrs, $parse, dropdownConfig, dropdownService, $animate, $position, $document) {
  var self = this,
      scope = $scope.$new(), // create a child scope so we are not polluting original one
      openClass = dropdownConfig.openClass,
      getIsOpen,
      setIsOpen = angular.noop,
      toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
      appendToBody = false;

  this.init = function( element ) {
    self.$element = element;

    if ( $attrs.isOpen ) {
      getIsOpen = $parse($attrs.isOpen);
      setIsOpen = getIsOpen.assign;

      $scope.$watch(getIsOpen, function(value) {
        scope.isOpen = !!value;
      });
    }

    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);

    if ( appendToBody && self.dropdownMenu ) {
      $document.find('body').append( self.dropdownMenu );
      element.on('$destroy', function handleDestroyEvent() {
        self.dropdownMenu.remove();
      });
    }
  };

  this.toggle = function( open ) {
    return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
  };

  // Allow other directives to watch status
  this.isOpen = function() {
    return scope.isOpen;
  };

  scope.getToggleElement = function() {
    return self.toggleElement;
  };

  scope.getAutoClose = function() {
    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
  };

  scope.getElement = function() {
    return self.$element;
  };

  scope.focusToggleElement = function() {
    if ( self.toggleElement ) {
      self.toggleElement[0].focus();
    }
  };

  scope.$watch('isOpen', function( isOpen, wasOpen ) {
    if ( appendToBody && self.dropdownMenu ) {
      var pos = $position.positionElements(self.$element, self.dropdownMenu, 'bottom-left', true);
      self.dropdownMenu.css({
        top: pos.top + 'px',
        left: pos.left + 'px',
        display: isOpen ? 'block' : 'none'
      });
    }

    $animate[isOpen ? 'addClass' : 'removeClass'](self.$element, openClass);

    if ( isOpen ) {
      scope.focusToggleElement();
      dropdownService.open( scope );
    } else {
      dropdownService.close( scope );
    }

    setIsOpen($scope, isOpen);
    if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
      toggleInvoker($scope, { open: !!isOpen });
    }
  });

  $scope.$on('$locationChangeSuccess', function() {
    scope.isOpen = false;
  });

  $scope.$on('$destroy', function() {
    scope.$destroy();
  });
}])

.directive('dropdown', function() {
  return {
    controller: 'DropdownController',
    link: function(scope, element, attrs, dropdownCtrl) {
      dropdownCtrl.init( element );
    }
  };
})

.directive('dropdownMenu', function() {
  return {
    restrict: 'AC',
    require: '?^dropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if ( !dropdownCtrl ) {
        return;
      }
      dropdownCtrl.dropdownMenu = element;
    }
  };
})

.directive('dropdownToggle', function() {
  return {
    require: '?^dropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if ( !dropdownCtrl ) {
        return;
      }

      dropdownCtrl.toggleElement = element;

      var toggleDropdown = function(event) {
        event.preventDefault();

        if ( !element.hasClass('disabled') && !attrs.disabled ) {
          scope.$apply(function() {
            dropdownCtrl.toggle();
          });
        }
      };

      element.bind('click', toggleDropdown);

      // WAI-ARIA
      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
      scope.$watch(dropdownCtrl.isOpen, function( isOpen ) {
        element.attr('aria-expanded', !!isOpen);
      });

      scope.$on('$destroy', function() {
        element.unbind('click', toggleDropdown);
      });
    }
  };
});

(function ()
{
	var anoSlide = function(element, options)
	{
		this.slides   = [];
		this.progress = false;
		this.current  = 0;
		this.element  = $(element);
		this.options  = $.extend(
			{
				items: 		  	5,
				speed: 		  	1000,
				auto:		  	0,
				autoStop: 		true,
				next: 		  	'',
				prev: 		  	'',
				responsiveAt: 	480,
				delay: 			0,
				lazy: 			false,
				initial:        0,
				onConstruct: 	function(instance){},
				onStart: 		function(ui){},
				onEnd: 			function(ui){}
			}, options);

		/* Reference */
		this.defaults =
		{
			items: this.options.items,
			auto: 0
		}

		/* Preloader */
		this.preloader = new anoPreload();

		this.timeout = null;
	};

	anoSlide.prototype =
	{
		construct: function()
		{
			this.defaults.auto = this.options.auto;

			this.element.css(
				{
					position: 	'relative',
					overflow: 	'hidden',
					display:	'block'
				}).children().css(
				{
					position:	'absolute',
					cursor: 	'pointer',
					overflow: 	'hidden',
					display:	'block'
				}).each(delegate(this, function(index, slide)
				{
					this.slides.push(
						{
							element: $(slide)
						})
				})).find('img').css(
				{
					float: 'left'
				})

			/* Responsive */
			$(window).on(
				{
					resize: delegate(this, this.adapt)
				});

			/* Activate next and prev controls */
			if (this.options.next)
			{
				$(this.options.next).on('click', delegate(this, this.next));
			}

			if (this.options.prev)
			{
				$(this.options.prev).on('click', delegate(this, this.prev));
			}

			if (this.options.autoStop)
			{
				this.element.parent().on(
					{
						mouseenter: delegate(this, function(element)
						{
							if (this.timeout)
							{
								clearTimeout(this.timeout);

								this.options.auto = 0;
							}
						}),
						mouseleave: delegate(this, function(element)
						{
							this.options.auto = this.defaults.auto;

							this.go(this.current);
						})
					})
			}

			this.options.onConstruct.apply(this,[this]);

			this.adapt().go(this.options.initial);
		},
		preload: function(index, callback)
		{
			var queue = [];

			if (this.options.lazy)
			{
				for (var i = index, l = index + this.options.items; i < l; i++)
				{
					if (this.slides[i].element.find('img[data-src]').length)
					{
						queue.push(
							{
								source: this.slides[i].element.find('img[data-src]').data('src')
							});
					}
				}
			}

			if (queue.length)
			{
				this.preloader.reset().append(queue).preload(callback);
			}
			else
			{
				callback.apply(this,[
					{
						images:[]
					}]);
			}
		},
		animate: function(index, images, reverse)
		{
			if (!this.progress)
			{
				this.progress = true;

				var viewport =
				{
					w: this.element.parent().outerWidth(),
					h: this.element.parent().outerHeight()
				}

				/* On start callback */
				this.options.onStart.apply(this,[
					{
						instance: 	this,
						index: 		index,
						slide: 		this.slides[index]
					}]);

				$.each((reverse ? this.slides.reverse() : this.slides), delegate(this, function(key, slide)
				{
					var offset = (reverse ? (-(index - (this.slides.length - 1 - key))) : (-(index - key))) * this.element.width()/this.options.items;

					/* Check for empty slides */
					if (slide.element.find('img[data-src]').length && images.length)
					{
						if (1 == this.options.items)
						{
							if (index == key)
							{
								var i = images.pop().image;

								slide.element.find('img[data-src]').replaceWith(i);
							}
						}
						else
						{
							var i = images.pop().image;

							slide.element.find('img[data-src]').replaceWith(i);
						}
					}

					var fn = (key == index) ? delegate(this, function()
					{
						this.progress = false;

						this.options.onEnd.apply(this,[
							{
								instance: 	this,
								index: 		this.current,
								slide: 		this.slides[this.current]
							}])

						if (this.options.auto)
						{
							if (this.timeout)
							{
								clearTimeout(this.timeout);
							}

							this.timeout = setTimeout(delegate(this, this.next), this.options.auto);
						}

					}) : function() {};

					if (offset == 0) {
						slide.element.attr("id","selected");
					}
					else{
						slide.element.removeAttr("id");
					}

					slide.element.css(
						{
							width: Math.floor(this.element.outerWidth()/this.options.items) + 'px',
							height: 'auto'
						}).delay(key * this.options.delay).animate(
						{
							left: offset + 'px'
						}, this.options.speed, fn);
				}));

				if (reverse)
				{
					this.slides.reverse();
				}

				this.element.animate(
					{
						height: this.slides[index].element.outerHeight()-2
					});

				/* Toggle controls */
				var queue = this.slides.length - this.options.items - this.current;

				if (!queue)
				{
					this.disable.next.call(this);
				}
				else this.enable.next.call(this);

				if (index - 1 < 0)
				{
					this.disable.prev.call(this);
				}
				else
				{
					this.enable.prev.call(this);
				}
			}

			return this;
		},
		adapt: function()
		{
			var viewport =
			{
				w: this.element.parent().outerWidth(),
				h: this.element.parent().outerHeight()
			}

			if (viewport.w < this.options.responsiveAt)
			{
				this.options.items = 1;
			}
			else
			{
				this.options.items = this.defaults.items;
			}

			$.each(this.slides, delegate(this, function(key, slide)
			{
				var offset = -(this.current - key) * this.element.width()/this.options.items;

				slide.element.stop().css(
					{
						width: this.element.width()/this.options.items,
						left:  offset
					}, this.options.speed, (key == this.slides.length - 1) ? delegate(this, function()
					{
						this.progress = false;
					}) : function(){})
			}));

			if (0 !== this.slides[this.current].element.parent().height())
			{

				this.element.css(
					{
						height: this.slides[this.current].element.outerHeight()-2
					})
			}

			return this;
		},
		next: function()
		{
			var queue = this.slides.length - this.options.items - this.current;

			if (queue)
			{
				this.go(this.current + 1);
			}
			else
			{
				this.go(0);
			}
		},
		prev: function()
		{
			this.go(this.current - 1, true);
		},
		stop: function()
		{
			if (this.timeout)
			{
				clearTimeout(this.timeout);
			}

			this.progress = false;

			return this;
		},
		go: function(index, reverse)
		{
			reverse = reverse || false;

			if (!this.progress)
			{
				if (index < 0 || index > this.slides.length - 1)
				{
					return false;
				}
				else
				{
					this.current = index;

					this.preload(index, delegate(this, function(ui)
					{
						this.animate(index, ui.images, reverse);
					}));
				}
			}
		},
		enable:
		{
			next: function()
			{
				$(this.options.next).removeClass('disabled').fadeIn(300);
			},
			prev: function()
			{
				$(this.options.prev).removeClass('disabled').fadeIn(300);
			}
		},
		disable:
		{
			next: function()
			{
				$(this.options.next).addClass('disabled').fadeOut(300);
			},
			prev: function()
			{
				$(this.options.prev).addClass('disabled').fadeOut(300);
			}
		}
	}

	var anoPreload = function()
	{
		this.queue  = [];
		this.images = [];
		this.total = 0;
		this.config =
		{
			cache: true
		};

		this.time =
		{
			start: 0,
			end: 0
		}
	}

	anoPreload.prototype =
	{
		onComplete: function(ui){},
		reset: function()
		{
			this.queue 	= [];
			this.images = [];
			this.total 	= 0;

			return this;
		},
		append: function(element)
		{
			var queue = this.queue;

			$.each(element, function(index, element)
			{
				queue.push(element);
			});

			return this;
		},
		finish: function(event, index, image)
		{
			/* Decrease number of finished items */
			this.total--;

			$.each(this.images, function(x,i)
			{
				if (i.index == index)
				{
					i.size = {
						width: 	image.width,
						height: image.height
					}
				}
			})

			/* Check if no more items to preload */
			if (0 == this.total)
			{
				this.time.end = new Date().getTime();

				this.onComplete.apply(this,[
					{
						time: 	((this.time.end - this.time.start)/1000).toPrecision(2),
						images: this.images
					}])
			}
		},
		preload: function(callback)
		{
			/* Set callback function */
			this.onComplete = callback || this.onComplete;

			this.time.start = new Date().getTime();

			/* Get queue length */
			this.total = this.queue.length;
			var i = this.queue.length;

			while(i--)
			{
				var image = new Image();

				/* Push image */
				this.images.push(
					{
						index: i,
						image: image,
						size:
						{
							width:	0,
							height: 0
						}
					});

				image.onload  = image.onerror = image.onabort = delegate(this, this.finish, ([i,image]));

				/* Set image source */
				image.src = this.config.cache ? this.queue[i].source : (this.queue[i].source + '?u=' + (new Date().getTime()));
			}
		}
	}

	$.fn.anoSlide = function (options)
	{
		return this.each(function ()
		{
			if (undefined == $(this).data('anoSlide'))
			{
				var a = new anoSlide(this, options).construct();
				$(this).data('anoSlide', a);
			}
		});
	};

	var delegate = function(target, method, args)
	{
		return (typeof method === "function") ? function()
		{
			/* Override prototype */
			arguments.push = Array.prototype.push;

			/* Push additional arguments */
			for (var arg in args)
			{
				arguments.push(args[arg]);
			}
			return method.apply(target, arguments);
		} : function()
		{
			return false;
		};
	}
})();
/* ng-ScrollSpy.js v3.2.1
 * https://github.com/patrickmarabeas/ng-ScrollSpy.js
 *
 * Copyright 2014, Patrick Marabeas http://marabeas.io
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * Date: 31/01/2015
 */

;(function(window, document, angular, undefined) {
  'use strict';
  angular.module('ngScrollSpy', [])

    .value('config', {
      'offset': 200,
      'delay': 100
    })

    .run(['PositionFactory', function(PositionFactory) {
      PositionFactory.refreshPositions();
      angular.element(window).bind('scroll', function() {
        PositionFactory.refreshPositions();
      });
    }])

    .factory('PositionFactory', ['$rootScope', function($rootScope){
      return {
        'position': [],
        'refreshPositions': function() {
          this.position.documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
          this.position.windowTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
          this.position.windowBottom = this.position.windowTop + window.innerHeight
        }
      }
    }])

    .factory('SpyFactory', ['$rootScope', function($rootScope){
      return {
        'spies': [],
        'addSpy': function(id) {
          var index = this.spies.map(function(e) { return e }).indexOf(id);
          if(index == -1) {
            this.spies.push(id);
            this.broadcast();
          }
        },
        'removeSpy': function(id) {
          var index = this.spies.map(function(e) { return e }).indexOf(id);
          if(index != -1) {
            this.spies.splice(index, 1);
            this.broadcast();
          }
        },
        'broadcast': function() {
          $rootScope.$broadcast('spied');
        }
      }
    }])

    .directive('scrollspyBroadcast', ['config', 'scrollspyConfig', 'SpyFactory', 'PositionFactory', function(config, scrollspyConfig, SpyFactory, PositionFactory) {
      return {
        restrict: 'A',
        scope: true,
        link: function(scope, element, attrs) {
          angular.extend(config, scrollspyConfig.config);
          var offset = parseInt(attrs.scrollspyOffset || config.offset);
          scope.checkActive = function() {
            scope.elementTop = element[0].offsetTop;
            scope.elementBottom = scope.elementTop + Math.max(element[0].scrollHeight, element[0].offsetHeight);

            if((scope.elementTop - offset) < (PositionFactory.position.documentHeight - window.innerHeight)) {
              if(scope.elementTop <= (PositionFactory.position.windowTop + offset)) {
                SpyFactory.addSpy(attrs.id);
              } else {
                SpyFactory.removeSpy(attrs.id);
              }

            } else {
              if(PositionFactory.position.windowBottom > (scope.elementBottom - offset)) {
                SpyFactory.addSpy(attrs.id);
              } else {
                SpyFactory.removeSpy(attrs.id);
              }
            }
          };

          config.throttle
            ? angular.element(window).bind('scroll', config.throttle(function() { scope.checkActive() }, config.delay))
            : angular.element(window).bind('scroll', function() { scope.checkActive() });

          angular.element(document).ready( function() { scope.checkActive() });
          angular.element(window).bind('resize', function () { scope.checkActive() });
        }
      }
    }])

    .directive('scrollspyListen', ['$timeout', 'SpyFactory', function($timeout, SpyFactory) {
      return {
        restrict: 'A',
        scope: {
          scrollspyListen: '@',
          enabled: '@'
        },
        replace: true,
        transclude: true,
        template: function(element) {
          var tag = element[0].nodeName;
          return '<' + tag + ' data-ng-transclude data-ng-class="{active: enabled}"></' + tag + '>';
        },
        link: function(scope) {
          scope.$on('spied', function() {
            $timeout(function() {
              var spies = scope.scrollspyListen.split("|");
              for(var i = 0; i < spies.length; i++)
                if(scope.enabled = spies[i] === SpyFactory.spies[SpyFactory.spies.length - 1])
                  break;
            });
          });
        }
      }
    }])

    .provider('scrollspyConfig', function() {
      var self = this;
      this.config = {};
      this.$get = function() {
        var extend = {};
        extend.config = self.config;
        return extend;
      };
      return this;
    });

})(window, document, angular);


/*! PhotoSwipe Default UI - 4.0.7 - 2015-03-18
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipeUI_Default=b()}(this,function(){"use strict";var a=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=this,w=!1,x=!0,y=!0,z={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(a,b){return a.title?(b.children[0].innerHTML=a.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return a.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return a.currItem.title||""},indexIndicatorSep:" / "},A=function(a){if(r)return!0;a=a||window.event,q.timeToIdle&&q.mouseUsed&&!k&&K();for(var c,d,e=a.target||a.srcElement,f=e.className,g=0;g<S.length;g++)c=S[g],c.onTap&&f.indexOf("pswp__"+c.name)>-1&&(c.onTap(),d=!0);if(d){a.stopPropagation&&a.stopPropagation(),r=!0;var h=b.features.isOldAndroid?600:30;s=setTimeout(function(){r=!1},h)}},B=function(){return!a.likelyTouchDevice||q.mouseUsed||screen.width>1200},C=function(a,c,d){b[(d?"add":"remove")+"Class"](a,"pswp__"+c)},D=function(){var a=1===q.getNumItemsFn();a!==p&&(C(d,"ui--one-slide",a),p=a)},E=function(){C(i,"share-modal--hidden",y)},F=function(){return y=!y,y?(b.removeClass(i,"pswp__share-modal--fade-in"),setTimeout(function(){y&&E()},300)):(E(),setTimeout(function(){y||b.addClass(i,"pswp__share-modal--fade-in")},30)),y||H(),!1},G=function(b){b=b||window.event;var c=b.target||b.srcElement;return a.shout("shareLinkClick",b,c),c.href?c.hasAttribute("download")?!0:(window.open(c.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),y||F(),!1):!1},H=function(){for(var a,b,c,d,e,f="",g=0;g<q.shareButtons.length;g++)a=q.shareButtons[g],c=q.getImageURLForShare(a),d=q.getPageURLForShare(a),e=q.getTextForShare(a),b=a.url.replace("{{url}}",encodeURIComponent(d)).replace("{{image_url}}",encodeURIComponent(c)).replace("{{raw_image_url}}",c).replace("{{text}}",encodeURIComponent(e)),f+='<a href="'+b+'" target="_blank" class="pswp__share--'+a.id+'"'+(a.download?"download":"")+">"+a.label+"</a>",q.parseShareButtonOut&&(f=q.parseShareButtonOut(a,f));i.children[0].innerHTML=f,i.children[0].onclick=G},I=function(a){for(var c=0;c<q.closeElClasses.length;c++)if(b.hasClass(a,"pswp__"+q.closeElClasses[c]))return!0},J=0,K=function(){clearTimeout(u),J=0,k&&v.setIdle(!1)},L=function(a){a=a?a:window.event;var b=a.relatedTarget||a.toElement;b&&"HTML"!==b.nodeName||(clearTimeout(u),u=setTimeout(function(){v.setIdle(!0)},q.timeToIdleOutside))},M=function(){q.fullscreenEl&&(c||(c=v.getFullscreenAPI()),c?(b.bind(document,c.eventK,v.updateFullscreen),v.updateFullscreen(),b.addClass(a.template,"pswp--supports-fs")):b.removeClass(a.template,"pswp--supports-fs"))},N=function(){q.preloaderEl&&(O(!0),l("beforeChange",function(){clearTimeout(o),o=setTimeout(function(){a.currItem&&a.currItem.loading?(!a.allowProgressiveImg()||a.currItem.img&&!a.currItem.img.naturalWidth)&&O(!1):O(!0)},q.loadingIndicatorDelay)}),l("imageLoadComplete",function(b,c){a.currItem===c&&O(!0)}))},O=function(a){n!==a&&(C(m,"preloader--active",!a),n=a)},P=function(a){var c=a.vGap;if(B()){var g=q.barsSize;if(q.captionEl&&"auto"===g.bottom)if(f||(f=b.createEl("pswp__caption pswp__caption--fake"),f.appendChild(b.createEl("pswp__caption__center")),d.insertBefore(f,e),b.addClass(d,"pswp__ui--fit")),q.addCaptionHTMLFn(a,f,!0)){var h=f.clientHeight;c.bottom=parseInt(h,10)||44}else c.bottom=g.top;else c.bottom="auto"===g.bottom?0:g.bottom;c.top=g.top}else c.top=c.bottom=0},Q=function(){q.timeToIdle&&l("mouseUsed",function(){b.bind(document,"mousemove",K),b.bind(document,"mouseout",L),t=setInterval(function(){J++,2===J&&v.setIdle(!0)},q.timeToIdle/2)})},R=function(){l("onVerticalDrag",function(a){x&&.95>a?v.hideControls():!x&&a>=.95&&v.showControls()});var a;l("onPinchClose",function(b){x&&.9>b?(v.hideControls(),a=!0):a&&!x&&b>.9&&v.showControls()}),l("zoomGestureEnded",function(){a=!1,a&&!x&&v.showControls()})},S=[{name:"caption",option:"captionEl",onInit:function(a){e=a}},{name:"share-modal",option:"shareEl",onInit:function(a){i=a},onTap:function(){F()}},{name:"button--share",option:"shareEl",onInit:function(a){h=a},onTap:function(){F()}},{name:"button--zoom",option:"zoomEl",onTap:a.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(a){g=a}},{name:"button--close",option:"closeEl",onTap:a.close},{name:"button--arrow--left",option:"arrowEl",onTap:a.prev},{name:"button--arrow--right",option:"arrowEl",onTap:a.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(a){m=a}}],T=function(){var a,c,e,f=function(d){if(d)for(var f=d.length,g=0;f>g;g++){a=d[g],c=a.className;for(var h=0;h<S.length;h++)e=S[h],c.indexOf("pswp__"+e.name)>-1&&(q[e.option]?(b.removeClass(a,"pswp__element--disabled"),e.onInit&&e.onInit(a)):b.addClass(a,"pswp__element--disabled"))}};f(d.children);var g=b.getChildByClass(d,"pswp__top-bar");g&&f(g.children)};v.init=function(){b.extend(a.options,z,!0),q=a.options,d=b.getChildByClass(a.scrollWrap,"pswp__ui"),l=a.listen,R(),l("beforeChange",v.update),l("doubleTap",function(b){var c=a.currItem.initialZoomLevel;a.getZoomLevel()!==c?a.zoomTo(c,b,333):a.zoomTo(q.getDoubleTapZoom(!1,a.currItem),b,333)}),l("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.className&&a.type.indexOf("mouse")>-1&&(d.className.indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),l("bindEvents",function(){b.bind(d,"pswpTap click",A),b.bind(a.scrollWrap,"pswpTap",v.onGlobalTap),a.likelyTouchDevice||b.bind(a.scrollWrap,"mouseover",v.onMouseOver)}),l("unbindEvents",function(){y||F(),t&&clearInterval(t),b.unbind(document,"mouseout",L),b.unbind(document,"mousemove",K),b.unbind(d,"pswpTap click",A),b.unbind(a.scrollWrap,"pswpTap",v.onGlobalTap),b.unbind(a.scrollWrap,"mouseover",v.onMouseOver),c&&(b.unbind(document,c.eventK,v.updateFullscreen),c.isFullscreen()&&(q.hideAnimationDuration=0,c.exit()),c=null)}),l("destroy",function(){q.captionEl&&(f&&d.removeChild(f),b.removeClass(e,"pswp__caption--empty")),i&&(i.children[0].onclick=null),b.removeClass(d,"pswp__ui--over-close"),b.addClass(d,"pswp__ui--hidden"),v.setIdle(!1)}),q.showAnimationDuration||b.removeClass(d,"pswp__ui--hidden"),l("initialZoomIn",function(){q.showAnimationDuration&&b.removeClass(d,"pswp__ui--hidden")}),l("initialZoomOut",function(){b.addClass(d,"pswp__ui--hidden")}),l("parseVerticalMargin",P),T(),q.shareEl&&h&&i&&(y=!0),D(),Q(),M(),N()},v.setIdle=function(a){k=a,C(d,"ui--idle",a)},v.update=function(){x&&a.currItem?(v.updateIndexIndicator(),q.captionEl&&(q.addCaptionHTMLFn(a.currItem,e),C(e,"caption--empty",!a.currItem.title)),w=!0):w=!1,y||F(),D()},v.updateFullscreen=function(d){d&&setTimeout(function(){a.setScrollOffset(0,b.getScrollY())},50),b[(c.isFullscreen()?"add":"remove")+"Class"](a.template,"pswp--fs")},v.updateIndexIndicator=function(){q.counterEl&&(g.innerHTML=a.getCurrentIndex()+1+q.indexIndicatorSep+q.getNumItemsFn())},v.onGlobalTap=function(c){c=c||window.event;var d=c.target||c.srcElement;if(!r)if(c.detail&&"mouse"===c.detail.pointerType){if(I(d))return void a.close();b.hasClass(d,"pswp__img")&&(1===a.getZoomLevel()&&a.getZoomLevel()<=a.currItem.fitRatio?q.clickToCloseNonZoomable&&a.close():a.toggleDesktopZoom(c.detail.releasePoint))}else if(q.tapToToggleControls&&(x?v.hideControls():v.showControls()),q.tapToClose&&(b.hasClass(d,"pswp__img")||I(d)))return void a.close()},v.onMouseOver=function(a){a=a||window.event;var b=a.target||a.srcElement;C(d,"ui--over-close",I(b))},v.hideControls=function(){b.addClass(d,"pswp__ui--hidden"),x=!1},v.showControls=function(){x=!0,w||v.update(),b.removeClass(d,"pswp__ui--hidden")},v.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},v.getFullscreenAPI=function(){var b,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){return j=q.closeOnScroll,q.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?a.template[this.enterK]():void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},b.exit=function(){return q.closeOnScroll=j,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return a});
/*! PhotoSwipe - v4.0.7 - 2015-03-18
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipe=b()}(this,function(){"use strict";var a=function(a,b,c,d){var e={features:null,bind:function(a,b,c,d){var e=(d?"remove":"add")+"EventListener";b=b.split(" ");for(var f=0;f<b.length;f++)b[f]&&a[e](b[f],c,!1)},isArray:function(a){return a instanceof Array},createEl:function(a,b){var c=document.createElement(b||"div");return a&&(c.className=a),c},getScrollY:function(){var a=window.pageYOffset;return void 0!==a?a:document.documentElement.scrollTop},unbind:function(a,b,c){e.bind(a,b,c,!0)},removeClass:function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(a,b){e.hasClass(a,b)||(a.className+=(a.className?" ":"")+b)},hasClass:function(a,b){return a.className&&new RegExp("(^|\\s)"+b+"(\\s|$)").test(a.className)},getChildByClass:function(a,b){for(var c=a.firstChild;c;){if(e.hasClass(c,b))return c;c=c.nextSibling}},arraySearch:function(a,b,c){for(var d=a.length;d--;)if(a[d][c]===b)return d;return-1},extend:function(a,b,c){for(var d in b)if(b.hasOwnProperty(d)){if(c&&a.hasOwnProperty(d))continue;a[d]=b[d]}},easing:{sine:{out:function(a){return Math.sin(a*(Math.PI/2))},inOut:function(a){return-(Math.cos(Math.PI*a)-1)/2}},cubic:{out:function(a){return--a*a*a+1}}},detectFeatures:function(){if(e.features)return e.features;var a=e.createEl(),b=a.style,c="",d={};if(d.oldIE=document.all&&!document.addEventListener,d.touch="ontouchstart"in window,window.requestAnimationFrame&&(d.raf=window.requestAnimationFrame,d.caf=window.cancelAnimationFrame),d.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!d.pointerEvent){var f=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var g=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);g&&g.length>0&&(g=parseInt(g[1],10),g>=1&&8>g&&(d.isOldIOSPhone=!0))}var h=f.match(/Android\s([0-9\.]*)/),i=h?h[1]:0;i=parseFloat(i),i>=1&&(4.4>i&&(d.isOldAndroid=!0),d.androidVersion=i),d.isMobileOpera=/opera mini|opera mobi/i.test(f)}for(var j,k,l=["transform","perspective","animationName"],m=["","webkit","Moz","ms","O"],n=0;4>n;n++){c=m[n];for(var o=0;3>o;o++)j=l[o],k=c+(c?j.charAt(0).toUpperCase()+j.slice(1):j),!d[j]&&k in b&&(d[j]=k);c&&!d.raf&&(c=c.toLowerCase(),d.raf=window[c+"RequestAnimationFrame"],d.raf&&(d.caf=window[c+"CancelAnimationFrame"]||window[c+"CancelRequestAnimationFrame"]))}if(!d.raf){var p=0;d.raf=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-p)),d=window.setTimeout(function(){a(b+c)},c);return p=b+c,d},d.caf=function(a){clearTimeout(a)}}return d.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,e.features=d,d}};e.detectFeatures(),e.features.oldIE&&(e.bind=function(a,b,c,d){b=b.split(" ");for(var e,f=(d?"detach":"attach")+"Event",g=function(){c.handleEvent.call(c)},h=0;h<b.length;h++)if(e=b[h])if("object"==typeof c&&c.handleEvent){if(d){if(!c["oldIE"+e])return!1}else c["oldIE"+e]=g;a[f]("on"+e,c["oldIE"+e])}else a[f]("on"+e,c)});var f=this,g=25,h=3,i={allowPanToNext:!0,spacing:.12,bgOpacity:0.8,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(a){return"A"===a.tagName},getDoubleTapZoom:function(a,b){return a?1:b.initialZoomLevel<.7?1:1.5},maxSpreadZoom:2,scaleMode:"fit",modal:!0,alwaysFadeIn:!1};e.extend(i,d);var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb=function(){return{x:0,y:0}},nb=mb(),ob=mb(),pb=mb(),qb={},rb=0,sb=mb(),tb=0,ub=!0,vb=[],wb={},xb=function(a,b){e.extend(f,b.publicMethods),vb.push(a)},yb=function(a){var b=$c();return a>b-1?a-b:0>a?b+a:a},zb={},Ab=function(a,b){return zb[a]||(zb[a]=[]),zb[a].push(b)},Bb=function(a){var b=zb[a];if(b){var c=Array.prototype.slice.call(arguments);c.shift();for(var d=0;d<b.length;d++)b[d].apply(f,c)}},Cb=function(){return(new Date).getTime()},Db=function(a){jb=a,f.bg.style.opacity=a*i.bgOpacity},Eb=function(a,b,c,d){a[F]=u+b+"px, "+c+"px"+v+" scale("+d+")"},Fb=function(){eb&&Eb(eb,pb.x,pb.y,s)},Gb=function(a){a.container&&Eb(a.container.style,a.initialPosition.x,a.initialPosition.y,a.initialZoomLevel)},Hb=function(a,b){b[F]=u+a+"px, 0px"+v},Ib=function(a,b){if(!i.loop&&b){var c=m+(sb.x*rb-a)/sb.x,d=Math.round(a-rc.x);(0>c&&d>0||c>=$c()-1&&0>d)&&(a=rc.x+d*i.mainScrollEndFriction)}rc.x=a,Hb(a,n)},Jb=function(a,b){var c=sc[a]-y[a];return ob[a]+nb[a]+c-c*(b/t)},Kb=function(a,b){a.x=b.x,a.y=b.y,b.id&&(a.id=b.id)},Lb=function(a){a.x=Math.round(a.x),a.y=Math.round(a.y)},Mb=null,Nb=function(){Mb&&(e.unbind(document,"mousemove",Nb),e.addClass(a,"pswp--has_mouse"),i.mouseUsed=!0,Bb("mouseUsed")),Mb=setTimeout(function(){Mb=null},100)},Ob=function(){e.bind(document,"keydown",f),O.transform&&e.bind(f.scrollWrap,"click",f),i.mouseUsed||e.bind(document,"mousemove",Nb),e.bind(window,"resize scroll",f),Bb("bindEvents")},Pb=function(){e.unbind(window,"resize",f),e.unbind(window,"scroll",r.scroll),e.unbind(document,"keydown",f),e.unbind(document,"mousemove",Nb),O.transform&&e.unbind(f.scrollWrap,"click",f),V&&e.unbind(window,p,f),Bb("unbindEvents")},Qb=function(a,b){var c=gd(f.currItem,qb,a);return b&&(db=c),c},Rb=function(a){return a||(a=f.currItem),a.initialZoomLevel},Sb=function(a){return a||(a=f.currItem),a.w>0?i.maxSpreadZoom:1},Tb=function(a,b,c,d){return d===f.currItem.initialZoomLevel?(c[a]=f.currItem.initialPosition[a],!0):(c[a]=Jb(a,d),c[a]>b.min[a]?(c[a]=b.min[a],!0):c[a]<b.max[a]?(c[a]=b.max[a],!0):!1)},Ub=function(){if(F){var b=O.perspective&&!H;return u="translate"+(b?"3d(":"("),void(v=O.perspective?", 0px)":")")}F="left",e.addClass(a,"pswp--ie"),Hb=function(a,b){b.left=a+"px"},Gb=function(a){var b=a.fitRatio>1?1:a.fitRatio,c=a.container.style,d=b*a.w,e=b*a.h;c.width=d+"px",c.height=e+"px",c.left=a.initialPosition.x+"px",c.top=a.initialPosition.y+"px"},Fb=function(){if(eb){var a=eb,b=f.currItem,c=b.fitRatio>1?1:b.fitRatio,d=c*b.w,e=c*b.h;a.width=d+"px",a.height=e+"px",a.left=pb.x+"px",a.top=pb.y+"px"}}},Vb=function(a){var b="";i.escKey&&27===a.keyCode?b="close":i.arrowKeys&&(37===a.keyCode?b="prev":39===a.keyCode&&(b="next")),b&&(a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||(a.preventDefault?a.preventDefault():a.returnValue=!1,f[b]()))},Wb=function(a){a&&(Y||X||fb||T)&&(a.preventDefault(),a.stopPropagation())},Xb=function(){f.setScrollOffset(0,e.getScrollY())},Yb={},Zb=0,$b=function(a){Yb[a]&&(Yb[a].raf&&J(Yb[a].raf),Zb--,delete Yb[a])},_b=function(a){Yb[a]&&$b(a),Yb[a]||(Zb++,Yb[a]={})},ac=function(){for(var a in Yb)Yb.hasOwnProperty(a)&&$b(a)},bc=function(a,b,c,d,e,f,g){var h,i=Cb();_b(a);var j=function(){if(Yb[a]){if(h=Cb()-i,h>=d)return $b(a),f(c),void(g&&g());f((c-b)*e(h/d)+b),Yb[a].raf=I(j)}};j()},cc={shout:Bb,listen:Ab,viewportSize:qb,options:i,isMainScrollAnimating:function(){return fb},getZoomLevel:function(){return s},getCurrentIndex:function(){return m},isDragging:function(){return V},isZooming:function(){return ab},setScrollOffset:function(a,b){y.x=a,N=y.y=b},applyZoomPan:function(a,b,c){pb.x=b,pb.y=c,s=a,Fb()},init:function(){if(!j&&!k){var c;f.framework=e,f.template=a,f.bg=e.getChildByClass(a,"pswp__bg"),K=a.className,j=!0,O=e.detectFeatures(),I=O.raf,J=O.caf,F=O.transform,M=O.oldIE,f.scrollWrap=e.getChildByClass(a,"pswp__scroll-wrap"),f.container=e.getChildByClass(f.scrollWrap,"pswp__container"),n=f.container.style,f.itemHolders=z=[{el:f.container.children[0],wrap:0,index:-1},{el:f.container.children[1],wrap:0,index:-1},{el:f.container.children[2],wrap:0,index:-1}],z[0].el.style.display=z[2].el.style.display="none",Ub(),r={resize:f.updateSize,scroll:Xb,keydown:Vb,click:Wb};var d=O.isOldIOSPhone||O.isOldAndroid||O.isMobileOpera;for(O.animationName&&O.transform&&!d||(i.showAnimationDuration=i.hideAnimationDuration=0),c=0;c<vb.length;c++)f["init"+vb[c]]();if(b){var g=f.ui=new b(f,e);g.init()}Bb("firstUpdate"),m=m||i.index||0,(isNaN(m)||0>m||m>=$c())&&(m=0),f.currItem=Zc(m),(O.isOldIOSPhone||O.isOldAndroid)&&(ub=!1),i.modal&&(a.setAttribute("aria-hidden","false"),ub?a.style.position="fixed":(a.style.position="absolute",a.style.top=e.getScrollY()+"px")),void 0===N&&(Bb("initialLayout"),N=L=e.getScrollY());var l="pswp--open ";for(i.mainClass&&(l+=i.mainClass+" "),i.showHideOpacity&&(l+="pswp--animate_opacity "),l+=H?"pswp--touch":"pswp--notouch",l+=O.animationName?" pswp--css_animation":"",l+=O.svg?" pswp--svg":"",e.addClass(a,l),f.updateSize(),o=-1,tb=null,c=0;h>c;c++)Hb((c+o)*sb.x,z[c].el.style);M||e.bind(f.scrollWrap,q,f),Ab("initialZoomInEnd",function(){f.setContent(z[0],m-1),f.setContent(z[2],m+1),z[0].el.style.display=z[2].el.style.display="block",i.focus&&a.focus(),Ob()}),f.setContent(z[1],m),f.updateCurrItem(),Bb("afterInit"),ub||(w=setInterval(function(){Zb||V||ab||s!==f.currItem.initialZoomLevel||f.updateSize()},1e3)),e.addClass(a,"pswp--visible")}},close:function(){j&&(j=!1,k=!0,Bb("close"),Pb(),ad(f.currItem,null,!0,f.destroy))},destroy:function(){Bb("destroy"),Vc&&clearTimeout(Vc),i.modal&&(a.setAttribute("aria-hidden","true"),a.className=K),w&&clearInterval(w),e.unbind(f.scrollWrap,q,f),e.unbind(window,"scroll",f),xc(),ac(),zb=null},panTo:function(a,b,c){c||(a>db.min.x?a=db.min.x:a<db.max.x&&(a=db.max.x),b>db.min.y?b=db.min.y:b<db.max.y&&(b=db.max.y)),pb.x=a,pb.y=b,Fb()},handleEvent:function(a){a=a||window.event,r[a.type]&&r[a.type](a)},goTo:function(a){a=yb(a);var b=a-m;tb=b,m=a,f.currItem=Zc(m),rb-=b,Ib(sb.x*rb),ac(),fb=!1,f.updateCurrItem()},next:function(){f.goTo(m+1)},prev:function(){f.goTo(m-1)},updateCurrZoomItem:function(a){if(a&&Bb("beforeChange",0),z[1].el.children.length){var b=z[1].el.children[0];eb=e.hasClass(b,"pswp__zoom-wrap")?b.style:null}else eb=null;db=f.currItem.bounds,t=s=f.currItem.initialZoomLevel,pb.x=db.center.x,pb.y=db.center.y,a&&Bb("afterChange")},invalidateCurrItems:function(){x=!0;for(var a=0;h>a;a++)z[a].item&&(z[a].item.needsUpdate=!0)},updateCurrItem:function(a){if(0!==tb){var b,c=Math.abs(tb);if(!(a&&2>c)){f.currItem=Zc(m),Bb("beforeChange",tb),c>=h&&(o+=tb+(tb>0?-h:h),c=h);for(var d=0;c>d;d++)tb>0?(b=z.shift(),z[h-1]=b,o++,Hb((o+2)*sb.x,b.el.style),f.setContent(b,m-c+d+1+1)):(b=z.pop(),z.unshift(b),o--,Hb(o*sb.x,b.el.style),f.setContent(b,m+c-d-1-1));if(eb&&1===Math.abs(tb)){var e=Zc(A);e.initialZoomLevel!==s&&(gd(e,qb),Gb(e))}tb=0,f.updateCurrZoomItem(),A=m,Bb("afterChange")}}},updateSize:function(b){if(!ub){var c=e.getScrollY();if(N!==c&&(a.style.top=c+"px",N=c),!b&&wb.x===window.innerWidth&&wb.y===window.innerHeight)return;wb.x=window.innerWidth,wb.y=window.innerHeight,a.style.height=wb.y+"px"}if(qb.x=f.scrollWrap.clientWidth,qb.y=f.scrollWrap.clientHeight,y={x:0,y:N},sb.x=qb.x+Math.round(qb.x*i.spacing),sb.y=qb.y,Ib(sb.x*rb),Bb("beforeResize"),void 0!==o){for(var d,g,j,k=0;h>k;k++)d=z[k],Hb((k+o)*sb.x,d.el.style),j=m+k-1,i.loop&&$c()>2&&(j=yb(j)),g=Zc(j),g&&(x||g.needsUpdate||!g.bounds)?(f.cleanSlide(g),f.setContent(d,j),1===k&&(f.currItem=g,f.updateCurrZoomItem(!0)),g.needsUpdate=!1):-1===d.index&&j>=0&&f.setContent(d,j),g&&g.container&&(gd(g,qb),Gb(g));x=!1}t=s=f.currItem.initialZoomLevel,db=f.currItem.bounds,db&&(pb.x=db.center.x,pb.y=db.center.y,Fb()),Bb("resize")},zoomTo:function(a,b,c,d,f){b&&(t=s,sc.x=Math.abs(b.x)-pb.x,sc.y=Math.abs(b.y)-pb.y,Kb(ob,pb));var g=Qb(a,!1),h={};Tb("x",g,h,a),Tb("y",g,h,a);var i=s,j={x:pb.x,y:pb.y};Lb(h);var k=function(b){1===b?(s=a,pb.x=h.x,pb.y=h.y):(s=(a-i)*b+i,pb.x=(h.x-j.x)*b+j.x,pb.y=(h.y-j.y)*b+j.y),f&&f(b),Fb()};c?bc("customZoomTo",0,1,c,d||e.easing.sine.inOut,k):k(1)}},dc=30,ec=10,fc={},gc={},hc={},ic={},jc={},kc=[],lc={},mc=[],nc={},oc=0,pc=mb(),qc=0,rc=mb(),sc=mb(),tc=mb(),uc=function(a,b){return a.x===b.x&&a.y===b.y},vc=function(a,b){return Math.abs(a.x-b.x)<g&&Math.abs(a.y-b.y)<g},wc=function(a,b){return nc.x=Math.abs(a.x-b.x),nc.y=Math.abs(a.y-b.y),Math.sqrt(nc.x*nc.x+nc.y*nc.y)},xc=function(){Z&&(J(Z),Z=null)},yc=function(){V&&(Z=I(yc),Oc())},zc=function(){return!("fit"===i.scaleMode&&s===f.currItem.initialZoomLevel)},Ac=function(a,b){return a?a.className&&a.className.indexOf("pswp__scroll-wrap")>-1?!1:b(a)?a:Ac(a.parentNode,b):!1},Bc={},Cc=function(a,b){return Bc.prevent=!Ac(a.target,i.isClickableElement),Bb("preventDragEvent",a,b,Bc),Bc.prevent},Dc=function(a,b){return b.x=a.pageX,b.y=a.pageY,b.id=a.identifier,b},Ec=function(a,b,c){c.x=.5*(a.x+b.x),c.y=.5*(a.y+b.y)},Fc=function(a,b,c){if(a-Q>50){var d=mc.length>2?mc.shift():{};d.x=b,d.y=c,mc.push(d),Q=a}},Gc=function(){var a=pb.y-f.currItem.initialPosition.y;return 1-Math.abs(a/(qb.y/2))},Hc={},Ic={},Jc=[],Kc=function(a){for(;Jc.length>0;)Jc.pop();return G?(lb=0,kc.forEach(function(a){0===lb?Jc[0]=a:1===lb&&(Jc[1]=a),lb++})):a.type.indexOf("touch")>-1?a.touches&&a.touches.length>0&&(Jc[0]=Dc(a.touches[0],Hc),a.touches.length>1&&(Jc[1]=Dc(a.touches[1],Ic))):(Hc.x=a.pageX,Hc.y=a.pageY,Hc.id="",Jc[0]=Hc),Jc},Lc=function(a,b){var c,d,e,g,h=0,j=pb[a]+b[a],k=b[a]>0,l=rc.x+b.x,m=rc.x-lc.x;return c=j>db.min[a]||j<db.max[a]?i.panEndFriction:1,j=pb[a]+b[a]*c,!i.allowPanToNext&&s!==f.currItem.initialZoomLevel||(eb?"h"!==gb||"x"!==a||X||(k?(j>db.min[a]&&(c=i.panEndFriction,h=db.min[a]-j,d=db.min[a]-ob[a]),(0>=d||0>m)&&$c()>1?(g=l,0>m&&l>lc.x&&(g=lc.x)):db.min.x!==db.max.x&&(e=j)):(j<db.max[a]&&(c=i.panEndFriction,h=j-db.max[a],d=ob[a]-db.max[a]),(0>=d||m>0)&&$c()>1?(g=l,m>0&&l<lc.x&&(g=lc.x)):db.min.x!==db.max.x&&(e=j))):g=l,"x"!==a)?void(fb||$||s>f.currItem.fitRatio&&(pb[a]+=b[a]*c)):(void 0!==g&&(Ib(g,!0),$=g===lc.x?!1:!0),db.min.x!==db.max.x&&(void 0!==e?pb.x=e:$||(pb.x+=b.x*c)),void 0!==g)},Mc=function(a){if(!("mousedown"===a.type&&a.button>0)){if(Yc)return void a.preventDefault();if(!U||"mousedown"!==a.type){if(Cc(a,!0)&&a.preventDefault(),Bb("pointerDown"),G){var b=e.arraySearch(kc,a.pointerId,"id");0>b&&(b=kc.length),kc[b]={x:a.pageX,y:a.pageY,id:a.pointerId}}var c=Kc(a),d=c.length;_=null,ac(),V&&1!==d||(V=hb=!0,e.bind(window,p,f),S=kb=ib=T=$=Y=W=X=!1,gb=null,Bb("firstTouchStart",c),Kb(ob,pb),nb.x=nb.y=0,Kb(ic,c[0]),Kb(jc,ic),lc.x=sb.x*rb,mc=[{x:ic.x,y:ic.y}],Q=P=Cb(),Qb(s,!0),xc(),yc()),!ab&&d>1&&!fb&&!$&&(t=s,X=!1,ab=W=!0,nb.y=nb.x=0,Kb(ob,pb),Kb(fc,c[0]),Kb(gc,c[1]),Ec(fc,gc,tc),sc.x=Math.abs(tc.x)-pb.x,sc.y=Math.abs(tc.y)-pb.y,bb=cb=wc(fc,gc))}}},Nc=function(a){if(a.preventDefault(),G){var b=e.arraySearch(kc,a.pointerId,"id");if(b>-1){var c=kc[b];c.x=a.pageX,c.y=a.pageY}}if(V){var d=Kc(a);if(gb||Y||ab)_=d;else{var f=Math.abs(d[0].x-ic.x)-Math.abs(d[0].y-ic.y);Math.abs(f)>=ec&&(gb=f>0?"h":"v",_=d)}}},Oc=function(){if(_){var a=_.length;if(0!==a)if(Kb(fc,_[0]),hc.x=fc.x-ic.x,hc.y=fc.y-ic.y,ab&&a>1){if(ic.x=fc.x,ic.y=fc.y,!hc.x&&!hc.y&&uc(_[1],gc))return;Kb(gc,_[1]),X||(X=!0,Bb("zoomGestureStarted"));var b=wc(fc,gc),c=Tc(b);c>f.currItem.initialZoomLevel+f.currItem.initialZoomLevel/15&&(kb=!0);var d=1,e=Rb(),g=Sb();if(e>c)if(i.pinchToClose&&!kb&&t<=f.currItem.initialZoomLevel){var h=e-c,j=1-h/(e/1.2);Db(j),Bb("onPinchClose",j),ib=!0}else d=(e-c)/e,d>1&&(d=1),c=e-d*(e/3);else c>g&&(d=(c-g)/(6*e),d>1&&(d=1),c=g+d*e);0>d&&(d=0),bb=b,Ec(fc,gc,pc),nb.x+=pc.x-tc.x,nb.y+=pc.y-tc.y,Kb(tc,pc),pb.x=Jb("x",c),pb.y=Jb("y",c),S=c>s,s=c,Fb()}else{if(!gb)return;if(hb&&(hb=!1,Math.abs(hc.x)>=ec&&(hc.x-=_[0].x-jc.x),Math.abs(hc.y)>=ec&&(hc.y-=_[0].y-jc.y)),ic.x=fc.x,ic.y=fc.y,0===hc.x&&0===hc.y)return;if("v"===gb&&i.closeOnVerticalDrag&&!zc()){nb.y+=hc.y,pb.y+=hc.y;var k=Gc();return T=!0,Bb("onVerticalDrag",k),Db(k),void Fb()}Fc(Cb(),fc.x,fc.y),Y=!0,db=f.currItem.bounds;var l=Lc("x",hc);l||(Lc("y",hc),Lb(pb),Fb())}}},Pc=function(a){if(O.isOldAndroid){if(U&&"mouseup"===a.type)return;a.type.indexOf("touch")>-1&&(clearTimeout(U),U=setTimeout(function(){U=0},600))}Bb("pointerUp"),Cc(a,!1)&&a.preventDefault();var b;if(G){var c=e.arraySearch(kc,a.pointerId,"id");if(c>-1)if(b=kc.splice(c,1)[0],navigator.pointerEnabled)b.type=a.pointerType||"mouse";else{var d={4:"mouse",2:"touch",3:"pen"};b.type=d[a.pointerType],b.type||(b.type=a.pointerType||"mouse")}}var g,h=Kc(a),i=h.length;if("mouseup"===a.type&&(i=0),2===i)return _=null,!0;1===i&&Kb(jc,h[0]),0!==i||gb||fb||(b||("mouseup"===a.type?b={x:a.pageX,y:a.pageY,type:"mouse"}:a.changedTouches&&a.changedTouches[0]&&(b={x:a.changedTouches[0].pageX,y:a.changedTouches[0].pageY,type:"touch"})),Bb("touchRelease",a,b));var j=-1;if(0===i&&(V=!1,e.unbind(window,p,f),xc(),ab?j=0:-1!==qc&&(j=Cb()-qc)),qc=1===i?Cb():-1,g=-1!==j&&150>j?"zoom":"swipe",ab&&2>i&&(ab=!1,1===i&&(g="zoomPointerUp"),Bb("zoomGestureEnded")),_=null,Y||X||fb||T)if(ac(),R||(R=Qc()),R.calculateSwipeSpeed("x"),T){var k=Gc();if(.6>k)f.close();else{var l=pb.y,m=jb;bc("verticalDrag",0,1,300,e.easing.cubic.out,function(a){pb.y=(f.currItem.initialPosition.y-l)*a+l,Db((1-m)*a+m),Fb()}),Bb("onVerticalDrag",1)}}else{if(($||fb)&&0===i){var n=Sc(g,R);if(n)return;g="zoomPointerUp"}if(!fb)return"swipe"!==g?void Uc():void(!$&&s>f.currItem.fitRatio&&Rc(R))}},Qc=function(){var a,b,c={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(d){mc.length>1?(a=Cb()-Q+50,b=mc[mc.length-2][d]):(a=Cb()-P,b=jc[d]),c.lastFlickOffset[d]=ic[d]-b,c.lastFlickDist[d]=Math.abs(c.lastFlickOffset[d]),c.lastFlickSpeed[d]=c.lastFlickDist[d]>20?c.lastFlickOffset[d]/a:0,Math.abs(c.lastFlickSpeed[d])<.1&&(c.lastFlickSpeed[d]=0),c.slowDownRatio[d]=.95,c.slowDownRatioReverse[d]=1-c.slowDownRatio[d],c.speedDecelerationRatio[d]=1},calculateOverBoundsAnimOffset:function(a,b){c.backAnimStarted[a]||(pb[a]>db.min[a]?c.backAnimDestination[a]=db.min[a]:pb[a]<db.max[a]&&(c.backAnimDestination[a]=db.max[a]),void 0!==c.backAnimDestination[a]&&(c.slowDownRatio[a]=.7,c.slowDownRatioReverse[a]=1-c.slowDownRatio[a],c.speedDecelerationRatioAbs[a]<.05&&(c.lastFlickSpeed[a]=0,c.backAnimStarted[a]=!0,bc("bounceZoomPan"+a,pb[a],c.backAnimDestination[a],b||300,e.easing.sine.out,function(b){pb[a]=b,Fb()}))))},calculateAnimOffset:function(a){c.backAnimStarted[a]||(c.speedDecelerationRatio[a]=c.speedDecelerationRatio[a]*(c.slowDownRatio[a]+c.slowDownRatioReverse[a]-c.slowDownRatioReverse[a]*c.timeDiff/10),c.speedDecelerationRatioAbs[a]=Math.abs(c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]),c.distanceOffset[a]=c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]*c.timeDiff,pb[a]+=c.distanceOffset[a])},panAnimLoop:function(){return Yb.zoomPan&&(Yb.zoomPan.raf=I(c.panAnimLoop),c.now=Cb(),c.timeDiff=c.now-c.lastNow,c.lastNow=c.now,c.calculateAnimOffset("x"),c.calculateAnimOffset("y"),Fb(),c.calculateOverBoundsAnimOffset("x"),c.calculateOverBoundsAnimOffset("y"),c.speedDecelerationRatioAbs.x<.05&&c.speedDecelerationRatioAbs.y<.05)?(pb.x=Math.round(pb.x),pb.y=Math.round(pb.y),Fb(),void $b("zoomPan")):void 0}};return c},Rc=function(a){return a.calculateSwipeSpeed("y"),db=f.currItem.bounds,a.backAnimDestination={},a.backAnimStarted={},Math.abs(a.lastFlickSpeed.x)<=.05&&Math.abs(a.lastFlickSpeed.y)<=.05?(a.speedDecelerationRatioAbs.x=a.speedDecelerationRatioAbs.y=0,a.calculateOverBoundsAnimOffset("x"),a.calculateOverBoundsAnimOffset("y"),!0):(_b("zoomPan"),a.lastNow=Cb(),void a.panAnimLoop())},Sc=function(a,b){var c;fb||(oc=m);var d;if("swipe"===a){var g=ic.x-jc.x,h=b.lastFlickDist.x<10;g>dc&&(h||b.lastFlickOffset.x>20)?d=-1:-dc>g&&(h||b.lastFlickOffset.x<-20)&&(d=1)}var j;d&&(m+=d,0>m?(m=i.loop?$c()-1:0,j=!0):m>=$c()&&(m=i.loop?0:$c()-1,j=!0),(!j||i.loop)&&(tb+=d,rb-=d,c=!0));var k,l=sb.x*rb,n=Math.abs(l-rc.x);return c||l>rc.x==b.lastFlickSpeed.x>0?(k=Math.abs(b.lastFlickSpeed.x)>0?n/Math.abs(b.lastFlickSpeed.x):333,k=Math.min(k,400),k=Math.max(k,250)):k=333,oc===m&&(c=!1),fb=!0,Bb("mainScrollAnimStart"),bc("mainScroll",rc.x,l,k,e.easing.cubic.out,Ib,function(){ac(),fb=!1,oc=-1,(c||oc!==m)&&f.updateCurrItem(),Bb("mainScrollAnimComplete")}),c&&f.updateCurrItem(!0),c},Tc=function(a){return 1/cb*a*t},Uc=function(){var a=s,b=Rb(),c=Sb();b>s?a=b:s>c&&(a=c);var d,g=1,h=jb;return ib&&!S&&!kb&&b>s?(f.close(),!0):(ib&&(d=function(a){Db((g-h)*a+h)}),f.zoomTo(a,0,300,e.easing.cubic.out,d),!0)};xb("Gestures",{publicMethods:{initGestures:function(){var a=function(a,b,c,d,e){B=a+b,C=a+c,D=a+d,E=e?a+e:""};G=O.pointerEvent,G&&O.touch&&(O.touch=!1),G?navigator.pointerEnabled?a("pointer","down","move","up","cancel"):a("MSPointer","Down","Move","Up","Cancel"):O.touch?(a("touch","start","move","end","cancel"),H=!0):a("mouse","down","move","up"),p=C+" "+D+" "+E,q=B,G&&!H&&(H=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),f.likelyTouchDevice=H,r[B]=Mc,r[C]=Nc,r[D]=Pc,E&&(r[E]=r[D]),O.touch&&(q+=" mousedown",p+=" mousemove mouseup",r.mousedown=r[B],r.mousemove=r[C],r.mouseup=r[D]),H||(i.allowPanToNext=!1)}}});var Vc,Wc,Xc,Yc,Zc,$c,_c,ad=function(b,c,d,g){Vc&&clearTimeout(Vc),Yc=!0,Xc=!0;var h;b.initialLayout?(h=b.initialLayout,b.initialLayout=null):h=i.getThumbBoundsFn&&i.getThumbBoundsFn(m);var j=d?i.hideAnimationDuration:i.showAnimationDuration,k=function(){$b("initialZoom"),d?(f.template.removeAttribute("style"),f.bg.removeAttribute("style")):(Db(1),c&&(c.style.display="block"),e.addClass(a,"pswp--animated-in"),Bb("initialZoom"+(d?"OutEnd":"InEnd"))),g&&g(),Yc=!1};if(!j||!h||void 0===h.x){var n=function(){Bb("initialZoom"+(d?"Out":"In")),s=b.initialZoomLevel,Kb(pb,b.initialPosition),Fb(),a.style.opacity=d?0:1,Db(1),k()};return void n()}var o=function(){var c=l,g=!f.currItem.src||f.currItem.loadError||i.showHideOpacity;b.miniImg&&(b.miniImg.style.webkitBackfaceVisibility="hidden"),d||(s=h.w/b.w,pb.x=h.x,pb.y=h.y-L,f[g?"template":"bg"].style.opacity=.001,Fb()),_b("initialZoom"),d&&!c&&e.removeClass(a,"pswp--animated-in"),g&&(d?e[(c?"remove":"add")+"Class"](a,"pswp--animate_opacity"):setTimeout(function(){e.addClass(a,"pswp--animate_opacity")},30)),Vc=setTimeout(function(){if(Bb("initialZoom"+(d?"Out":"In")),d){var f=h.w/b.w,i={x:pb.x,y:pb.y},l=s,m=jb,n=function(b){1===b?(s=f,pb.x=h.x,pb.y=h.y-N):(s=(f-l)*b+l,pb.x=(h.x-i.x)*b+i.x,pb.y=(h.y-N-i.y)*b+i.y),Fb(),g?a.style.opacity=1-b:Db(m-b*m)};c?bc("initialZoom",0,1,j,e.easing.cubic.out,n,k):(n(1),Vc=setTimeout(k,j+20))}else s=b.initialZoomLevel,Kb(pb,b.initialPosition),Fb(),Db(1),g?a.style.opacity=1:Db(1),Vc=setTimeout(k,j+20)},d?25:90)};o()},bd={},cd=[],dd={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Wc.length}},ed=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},fd=function(a,b,c){var d=a.bounds;d.center.x=Math.round((bd.x-b)/2),d.center.y=Math.round((bd.y-c)/2)+a.vGap.top,d.max.x=b>bd.x?Math.round(bd.x-b):d.center.x,d.max.y=c>bd.y?Math.round(bd.y-c)+a.vGap.top:d.center.y,d.min.x=b>bd.x?0:d.center.x,d.min.y=c>bd.y?a.vGap.top:d.center.y},gd=function(a,b,c){if(a.src&&!a.loadError){var d=!c;if(d&&(a.vGap||(a.vGap={top:0,bottom:0}),Bb("parseVerticalMargin",a)),bd.x=b.x,bd.y=b.y-a.vGap.top-a.vGap.bottom,d){var e=bd.x/a.w,f=bd.y/a.h;a.fitRatio=f>e?e:f;var g=i.scaleMode;"orig"===g?c=1:"fit"===g&&(c=a.fitRatio),c>1&&(c=1),a.initialZoomLevel=c,a.bounds||(a.bounds=ed())}if(!c)return;return fd(a,a.w*c,a.h*c),d&&c===a.initialZoomLevel&&(a.initialPosition=a.bounds.center),a.bounds}return a.w=a.h=0,a.initialZoomLevel=a.fitRatio=1,a.bounds=ed(),a.initialPosition=a.bounds.center,a.bounds},hd=function(a,b,c,d,e,g){if(!b.loadError){var h,j=f.isDragging()&&!f.isZooming(),k=a===m||f.isMainScrollAnimating()||j;!e&&(H||i.alwaysFadeIn)&&k&&(h=!0),d&&(h&&(d.style.opacity=0),b.imageAppended=!0,kd(d,b.w,b.h),c.appendChild(d),h&&setTimeout(function(){d.style.opacity=1,g&&setTimeout(function(){b&&b.loaded&&b.placeholder&&(b.placeholder.style.display="none",b.placeholder=null)},500)},50))}},id=function(a){a.loading=!0,a.loaded=!1;var b=a.img=e.createEl("pswp__img","img"),c=function(){a.loading=!1,a.loaded=!0,a.loadComplete?a.loadComplete(a):a.img=null,b.onload=b.onerror=null,b=null};return b.onload=c,b.onerror=function(){a.loadError=!0,c()},b.src=a.src,b},jd=function(a,b){return a.src&&a.loadError&&a.container?(b&&(a.container.innerHTML=""),a.container.innerHTML=i.errorMsg.replace("%url%",a.src),!0):void 0},kd=function(a,b,c){a.style.width=b+"px",a.style.height=c+"px"},ld=function(){if(cd.length){for(var a,b=0;b<cd.length;b++)a=cd[b],a.holder.index===a.index&&hd(a.index,a.item,a.baseDiv,a.img);cd=[]}};xb("Controller",{publicMethods:{lazyLoadItem:function(a){a=yb(a);var b=Zc(a);!b||b.loaded||b.loading||(Bb("gettingData",a,b),b.src&&id(b))},initController:function(){e.extend(i,dd,!0),f.items=Wc=c,Zc=f.getItemAt,$c=i.getNumItemsFn,_c=i.loop,$c()<3&&(i.loop=!1),Ab("beforeChange",function(a){var b,c=i.preload,d=null===a?!0:a>0,e=Math.min(c[0],$c()),g=Math.min(c[1],$c());for(b=1;(d?g:e)>=b;b++)f.lazyLoadItem(m+b);for(b=1;(d?e:g)>=b;b++)f.lazyLoadItem(m-b)}),Ab("initialLayout",function(){f.currItem.initialLayout=i.getThumbBoundsFn&&i.getThumbBoundsFn(m)}),Ab("mainScrollAnimComplete",ld),Ab("initialZoomInEnd",ld),Ab("destroy",function(){for(var a,b=0;b<Wc.length;b++)a=Wc[b],a.container&&(a.container=null),a.placeholder&&(a.placeholder=null),a.img&&(a.img=null),a.preloader&&(a.preloader=null),a.loadError&&(a.loaded=a.loadError=!1);cd=null})},getItemAt:function(a){return a>=0&&void 0!==Wc[a]?Wc[a]:!1},allowProgressiveImg:function(){return i.forceProgressiveLoading||!H||i.mouseUsed||screen.width>1200},setContent:function(a,b){i.loop&&(b=yb(b));var c=f.getItemAt(a.index);c&&(c.container=null);var d,g=f.getItemAt(b);if(!g)return void(a.el.innerHTML="");Bb("gettingData",b,g),a.index=b,a.item=g;var h=g.container=e.createEl("pswp__zoom-wrap");if(!g.src&&g.html&&(g.html.tagName?h.appendChild(g.html):h.innerHTML=g.html),jd(g),!g.src||g.loadError||g.loaded)g.src&&!g.loadError&&(d=e.createEl("pswp__img","img"),d.style.webkitBackfaceVisibility="hidden",d.style.opacity=1,d.src=g.src,kd(d,g.w,g.h),hd(b,g,h,d,!0));else{if(g.loadComplete=function(c){if(j){if(c.img&&(c.img.style.webkitBackfaceVisibility="hidden"),a&&a.index===b){if(jd(c,!0))return c.loadComplete=c.img=null,gd(c,qb),Gb(c),void(a.index===m&&f.updateCurrZoomItem());c.imageAppended?!Yc&&c.placeholder&&(c.placeholder.style.display="none",c.placeholder=null):O.transform&&(fb||Yc)?cd.push({item:c,baseDiv:h,img:c.img,index:b,holder:a}):hd(b,c,h,c.img,fb||Yc)}c.loadComplete=null,c.img=null,Bb("imageLoadComplete",b,c)}},e.features.transform){var k="pswp__img pswp__img--placeholder";k+=g.msrc?"":" pswp__img--placeholder--blank";var l=e.createEl(k,g.msrc?"img":"");g.msrc&&(l.src=g.msrc),kd(l,g.w,g.h),h.appendChild(l),g.placeholder=l}g.loading||id(g),f.allowProgressiveImg()&&(!Xc&&O.transform?cd.push({item:g,baseDiv:h,img:g.img,index:b,holder:a}):hd(b,g,h,g.img,!0,!0))}gd(g,qb),Xc||b!==m?Gb(g):(eb=h.style,ad(g,d||g.img)),a.el.innerHTML="",a.el.appendChild(h)},cleanSlide:function(a){a.img&&(a.img.onload=a.img.onerror=null),a.loaded=a.loading=a.img=a.imageAppended=!1}}});var md,nd={},od=function(a,b,c){var d=document.createEvent("CustomEvent"),e={origEvent:a,target:a.target,releasePoint:b,pointerType:c||"touch"};d.initCustomEvent("pswpTap",!0,!0,e),a.target.dispatchEvent(d)};xb("Tap",{publicMethods:{initTap:function(){Ab("firstTouchStart",f.onTapStart),Ab("touchRelease",f.onTapRelease),Ab("destroy",function(){nd={},md=null})},onTapStart:function(a){a.length>1&&(clearTimeout(md),md=null)},onTapRelease:function(a,b){if(b&&!Y&&!W&&!Zb){var c=b;if(md&&(clearTimeout(md),md=null,vc(c,nd)))return void Bb("doubleTap",c);if("mouse"===b.type)return void od(a,b,"mouse");var d=a.target.tagName.toUpperCase();if("BUTTON"===d||e.hasClass(a.target,"pswp__single-tap"))return void od(a,b);Kb(nd,c),md=setTimeout(function(){od(a,b),md=null},300)}}}});var pd;xb("DesktopZoom",{publicMethods:{initDesktopZoom:function(){M||(H?Ab("mouseUsed",function(){f.setupDesktopZoom()}):f.setupDesktopZoom(!0))},setupDesktopZoom:function(b){pd={};var c="wheel mousewheel DOMMouseScroll";Ab("bindEvents",function(){e.bind(a,c,f.handleMouseWheel)}),Ab("unbindEvents",function(){pd&&e.unbind(a,c,f.handleMouseWheel)}),f.mouseZoomedIn=!1;var d,g=function(){f.mouseZoomedIn&&(e.removeClass(a,"pswp--zoomed-in"),f.mouseZoomedIn=!1),1>s?e.addClass(a,"pswp--zoom-allowed"):e.removeClass(a,"pswp--zoom-allowed"),h()},h=function(){d&&(e.removeClass(a,"pswp--dragging"),d=!1)};Ab("resize",g),Ab("afterChange",g),Ab("pointerDown",function(){f.mouseZoomedIn&&(d=!0,e.addClass(a,"pswp--dragging"))}),Ab("pointerUp",h),b||g()},handleMouseWheel:function(a){if(s<=f.currItem.fitRatio)return i.closeOnScroll?F&&Math.abs(a.deltaY)>2&&(l=!0,f.close()):a.preventDefault(),!0;if(a.preventDefault(),a.stopPropagation(),pd.x=0,"deltaX"in a)1===a.deltaMode?(pd.x=18*a.deltaX,pd.y=18*a.deltaY):(pd.x=a.deltaX,pd.y=a.deltaY);else if("wheelDelta"in a)a.wheelDeltaX&&(pd.x=-.16*a.wheelDeltaX),pd.y=a.wheelDeltaY?-.16*a.wheelDeltaY:-.16*a.wheelDelta;else{if(!("detail"in a))return;pd.y=a.detail}Qb(s,!0),f.panTo(pb.x-pd.x,pb.y-pd.y)},toggleDesktopZoom:function(b){b=b||{x:qb.x/2,y:qb.y/2+N};var c=i.getDoubleTapZoom(!0,f.currItem),d=s===c;f.mouseZoomedIn=!d,f.zoomTo(d?f.currItem.initialZoomLevel:c,b,333),e[(d?"remove":"add")+"Class"](a,"pswp--zoomed-in")}}});var qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd={history:!0,galleryUID:1},Dd=function(){return Ad.hash.substring(1)},Ed=function(){qd&&clearTimeout(qd),sd&&clearTimeout(sd)},Fd=function(){var a=Dd(),b={};if(a.length<5)return b;for(var c=a.split("&"),d=0;d<c.length;d++)if(c[d]){var e=c[d].split("=");e.length<2||(b[e[0]]=e[1])}return b.pid=parseInt(b.pid,10)-1,b.pid<0&&(b.pid=0),b},Gd=function(){if(sd&&clearTimeout(sd),Zb||V)return void(sd=setTimeout(Gd,500));td?clearTimeout(rd):td=!0;var a=wd+"&gid="+i.galleryUID+"&pid="+(m+1);xd||-1===Ad.hash.indexOf(a)&&(zd=!0);var b=Ad.href.split("#")[0]+"#"+a;Bd?"#"+a!==window.location.hash&&history[xd?"replaceState":"pushState"]("",document.title,b):xd?Ad.replace(b):Ad.hash=a,xd=!0,rd=setTimeout(function(){td=!1},60)};xb("History",{publicMethods:{initHistory:function(){if(e.extend(i,Cd,!0),i.history){Ad=window.location,zd=!1,yd=!1,xd=!1,wd=Dd(),Bd="pushState"in history,wd.indexOf("gid=")>-1&&(wd=wd.split("&gid=")[0],wd=wd.split("?gid=")[0]),Ab("afterChange",f.updateURL),Ab("unbindEvents",function(){e.unbind(window,"hashchange",f.onHashChange)});var a=function(){vd=!0,yd||(zd?history.back():wd?Ad.hash=wd:Bd?history.pushState("",document.title,Ad.pathname+Ad.search):Ad.hash=""),Ed()};Ab("unbindEvents",function(){l&&a()}),Ab("destroy",function(){vd||a()}),Ab("firstUpdate",function(){m=Fd().pid});var b=wd.indexOf("pid=");b>-1&&(wd=wd.substring(0,b),"&"===wd.slice(-1)&&(wd=wd.slice(0,-1))),setTimeout(function(){j&&e.bind(window,"hashchange",f.onHashChange)},40)}},onHashChange:function(){return Dd()===wd?(yd=!0,void f.close()):void(td||(ud=!0,f.goTo(Fd().pid),ud=!1))},updateURL:function(){Ed(),ud||(xd?qd=setTimeout(Gd,800):Gd())}}}),e.extend(f,cc)};return a});
angular.module('ui.bootstrap.position', [])

/**
 * A set of utility methods that can be use to retrieve position of DOM elements.
 * It is meant to be used where we need to absolute-position DOM elements in
 * relation to other, existing elements (this is the case for tooltips, popovers,
 * typeahead suggestions etc.).
 */
  .factory('$position', ['$document', '$window', function ($document, $window) {

    function getStyle(el, cssprop) {
      if (el.currentStyle) { //IE
        return el.currentStyle[cssprop];
      } else if ($window.getComputedStyle) {
        return $window.getComputedStyle(el)[cssprop];
      }
      // finally try and get inline style
      return el.style[cssprop];
    }

    /**
     * Checks if a given element is statically positioned
     * @param element - raw DOM element
     */
    function isStaticPositioned(element) {
      return (getStyle(element, 'position') || 'static' ) === 'static';
    }

    /**
     * returns the closest, non-statically positioned parentOffset of a given element
     * @param element
     */
    var parentOffsetEl = function (element) {
      var docDomEl = $document[0];
      var offsetParent = element.offsetParent || docDomEl;
      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent) ) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || docDomEl;
    };

    return {
      /**
       * Provides read-only equivalent of jQuery's position function:
       * http://api.jquery.com/position/
       */
      position: function (element) {
        var elBCR = this.offset(element);
        var offsetParentBCR = { top: 0, left: 0 };
        var offsetParentEl = parentOffsetEl(element[0]);
        if (offsetParentEl != $document[0]) {
          offsetParentBCR = this.offset(angular.element(offsetParentEl));
          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }

        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: elBCR.top - offsetParentBCR.top,
          left: elBCR.left - offsetParentBCR.left
        };
      },

      /**
       * Provides read-only equivalent of jQuery's offset function:
       * http://api.jquery.com/offset/
       */
      offset: function (element) {
        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
          left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
        };
      },

      /**
       * Provides coordinates for the targetEl in relation to hostEl
       */
      positionElements: function (hostEl, targetEl, positionStr, appendToBody) {

        var positionStrParts = positionStr.split('-');
        var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';

        var hostElPos,
          targetElWidth,
          targetElHeight,
          targetElPos;

        hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);

        targetElWidth = targetEl.prop('offsetWidth');
        targetElHeight = targetEl.prop('offsetHeight');

        var shiftWidth = {
          center: function () {
            return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
          },
          left: function () {
            return hostElPos.left;
          },
          right: function () {
            return hostElPos.left + hostElPos.width;
          }
        };

        var shiftHeight = {
          center: function () {
            return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
          },
          top: function () {
            return hostElPos.top;
          },
          bottom: function () {
            return hostElPos.top + hostElPos.height;
          }
        };

        switch (pos0) {
          case 'right':
            targetElPos = {
              top: shiftHeight[pos1](),
              left: shiftWidth[pos0]()
            };
            break;
          case 'left':
            targetElPos = {
              top: shiftHeight[pos1](),
              left: hostElPos.left - targetElWidth
            };
            break;
          case 'bottom':
            targetElPos = {
              top: shiftHeight[pos0](),
              left: shiftWidth[pos1]()
            };
            break;
          default:
            targetElPos = {
              top: hostElPos.top - targetElHeight,
              left: shiftWidth[pos1]()
            };
            break;
        }

        return targetElPos;
      }
    };
  }]);

sharedModule.factory('DataService', ['$http', '$q', '$log', function ($http, $q, $log)
{
    function makeGetRequest(url, id)
    {
        var request = {
            method : 'GET',
            url: url + "/" + id
        };

        var dfd = $q.defer();
        $http(request).then(
                function (responseSuccessData) {
                    dfd.resolve(responseSuccessData.data);
                },
                function (responseErrorData) {
                    dfd.reject(responseErrorData.data);
                }
        );
        return dfd.promise;
    }

    function makeGetRequestWithFilters(url, filters) {
        var request = {
            method: 'GET',
            url: url + appendFilter(filters)
        };

        var dfd = $q.defer();
        $http(request).then(
            function (responseSuccessData) {
                dfd.resolve(responseSuccessData.data);
            },
            function (responseErrorData) {
                dfd.reject(responseErrorData.data);
            }
        );
        return dfd.promise;
    }

    function appendFilter(filters)
    {
        if (filters === null)
        {
            return "";
        }
        var filterString = "?";
        for (var filter in filters)
        {
            if (filters.hasOwnProperty(filter) && filters[filter] !== "")
            {
                if (filterString.length > 1)
                {
                    filterString += "&";
                }

                filterString += filter + "=" + filters[filter];
            }
        }
        return filterString;
    }

    function makePostRequest(url, payload)
    {
        var request = {
            method : 'POST',
            url : url,
            data : payload
        };

        var dfd = $q.defer();
        $http(request).then(
                function (responseSuccessData) {
                    dfd.resolve(responseSuccessData.data);
                },
                function (responseErrorData) {
                    dfd.reject(responseErrorData.data);
                }
        );
        return dfd.promise;
    }

    function makePutRequest(url, id, payload)
    {
        var request = {
            method : 'PUT',
            url : url + "/" + id,
            data : payload
        };

        var dfd = $q.defer();
        $http(request).then(
                function (responseSuccessData) {
                    dfd.resolve(responseSuccessData.data);
                },
                function (responseErrorData) {
                    dfd.reject(responseErrorData.data);
                }
        );
        return dfd.promise;
    }

    function makePutRequestWithoutPayload(url)
    {
        var request = {
            method : 'PUT',
            url : url
        };

        var dfd = $q.defer();
        $http(request).then(
                function (responseSuccessData) {
                    dfd.resolve(responseSuccessData.data);
                },
                function (responseErrorData) {
                    dfd.reject(responseErrorData.data);
                }
        );
        return dfd.promise;
    }

    function makeDeleteRequest(url, id)
    {
        var request = {
            method : 'DELETE',
            url : url + "/" + id
        };

        var dfd = $q.defer();
        $http(request).then(
                function (responseSuccessData) {
                    dfd.resolve(responseSuccessData.data);
                },
                function (responseErrorData) {
                    dfd.reject(responseErrorData.data);
                }
        );
        return dfd.promise;
    }

    return {
        executeGetRequestWithFilters: function (url, filters) {
            return makeGetRequestWithFilters(url, filters);
        },
        executeGetRequestWithoutParams: function (url) {
            return makeGetRequestWithFilters(url, null);
        },
        executeGetRequest: function (url, id) {
            return makeGetRequest(url, id);
        },
        executePostRequest: function (url, payload) {
            return makePostRequest(url, payload);
        },
        executePutRequest: function (url, id, payload) {
            return makePutRequest(url, id, payload);
        },
        executePutRequestWithoutPayload: function (url) {
            return makePutRequestWithoutPayload(url);
        },
        executeDeleteRequest: function (url, id) {
            return makeDeleteRequest(url, id);
        }
    };
}]);


sharedModule.factory('LanguageFactory', ['$translate', '$locale', '$rootScope', '$cookies', function ($translate, $locale, $rootScope, $cookies) {

    var currentLanguage;

    var languages = [
        {
            name: "English",
            class: "en"
        },
        {
            name: "Hrvatski",
            class: "hr"
        }
    ];

    function setInitialLanguage() {
        var lang_class = $cookies.get('lang_class');
        var lang_name = $cookies.get('lang_name');
        if (lang_class == null || lang_name == null) {
            currentLanguage = languages[0];
        }
        else {
            currentLanguage = {
                name: lang_name,
                class: lang_class
            };
            changeLanguage(currentLanguage)
        }
    }

    setInitialLanguage();

    function translateLocale() {
        var locale = {
            "DATETIME_FORMATS": {
                "DAY": [
                    $translate.instant("sunday"),
                    $translate.instant("monday"),
                    $translate.instant("tuesday"),
                    $translate.instant("wednesday"),
                    $translate.instant("thursday"),
                    $translate.instant("friday"),
                    $translate.instant("saturday")
                ],
                "SHORTDAY": [
                    $translate.instant("sun"),
                    $translate.instant("mon"),
                    $translate.instant("tue"),
                    $translate.instant("wed"),
                    $translate.instant("thu"),
                    $translate.instant("fri"),
                    $translate.instant("sat")
                ],
                "MONTH": [
                    $translate.instant("january"),
                    $translate.instant("february"),
                    $translate.instant("march"),
                    $translate.instant("april"),
                    $translate.instant("may"),
                    $translate.instant("june"),
                    $translate.instant("july"),
                    $translate.instant("august"),
                    $translate.instant("september"),
                    $translate.instant("october"),
                    $translate.instant("november"),
                    $translate.instant("december")
                ],
                "SHORTMONTH": [
                    $translate.instant("jan"),
                    $translate.instant("feb"),
                    $translate.instant("mar"),
                    $translate.instant("apr"),
                    $translate.instant("may_short"),
                    $translate.instant("jun"),
                    $translate.instant("jul"),
                    $translate.instant("aug"),
                    $translate.instant("sep"),
                    $translate.instant("oct"),
                    $translate.instant("nov"),
                    $translate.instant("dec")
                ]
            }
        };

        angular.copy(locale, $locale);
    }

    function changeLanguage(language){
        $cookies.put('lang_class', language.class, 5);
        $cookies.put('lang_name', language.name, 5);
        currentLanguage = language;
        $translate.use(language.class);
    }

    $rootScope.$on('$translateChangeSuccess', function (event, arg) {
        translateLocale();
    });

    return {
        setCurrentLanguage: function (language) {
            changeLanguage(language);
        },
        getCurrentLanguage: function() {
            return currentLanguage;
        },
        getAllLanguages: function() {
            return languages;
        }
    };
}]);


sharedModule.factory('PictureSizeFactory', [function () {
    var maxFullscreenImageWidth = 0;
    var maxTumbnailImageWidth = 0;
    var fullScreenPicturesWidths = [
        {
            full: 345,
            tumb: 345
        },
        {
            full: 500,
            tumb: 345
        }
        , {
            full: 640,
            tumb: 345
        },
        {
            full: 800,
            tumb: 345
        }
        , {
            full: 1024,
            tumb: 345
        },
        {
            full: 1280,
            tumb: 500
        }, {
            full: 1600,
            tumb: 640
        }, {
            full: 1920,
            tumb: 1024
        }];

    function calculateAppropriateImageSize(screenWidth) {
        for (var i = 0; i < fullScreenPicturesWidths.length; i++) {
            if (screenWidth <= fullScreenPicturesWidths[i].full && maxFullscreenImageWidth < fullScreenPicturesWidths[i].full) {
                maxFullscreenImageWidth = fullScreenPicturesWidths[i].full;
                maxTumbnailImageWidth = fullScreenPicturesWidths[i].tumb;
                break;
            }
        }

        if (maxFullscreenImageWidth == 0) {
            maxFullscreenImageWidth = fullScreenPicturesWidths[fullScreenPicturesWidths.length - 1].full;
            maxTumbnailImageWidth = fullScreenPicturesWidths[fullScreenPicturesWidths.length - 1].tumb;
        }
    }

    return {
        calculateAppropriateImageSizeForScreenWidth: function (screenWidth) {
            return calculateAppropriateImageSize(screenWidth);
        },
        getFullscreenWidth: function() {
            return maxFullscreenImageWidth
        },
        getTumbnailWidth: function() {
            return maxTumbnailImageWidth
        }
    };
}]);


sharedModule.factory('PricingFactory', ['DataService',

    function (DataService) {
        function createGetPricingList() {
            return DataService.executeGetRequestWithoutParams('http://localhost:9001/v1/price')
        }

        function fetchPriceForRange(id, from, to) {
            from.setHours(12);
            from.setMinutes(0);
            from.setSeconds(0);
            from.setMilliseconds(0);

            to.setHours(12);
            to.setMinutes(0);
            to.setSeconds(0);
            to.setMilliseconds(0);
            var payload = {
                from: from.getTime(),
                to: to.getTime(),
                unitId: id,
                userId: "user"
            };

            return DataService.executePostRequest('http://localhost:9001/v1/price/calculate', payload)
        }

        return {
            getPricingList: function () {
                return createGetPricingList();
            },

            getPriceForRange: function (id, from, to) {
                return fetchPriceForRange(id, from, to);
            }
        };
    }]);


sharedModule.animation(".show160", function () {
    return {
        addClass: function (element, className) {
            TweenMax.to(element, 1, {height:160, width:160, opacity:1});
        }
    }
});

sharedModule.animation(".show50", function () {
    return {
        addClass: function (element, className) {
            TweenMax.to(element, 1, {height:50, width:50, opacity:1});
        }
    }
});

sharedModule.animation(".appear", function () {
    return {
        addClass: function (element, className) {
            TweenMax.to(element, 2, {opacity:1});
        },
        removeClass: function (element, className) {
            TweenMax.to(element, 1, {opacity:0});
        }
    }
});

sharedModule.animation(".slideIt", function () {
    return {
        addClass: function (element, className) {
            TweenMax.to(element, 1, {left:0, opacity:1});
        }
    }
});
sharedModule.directive("ngElementReady", function () {
    return function (scope, element, attrs) {

        if (attrs.number == attrs.size-1)
        {

                $('#' + attrs.parentId).anoSlide(
                    {
                        items: 3,
                        speed: 500,
                        prev: 'a.prev[data-prev]',
                        next: 'a.next[data-next]',
                        lazy: false,
                        delay: 0,
                        initial: 5
                    });
        }
    }
});

sharedModule.directive("photoSwipeReady", function () {
    return function (scope, element, attrs) {

        if (attrs.number == attrs.size-1)
        {
        initPhotoSwipeFromDOM('.my-simple-gallery');
        }

    }
});

sharedModule.directive("resizeReady", function () {
    return function (scope, element, attrs) {
        var windowHeight = document.querySelector("html").offsetHeight;
        var windowWidth = document.querySelector("html").offsetWidth;
        var element = $('#' + attrs.id);
        element.css('height', windowHeight + "px");
        element.css('width', windowWidth + "px");
    }
});


sharedModule.directive('jmDpRefreshView', function () {
    var noop = function () {
    };
    var refreshDpOnNotify = function (dpCtrl) {
        return function () {
            dpCtrl.refreshView();
        };
    };
    return {
        require: 'datepicker',
        link: function (scope, elem, attrs, dpCtrl) {
            var refreshPromise = scope[attrs.jmDpRefreshView];
            refreshPromise.then(noop, noop, refreshDpOnNotify(dpCtrl));
        }
    };
});
locationModule.controller('LocationController', ['$scope', 'LanguageFactory', '$rootScope',
    function ($scope, LanguageFactory, $rootScope) {

        var currentLanguage = LanguageFactory.getCurrentLanguage().class;

        $rootScope.$on('$translateChangeSuccess', function (event, arg) {
            currentLanguage = LanguageFactory.getCurrentLanguage().class;
            map = new google.maps.Map(document.getElementById("map"), myOptions);
        });

        var myOptions = {
            center: new google.maps.LatLng(43.9090643, 15.509069400000044),
            zoom: 10,
            scrollwheel: false,
            navigationControl: true,
            mapTypeControl: true,
            scaleControl: true,
            disableDoubleClickZoom: true,
            streetViewControl: true,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            language: currentLanguage
        };

        var map = new google.maps.Map(document.getElementById("map"), myOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(43.913165, 15.508193),
            map: map,
            icon: "assets/img/villa.png",
            title: "Zadarska 13, 23211, Pakoštane"
        });
    }
]);
surveyModule.controller('SurveyController', ['$scope', 'LanguageFactory', '$rootScope', '$window',
    function ($scope, LanguageFactory, $rootScope, $window) {

        $scope.currentLanguage = LanguageFactory.getCurrentLanguage().class;

        $rootScope.$on('$translateChangeSuccess', function (event, arg) {
            $scope.currentLanguage = LanguageFactory.getCurrentLanguage().class;
            resize();
        });

        angular.element($window).on('resize', function () {
            resize();
        });

        function resize() {
            var windowHeight = document.querySelector("html").offsetHeight;
            var windowWidth = document.querySelector("html").offsetWidth;
            var element = $('#' + attrs.id);
            element.css('height', windowHeight + "px");
            element.css('width', windowWidth + "px");
        }

    }
]);
headerModule.controller('HeaderController', ['$scope', '$location', '$translate', '$rootScope', 'PictureSizeFactory', '$window',
    'LanguageFactory',
    function ($scope, $location, $translate, $rootScope, PictureSizeFactory, $window, LanguageFactory) {

        angular.element($window).on('resize', function () {
            PictureSizeFactory.calculateAppropriateImageSizeForScreenWidth($window.innerWidth)
        });

        PictureSizeFactory.calculateAppropriateImageSizeForScreenWidth($window.innerWidth);

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.selectedLanguage = LanguageFactory.getCurrentLanguage();

        $scope.languages = LanguageFactory.getAllLanguages();

        $scope.changeLanguage = function (lang) {
            LanguageFactory.setCurrentLanguage(lang);
            $scope.selectedLanguage = lang;
        };

        $scope.status = {
            isOpen: false
        };

        $scope.toggleDropdown = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isOpen = !$scope.status.isOpen;
        };
    }
]);
contactModule.controller('ContactController', ['$scope', 'ContactFactory', '$q',
    function ($scope, ContactFactory, $q) {
        $scope.sending = false;
        $scope.success = false;
        $scope.error = false;

        $scope.hideAlert = function(){
            $scope.success = false;
            $scope.error = false;
        };

        $scope.clearFields = function() {
            $scope.message = {
                name : "",
                email : "",
                subject : "",
                text : ""
            };
        };

        $scope.sendMessage = function(){
            $scope.error = false;
            $scope.success = false;
            if ($scope.message.email != "") {
                $scope.sending = true;
                var deferred = $q.defer();
                var promise = deferred.promise;
                deferred.resolve(ContactFactory.sendContact($scope.message));

                promise.then(function () {
                        $scope.sending = false;
                        $scope.success = true;
                        $scope.clearFields();
                    },
                    function () {
                        $scope.sending = false;
                        $scope.error = true;
                    });
            }
        };

        $scope.clearFields();
    }
]);
contactModule.factory('ContactFactory', ['DataService', '$log',
    function (DataService, $log) {
        function createSendContact(payload) {
            return DataService.executePostRequest('http://localhost:9001/v1/contact', payload)
        }

        return {
            sendContact: function (payload) {
                return createSendContact(payload);
            }
        };
    }]);

bookingModule.controller('BookingController', ['$scope', 'BookingFactory', '$q', '$location',
    function ($scope, BookingFactory, $q, $location) {

        $scope.showCalendars = false;

        function getBookedDays() {
            var deferred = $q.defer();
            var promise = deferred.promise;

            deferred.resolve(BookingFactory.getBookedDays($scope.booking.unitId));

            promise.then(function (data) {
                    $scope.bookedDays = data;
                    $scope.showCalendars = true;
                },
                function () {
                    console.log("error")
                });

        }

        var oneDay = 24 * 60 * 60 * 1000;

        function calculateDuration(from, to) {
            return Math.round(Math.abs((from - to) / (oneDay)));
        }

        $scope.clearFields = function () {
            var from, to;
            if ($location.path() == "/") {
                from = $scope.$parent.$parent.$parent.result.fromDate;
                to = $scope.$parent.$parent.$parent.result.toDate;
            }
            else {
                from = new Date();
                to = new Date();
            }

            $scope.booking = {
                unitId: $scope.$parent.app.apartmentId,
                name: "",
                surname: "",
                email: "",
                phoneNumber: "",
                address: "",
                city: "",
                country: "",
                animals: "",
                noOfPeople: "",
                note: "",
                dateFrom: from,
                dateTo: to,
                depositPaid: false
            };
            getBookedDays();

            $scope.duration = calculateDuration($scope.booking.dateFrom, $scope.booking.dateTo);
        };

        $scope.$watch('booking.dateFrom', function (newVal, oldVal) {
            $scope.duration = calculateDuration(newVal, $scope.booking.dateTo);
        }, true);

        $scope.$watch('booking.dateTo', function (newVal, oldVal) {
            $scope.duration = calculateDuration($scope.booking.dateFrom, newVal);
        }, true);

        $scope.sendBooking = function () {
            $scope.error = false;
            $scope.success = false;
            if ($scope.booking.email != "") {
                $scope.sending = true;
                var deferred = $q.defer();
                var promise = deferred.promise;

                $scope.booking.dateFrom = $scope.booking.dateFrom.getTime();
                $scope.booking.dateTo = $scope.booking.dateTo.getTime();
                deferred.resolve(BookingFactory.sendBooking($scope.booking));

                promise.then(function () {
                        $scope.sending = false;
                        $scope.success = true;
                        $scope.clearFields();
                    },
                    function () {
                        $scope.sending = false;
                        $scope.error = true;
                    });
            }
        };

        $scope.clearFields();

        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        $scope.calendar = {
            fromOpened: false,
            toOpened: false
        };

        $scope.open = function ($event, fromTo) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.calendar.fromOpened = false;
            $scope.calendar.toOpened = false;
            if (fromTo == 'from') {
                $scope.calendar.fromOpened = true;
            }
            if (fromTo == 'to') {
                $scope.calendar.toOpened = true;
            }
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1,
            maxMode: 'day',
            minMode: 'day'
        };

        $scope.getDayFromClass = function (date) {
            return BookingFactory.calculateDateFromStyle(date, $scope.bookedDays);
        };

        $scope.getDayToClass = function (date) {
            return BookingFactory.calculateDateToStyle(date, $scope.booking.dateFrom, $scope.bookedDays)
        };

        $scope.getDateDisabled = function (date) {
            return BookingFactory.calculateDateDisabledStyle(date, $scope.bookedDays)
        };
    }
]);
bookingModule.factory('BookingFactory', ['DataService',
    function (DataService) {
        function createSendBooking(payload) {
            return DataService.executePostRequest('http://localhost:9001/v1/booking', payload)
        }

        function createGetBookedDays(apartmentId) {

            var filters = {};
            filters["unitId"] = apartmentId;

            return DataService.executeGetRequestWithFilters('http://localhost:9001/v1/booking/bookedDates', filters)
        }

        function mmddyyyy(date) {
            var yyyy = date.getFullYear().toString();
            var mm = (date.getMonth() + 1).toString();
            var dd = date.getDate().toString();
            return (dd[1] ? dd : "0" + dd[0]) + "-" + (mm[1] ? mm : "0" + mm[0]) + "-" + yyyy;
        }

        function dayFromClass(date, bookedDays) {
            var first = false;
            var last = false;
            var full = false;
            for (var i = 0; i < bookedDays.length; i++) {
                if (mmddyyyy(date) === bookedDays[i].date) {
                    if (bookedDays[i].firstDay) {
                        first = true;
                    }
                    else if (bookedDays[i].lastDay) {
                        last = true;
                    }
                    else if (!bookedDays[i].firstDay && !bookedDays[i].lastDay) {
                        full = true;
                    }
                }
            }
            return colorBookedDate(first, last, full)
        }

        function dayToClass(date, bookingDateFrom, bookedDays) {
            if (bookingDateFrom < date) {
                var first = false;
                var last = false;
                var full = false;
                for (var i = 0; i < bookedDays.length; i++) {
                    if (mmddyyyy(date) === bookedDays[i].date) {
                        if (bookedDays[i].firstDay) {
                            first = true;
                        }
                        else if (bookedDays[i].lastDay) {
                            last = true;
                        }
                        else if (!bookedDays[i].firstDay && !bookedDays[i].lastDay) {
                            full = true;
                        }
                    }
                }
                return colorBookedDate(first, last, full)
            }

            return '';
        }

        function dateDisabled(date, bookedDays) {
            var first = false;
            var last = false;
            var full = false;
            for (var i = 0; i < bookedDays.length; i++) {
                if (mmddyyyy(date) === bookedDays[i].date) {
                    if (bookedDays[i].firstDay) {
                        first = true;
                    }
                    else if (bookedDays[i].lastDay) {
                        last = true;
                    }
                    else if (!bookedDays[i].firstDay && !bookedDays[i].lastDay) {
                        full = true;
                    }
                }
            }

            return full || (first && last)
        }

        function colorBookedDate(first, last, full) {
            if (full || (first && last)) {
                return "full"
            }
            if (first) {
                return "first"
            }
            if (last) {
                return "last"
            }
        }

        return {
            sendBooking: function (payload) {
                return createSendBooking(payload);
            },
            getBookedDays: function (apartmentId) {
                return createGetBookedDays(apartmentId);
            },
            calculateDateFromStyle: function (date, bookedDays) {
                return dayFromClass(date, bookedDays);
            },
            calculateDateToStyle: function (date, bookingDateFrom, bookedDays) {
                return dayToClass(date, bookingDateFrom, bookedDays);
            },
            calculateDateDisabledStyle: function (date, bookedDays) {
                return dateDisabled(date, bookedDays);
            }
        };
    }]);


apartmentsModule.controller('ApartmentsController', ['$scope', 'ApartmentsFactory', '$q', '$timeout', '$location', 'PricingFactory', '$rootScope', 'BookingFactory',
    function ($scope, ApartmentsFactory, $q, $timeout, $location, PricingFactory, $rootScope, BookingFactory) {

        var unselectedValue = 12;
        var availableApp;
        $scope.showCalendars = false;

        $scope.$on('available_apartments', function (event, arg) {
            availableApp = arg.split(',');
            $scope.apartments = ApartmentsFactory.getAvailableApartments(availableApp);
            $scope.selected = unselectedValue;
        });

        $scope.$on('show_all_apartments', function (event, arg) {
            $scope.apartments = ApartmentsFactory.getAllApartments();
            $scope.selected = unselectedValue;
        });

        $scope.isApartmentsPage = function () {
            return $location.path() === "/apartments"
        };

        $rootScope.$on('apartments_translated', function (event, arg) {
            loadApartments();
            $scope.selected = unselectedValue;
        });

        function loadApartments() {
            if ($scope.isApartmentsPage()) {
                $scope.apartments = ApartmentsFactory.getAllApartments();
                $scope.selected = unselectedValue;
            }
            else {
                $scope.apartments = ApartmentsFactory.getAvailableApartments(availableApp);
            }
        }

        loadApartments();

        $scope.getPriceForPeriod = function(apartmentId, appPrices){
            for( var i = 0, n = appPrices.length; i < n; i++ ) {
                if ( appPrices[i][0] === apartmentId ) {
                    return appPrices[i][1];
                }
            }
            return "-"
        };

        $scope.showBooking = unselectedValue;

        $scope.scrollToAptDetails = function (id) {
            $timeout(function () {
                $("html, body").animate({scrollTop: $('#' + id).offset().top}, 500);
            }, 100);
        };

        $scope.setSelected = function (index) {
            if (index === $scope.selected) {
                $scope.selected = unselectedValue
            }
            else {
                $scope.showCalendars = false;
                getBookedDays($scope.apartments[index].apartmentId);
                $scope.selected = index;
                if (!$scope.isApartmentsPage()) {
                    getPricingForRange($scope.apartments[index].apartmentId);
                }
                $scope.showBooking = unselectedValue;
                $timeout(function () {
                    $scope.scrollToAptDetails('app' + index)
                }, 50);
            }
        };

        $scope.dateOptions = {
            numberOfMonths: 3,
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.dt = new Date();

        function getBookedDays(apartmentId) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            deferred.resolve(BookingFactory.getBookedDays(apartmentId));

            promise.then(function (data) {
                    $scope.bookedDays = data;
                    $scope.showCalendars = true;
                },
                function () {
                    console.log("error")
                });
        }

        $scope.getDayFromClass = function (date) {
            return BookingFactory.calculateDateFromStyle(date, $scope.bookedDays);
        };

        $scope.openBooking = function (index) {
            $scope.showBooking = index;
            $timeout(function () {
                $scope.scrollToAptDetails('bookingForm')
            }, 50);
        };

        function getPricing() {
            var deferred = $q.defer();
            var promise = deferred.promise;

            deferred.resolve(PricingFactory.getPricingList());

            promise.then(function (data) {
                $scope.pricing = data.prices;
            });
        }

        function getPricingForRange(apartmentId) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            deferred.resolve(PricingFactory.getPriceForRange(apartmentId, $scope.$parent.result.fromDate, $scope.$parent.result.toDate));

            promise.then(function (data) {
                $scope.apartments[$scope.selected].price = data.price;
            });
        }

        getPricing();
    }
]);
apartmentsModule.factory('ApartmentsFactory', ['PictureSizeFactory', 'DataService', '$translate', '$rootScope',
    function (PictureSizeFactory, DataService, $translate, $rootScope)
    {
        var fullscreenWidth = PictureSizeFactory.getFullscreenWidth();
        var tumbnailWidth = PictureSizeFactory.getTumbnailWidth();
        var kruno_app, blanka_app, djuro_app;

        function translate() {
            kruno_app =
            {
                apartmentId: 1,
                title: $translate.instant('apartment_kruno'),
                subtitle: $translate.instant('all_about_style'),
                bedroomNo: 1,
                bedsNo: "2+1",
                questsNo: 3,
                previewImages: [
                    {
                        big: 'apartments/kruno/' + fullscreenWidth + '/8.jpg',
                        small: 'apartments/kruno/' + tumbnailWidth + '/8.jpg',
                        title: 'Balcony',
                        width: '5458',
                        height: '3155',
                        show: 'true'
                    },
                    {
                        big: 'apartments/kruno/' + fullscreenWidth + '/1.jpg',
                        small: 'zoom.png',
                        title: 'Bathroom',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    },
                    {
                        big: 'apartments/kruno/' + fullscreenWidth + '/2.jpg',
                        small: 'apartments/kruno/' + tumbnailWidth + '/2.jpg',
                        title: 'Living room',
                        width: '5520',
                        height: '3353',
                        show: 'true'
                    },
                    {
                        big: 'apartments/kruno/' + fullscreenWidth + '/3.jpg',
                        small: 'zoom.png',
                        title: 'Living room',
                        width: '5095',
                        height: '2945',
                        show: 'false'
                    },
                    {
                        big: 'apartments/kruno/' + fullscreenWidth + '/4.jpg',
                        small: 'zoom.png',
                        title: 'Living room',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    },
                    {
                        big: 'apartments/kruno/' + fullscreenWidth + '/5.jpg',
                        small: 'zoom.png',
                        title: 'Living room',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    },
                    {
                        big: 'apartments/kruno/' + fullscreenWidth + '/6.jpg',
                        small: 'apartments/kruno/' + tumbnailWidth + '/6.jpg',
                        title: 'Kitchen',
                        width: '5458',
                        height: '3155',
                        show: 'true'
                    },
                    {
                        big: 'apartments/kruno/' + fullscreenWidth + '/7.jpg',
                        small: 'zoom.png',
                        title: 'Kitchen',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    },
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/12.jpg',
                        small: 'zoom.png',
                        title: 'House from the front',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    },
                    //{big:'apartments/house/'+fullscreenWidth+'/27.jpg', small:'zoom.png', title:'House from the front', width:'5458', height:'3155', show:'false'},
                    //{big:'apartments/house/'+fullscreenWidth+'/28.jpg', small:'zoom.png', title:'House from the front', width:'2592', height:'1936', show:'false'},
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/29.jpeg',
                        small: 'zoom.png',
                        title: 'House from the front',
                        width: '2592',
                        height: '1936',
                        show: 'false'
                    },
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/30.jpeg',
                        small: 'zoom.png',
                        title: 'House from the front',
                        width: '2592',
                        height: '1936',
                        show: 'false'
                    },
                    //{big:'apartments/house/'+fullscreenWidth+'/22.jpg', small:'zoom.png', title:'House from the front', width:'5458', height:'3155', show:'false'},
                    //{big:'apartments/house/'+fullscreenWidth+'/23.jpg', small:'zoom.png', title:'House from the street', width:'5458', height:'3155', show:'false'},
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/24.jpg',
                        small: 'zoom.png',
                        title: 'House from the street',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    },
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/25.jpg',
                        small: 'zoom.png',
                        title: 'House from the front',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    },
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/26.jpg',
                        small: 'zoom.png',
                        title: 'House from the front',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    }
                ],
                image: 'apartments/kruno/header-kruno.jpg',
                price: 0
            };
            blanka_app =
            {
                apartmentId: 2,
                title: $translate.instant('apartment_blanka'),
                subtitle: $translate.instant('biggest_apartment'),
                bedroomNo: 1,
                bedsNo: "2+2",
                questsNo: 4,
                previewImages: [
                    {
                        big: 'apartments/blanka/' + fullscreenWidth + '/10.jpg',
                        small: 'apartments/blanka/' + tumbnailWidth + '/10.jpg',
                        title: 'Balcony',
                        width: '5520',
                        height: '3680',
                        show: 'true'
                    },
                    //{big:'apartments/blanka/'+fullscreenWidth+'/11.jpg', small:'apartments/blanka/'+tumbnailWidth+'/11.jpg', title:'Balcony', width:'5520', height:'3680', show:'false'},
                    {
                        big: 'apartments/blanka/' + fullscreenWidth + '/01.jpg',
                        small: 'zoom.png',
                        title: 'Living room - Sofa is replaced',
                        width: '5140',
                        height: '2971',
                        show: 'false'
                    },
                    {
                        big: 'apartments/blanka/' + fullscreenWidth + '/13.jpg',
                        small: 'zoom.png',
                        title: 'Living room - new sofa',
                        width: '5140',
                        height: '2971',
                        show: 'false'
                    },
                    //{big:'apartments/blanka/'+fullscreenWidth+'/02.jpg', small:'apartments/blanka/'+tumbnailWidth+'/02.jpg', title:'Living room', width:'5246', height:'3032', show:'true'},
                    //{big:'apartments/blanka/'+fullscreenWidth+'/03.jpg', small:'zoom.png', title:'Living room', width:'5458', height:'3155', show:'false'},
                    {
                        big: 'apartments/blanka/' + fullscreenWidth + '/04.jpg',
                        small: 'zoom.png',
                        title: 'Kitchen',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    },
                    {
                        big: 'apartments/blanka/' + fullscreenWidth + '/05.jpg',
                        small: 'apartments/blanka/' + tumbnailWidth + '/05.jpg',
                        title: 'Bathroom',
                        width: '5458',
                        height: '3155',
                        show: 'true'
                    },
                    {
                        big: 'apartments/blanka/' + fullscreenWidth + '/06.jpg',
                        small: 'zoom.png',
                        title: 'Bathtub',
                        width: '3535',
                        height: '4681',
                        show: 'false'
                    },
                    {
                        big: 'apartments/blanka/' + fullscreenWidth + '/07.jpg',
                        small: 'apartments/blanka/' + tumbnailWidth + '/07.jpg',
                        title: 'Bedroom',
                        width: '5458',
                        height: '3155',
                        show: 'true'
                    },
                    {
                        big: 'apartments/blanka/' + fullscreenWidth + '/08.jpg',
                        small: 'zoom.png',
                        title: 'Bedroom',
                        width: '5520',
                        height: '3496',
                        show: 'false'
                    },
                    //{big:'apartments/blanka/'+fullscreenWidth+'/09.jpg', small:'apartments/blanka/'+tumbnailWidth+'/09.jpg', title:'Balcony', width:'5520', height:'3680', show:'true'},
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/12.jpg',
                        small: 'zoom.png',
                        title: 'House from the front',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    },
                    //{big:'apartments/house/'+fullscreenWidth+'/27.jpg', small:'zoom.png', title:'House from the front', width:'5458', height:'3155', show:'false'},
                    //{big:'apartments/house/'+fullscreenWidth+'/28.jpg', small:'zoom.png', title:'House from the front', width:'2592', height:'1936', show:'false'},
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/29.jpeg',
                        small: 'zoom.png',
                        title: 'House from the front',
                        width: '2592',
                        height: '1936',
                        show: 'false'
                    },
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/30.jpeg',
                        small: 'zoom.png',
                        title: 'House from the front',
                        width: '2592',
                        height: '1936',
                        show: 'false'
                    },
                    //{big:'apartments/house/'+fullscreenWidth+'/22.jpg', small:'zoom.png', title:'House from the front', width:'5458', height:'3155', show:'false'},
                    //{big:'apartments/house/'+fullscreenWidth+'/23.jpg', small:'zoom.png', title:'House from the street', width:'5458', height:'3155', show:'false'},
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/24.jpg',
                        small: 'zoom.png',
                        title: 'House from the street',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    },
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/25.jpg',
                        small: 'zoom.png',
                        title: 'House from the front',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    },
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/26.jpg',
                        small: 'zoom.png',
                        title: 'House from the front',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    }
                ],
                image: 'apartments/blanka/header-blanka.jpg',
                price: 0
            };
            djuro_app =
            {
                apartmentId: 3,
                title: $translate.instant('apartment_djuro'),
                subtitle: $translate.instant('spacious_apartment'),
                bedroomNo: 1,
                bedsNo: "2+2",
                questsNo: 4,
                previewImages: [
                    {
                        big: 'apartments/djuro/' + fullscreenWidth + '/10.jpg',
                        small: 'apartments/djuro/' + tumbnailWidth + '/10.jpg',
                        title: 'Balcony',
                        width: '5233',
                        height: '3025',
                        show: 'true'
                    },
                    {
                        big: 'apartments/djuro/' + fullscreenWidth + '/01.jpg',
                        small: 'apartments/djuro/' + tumbnailWidth + '/01.jpg',
                        title: 'Bedroom',
                        width: '5140',
                        height: '2971',
                        show: 'true'
                    },
                    {
                        big: 'apartments/djuro/' + fullscreenWidth + '/02.jpg',
                        small: 'zoom.png',
                        title: 'Bedroom',
                        width: '5246',
                        height: '3032',
                        show: 'false'
                    },
                    {
                        big: 'apartments/djuro/' + fullscreenWidth + '/05.jpg',
                        small: 'zoom.png',
                        title: 'Bedroom',
                        width: '5184',
                        height: '2996',
                        show: 'false'
                    },
                    {
                        big: 'apartments/djuro/' + fullscreenWidth + '/03.jpg',
                        small: 'zoom.png',
                        title: 'Bathroom',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    },
                    //{big:'apartments/djuro/'+fullscreenWidth+'/04.jpg', small:'apartments/djuro/'+tumbnailWidth+'/04.jpg', title:'Bathroom', width:'3680', height:'5063', show:'false'},
                    //{big:'apartments/djuro/'+fullscreenWidth+'/06.jpg', small:'apartments/djuro/'+tumbnailWidth+'/06.jpg', title:'Living room', width:'5520', height:'3680', show:'false'},
                    {
                        big: 'apartments/djuro/' + fullscreenWidth + '/07.jpg',
                        small: 'apartments/djuro/' + tumbnailWidth + '/07.jpg',
                        title: 'Living room',
                        width: '5458',
                        height: '3155',
                        show: 'true'
                    },
                    {
                        big: 'apartments/djuro/' + fullscreenWidth + '/08.jpg',
                        small: 'zoom.png',
                        title: 'Living room',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    },
                    {
                        big: 'apartments/djuro/' + fullscreenWidth + '/09.jpg',
                        small: 'zoom.png',
                        title: 'Kitchen',
                        width: '5458',
                        height: '5458',
                        show: 'false'
                    },
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/12.jpg',
                        small: 'zoom.png',
                        title: 'House from the front',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    },
                    //{big:'apartments/house/'+fullscreenWidth+'/27.jpg', small:'zoom.png', title:'House from the front', width:'5458', height:'3155', show:'false'},
                    //{big:'apartments/house/'+fullscreenWidth+'/28.jpg', small:'zoom.png', title:'House from the front', width:'2592', height:'1936', show:'false'},
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/29.jpeg',
                        small: 'zoom.png',
                        title: 'House from the front',
                        width: '2592',
                        height: '1936',
                        show: 'false'
                    },
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/30.jpeg',
                        small: 'zoom.png',
                        title: 'House from the front',
                        width: '2592',
                        height: '1936',
                        show: 'false'
                    },
                    //{big:'apartments/house/'+fullscreenWidth+'/22.jpg', small:'zoom.png', title:'House from the front', width:'5458', height:'3155', show:'false'},
                    //{big:'apartments/house/'+fullscreenWidth+'/23.jpg', small:'zoom.png', title:'House from the street', width:'5458', height:'3155', show:'false'},
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/24.jpg',
                        small: 'zoom.png',
                        title: 'House from the street',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    },
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/25.jpg',
                        small: 'zoom.png',
                        title: 'House from the front',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    },
                    {
                        big: 'apartments/house/' + fullscreenWidth + '/26.jpg',
                        small: 'zoom.png',
                        title: 'House from the front',
                        width: '5458',
                        height: '3155',
                        show: 'false'
                    }
                ],
                image: 'apartments/djuro/header-djuro.jpg',
                price: 0
            };
            $rootScope.$broadcast('apartments_translated', "");
        }

        translate();

        $rootScope.$on('$translateChangeSuccess', function (event, arg) {
            translate();
        });

        function getAvailableApartmentsArray(availableApartmentIds){
            var apartments = [];

            if ($.inArray('2', availableApartmentIds) > -1){
                apartments.push(blanka_app)
            }
            if ($.inArray('1', availableApartmentIds) > -1){
                apartments.push(kruno_app)
            }
            if ($.inArray('3', availableApartmentIds) > -1){
                apartments.push(djuro_app)
            }
            return apartments;
        }

        function showAllApartments() {
            return [kruno_app, blanka_app, djuro_app]
        }

        function createGetAvailableApartments(from, to)
        {
            var filters = {};
            filters["from"] = from.getTime();
            filters["to"] = to.getTime();

            return DataService.executeGetRequestWithFilters('http://localhost:9001/v1/booking/available', filters)
        }

        return {
            getAvailableApartments: function (availableApartmentIds){
                return getAvailableApartmentsArray(availableApartmentIds);
            },

            getAllApartments: function() {
                return showAllApartments();
            },

            getAvailableApartmentsForRange: function (from, to)
            {
                return createGetAvailableApartments(from, to);
            }
        };
    }]);


homeModule.controller('HomeController', ['ApartmentsFactory', '$scope', '$interval', '$q', '$rootScope', '$timeout',
    function (ApartmentsFactory, $scope, $interval, $q, $rootScope, $timeout) {

        var endOfTheYearDate = new Date();
        endOfTheYearDate.setMonth(11);
        endOfTheYearDate.setDate(31);
        $scope.months = [];
        $scope.showSlider = true;

        function refreshMonths() {
            $scope.months = [];

            for (var i = 0; i < 12; i++) {
                var month = new Date();
                month.setMonth(i);
                month.setDate(1);
                $scope.months[i] = month;
            }
        }

        refreshMonths();

        var intervalPromise = $interval(callAtInterval, 500);


        function callAtInterval() {
            var selected = parseInt(angular.element(document.querySelector('#selected')).attr('number'));
            if ($scope.selectedMonths[3] !== selected) {
                monthSelected(selected);
            }
        }

        $scope.$on('$destroy', function () {
            $interval.cancel(intervalPromise);
        });


        $scope.selectedMonths = [5, 6, 7, 5];

        function getStartingMonthTime() {
            return $scope.months[$scope.selectedMonths[0]].getTime()
        }

        function getEndingMonthTime() {
            var endDate;
            if ($scope.months[$scope.selectedMonths[2]].getMonth() === 11) {
                endDate = new Date($scope.months[$scope.selectedMonths[2]].getTime());
                endDate.setDate(31);
            }
            else {
                endDate = new Date($scope.months[$scope.selectedMonths[2] + 1].getTime());
                endDate.setDate(0);
            }
            return endDate.getTime()
        }

        function monthSelected(index) {

            if (index === 0) {
                $scope.selectedMonths = [0, 1, 2, 0];
            }
            else if (index === 10) {
                $scope.selectedMonths = [9, 10, 11, 11];

            }
            else {
                $scope.selectedMonths = [index, index + 1, index + 2, index];
            }
            recalculateRange();
            recalibrateDefaultDate();
            calculateDuration();
        }

        function recalculateRange() {
            $scope.difference = getEndingMonthTime() - getStartingMonthTime();
        }

        var oneDay = 24 * 60 * 60 * 1000;

        var minRange = 3 * oneDay;

        var noOfSteps = 30;
        var stepSize = 10000000;

        $scope.onTimeout = function () {
            if (noOfSteps > 0) {
                noOfSteps--;

                $scope.result = {
                    from: $scope.result.from + stepSize,
                    to: $scope.result.to - stepSize,
                    fromDate: new Date($scope.result.fromDate + stepSize),
                    toDate: new Date($scope.result.toDate - stepSize),
                    minRange: minRange
                };
            }
            animationTimeout = $timeout($scope.onTimeout, 10);
        };


        function recalibrateDefaultDate() {
            var initialFrom = new Date($scope.months[$scope.selectedMonths[1]].getTime());
            initialFrom.setDate(13);

            var initialTo = new Date($scope.months[$scope.selectedMonths[1]].getTime());
            initialTo.setDate(20);

            var animationFrom = new Date(initialFrom.getTime() - noOfSteps * stepSize);
            var animationTo = new Date(initialTo.getTime() + noOfSteps * stepSize);

            $scope.result = {
                from: animationFrom.getTime() - getStartingMonthTime(),
                to: animationTo.getTime() - getStartingMonthTime(),
                fromDate: animationFrom,
                toDate: animationTo,
                minRange: minRange
            };
        }

        recalculateRange();
        recalibrateDefaultDate();

        function calculateDuration() {
            if ($scope.result.toDate !== null && $scope.result.fromDate !== null) {
                $scope.duration = Math.round(Math.abs(($scope.result.toDate.getTime() - $scope.result.fromDate.getTime()) / (oneDay)));

                var deferred = $q.defer();
                var promise = deferred.promise;

                deferred.resolve(ApartmentsFactory.getAvailableApartmentsForRange($scope.result.fromDate, $scope.result.toDate));

                promise.then(function (data) {

                    $scope.numberOfAvailableApartments = data.unitIds.length;

                    $rootScope.$broadcast('available_apartments', data.unitIds.join(','));
                });
            }
        }

        $scope.$watch('result.from', function (newVal, oldVal) {
            $scope.result.fromDate.setTime(newVal + getStartingMonthTime());
            calculateTimeout();
        }, true);

        $scope.$watch('result.to', function (newVal, oldVal) {
            $scope.result.toDate.setTime(newVal + getStartingMonthTime());
            calculateTimeout();
        }, true);

        var sliderTimeout;

        function calculateTimeout() {
            var timeoutTime = 200;

            if (sliderTimeout != null) {
                $timeout.cancel(sliderTimeout);
            }
            sliderTimeout = $timeout(calculateDuration, timeoutTime);
        }

        $scope.scrollToApartments = function () {
            $("html, body").animate({scrollTop: $('.apartments').offset().top + 20}, 500);
        };

        var animationTimeout;

        $(document).ready(function () {
            resize();
            animationTimeout = $timeout($scope.onTimeout, 1000);
        });

        function resize() {
            var offset = document.querySelector("html").offsetHeight;
            var offsetWidth = document.querySelector("html").offsetWidth;
            var mainContent = $('.main-content');
            mainContent.css('min-height', offset);
            mainContent.css('background-size', offsetWidth + "px " + offset + "px");
            var marginTop = 52;
            if (offset > 529) {
                marginTop = marginTop + (offset - 529) / 2;
            }
            $('.slider-header').css('margin-top', marginTop);
        }

        var resizeTimer;
        $(window).resize(function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resize, 100);
        });


        $rootScope.$on('$translateChangeSuccess', function (event, arg) {
            $scope.showSlider = false;
            refreshMonths();
            $timeout($scope.showIt, 100);
        });

        $scope.showIt = function () {
            $scope.showSlider = true;
        }
    }
]);

surroundingsModule.controller('SurroundingsController', ['$scope', 'SurroundingsFactory', '$window', '$timeout', '$rootScope',
    function ($scope, SurroundingsFactory, $window, $timeout, $rootScope) {

        var unselectedValue = 12;

        $scope.setSelected = function (index) {
            if (index == $scope.selectedItem) {
                $scope.selectedItem = unselectedValue
            }
            else {
                $scope.selectedItem = index;
            }
            $timeout(function () {
                $scope.scrollToDetails('item' + index)
            }, 50);
        };

        $scope.scrollToDetails = function (id) {
            $timeout(function () {
                $("html, body").animate({scrollTop: $('#' + id).offset().top}, 500);
            }, 100);
        };

        $scope.openLink = function (link) {
            $window.open(link);
        };

        $scope.selectedItem = unselectedValue;
        $scope.radioModel = 'beaches';

        $scope.selected = {
            beaches: true,
            cities: false,
            nature: false
        };

        $scope.show = function (showing) {
            $scope.radioModel = showing;
            $scope.selectedItem = unselectedValue;
            if (showing == 'beaches') {
                $scope.selected = {
                    beaches: true,
                    cities: false,
                    nature: false
                };
                $scope.list = SurroundingsFactory.getBeaches();
            }
            if (showing == 'cities') {
                $scope.selected = {
                    beaches: false,
                    cities: true,
                    nature: false
                };
                $scope.list = SurroundingsFactory.getCities();
            }
            if (showing == 'nature') {
                $scope.selected = {
                    beaches: false,
                    cities: false,
                    nature: true
                };
                $scope.list = SurroundingsFactory.getNature();
            }
        };

        $scope.show("beaches");

        $rootScope.$on('surroundings_translated', function (event, arg) {
            $scope.show($scope.radioModel);
        });
    }
]);
surroundingsModule.factory('SurroundingsFactory', ['PictureSizeFactory', '$translate', '$rootScope',
    function (PictureSizeFactory, $translate, $rootScope) {
        var fullscreenWidth = PictureSizeFactory.getFullscreenWidth();
        var tumbnailWidth = PictureSizeFactory.getTumbnailWidth();
        var beaches, cities, nature;

        function showBeaches() {
            return beaches
        }

        function showNature() {
            return nature;
        }

        function showCities() {
            return cities
        }

        function translate(){
            beaches = [
                {
                    name: $translate.instant('beach_janice'),
                    distance: '1 km',
                    description: $translate.instant('beach_janice_description'),
                    link: null,
                    directions: 'https://www.google.ie/maps/dir/Apartments+Blanka,+Zadarska+ul.+13,+23211,+Pako%C5%A1tane/43.9062104,15.5093641/@43.9080145,15.5066105,1645m/data=!3m1!1e3!4m9!4m8!1m5!1m1!1s0x1334cc9bbef508e5:0x8830957a5773f290!2m2!1d15.508065!2d43.913116!1m0!3e2?hl=en',
                    previewImages: [
                        {
                            big: 'surroundings/beaches/Janice/' + fullscreenWidth + '/janice_1_beach_3.jpeg',
                            small: 'surroundings/beaches/Janice/' + tumbnailWidth + '/janice_1_beach_3.jpeg',
                            title: 'Beach Janice',
                            width: '1920',
                            height: '1440',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/beaches/Janice/' + fullscreenWidth + '/janice_1_beach_15.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Janice',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Janice/' + fullscreenWidth + '/janice_1_beach_4.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Janice',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        //{
                        //    big: 'surroundings/beaches/Janice/' + fullscreenWidth + '/janice_1_beach_5.jpeg',
                        //    small: 'zoom.png',
                        //    title: 'Beach Janice',
                        //    width: '1920',
                        //    height: '1440',
                        //    show: 'false'
                        //},
                        {
                            big: 'surroundings/beaches/Janice/' + fullscreenWidth + '/janice_1_beach_6.jpeg',
                            small: 'surroundings/beaches/Janice/' + tumbnailWidth + '/janice_1_beach_6.jpeg',
                            title: 'Beach Janice',
                            width: '1920',
                            height: '1440',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/beaches/Janice/' + fullscreenWidth + '/janice_1_beach_7.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Janice',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Janice/' + fullscreenWidth + '/janice_1_beach_8.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Janice',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Janice/' + fullscreenWidth + '/janice_1_beach_9.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Janice',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        //{
                        //    big: 'surroundings/beaches/Janice/' + fullscreenWidth + '/janice_1_beach_10.jpeg',
                        //    small: 'zoom.png',
                        //    title: 'Beach Janice',
                        //    width: '1920',
                        //    height: '1440',
                        //    show: 'false'
                        //},
                        {
                            big: 'surroundings/beaches/Janice/' + fullscreenWidth + '/janice_1_beach_11.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Janice',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Janice/' + fullscreenWidth + '/janice_1_beach_12.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Janice',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Janice/' + fullscreenWidth + '/janice_1_beach_13.jpeg',
                            small: 'surroundings/beaches/Janice/' + tumbnailWidth + '/janice_1_beach_13.jpeg',
                            title: 'Beach Janice',
                            width: '1920',
                            height: '1440',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/beaches/Janice/' + fullscreenWidth + '/janice_1_beach_14.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Janice',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        }
                    ],
                    image: 'surroundings/beaches/Janice/header.jpg'
                },
                {
                    name: $translate.instant('beach_punta'),
                    distance: '1 km',
                    description: $translate.instant('beach_punta_description'),
                    link: null,
                    directions: 'https://www.google.ie/maps/dir/Apartments+Blanka,+Zadarska+ul.+13,+23211,+Pako%C5%A1tane/43.9069216,15.5041992/@43.9080047,15.5093535,2017m/data=!3m1!1e3!4m9!4m8!1m5!1m1!1s0x1334cc9bbef508e5:0x8830957a5773f290!2m2!1d15.508065!2d43.913116!1m0!3e2?hl=en',
                    previewImages: [
                        {
                            big: 'surroundings/beaches/Punta/' + fullscreenWidth + '/punta_beach_1.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Punta',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Punta/' + fullscreenWidth + '/punta_beach_2.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Punta',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Punta/' + fullscreenWidth + '/punta_beach_3.jpeg',
                            small: 'surroundings/beaches/Punta/' + tumbnailWidth + '/punta_beach_3.jpeg',
                            title: 'Beach Punta',
                            width: '1920',
                            height: '1280',
                            show: 'true'
                        },
                        //{
                        //    big: 'surroundings/beaches/Punta/' + fullscreenWidth + '/punta_beach_4.jpeg',
                        //    small: 'zoom.png',
                        //    title: 'Beach Punta',
                        //    width: '1920',
                        //    height: '1280',
                        //    show: 'false'
                        //},
                        //{
                        //    big: 'surroundings/beaches/Punta/' + fullscreenWidth + '/punta_beach_5.jpeg',
                        //    small: 'zoom.png',
                        //    title: 'Beach Punta',
                        //    width: '1920',
                        //    height: '1280',
                        //    show: 'false'
                        //},
                        {
                            big: 'surroundings/beaches/Punta/' + fullscreenWidth + '/punta_beach_6.jpeg',
                            small: 'surroundings/beaches/Punta/' + tumbnailWidth + '/punta_beach_6.jpeg',
                            title: 'Beach Punta',
                            width: '1920',
                            height: '1280',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/beaches/Punta/' + fullscreenWidth + '/punta_beach_7.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Punta',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Punta/' + fullscreenWidth + '/punta_beach_8.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Punta',
                            width: '1920',
                            height: '2880',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Punta/' + fullscreenWidth + '/punta_beach_9.jpeg',
                            small: 'surroundings/beaches/Punta/' + tumbnailWidth + '/punta_beach_9.jpeg',
                            title: 'Beach Punta',
                            width: '1920',
                            height: '1260',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/beaches/Punta/' + fullscreenWidth + '/punta_beach_10.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Punta',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Punta/' + fullscreenWidth + '/punta_beach_11.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Punta',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Punta/' + fullscreenWidth + '/punta_beach_12.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Punta',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        }
                    ],
                    image: 'surroundings/beaches/Punta/header.jpg'
                },
                {
                    name: $translate.instant('beach_kozarica'),
                    distance: '1.5 km',
                    description: $translate.instant('beach_kozarica_description'),
                    link: null,
                    directions: 'https://www.google.ie/maps/dir/Apartments+Blanka,+Zadarska+ul.+13,+23211,+Pako%C5%A1tane/43.9074666,15.4992537/@43.9086885,15.4982536,2016m/data=!3m1!1e3!4m9!4m8!1m5!1m1!1s0x1334cc9bbef508e5:0x8830957a5773f290!2m2!1d15.508065!2d43.913116!1m0!3e2?hl=en',
                    previewImages: [
                        {
                            big: 'surroundings/beaches/Kozarica/' + fullscreenWidth + '/kozarica_beach_2.jpeg',
                            small: 'surroundings/beaches/Kozarica/' + tumbnailWidth + '/kozarica_beach_2.jpeg',
                            title: 'Beach Kozarica',
                            width: '1920',
                            height: '1174',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/beaches/Kozarica/' + fullscreenWidth + '/kozarica_beach_9.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Kozarica',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Kozarica/' + fullscreenWidth + '/kozarica_beach_4.jpeg',
                            small: 'surroundings/beaches/Kozarica/' + tumbnailWidth + '/kozarica_beach_4.jpeg',
                            title: 'Beach Kozarica',
                            width: '1920',
                            height: '1163',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/beaches/Kozarica/' + fullscreenWidth + '/kozarica_beach_5.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Kozarica',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Kozarica/' + fullscreenWidth + '/kozarica_beach_6.jpeg',
                            small: 'surroundings/beaches/Kozarica/' + tumbnailWidth + '/kozarica_beach_6.jpeg',
                            title: 'Beach Kozarica',
                            width: '1920',
                            height: '1218',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/beaches/Kozarica/' + fullscreenWidth + '/kozarica_beach_7.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Kozarica',
                            width: '1920',
                            height: '2880',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Kozarica/' + fullscreenWidth + '/kozarica_beach_3.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Kozarica',
                            width: '1920',
                            height: '2880',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Kozarica/' + fullscreenWidth + '/kozarica_beach_1.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Kozarica',
                            width: '1920',
                            height: '2560',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Kozarica/' + fullscreenWidth + '/kozarica_beach_8.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Kozarica',
                            width: '1920',
                            height: '2880',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Kozarica/' + fullscreenWidth + '/kozarica_beach_10.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Kozarica',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        }
                    ],
                    image: 'surroundings/beaches/Kozarica/header.jpg'
                },
                {
                    name: $translate.instant('beach_buzakovina'),
                    distance: '1.5 km',
                    description: $translate.instant('beach_buzakovina_description'),
                    link: null,
                    directions: 'https://www.google.ie/maps/dir/Apartments+Blanka,+Zadarska+ul.+13,+23211,+Pako%C5%A1tane/43.9132545,15.4939897/@43.9140339,15.4956825,1641m/data=!3m2!1e3!4b1!4m9!4m8!1m5!1m1!1s0x1334cc9bbef508e5:0x8830957a5773f290!2m2!1d15.508065!2d43.913116!1m0!3e2?hl=en',
                    previewImages: [
                        {
                            big: 'surroundings/beaches/Buzakovina/' + fullscreenWidth + '/buzakovina_beach_1.jpeg',
                            small: 'zoom.png',
                            title: 'Buzakovina beach',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Buzakovina/' + fullscreenWidth + '/buzakovina_beach_2.jpeg',
                            small: 'zoom.png',
                            title: 'Buzakovina beach',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Buzakovina/' + fullscreenWidth + '/buzakovina_beach_3.jpeg',
                            small: 'surroundings/beaches/Buzakovina/' + tumbnailWidth + '/buzakovina_beach_3.jpeg',
                            title: 'Buzakovina beach',
                            width: '1920',
                            height: '1730',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/beaches/Buzakovina/' + fullscreenWidth + '/buzakovina_beach_4.jpeg',
                            small: 'zoom.png',
                            title: 'Buzakovina beach',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Buzakovina/' + fullscreenWidth + '/buzakovina_beach_5.jpeg',
                            small: 'zoom.png',
                            title: 'Buzakovina beach',
                            width: '1920',
                            height: '856',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Buzakovina/' + fullscreenWidth + '/buzakovina_beach_6.jpeg',
                            small: 'zoom.png',
                            title: 'Buzakovina beach',
                            width: '1920',
                            height: '1730',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Buzakovina/' + fullscreenWidth + '/buzakovina_beach_7.jpeg',
                            small: 'zoom.png',
                            title: 'Buzakovina beach',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Buzakovina/' + fullscreenWidth + '/buzakovina_beach_8.jpeg',
                            small: 'surroundings/beaches/Buzakovina/' + tumbnailWidth + '/buzakovina_beach_8.jpeg',
                            title: 'Buzakovina beach',
                            width: '1920',
                            height: '1730',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/beaches/Buzakovina/' + fullscreenWidth + '/buzakovina_beach_9.jpeg',
                            small: 'zoom.png',
                            title: 'Buzakovina beach',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Buzakovina/' + fullscreenWidth + '/buzakovina_beach_10.jpeg',
                            small: 'surroundings/beaches/Buzakovina/' + tumbnailWidth + '/buzakovina_beach_10.jpeg',
                            title: 'Buzakovina beach',
                            width: '1920',
                            height: '1730',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/beaches/Buzakovina/' + fullscreenWidth + '/buzakovina_beach_11.jpeg',
                            small: 'zoom.png',
                            title: 'Buzakovina beach',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Buzakovina/' + fullscreenWidth + '/buzakovina_beach_12.jpeg',
                            small: 'zoom.png',
                            title: 'Buzakovina beach',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Buzakovina/' + fullscreenWidth + '/buzakovina_beach_13.jpeg',
                            small: 'zoom.png',
                            title: 'Buzakovina beach',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Buzakovina/' + fullscreenWidth + '/buzakovina_beach_14.jpeg',
                            small: 'zoom.png',
                            title: 'Buzakovina beach',
                            width: '1920',
                            height: '658',
                            show: 'false'
                        }
                    ],
                    image: 'surroundings/beaches/Buzakovina/header.jpg'
                },
                {
                    name: $translate.instant('beach_pilatusa'),
                    distance: '2 km',
                    description: $translate.instant('beach_pilatusa_description'),
                    link: null,
                    directions: 'https://www.google.ie/maps/dir/Apartments+Blanka,+Zadarska+ul.+13,+23211,+Pako%C5%A1tane/43.9148826,15.48869/@43.9090312,15.496113,2021m/data=!3m1!1e3!4m9!4m8!1m5!1m1!1s0x1334cc9bbef508e5:0x8830957a5773f290!2m2!1d15.508065!2d43.913116!1m0!3e2?hl=en',
                    previewImages: [
                        {
                            big: 'surroundings/beaches/Pilatusa/' + fullscreenWidth + '/beach_pilatusa_1.jpeg',
                            small: 'surroundings/beaches/Pilatusa/' + tumbnailWidth + '/beach_pilatusa_1.jpeg',
                            title: 'Beach Pilatuša',
                            width: '1920',
                            height: '1440',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/beaches/Pilatusa/' + fullscreenWidth + '/beach_pilatusa_3.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Pilatuša',
                            width: '1920',
                            height: '1080',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Pilatusa/' + fullscreenWidth + '/beach_pilatusa_2.jpeg',
                            small: 'surroundings/beaches/Pilatusa/' + tumbnailWidth + '/beach_pilatusa_2.jpeg',
                            title: 'Beach Pilatuša',
                            width: '1920',
                            height: '1440',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/beaches/Pilatusa/' + fullscreenWidth + '/beach_pilatusa_4.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Pilatuša',
                            width: '1920',
                            height: '603',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Pilatusa/' + fullscreenWidth + '/beach_pilatusa_5.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Pilatuša',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Pilatusa/' + fullscreenWidth + '/beach_pilatusa_6.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Pilatuša',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Pilatusa/' + fullscreenWidth + '/beach_pilatusa_7.jpeg',
                            small: 'surroundings/beaches/Pilatusa/' + tumbnailWidth + '/beach_pilatusa_7.jpeg',
                            title: 'Beach Pilatuša',
                            width: '1920',
                            height: '1440',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/beaches/Pilatusa/' + fullscreenWidth + '/beach_pilatusa_8.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Pilatuša',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Pilatusa/' + fullscreenWidth + '/beach_pilatusa_9.jpeg',
                            small: 'zoom.png',
                            title: 'Beach Pilatuša',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        }
                    ],
                    image: 'surroundings/beaches/Pilatusa/header.jpg'
                },
                {
                    name: $translate.instant('beach_nudistic'),
                    distance: '2 km',
                    description: $translate.instant('beach_nudistic_description'),
                    link: null,
                    directions: 'https://www.google.ie/maps/dir/Apartments+Blanka,+Zadarska+ul.+13,+23211,+Pako%C5%A1tane/43.9147662,15.4867396/@43.9081167,15.4918898,2021m/data=!3m1!1e3!4m9!4m8!1m5!1m1!1s0x1334cc9bbef508e5:0x8830957a5773f290!2m2!1d15.508065!2d43.913116!1m0!3e2?hl=en',
                    previewImages: [
                        {
                            big: 'surroundings/beaches/Nudistic/' + fullscreenWidth + '/nudistic_beach_1.jpeg',
                            small: 'surroundings/beaches/Nudistic/' + tumbnailWidth + '/nudistic_beach_1.jpeg',
                            title: 'Nudistic beach',
                            width: '1920',
                            height: '1440',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/beaches/Nudistic/' + fullscreenWidth + '/nudistic_beach_2.jpeg',
                            small: 'surroundings/beaches/Nudistic/' + tumbnailWidth + '/nudistic_beach_2.jpeg',
                            title: 'Nudistic beach',
                            width: '1920',
                            height: '1440',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/beaches/Nudistic/' + fullscreenWidth + '/nudistic_beach_4.jpeg',
                            small: 'zoom.png',
                            title: 'Nudistic beach',
                            width: '1920',
                            height: '1281',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/beaches/Nudistic/' + fullscreenWidth + '/nudistic_beach_3.jpeg',
                            small: 'surroundings/beaches/Nudistic/' + tumbnailWidth + '/nudistic_beach_3.jpeg',
                            title: 'Nudistic beach',
                            width: '1920',
                            height: '1440',
                            show: 'true'
                        }
                    ],
                    image: 'surroundings/beaches/Nudistic/header.jpg'
                }
            ];

            nature = [
                {
                    name: $translate.instant('vransko_name'),
                    distance: '600 m',
                    description: $translate.instant('vransko_description'),
                    link: "http://www.pp-vransko-jezero.hr/hr/",
                    directions: 'https://www.google.ie/maps/dir/Apartments+Blanka,+Zadarska+ulica+13,+23211,+Pako%C5%A1tane,+Croatia/43.9158098,15.5118796/@43.9208102,15.5159979,15.46z/data=!4m8!4m7!1m5!1m1!1s0x1334cc9bbef508e5:0x8830957a5773f290!2m2!1d15.508065!2d43.913116!1m0?hl=en',
                    previewImages: [
                        {
                            big: 'surroundings/nature/Vransko/' + fullscreenWidth + '/Vransko-jezer-apartments-blanka-1.jpeg',
                            small: 'surroundings/nature/Vransko/' + tumbnailWidth + '/Vransko-jezer-apartments-blanka-1.jpeg',
                            title: 'Vransko jezero',
                            width: '1920',
                            height: '1280',
                            show: 'true'
                        }, {
                            big: 'surroundings/nature/Vransko/' + fullscreenWidth + '/Vransko-jezer-apartments-blanka-2.jpeg',
                            small: 'zoom.png',
                            title: 'Vransko jezero',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        }, {
                            big: 'surroundings/nature/Vransko/' + fullscreenWidth + '/Vransko-jezer-apartments-blanka-4.jpeg',
                            small: 'zoom.png',
                            title: 'Vransko jezero',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        }, {
                            big: 'surroundings/nature/Vransko/' + fullscreenWidth + '/Vransko-jezer-apartments-blanka-7.jpeg',
                            small: 'surroundings/nature/Vransko/' + tumbnailWidth + '/Vransko-jezer-apartments-blanka-7.jpeg',
                            title: 'Vransko jezero',
                            width: '1920',
                            height: '1280',
                            show: 'true'
                        }, {
                            big: 'surroundings/nature/Vransko/' + fullscreenWidth + '/Vransko-jezer-apartments-blanka-8.jpeg',
                            small: 'zoom.png',
                            title: 'Vransko jezero',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        }, {
                            big: 'surroundings/nature/Vransko/' + fullscreenWidth + '/Vransko-jezer-apartments-blanka-9.jpeg',
                            small: 'zoom.png',
                            title: 'Vransko jezero',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        }, {
                            big: 'surroundings/nature/Vransko/' + fullscreenWidth + '/Vransko-jezer-apartments-blanka-10.jpeg',
                            small: 'zoom.png',
                            title: 'Vransko jezero',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        }, {
                            big: 'surroundings/nature/Vransko/' + fullscreenWidth + '/Vransko-jezer-apartments-blanka-13.jpeg',
                            small: 'surroundings/nature/Vransko/' + tumbnailWidth + '/Vransko-jezer-apartments-blanka-13.jpeg',
                            title: 'Vransko jezero',
                            width: '1920',
                            height: '1280',
                            show: 'true'
                        }, {
                            big: 'surroundings/nature/Vransko/' + fullscreenWidth + '/Vransko-jezer-apartments-blanka-14.jpeg',
                            small: 'zoom.png',
                            title: 'Vransko jezero',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        }

                    ],
                    image: 'surroundings/nature/Vransko/header.jpg'
                },
                {
                    name: $translate.instant('kamenjak_name'),
                    distance: '18 km',
                    description: $translate.instant('kamenjak_description'),
                    link: "http://www.pp-vransko-jezero.hr/hr/vidikovac-kamenjak/",
                    directions: 'https://www.google.ie/maps/dir/Apartments+Blanka,+Zadarska+ulica+13,+23211,+Pako%C5%A1tane,+Croatia/43.8948777,15.6104801/@43.9085089,15.5716202,12012m/data=!3m1!1e3!4m9!4m8!1m5!1m1!1s0x1334cc9bbef508e5:0x8830957a5773f290!2m2!1d15.508065!2d43.913116!1m0!3e0?hl=en',
                    previewImages: [
                        {
                            big: 'surroundings/nature/Vidikovac/' + fullscreenWidth + '/vidikovac_1.jpeg',
                            small: 'surroundings/nature/Vidikovac/' + tumbnailWidth + '/vidikovac_1.jpeg',
                            title: 'Vidikovac',
                            width: '1920',
                            height: '1280',
                            show: 'true'
                        }, {
                            big: 'surroundings/nature/Vidikovac/' + fullscreenWidth + '/vidikovac_2.jpeg',
                            small: 'zoom.png',
                            title: 'Vidikovac',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        }, {
                            big: 'surroundings/nature/Vidikovac/' + fullscreenWidth + '/vidikovac_3.jpeg',
                            small: 'zoom.png',
                            title: 'Vidikovac',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        }, {
                            big: 'surroundings/nature/Vidikovac/' + fullscreenWidth + '/vidikovac_4.jpeg',
                            small: 'surroundings/nature/Vidikovac/' + tumbnailWidth + '/vidikovac_4.jpeg',
                            title: 'Vidikovac',
                            width: '1920',
                            height: '1280',
                            show: 'true'
                        }, {
                            big: 'surroundings/nature/Vidikovac/' + fullscreenWidth + '/vidikovac_5.jpeg',
                            small: 'zoom.png',
                            title: 'Vidikovac',
                            width: '1920',
                            height: '2880',
                            show: 'false'
                        }, {
                            big: 'surroundings/nature/Vidikovac/' + fullscreenWidth + '/vidikovac_6.jpeg',
                            small: 'zoom.png',
                            title: 'Vidikovac',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        }, {
                            big: 'surroundings/nature/Vidikovac/' + fullscreenWidth + '/vidikovac_7.jpeg',
                            small: 'surroundings/nature/Vidikovac/' + tumbnailWidth + '/vidikovac_7.jpeg',
                            title: 'Vidikovac',
                            width: '1920',
                            height: '1280',
                            show: 'true'
                        }, {
                            big: 'surroundings/nature/Vidikovac/' + fullscreenWidth + '/vidikovac_8.jpeg',
                            small: 'zoom.png',
                            title: 'Vidikovac',
                            width: '1920',
                            height: '1263',
                            show: 'false'
                        }

                    ],
                    image: 'surroundings/nature/Vidikovac/header.jpg'
                },
                {
                    name: $translate.instant('national_park_kornati'),
                    distance: '45 km',
                    description: $translate.instant('national_park_kornati_description'),
                    link: "http://www.np-kornati.hr/en",
                    directions: 'https://www.google.ie/maps/dir/Apartments+Blanka,+Zadarska+ulica+13,+23211,+Pako%C5%A1tane,+Croatia/Kornati+National+park,+Murter,+Croatia/@43.8314872,15.2980863,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x1334cc9bbef508e5:0x8830957a5773f290!2m2!1d15.508065!2d43.913116!1m5!1m1!1s0x1334b8fb8f9e92cb:0xee81e78605203d73!2m2!1d15.383381!2d43.749553?hl=en',
                    previewImages: [
                        {
                            big: 'surroundings/nature/Kornati/' + fullscreenWidth + '/1.jpeg',
                            small: 'zoom.png',
                            title: 'Kornati',
                            width: '1920',
                            height: '1534',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Kornati/' + fullscreenWidth + '/2.jpeg',
                            small: 'zoom.png',
                            title: 'Kornati',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Kornati/' + fullscreenWidth + '/3.jpeg',
                            small: 'zoom.png',
                            title: 'Kornati',
                            width: '1920',
                            height: '1251',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Kornati/' + fullscreenWidth + '/4.jpeg',
                            small: 'surroundings/nature/Kornati/' + tumbnailWidth + '/4.jpeg',
                            title: 'Kornati',
                            width: '1920',
                            height: '1280',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/nature/Kornati/' + fullscreenWidth + '/5.jpeg',
                            small: 'zoom.png',
                            title: 'Kornati',
                            width: '1920',
                            height: '1038',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Kornati/' + fullscreenWidth + '/6.jpeg',
                            small: 'zoom.png',
                            title: 'Kornati',
                            width: '1920',
                            height: '1937',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Kornati/' + fullscreenWidth + '/7.jpeg',
                            small: 'surroundings/nature/Kornati/' + tumbnailWidth + '/7.jpeg',
                            title: 'Kornati',
                            width: '1920',
                            height: '1274',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/nature/Kornati/' + fullscreenWidth + '/8.jpeg',
                            small: 'zoom.png',
                            title: 'Kornati',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Kornati/' + fullscreenWidth + '/9.jpeg',
                            small: 'zoom.png',
                            title: 'Kornati',
                            width: '1920',
                            height: '1920',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Kornati/' + fullscreenWidth + '/10.jpeg',
                            small: 'surroundings/nature/Kornati/' + tumbnailWidth + '/10.jpeg',
                            title: 'Kornati',
                            width: '1920',
                            height: '1274',
                            show: 'true'
                        }
                    ],
                    image: 'surroundings/nature/Kornati/header.jpg'
                },
                {
                    name: $translate.instant('national_park_krka'),
                    distance: '53 km',
                    description: $translate.instant('national_park_krka_description'),
                    link: "http://www.np-krka.hr/en/",
                    directions: 'https://www.google.ie/maps/dir/Apartments+Blanka,+Zadarska+ulica+13,+23211,+Pako%C5%A1tane,+Croatia/Krka+National+Park,+Op%C4%87ina+%C5%A0ibenik,+Croatia/@43.8777648,15.5912686,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x1334cc9bbef508e5:0x8830957a5773f290!2m2!1d15.508065!2d43.913116!1m5!1m1!1s0x13352dceeb0b369d:0x12e1d4d5d0103938!2m2!1d15.972484!2d43.866602?hl=en',
                    previewImages: [
                        {
                            big: 'surroundings/nature/Krka/' + fullscreenWidth + '/National-park-krka-apartments-blanka-1.jpeg',
                            small: 'zoom.png',
                            title: 'Krka',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Krka/' + fullscreenWidth + '/National-park-krka-apartments-blanka-2.jpeg',
                            small: 'surroundings/nature/Krka/' + tumbnailWidth + '/National-park-krka-apartments-blanka-2.jpeg',
                            title: 'Krka',
                            width: '1920',
                            height: '1284',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/nature/Krka/' + fullscreenWidth + '/National-park-krka-apartments-blanka-3.jpeg',
                            small: 'zoom.png',
                            title: 'Krka',
                            width: '1920',
                            height: '1461',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Krka/' + fullscreenWidth + '/National-park-krka-apartments-blanka-4.jpeg',
                            small: 'zoom.png',
                            title: 'Krka',
                            width: '1920',
                            height: '1082',
                            show: 'false'
                        },
                        //{big:'surroundings/nature/Krka/'+fullscreenWidth+'/National-park-krka-apartments-blanka-5.jpeg', small:'zoom.png', title:'Krka', width:'1920', height:'1437', show:'false'},
                        {
                            big: 'surroundings/nature/Krka/' + fullscreenWidth + '/National-park-krka-apartments-blanka-6.jpeg',
                            small: 'surroundings/nature/Krka/' + tumbnailWidth + '/National-park-krka-apartments-blanka-6.jpeg',
                            title: 'Krka',
                            width: '1920',
                            height: '1277',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/nature/Krka/' + fullscreenWidth + '/National-park-krka-apartments-blanka-7.jpeg',
                            small: 'zoom.png',
                            title: 'Krka',
                            width: '1920',
                            height: '1080',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Krka/' + fullscreenWidth + '/National-park-krka-apartments-blanka-8.jpeg',
                            small: 'zoom.png',
                            title: 'Krka',
                            width: '1920',
                            height: '1285',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Krka/' + fullscreenWidth + '/National-park-krka-apartments-blanka-9.jpeg',
                            small: 'zoom.png',
                            title: 'Krka',
                            width: '1920',
                            height: '1353',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Krka/' + fullscreenWidth + '/National-park-krka-apartments-blanka-10.jpeg',
                            small: 'surroundings/nature/Krka/' + tumbnailWidth + '/National-park-krka-apartments-blanka-10.jpeg',
                            title: 'Krka',
                            width: '1920',
                            height: '1277',
                            show: 'true'
                        }
                    ],
                    image: 'surroundings/nature/Krka/header.jpg'
                },
                {
                    name: $translate.instant('national_park_paklenica'),
                    distance: '63 km',
                    description: $translate.instant('national_park_paklenica_description'),
                    link: "http://www.np-paklenica.hr/en/",
                    directions: 'https://www.google.ie/maps/dir/Apartments+Blanka,+Zadarska+ulica+13,+23211,+Pako%C5%A1tane,+Croatia/Paklenica+National+Park,+Starigrad,+Croatia/@44.1281636,15.353608,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x1334cc9bbef508e5:0x8830957a5773f290!2m2!1d15.508065!2d43.913116!1m5!1m1!1s0x476191109568e00d:0xb2963721bdd928e4!2m2!1d15.483997!2d44.343707?hl=en',
                    previewImages: [
                        {
                            big: 'surroundings/nature/Paklenica/' + fullscreenWidth + '/1.jpeg',
                            small: 'surroundings/nature/Paklenica/' + tumbnailWidth + '/1.jpeg',
                            title: 'Paklenica',
                            width: '1920',
                            height: '1388',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/nature/Paklenica/' + fullscreenWidth + '/2.jpeg',
                            small: 'zoom.png',
                            title: 'Paklenica',
                            width: '1920',
                            height: '1080',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Paklenica/' + fullscreenWidth + '/3.jpeg',
                            small: 'zoom.png',
                            title: 'Paklenica',
                            width: '1920',
                            height: '2560',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Paklenica/' + fullscreenWidth + '/4.jpeg',
                            small: 'surroundings/nature/Paklenica/' + tumbnailWidth + '/4.jpeg',
                            title: 'Paklenica',
                            width: '1920',
                            height: '1440',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/nature/Paklenica/' + fullscreenWidth + '/5.jpeg',
                            small: 'zoom.png',
                            title: 'Paklenica',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Paklenica/' + fullscreenWidth + '/6.jpeg',
                            small: 'zoom.png',
                            title: 'Paklenica',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Paklenica/' + fullscreenWidth + '/7.jpeg',
                            small: 'surroundings/nature/Paklenica/' + tumbnailWidth + '/7.jpeg',
                            title: 'Paklenica',
                            width: '1920',
                            height: '1440',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/nature/Paklenica/' + fullscreenWidth + '/8.jpeg',
                            small: 'zoom.png',
                            title: 'Paklenica',
                            width: '1920',
                            height: '2560',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Paklenica/' + fullscreenWidth + '/9.jpeg',
                            small: 'zoom.png',
                            title: 'Paklenica',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Paklenica/' + fullscreenWidth + '/10.jpeg',
                            small: 'zoom.png',
                            title: 'Paklenica',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        }
                    ],
                    image: 'surroundings/nature/Paklenica/header.jpg'
                },
                {
                    name: $translate.instant('national_park_plitvice'),
                    distance: '170 km',
                    description: $translate.instant('national_park_plitvice_description'),
                    link: "http://www.np-plitvicka-jezera.hr/en/",
                    directions: 'https://www.google.ie/maps/dir/Apartments+Blanka,+Zadarska+ulica+13,+23211,+Pako%C5%A1tane,+Croatia/Plitvice+Lakes+National+Park,+Croatia/@44.388317,14.9996093,9z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x1334cc9bbef508e5:0x8830957a5773f290!2m2!1d15.508065!2d43.913116!1m5!1m1!1s0x47615e6cfed90f3d:0x51a8ff8379a5e70!2m2!1d15.582012!2d44.865397?hl=en',
                    previewImages: [
                        {
                            big: 'surroundings/nature/Plitvicka/' + fullscreenWidth + '/Plitvice-lakes-apartments-blanka-1.jpeg',
                            small: 'surroundings/nature/Plitvicka/' + tumbnailWidth + '/Plitvice-lakes-apartments-blanka-1.jpeg',
                            title: 'Big lake',
                            width: '1920',
                            height: '1440',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/nature/Plitvicka/' + fullscreenWidth + '/Plitvice-lakes-apartments-blanka-2.jpeg',
                            small: 'surroundings/nature/Plitvicka/' + tumbnailWidth + '/Plitvice-lakes-apartments-blanka-2.jpeg',
                            title: 'Big lake',
                            width: '1920',
                            height: '1274',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/nature/Plitvicka/' + fullscreenWidth + '/Plitvice-lakes-apartments-blanka-3.jpeg',
                            small: 'zoom.png',
                            title: 'Big lake',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Plitvicka/' + fullscreenWidth + '/Plitvice-lakes-apartments-blanka-4.jpeg',
                            small: 'zoom.png',
                            title: 'Big lake',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Plitvicka/' + fullscreenWidth + '/Plitvice-lakes-apartments-blanka-5.jpeg',
                            small: 'surroundings/nature/Plitvicka/' + tumbnailWidth + '/Plitvice-lakes-apartments-blanka-5.jpeg',
                            title: 'Big lake',
                            width: '1920',
                            height: '1382',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/nature/Plitvicka/' + fullscreenWidth + '/Plitvice-lakes-apartments-blanka-6.jpeg',
                            small: 'zoom.png',
                            title: 'Big lake',
                            width: '1920',
                            height: '1279',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Plitvicka/' + fullscreenWidth + '/Plitvice-lakes-apartments-blanka-7.jpeg',
                            small: 'zoom.png',
                            title: 'Big lake',
                            width: '1920',
                            height: '1271',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/nature/Plitvicka/' + fullscreenWidth + '/Plitvice-lakes-apartments-blanka-8.jpeg',
                            small: 'zoom.png',
                            title: 'Big lake',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        }

                    ],
                    image: 'surroundings/nature/Plitvicka/header.jpg'
                }
            ];

            cities =[
                {
                    name: 'Pakoštane',
                    distance: '0 km',
                    description: $translate.instant('city_pakostane_description'),
                    link: "http://www.pakostane.hr/index.php?lang=en",
                    directions: 'https://www.google.ie/maps/dir/Apartments+Blanka,+Zadarska+ulica+13,+23211,+Pako%C5%A1tane/43.9063798,15.5081616/@43.909749,15.5039574,16z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x1334cc9bbef508e5:0x8830957a5773f290!2m2!1d15.508065!2d43.913116!1m0?hl=en',
                    previewImages: [
                        {
                            big: 'surroundings/cities/Pakostane/' + fullscreenWidth + '/1.jpeg',
                            small: 'zoom.png',
                            title: 'Pakostane',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Pakostane/' + fullscreenWidth + '/2.jpeg',
                            small: 'zoom.png',
                            title: 'Pakostane',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Pakostane/' + fullscreenWidth + '/3.jpeg',
                            small: 'surroundings/cities/Pakostane/' + tumbnailWidth + '/3.jpeg',
                            title: 'Pakostane',
                            width: '1920',
                            height: '1211',
                            show: 'true'
                        },
                        //{big:'surroundings/cities/Pakostane/'+fullscreenWidth+'/4.jpeg', small:'zoom.png', title:'Pakostane', width:'1920', height:'2880', show:'false'},
                        {
                            big: 'surroundings/cities/Pakostane/' + fullscreenWidth + '/5.jpeg',
                            small: 'zoom.png',
                            title: 'Pakostane',
                            width: '1920',
                            height: '1277',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Pakostane/' + fullscreenWidth + '/6.jpeg',
                            small: 'zoom.png',
                            title: 'Pakostane',
                            width: '1920',
                            height: '2836',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Pakostane/' + fullscreenWidth + '/7.jpeg',
                            small: 'surroundings/cities/Pakostane/' + tumbnailWidth + '/7.jpeg',
                            title: 'Pakostane',
                            width: '1920',
                            height: '1277',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/cities/Pakostane/' + fullscreenWidth + '/8.jpeg',
                            small: 'zoom.png',
                            title: 'Pakostane',
                            width: '1920',
                            height: '1277',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Pakostane/' + fullscreenWidth + '/9.jpeg',
                            small: 'zoom.png',
                            title: 'Pakostane',
                            width: '1920',
                            height: '2559',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Pakostane/' + fullscreenWidth + '/10.jpeg',
                            small: 'surroundings/cities/Pakostane/' + tumbnailWidth + '/10.jpeg',
                            title: 'Pakostane',
                            width: '1920',
                            height: '1232',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/cities/Pakostane/' + fullscreenWidth + '/11.jpeg',
                            small: 'zoom.png',
                            title: 'Pakostane',
                            width: '1920',
                            height: '2880',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Pakostane/' + fullscreenWidth + '/12.jpeg',
                            small: 'zoom.png',
                            title: 'Pakostane',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Pakostane/' + fullscreenWidth + '/13.jpeg',
                            small: 'zoom.png',
                            title: 'Pakostane',
                            width: '1920',
                            height: '2880',
                            show: 'false'
                        }
                    ],
                    image: 'surroundings/cities/Pakostane/header.jpg'
                },
                {
                    name: "Biograd na moru",
                    distance: '5 km',
                    description: $translate.instant('city_biograd_description'),
                    link: "http://www.biograd-na-moru.com/",
                    directions: 'https://www.google.ie/maps/dir/Apartments+Blanka,+Zadarska+ulica+13,+23211,+Pako%C5%A1tane,+Croatia/Biograd+na+Moru,+Croatia/@43.9288192,15.4573865,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x1334cc9bbef508e5:0x8830957a5773f290!2m2!1d15.508065!2d43.913116!1m5!1m1!1s0x1334cad63ad93431:0x7a890b4acf46390a!2m2!1d15.4435586!2d43.9373047?hl=en',
                    previewImages: [
                        {
                            big: 'surroundings/cities/Biograd/' + fullscreenWidth + '/1.jpeg',
                            small: 'zoom.png',
                            width: '1920',
                            height: '1080',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Biograd/' + fullscreenWidth + '/2.jpeg',
                            small: 'surroundings/cities/Biograd/' + tumbnailWidth + '/2.jpeg',
                            title: 'Biograd',
                            width: '1920',
                            height: '1285',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/cities/Biograd/' + fullscreenWidth + '/3.jpeg',
                            small: 'zoom.png',
                            title: 'Biograd',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Biograd/' + fullscreenWidth + '/4.jpeg',
                            small: 'surroundings/cities/Biograd/' + tumbnailWidth + '/4.jpeg',
                            title: 'Biograd',
                            width: '1920',
                            height: '1440',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/cities/Biograd/' + fullscreenWidth + '/5.jpeg',
                            small: 'surroundings/cities/Biograd/' + tumbnailWidth + '/5.jpeg',
                            title: 'Biograd',
                            width: '1920',
                            height: '1280',
                            show: 'true'
                        }
                    ],
                    image: 'surroundings/cities/Biograd/header.jpg'
                },
                {
                    name: 'Zadar',
                    distance: '34 km',
                    description: $translate.instant('city_zadar_description'),
                    link: "http://www.zadar.hr/",
                    directions: 'https://www.google.ie/maps/dir/Apartments+Blanka,+Zadarska+ulica+13,+23211,+Pako%C5%A1tane,+Croatia/Zadar,+Croatia/@44.0216429,15.2959311,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x1334cc9bbef508e5:0x8830957a5773f290!2m2!1d15.508065!2d43.913116!1m5!1m1!1s0x4761fa62d2c0b88f:0x12323e1c13f40784!2m2!1d15.2313648!2d44.119371?hl=en',
                    previewImages: [
                        {
                            big: 'surroundings/cities/Zadar/' + fullscreenWidth + '/Zadar-apartments-blanka-1.jpeg',
                            small: 'surroundings/cities/Zadar/' + tumbnailWidth + '/Zadar-apartments-blanka-1.jpeg',
                            title: 'Zadar',
                            width: '1920',
                            height: '1280',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/cities/Zadar/' + fullscreenWidth + '/Zadar-apartments-blanka-2.jpeg',
                            small: 'zoom.png',
                            title: 'Zadar',
                            width: '1920',
                            height: '1275',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Zadar/' + fullscreenWidth + '/Zadar-apartments-blanka-3.jpeg',
                            small: 'zoom.png',
                            title: 'Zadar',
                            width: '1920',
                            height: '779',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Zadar/' + fullscreenWidth + '/Zadar-apartments-blanka-4.jpeg',
                            small: 'zoom.png',
                            title: 'Zadar',
                            width: '1920',
                            height: '1409',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Zadar/' + fullscreenWidth + '/Zadar-apartments-blanka-5.jpeg',
                            small: 'zoom.png',
                            title: 'Zadar',
                            width: '1920',
                            height: '1440',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Zadar/' + fullscreenWidth + '/Zadar-apartments-blanka-6.jpeg',
                            small: 'zoom.png',
                            title: 'Zadar',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Zadar/' + fullscreenWidth + '/Zadar-apartments-blanka-8.jpeg',
                            small: 'zoom.png',
                            title: 'Zadar',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Zadar/' + fullscreenWidth + '/Zadar-apartments-blanka-9.jpeg',
                            small: 'surroundings/cities/Zadar/' + tumbnailWidth + '/Zadar-apartments-blanka-9.jpeg',
                            title: 'Zadar',
                            width: '1920',
                            height: '1274',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/cities/Zadar/' + fullscreenWidth + '/Zadar-apartments-blanka-10.jpeg',
                            small: 'surroundings/cities/Zadar/' + tumbnailWidth + '/Zadar-apartments-blanka-10.jpeg',
                            title: 'Zadar',
                            width: '1920',
                            height: '1280',
                            show: 'true'
                        }
                    ],
                    image: 'surroundings/cities/Zadar/header.jpg'
                },
                {
                    name: 'Šibenik',
                    distance: '42 km',
                    description: $translate.instant('city_sibenik_description'),
                    link: "http://www.sibenik-croatia.info/",
                    directions: 'https://www.google.ie/maps/dir/Apartments+Blanka,+Zadarska+ulica+13,+23211,+Pako%C5%A1tane,+Croatia/%C5%A0ibenik,+Croatia/@43.8679775,15.5765803,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x1334cc9bbef508e5:0x8830957a5773f290!2m2!1d15.508065!2d43.913116!1m5!1m1!1s0x13352615d088d09d:0x400ad50862bcc20!2m2!1d15.8952045!2d43.7350196?hl=en',
                    previewImages: [
                        {
                            big: 'surroundings/cities/Sibenik/' + fullscreenWidth + '/Sibenik-apartments-blanka-1.jpeg',
                            small: 'surroundings/cities/Sibenik/' + tumbnailWidth + '/Sibenik-apartments-blanka-1.jpeg',
                            title: 'Sibenik',
                            width: '1920',
                            height: '1440',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/cities/Sibenik/' + fullscreenWidth + '/Sibenik-apartments-blanka-2.jpeg',
                            small: 'surroundings/cities/Sibenik/' + tumbnailWidth + '/Sibenik-apartments-blanka-2.jpeg',
                            title: 'Sibenik',
                            width: '1920',
                            height: '1285',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/cities/Sibenik/' + fullscreenWidth + '/Sibenik-apartments-blanka-3.jpeg',
                            small: 'zoom.png',
                            title: 'Sibenik',
                            width: '1920',
                            height: '1278',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Sibenik/' + fullscreenWidth + '/Sibenik-apartments-blanka-4.jpeg',
                            small: 'zoom.png',
                            title: 'Sibenik',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Sibenik/' + fullscreenWidth + '/Sibenik-apartments-blanka-5.jpeg',
                            small: 'surroundings/cities/Sibenik/' + tumbnailWidth + '/Sibenik-apartments-blanka-5.jpeg',
                            title: 'Sibenik',
                            width: '1920',
                            height: '1444',
                            show: 'true'
                        },
                        {
                            big: 'surroundings/cities/Sibenik/' + fullscreenWidth + '/Sibenik-apartments-blanka-6.jpeg',
                            small: 'zoom.png',
                            title: 'Sibenik',
                            width: '1920',
                            height: '1289',
                            show: 'false'
                        },
                        {
                            big: 'surroundings/cities/Sibenik/' + fullscreenWidth + '/Sibenik-apartments-blanka-7.jpeg',
                            small: 'zoom.png',
                            title: 'Sibenik',
                            width: '1920',
                            height: '1280',
                            show: 'false'
                        }
                    ],
                    image: 'surroundings/cities/Sibenik/header.jpg'
                }];
            $rootScope.$broadcast('surroundings_translated', "");
        }

        translate();

        $rootScope.$on('$translateChangeSuccess', function (event, arg) {
            translate();
        });

        return {
            getBeaches: function () {
                return showBeaches();
            },

            getCities: function () {
                return showCities();
            }
            ,
            getNature: function () {
                return showNature();
            }
        };
    }
]);


boatModule.controller('BoatController', ['$scope', 'LanguageFactory', '$rootScope', 'BoatFactory',
    function ($scope, LanguageFactory, $rootScope, BoatFactory) {

        var currentLanguage = LanguageFactory.getCurrentLanguage().class;

        $rootScope.$on('$translateChangeSuccess', function (event, arg) {
            currentLanguage = LanguageFactory.getCurrentLanguage().class;
        });

        $scope.boat = BoatFactory.getBoat()
    }
]);
boatModule.factory('BoatFactory', ['PictureSizeFactory',
    function (PictureSizeFactory) {
        var fullscreenWidth = PictureSizeFactory.getFullscreenWidth();
        var tumbnailWidth = PictureSizeFactory.getTumbnailWidth();

        function showBoat() {
            return {
                previewImages: [
                    {
                        big: 'boat/' + fullscreenWidth + '/brod1.jpeg',
                        small: 'boat/' + tumbnailWidth + '/brod1.jpeg',
                        title: 'Boat',
                        width: '1920',
                        height: '1152',
                        show: 'true'
                    },                    {
                        big: 'boat/' + fullscreenWidth + '/brod2.jpeg',
                        small: 'boat/' + tumbnailWidth + '/brod2.jpeg',
                        title: 'Boat',
                        width: '1920',
                        height: '1152',
                        show: 'false'
                    },                    {
                        big: 'boat/' + fullscreenWidth + '/brod3.jpeg',
                        small: 'boat/' + tumbnailWidth + '/brod3.jpeg',
                        title: 'Boat',
                        width: '1920',
                        height: '1152',
                        show: 'true'
                    },                    {
                        big: 'boat/' + fullscreenWidth + '/brod4.jpeg',
                        small: 'boat/' + tumbnailWidth + '/brod4.jpeg',
                        title: 'Boat',
                        width: '1920',
                        height: '1152',
                        show: 'true'
                    },                    {
                        big: 'boat/' + fullscreenWidth + '/brod5.jpeg',
                        small: 'boat/' + tumbnailWidth + '/brod5.jpeg',
                        title: 'Boat',
                        width: '1920',
                        height: '1434',
                        show: 'false'
                    },                    {
                        big: 'boat/' + fullscreenWidth + '/brod6.jpeg',
                        small: 'boat/' + tumbnailWidth + '/brod6.jpeg',
                        title: 'Boat',
                        width: '1920',
                        height: '1434',
                        show: 'false'
                    },                    {
                        big: 'boat/' + fullscreenWidth + '/brod7.jpeg',
                        small: 'boat/' + tumbnailWidth + '/brod7.jpeg',
                        title: 'Boat',
                        width: '1920',
                        height: '1434',
                        show: 'false'
                    }
                ]
            }

        }

        return {
            getBoat: function () {
                return showBoat();
            }
        };
    }
]);


bookingsModule.controller('BookingsController', ['$scope', 'BookingsFactory', '$q',
    function ($scope, BookingsFactory, $q) {


        $scope.types = [
            {
                id: 0,
                name: "Unapproved enquiries",
                call: BookingsFactory.getAllUnapprovedEnquiries

            },
            {
                id: 1,
                name: "Approved enquiries",
                call: BookingsFactory.getAllApprovedEnquiries
            },
            {
                id: 2,
                name: "Bookings",
                call: BookingsFactory.getAllBookings
            }

        ];

        $scope.type = $scope.types[0];


        $scope.year = 2017;

        $scope.fetchBookings = function(fetchFunction){
            var deferred = $q.defer();
            var promise = deferred.promise;
            deferred.resolve(fetchFunction($scope.year));

            promise.then(function (data) {
                    $scope.bookings = cleanData(data.enquiries);
                },
                function () {
                    $scope.bookings = [];
                });
        };

        $scope.selectType = function(type){
            $scope.type = type;
            $scope.fetchBookings(type.call);
        };

        $scope.approve = function(enquiryId){
            BookingsFactory.approveEnquiry(enquiryId);
        };

        function cleanData(bookings){

            for(var i = 0; i<bookings.length;i++){
                var b = bookings[i];

                b.dateFrom = new Date(b.enquiry.dateFrom).toDateString();
                b.dateTo = new Date(b.enquiry.dateTo).toDateString();
                b.enquiryDttm = new Date(b.enquiryDttm).toLocaleString();

                if(b.approvalDttm)
                    b.approvalDttm = new Date(b.approvalDttm).toLocaleString();

                if (b.depositWhen)
                    b.depositWhen = new Date(b.depositWhen).toLocaleString();

                if (b.enquiry.unitId === 1) {
                    b.unit = "Kruno"
                }
                else if (b.enquiry.unitId === 2) {
                    b.unit = "Blanka"
                }
                else if (b.enquiry.unitId === 3) {
                    b.unit = "Djuro"
                }

            }

            return bookings;
        }

        $scope.fetchBookings($scope.type.call);

    }
]);
bookingsModule.factory('BookingsFactory', ['DataService',
    function (DataService) {

        function createGetAllBookings(year) {
            var filters = {};
            filters["year"] = year;
            return DataService.executeGetRequestWithFilters('http://localhost:9001/v1/enquiry/booked', filters)
        }

        function createGetAllUnapprovedEnquiries(year) {
            var filters = {};
            filters["year"] = year;
            return DataService.executeGetRequestWithFilters('http://localhost:9001/v1/enquiry/unapproved', filters)
        }

        function createGetAllApprovedEnquiries(year) {
            var filters = {};
            filters["year"] = year;
            return DataService.executeGetRequestWithFilters('http://localhost:9001/v1/enquiry/approved', filters)
        }

        function createPutApproveEnquiry(enquiryId) {
            return DataService.executePutRequestWithoutPayload('http://localhost:9001/v1/booking/' + enquiryId + '/authorize')
        }

        return {
            getAllBookings: function (year) {
                return createGetAllBookings(year);
            },
            getAllUnapprovedEnquiries: function (year) {
                return createGetAllUnapprovedEnquiries(year);
            },
            getAllApprovedEnquiries: function (year) {
                return createGetAllApprovedEnquiries(year);
            },
            approveEnquiry: function (enquiryId) {
                return createPutApproveEnquiry(enquiryId);
            }
        };
    }]);
