App.views.Search = Ext.extend(Ext.Panel, {
	scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: #d8e2ef',
	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'top',
			items: [
				{
					xtype: 'searchfield',
					flex: 1
				},
				{
					itemId: 'cancelBtn',
					text: 'Cancel',
					ui: 'normal',
					handler: function() {
						Ext.dispatch({
							controller: 'Home',
							action: 'stockList',
							historyUrl: 'Home/stocklist',
							animation: {
								type: 'slide',
								duration: 400,
								direction: 'down',
								reveal: true
							}
						});
					}
				}
			]
		}
	],
	items: [{
		xtype: 'list',
		id : 'stockSearchList',
	    store: App.stores.watchList,
	    itemSelector: 'div.stockListItem',
	    tpl: '<div class="stockListItem"><strong>{symbol}</strong><br /><span style="font-size:80%">{name}</span></div>',
	    itemTpl: '<div class="stockListItem"><strong>{symbol}</strong><br /><span style="font-size:80%">{name}</span></div>',
	    fullscreen: true
	}]
});

Ext.reg('Search', App.views.Search);