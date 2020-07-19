var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
	
    onDeviceReady: function() {
		alert('onDeviceReady');
		
		window.DatecsPrinter.listBluetoothDevices(
		  function (devices) {
			window.DatecsPrinter.connect(devices[0].address, 
			  function() {
				printSomeTestText();
			  },
			  function() {
				alert(JSON.stringify(error));
			  }
			);
		  },
		  function (error) {
			alert(JSON.stringify(error));
		  }
		);
		 
		function printSomeTestText() {
		  window.DatecsPrinter.printText("Print Test!", 'ISO-8859-1', 
			function() {
			  alert('Print complete');
			}
		  );
		}
    }
};

app.initialize();