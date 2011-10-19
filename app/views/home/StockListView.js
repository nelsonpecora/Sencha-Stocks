App.views.StockList = Ext.extend(Ext.Panel, {
	scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: #d8e2ef',
	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'top',
			title: 'Stocks',
			items: [
				{
					itemId: 'addBtn',
					iconCls: 'add',
					iconMask: true,
					ui: 'normal',
					handler: function() {
						Ext.dispatch({
							controller: 'Home',
							action: 'search',
							historyUrl: 'Home/search',
							animation: {
								type: 'slide',
								duration: 400,
								direction: 'up',
								cover: true
							}
						});
					}
				},
				{ xtype: 'spacer' },
				{
					itemId: 'doneBtn',
					text: 'Done',
					iconCls: '',
					ui: 'action',
					handler: function() {
						Ext.dispatch({
							controller: 'Home',
							action: 'index',
							historyUrl: 'Home/index',
							animation: {
								type: 'flip',
								duration: 600,
								direction: 'left'
							}
						});
					}
				}
			]
		},
		{
			xtype: 'toolbar',
			dock: 'bottom',
			ui: 'light',
			items: [
				{ xtype: 'spacer' },
				{
					itemId: 'bButtons',
					xtype: 'segmentedbutton',
					allowDepress: true,
					items: [
						{
							text: '%',
							handler: function() {
								App.controllers.Home.toggleMe('percent');
								//make a method in controller to change a global "this is toggled' variable when either these buttons are changed or the relevant button on the home screen is tapped.
							},
							width: '100px',
							pressed: true
						},
						{
							text: 'Price',
							width: '100px',
							handler: null
						},
						{
							text: 'Mkt Cap',
							width: '100px',
							handler: null
						}
					]
				},
				{ xtype: 'spacer' }
			]
		}
	],
	items: [{
		xtype: 'list',
		id : 'stockPickList',
	    emptyText   : 'No data available.',
	    store: App.stores.stockStore,
	    itemSelector: 'div.stockListItem',
	    tpl: '<div class="stockListItem"><strong>{symbol}</strong><br /><span style="font-size:80%">{name}</span></div>',
	    itemTpl: '<div class="stockListItem"><strong>{symbol}</strong><br /><span style="font-size:80%">{name}</span></div>',
	    fullscreen: true
	}]
});

Ext.reg('StockList', App.views.StockList);