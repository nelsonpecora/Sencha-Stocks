App.views.Index = Ext.extend(Ext.Panel, {
	style: 'background: black; padding: 0px;',
	layout: 'vbox',
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
	listeners: {
		selectStock: function(record) {
			/*App.stores.activeList.load(function(record) {
			    console.log('loaded records');
			}); */
			//console.log(App.stores.activeList);
			console.log(App.stores.stockStore);
		}
	},
	items: [
		{
			xtype: 'list',
			id : 'stockList',
			flex: 2.5,
			width: '100%',
			emptyText: 'No data available.',
		    store: App.stores.stockStore,
		    itemSelector: 'div.stockItem',
		    tpl: '<div class="stockItem"><div class="stockItemName">{symbol}</div><div class="stockItemPrice">{lastTradePrice}</div><div class="stockItemBtn">' + App.controllers.Home.stockBtn() + '</div></div>',
		    itemTpl: '<div class="stockItem"><div class="stockItemName">{symbol}</div><div class="stockItemPrice">{lastTradePrice}</div><div class="stockItemBtn">' + App.controllers.Home.stockBtn() + '</div></div>',
		    onItemTap: function(item, index) {
		    	var record = App.stores.stockStore.getAt(index).data;
		    	this.ownerCt.fireEvent("selectStock",record);
		    }
		},
		{
			xtype: 'carousel',
			id: 'mainBot',
			flex: 1.5,
			width: '100%',
			style: 'background: blue;',
			indicator: true,
			items: [
				{
					/*
					id: 'stockInfo',
					items: [new Ext.DataView({
					        store: App.stores.activeList,
					        itemSelector: 'div.stockInfo',
					        tpl: '<div class="stockInfo"><h1 style="text-align: center">{name}</h1><div class="stockInfoLeft>Open: {openPrice}<br />High: {highPrice}<br />Low: {lowPrice}<br />Vol: {volume}<br />P/E: {peRatio}</div><div class="stockInfoRight">Mkt Cap: {marketCap}<br />52w High: {wkHigh}<br />52w Low: {wkLow}<br />Avg Vol: {avgVolume}<br />Yield: {yield}</div>'
					})] */
					id: 'stockInfo',
					html:'<h2>Stock Info</h2>'
				},
				{
					id: 'stockGraph',
					html: '<h2>Stock Graph</h2>'
				},
				{
					id: 'stockNews',
					html: '<h2>Stock News</h2>'
				}
			]
		}
	]
});

Ext.reg('Index', App.views.Index);