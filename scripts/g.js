// https://github.com/hmongouachon/mgGlitch

var state = true; //glitch on/off
var duration = 0.30*1000; //glitchy behaviour duration, milliseconds. Min 10
var interval = 30*1000 + duration; //time between glitches, ms

setInterval("error()", interval);

//glitching toggle, fancy non-obvious name
function error() {  
        state = false;
        g();
        setTimeout( () => { state = true; g(); }, duration);
}

function g () {
	$( ".glitch-img" ).mgGlitch({
        // set 'true' to stop the plugin
	destroy : state,
        // set 'false' to stop glitching
        glitch: true,
        // set 'false' to stop scaling
        scale: true,
        // set 'false' to stop glitch blending
        blend : true,
        // select blend mode type
        blendModeType : 'hue',
        // set min time for glitch 1 elem, default 100
        glitch1TimeMin : 100,
        // set max time for glitch 1 elem, default 300
        glitch1TimeMax : 300,
        // set min time for glitch 2 elem, default 400
        glitch2TimeMin : 400,
        // set max time for glitch 2 elem, default 600
        glitch2TimeMax : 600,
        });
}
