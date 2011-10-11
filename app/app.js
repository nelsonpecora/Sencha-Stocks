Ext.regApplication({
	name: 'App',
	icon: 'icon.png',
	defaultUrl: 'Home/index',
    launch: function() {
    	this.viewport = new App.views.Viewport();
        /*new Ext.Panel({
            fullscreen: true,
            dockedItems: [{xtype:'toolbar', title:'Web Stocks'}],
            layout: 'fit',
            styleHtmlContent: true,
            html: ''
        });*/
    }
});