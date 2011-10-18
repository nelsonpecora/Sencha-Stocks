Ext.regApplication({
	name: 'App',
	icon: 'res/images/icon.png',
	phoneStartupScreen: 'phone_startup_small.png',
	glossOnIcon: false,
	//defaultUrl: 'Home/index',
    launch: function() {
    	this.viewport = new App.views.Viewport();
    	Ext.dispatch({
    		controller: 'Home',
    		action: 'index'
    	});
    }
});