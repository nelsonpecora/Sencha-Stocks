App.views.Index = Ext.extend(Ext.Panel, {
	scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: black',
	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'bottom',
			title: 'Web Stocks',
			items: [
				{ xtype: 'spacer' },
				{
					itemId: 'infoBtn',
					iconCls: 'info',
					iconMask: true,
					ui: 'action',
					handler: function() {
						Ext.dispatch({
							controller: 'Home',
							action: 'stockList',
							historyUrl: 'Home/stocklist',
							animation: {
								type: 'flip',
								duration: 600,
								direction: 'reverse'
							}
						});
					}
				}
			]
		}
	],
	items: [
		{
			xtype: 'list',
			id : 'stockList',
		    emptyText   : 'No data available.',
		    store: App.stores.stockStore,
		    itemSelector: 'div.stockItem',
		    tpl: '<div class="stockItem"><div class="stockItemName">{symbol}</div><div class="stockItemPrice">{lastTradePrice}</div><div class="stockItemBtn">' + App.controllers.Home.stockBtn() + '</div></div>',
		    itemTpl: '<div class="stockItem"><div class="stockItemName">{symbol}</div><div class="stockItemPrice">{lastTradePrice}</div><div class="stockItemBtn">' + App.controllers.Home.stockBtn() + '</div></div>',
		    height: 300
		}
	]
});

Ext.reg('Index', App.views.Index);