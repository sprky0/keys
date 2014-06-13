# Keycodes

AMD module to provide provides an object with commonly used keycodes.

## Usage

Map path for require.js, load as normal:

```javascript
require.config({
	paths : {
		'keycodes' : 'vendor/keys/dist/index'
	}
});

require('keycodes',function($,k){
	console.log(k.keys);
});
```

### method getCode(string Name)

Returns the keyCode of the supplied string Name.

### method getName(integer keyCode)

Returns the first matched name of the supplied integer keyCode.  This can be problematic between say 'command' and the 'windows key'.

### object keys

Hey i'm no mind reader, but probably you'll want to do something like the following, with a little jQuery and a little bindy thing:

```javascript
require('jquery','keycodes',function($,k){

	var keys = k.keys;

	$(document).on("keyup",function(e){

		switch(e.keyCode) {

			case keys.ENTER:
				console.log("ok!");
				break;

			case keys.ESCAPE:
				console.log("cancel that thing!");
				break;

			case keys.A:
				console.log("you hit 'A'!");
				break;

		}

	});

});
```

## Keyboard Layouts

:(

## License

The MIT License (MIT)

Copyright (c) <year> <copyright holders>

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
