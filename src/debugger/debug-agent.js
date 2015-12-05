(function() {
'use strict';

var eventsToIgnore = [
   "click", "mousemove", "mouseup", "mousedown", "mouseclick", "keydown",
   "keypress", "keyup", "touchstart", "touchend", "touchcancel", "touchleave",
   "touchmove", "pointermove", "pointerdown", "pointerup", "pointerover",
   "pointerout", "pointerenter", "pointerleave", "pointercancel"
];

// CODE TO SET UP A MODULE FOR DEBUGGING

Elm.fullscreenDebug = function(moduleName, fileName) {

	var debuggerWindow =
		window.open('/_reactor/debug-interface.html', 'Debugger', 'width=500;height=800');

	var agentUiContainer = document.createElement('div');
	document.body.appendChild(agentUiContainer);
	var agentUi = Elm.embed(Elm.AgentMain, agentUiContainer, {
		importSessionErrors: [],
		swapErrors: []
	});

	window.MODULE_INFO = {
		moduleName: moduleName,
		fileName: fileName,
		agentUi: agentUi
	}

	// ignore events on event blocker
	// var eventBlocker = document.getElementById('elm-reactor-event-blocker');
	// for (var eventName of eventsToIgnore)
	// {
	// 	eventBlocker.addEventListener(eventName, ignore, true);
	// }

};

})();
