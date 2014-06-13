require.config({
	paths : {
		'jquery' : '../vendor/jquery/dist/jquery.min',
		'keycodes' : 'keys'
	}
});

require(['jquery','keycodes'],function($,k){

	var $dump = $("<div>").appendTo("body");
	var $input = $("<input placeholder='click here' />")
								.appendTo("body")
								.focus();
	var keys = [];
	var curKeyTest = 0;
	var curKey;
	var curCode;

	for(var i in k.keys) {
		keys.push(i);
	}

	$input.on("keyup",testKey);

	function ask() {
		curKey = keys[curKeyTest];
		console.log(keys,curKeyTest,curKey)
		curCode = k.keys[curKey];
		$dump.append("Press <b>" + curKey + "</b>: ");
	}

	function testKey(e) {

		// the delete key back binding will ruin everything
		e.preventDefault();

		if (e.keyCode == curCode) {

			$dump.append("<span style='color:green'>OK!</span><br/>");
			curKeyTest++;

			if (curKeyTest < keys.length) {
				setTimeout(ask, 50);
			}

		} else {

			$dump.append("<span style='color:red'>NO!</span> (" + k.getName(e.keyCode) + " / " + e.keyCode + ") ");

		}

	}

	ask();

});
