var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
	
    onDeviceReady: function() {
		alert('onDeviceReady');
		var channel  = {
			id: "NewOrder",
			//sound: "NewOrder_Ringtone",
			vibration: [500, 200, 500],
			light: true,
			lightColor: parseInt("FF0000FF", 16).toString(),
			importance: 4,
			badge: true,
			visibility: 1
		};
		alert(FirebasePlugin);
		FirebasePlugin.createChannel(channel,
		function(){
			alert('Channel created: ' + channel.id);
		},
		function(error){
		   alert('Create channel error: ' + error);
		});
		
		FirebasePlugin.onMessageReceived(function(message) {
			console.log("Message type: " + message);
			if(message.messageType === "notification"){
				console.log("Notification message received");
				if(message.tap){
					console.log("Tapped in " + message.tap);
				}
			}
			
		}, function(error) {
			console.error(error);
		});
		
    }
};

app.initialize();