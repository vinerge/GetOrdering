var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
	
    onDeviceReady: function() {
		alert('onDeviceReady');
		
		FCMPluginNG.onTokenRefresh(function(token){
			alert( token );
		});
		
		FCMPluginNG.getToken(function(token){
			alert(token);
		});
		
		//FCMPluginNG.subscribeToTopic('NewOrder');
		
		FCMPluginNG.onNotification(function(data){
			if(data.wasTapped){
			  //Notification was received on device tray and tapped by the user.
			  alert( JSON.stringify(data) );
			}else{
			  //Notification was received in foreground. Maybe the user needs to be notified.
			  alert( JSON.stringify(data) );
			}
		});
    }
};

app.initialize();