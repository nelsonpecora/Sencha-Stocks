Ext.regApplication({
	name: 'App',
	icon: 'res/images/icon.png',
	phoneStartupScreen: 'res/images/loading_iphone_small.png',
	defaultUrl: 'Home/index',
    launch: function() {
    	this.viewport = new App.views.Viewport();
    	
    	this.viewport.query('#searchBtn')[0].setHandler(function(){
    	        Ext.ControllerManager.get('Search').index();
    	    });
    }
});