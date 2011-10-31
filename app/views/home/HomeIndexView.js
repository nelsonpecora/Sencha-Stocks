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
			//console.log(record.data);
			App.stores.chartData.loadData(generateData());
			App.stores.activeStock.clearFilter();
			var id = record.data.id;
			App.stores.activeStock.filter({
				property: "id",
				value: id,
				exactMatch: true
			});
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
		    itemTpl: '<tpl for="."><div class="stockItem"><div class="stockItemName">{symbol}</div><div class="stockItemPrice">{lastTradePrice}</div><div class="stockItemBtn">' + App.controllers.Home.stockBtn() + '</div></div></tpl>',
		    onItemTap: function(item, index) {
		    	//console.log(item,index);
		    	var record = App.stores.stockStore.getAt(index);
		    	this.ownerCt.fireEvent("selectStock",record);
		    }
		},
		{
			xtype: 'carousel',
			id: 'mainBot',
			flex: 1.5,
			width: '100%',
			style: 'background: black;border-top:1px solid grey;',
			indicator: true,
			items: [
				{
					id: 'stockInfo',
					xtype: 'dataview',
			        store: App.stores.activeStock,
			        itemSelector: 'div.stockInfoItem',
			        emptyText: '<div style="text-align:center;padding-top:40px;">Please pick a stock!</div>',
			        tpl: '<tpl for="."><div class="stockInfoItem" style="font-size: 0.8em;"><h1 style="font-weight: bold; font-size: 120%;">{name}</h1><div class="stockInfoLeft">Open: {openPrice}<br />High: {highPrice}<br />Low: {lowPrice}<br />Vol: {volume}<br />P/E: {peRatio}</div><div class="stockInfoRight" style="margin-right: 0px; width: 160px;">Mkt Cap: {marketCap}<br />52w High: {wkHigh}<br />52w Low: {wkLow}<br />Avg Vol: {avgVolume}<br />Yield: {yield}</div></div></tpl>',
					listeners: {
						afterrender: function() {
							App.stores.activeStock.filter({
							    property: 'id',
							    value: '0',
							    exactMatch: true
							});
						}
					}
				},
				{
					id: 'stockGraph',
					xtype: 'chart',
					style: 'background: whitesmoke;',
					animate: true,
				    store: App.stores.chartData,
				    shadow: false,
				    theme: 'Base',
				    axes: [{
				    	type: 'Numeric',
				    	position: 'left',
				    	fields: ['stockPrice']
				    }, {
				    	type: 'Time',
				    	position: 'bottom',
				    	fields: ['date'],
				    	dateFormat: ' M d '
				    }],
				    series: [{
				    	type: 'line',
				    	showMarkers: false,
				    	smooth: true,
				    	axis: 'left',
				    	xField: 'date',
				    	yField: 'stockPrice'
				    }]
				},
				{
					id: 'stockNews',
					xtype: 'list',
					fullscreen: true,
					//style: 'margin-top:-54px;height:156px;',
					store: App.stores.rssStore,
					itemSelector: 'div.stockNewsItem',
					itemTpl: '<div class="stockNewsItem"><strong>{title}</strong><br /><span style="font-size:80%;color:grey;">{source} &ndash; {date} at {time}</span></div>'
				}
			]
		}
	]
});

Ext.reg('Index', App.views.Index);