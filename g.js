// Glitch effects thanks to https://github.com/hmongouachon/mgGlitch

$( function() {
		$( ".glitch-img" ).mgGlitch({
          // set 'true' to stop the plugin
				  destroy : false,
          // set 'false' to stop glitching
          glitch: true,
          // set 'false' to stop scaling
          scale: true,
          // set 'false' to stop glitch blending
          blend : true,
          // select blend mode type
          blendModeType : 'hue',
          // set min time for glitch 1 elem
          glitch1TimeMin : 10,
          // set max time for glitch 1 elem
          glitch1TimeMax : 40,
          // set min time for glitch 2 elem
          glitch2TimeMin : 10,
          // set max time for glitch 2 elem
          glitch2TimeMax : 10,
		});
});


// Timer pen by Sergei Varzin at https://codepen.io/varzin/pen/rFfhH
function updateTimer() {
	// SET TARGET DATE
  future  = Date.parse("June 11, 2020 11:30:00");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  apu = document.getElementById("timer");
	apu
    .innerHTML =
      '<div>' + d + '<span> days</span></div>' +
      '<div>' + h + '<span> hours</span></div>' +
      '<div>' + m + '<span> minutes</span></div>' +
      '<div>' + s + '<span> seconds</span></div>' ;
}
setInterval('updateTimer()', 1000 );
