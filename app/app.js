Ext.regApplication({
	name: 'App',
	icon: 'res/images/icon.png',
	phoneStartupScreen: 'phone_startup_small.png',
	glossOnIcon: false,
	defaultUrl: 'Home/index',
    launch: function() {
    	/*if (Ext.is.iOS && Ext.is.Phone) {
    	    Ext.Viewport.init = function(fn, scope) {
    	        var me = this,
    	            stretchSize = Math.max(window.innerHeight, window.innerWidth) * 2,
    	            body = Ext.getBody();
    	
    	        me.updateOrientation();
    	
    	        this.initialHeight = window.innerHeight;
    	        this.initialOrientation = this.orientation;
    	
    	        body.setHeight(stretchSize);
    	
    	        Ext.defer(function() {
    	            me.scrollToTop();
    	            if (fn) {
    	                fn.apply(scope || window);
    	            }
    	            me.updateBodySize();
    	        }, 50);
    	    };
    	}
    	this.html = "<p>Hello World!</p>";*/
    	
    	//the code above supposedly cuts down the loading time to ~50ms. See this page:
    	// http://stackoverflow.com/questions/3877049/iphone-web-app-splash-screen-delay
    	
    	this.viewport = new App.views.Viewport();
    	
    	this.viewport.query('#searchBtn')[0].setHandler(function(){
    	        Ext.ControllerManager.get('Search').index();
    	    });
    }
});