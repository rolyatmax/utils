var utils = {
    uniqueId: function uniqueId() {
        var r = (Math.random() * 100000000) | 0;
        return Date.now().toString(32) + r.toString(32);
    },

    getCookie: function getCookie(name) {
        var cookies = document.cookie.split(';');
        var nameEQ = name + '=';
        for (var i = 0; i < cookies.length; i++) {
            var c = cookies[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    },

    encodeQueryParams: function encodeQueryParams(paramsObj) {
        var eUC = encodeURIComponent;
        return Object.keys(paramsObj).map(function(param) {
            return eUC(param) + '=' + eUC(paramsObj[param]);
        }).join('&');
    },

    extend: function extend(target, source, overwrite) {
        for (var key in source)
            if (overwrite || !(key in target)) {
                target[key] = source[key];
            }
        return target;
    },

    onReady: function onReady(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    },

    getJSON: function getJSON(url) {
        return new Promise(function(resolve, reject) {
            var request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.onload = function() {
                if (this.status >= 200 && this.status < 400) {
                    try {
                        resolve(JSON.parse(this.response));
                    } catch (err) {
                        reject(this.response);
                    }
                } else {
                    reject(this.response);
                }
            };
            request.onerror = function() {
                reject(this.response);
            };
            request.send();
        });
    },

    startAnimation: function startAnimation(renderFn, duration) {
        var startTime;
        return new Promise(function(resolve) {
            function _render(t) {
                startTime = startTime || t;
                var step = (t - startTime) / duration;
                renderFn(step);
                if (step < 1) {
                    requestAnimationFrame(_render);
                } else {
                    resolve();
                }
            }
            requestAnimationFrame(_render);
        });
    },

    easeOut: function easeOut(step, start, change) {
        return change * Math.pow(step, 2) + start;
    },

    easeIn: function easeIn(step, start, change) {
        return change * (1 - Math.pow(1 - step, 3)) + start;
    },

    shuffle: function shuffle(list) {
        list = list.slice();
        var shuffled = [];
        while (list.length) {
            var i = Math.random() * list.length | 0;
            shuffled.push(list.splice(i, 1)[0]);
        }
        return shuffled;
    },

    random: function random(low, high) {
        if (Array.isArray(low)) {
            return low[Math.random() * low.length | 0];
        }
        if (high === undefined) {
            high = low;
            low = 0;
        }
        return Math.random() * (high - low) + low | 0;
    },

    // returns an array with ints between start and end (inclusive of start,
    // not inclusive of end). also accepts a single int, treating it as the end
    // and using 0 as start
    range: function range(start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        var numbers = [];
        while (start < end) {
            numbers.push(start++);
        }
        return numbers;
    }
};

if (module !== undefined) {
    module.exports = utils;
}
