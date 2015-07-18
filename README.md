# utils
A collection of helper functions I like to use.


### uniqueId()
returns a string, by concatenating a base-32-encoded timestamp with a
base-32-encoded random integer between 0 and 100,000,000.

### getCookie(name)
takes a string and returns the body of the cookie as a string or null if the
cookie is not found

### encodeQueryParams(obj)
takes a dictionary-like object of params:values and serializes them as query
params.

```
encodeQueryParams({a:1, b:2}); // 'a=1&b=2'
```

### extend(target, source, overwrite)
copies key:value pairs from source to target if they don't already exist on
target, or, if `overwrite` is `true`, copies over all key:value pairs

### onReady(fn)
takes a function which fires when `DOMContentLoaded` has fired, or
immediately if the DOM has already loaded

### getJSON(url)
makes an AJAX GET request with the given `url` and returns a promise which
is resolved with the parsed response or rejected if the request fails or if
`JSON.parse` fails.

### startAnimation(fn, duration)
takes a function to be called with every animation frame and a duration.
the function receives a `step` value which is a float between 0 and 1.0
representing the elapsed time of the animation. returns a promise which is
resolved once the animation has completed.

### easeOut(step, start, change), easeIn(step, start, change)
quadratic easing functions which take a `step` value (float between 0 and 1)
and `start` and `change` values (which should be numbers). returns a value
between `start` and `start + change`.

### shuffle(list)
takes an array of elements and returns a new array containing the randomly-
ordered elements

### random(low, high), random(high), random(list)
accepts a range of ints from `low` (inclusive) to `high` (exclusive), or
simply a `high` positive int (`low` is set to `0`), or an array, from which
to pluck a single random element.
