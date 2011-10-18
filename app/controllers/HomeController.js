Ext.regController('Home', {
	
	//index action
	index: function(options) {
		if ( !this.indexView) {
			this.indexView = this.render({
				xtype: 'Index'
			});
		}
		
		//put show/hide stuff here
		
		if (Ext.orientation == "landscape") {
			Ext.dispatch({
				controller: 'Home',
				action: 'landscape',
				historyUrl: 'Home/landscape',
			});
		}
				
		this.application.viewport.setActiveItem(this.indexView, options.animation);
	},
	
	//stocklist action
	stockList: function(options) {
		if ( !this.stockListView) {
			this.stockListView = this.render({
				xtype: 'StockList'
			});
		}
		
		//put show/hide stuff here
		
		this.application.viewport.setActiveItem(this.stockListView, options.animation);
	},
	
	//search action
	search: function(options) {
		if ( !this.searchView) {
			this.searchView = this.render({
				xtype: 'Search'
			});
		}
		
		//put show/hide stuff here
		
		this.application.viewport.setActiveItem(this.searchView, options.animation);
	},
	
	//landscape action (is this a separate view? do this last)
	landscape: function(options) {
		if ( !this.landscapeView) {
			this.landscapeView = this.render({
				xtype: 'Landscape'
			});
		}
		
		//put show/hide stuff here
		
		if (Ext.orientation == "portrait") {
			Ext.dispatch({
				controller: 'Home',
				action: 'index',
				historyUrl: 'Home/index',
			});
		}
		
		this.application.viewport.setActiveItem(this.landscapeView, options.animation);
	}
	
});

App.controllers.Home = Ext.ControllerManager.get('Home');