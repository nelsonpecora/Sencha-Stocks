Ext.regController('Home', {
 
    // index action
    index: function(options) {
        if ( ! this.indexView)
            {
                this.indexView = this.render({
                    xtype: 'HomeIndex',
                });
            }
         	
         	var backBtn = this.application.viewport.query('#backBtn')[0];
         	backBtn.hide();
         	
            this.application.viewport.setActiveItem(this.indexView, options.animation);
    },
    stockList: function() {
        if ( ! this.stockListView)
        {
            this.stockListView = this.render({
                xtype: 'HomeStockList',
            });
        }
     	
     	var backBtn = this.application.viewport.query('#backBtn')[0];
     	backBtn.show();
     	 
     	backBtn.setHandler(function(){
     	    Ext.dispatch({
     	            controller: 'Home',
     	            action: 'index',
     	            historyUrl: 'Home/index',
     	            animation: {
     	                type: 'slide',
     	                reverse: true,
     	            },
     	    });
     	});
     	
        this.application.viewport.setActiveItem(this.stockListView);
    },
});