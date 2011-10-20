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
			App.stores.activeStock.clearFilter();
			App.stores.activeStock.filter({
			    property: 'symbol',
			    value: record,
			    exactMatch: true
			});
			console.log(record,App.stores.activeStock.data.items[0].data.name);
			console.log(App.stores.stockStore, App.stores.activeStock);
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
		    	var record = App.stores.stockStore.getAt(index).data.symbol;
		    	this.ownerCt.fireEvent("selectStock",record);
		    }
		},
		{
			xtype: 'carousel',
			id: 'mainBot',
			flex: 1.5,
			width: '100%',
			style: 'background: black;',
			indicator: true,
			items: [
				{
					id: 'stockInfo',
					xtype: 'dataview',
			        store: function(){if(App.stores.activeStock){console.log("it works");return App.stores.activeStock;} else {alert("Yikes!");return null;}}(),
			        itemSelector: 'div.stockInfoItem',
			        emptyText: 'No data loaded!',
			        tpl: '<tpl for "."><h1>{name}</h1><div class="stockInfoLeft">Open: {openPrice}<br />High: {highPrice}<br />Low: {lowPrice}<br />Vol: {volume}<br />P/E: {peRatio}</div><div class="stockInfoRight">Mkt Cap: {marketCap}<br />52w High: {wkHigh}<br />52w Low: {wkLow}<br />Avg Vol: {avgVolume}<br />Yield: {yield}</div></tpl>',
					listeners: {
						afterrender: function() {
							App.stores.activeStock.filter({
							    property: 'symbol',
							    value: 'SMPL',
							    exactMatch: true
							});
							
							console.log('current stock: ', App.stores.activeStock.data.items[0].data.name);
						}
					}
				},
				{
					id: 'stockGraph',
					html: '<img src="res/images/stockbottom.png" width="100%" height="156" />'
				},
				{
					id: 'stockNews',
					xtype: 'list',
					fullscreen: true,
					//style: 'margin-top:-54px;height:156px;',
					store: App.stores.rssStore,
					itemSelector: 'div.stockNewsItem',
					tpl: '<div class="stockNewsItem"><strong>{title}</strong><br /><span style="font-size:80%;color:grey;">{source} &ndash; {date} at {time}</span></div>',
					itemTpl: '<div class="stockNewsItem"><strong>{title}</strong><br /><span style="font-size:80%;color:grey;">{source} &ndash; {date} at {time}</span></div>'
				}
			]
		}
	]
});

Ext.reg('Index', App.views.Index);