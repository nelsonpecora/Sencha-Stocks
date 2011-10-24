App.models.StockData = Ext.regModel('App.models.StockData', {
    fields: [
    	'symbol', 
    	'name', 
    	'lastTradePrice', 
    	'changePrice', 
    	'changePercent', 
    	'marketCap', 
    	'openPrice', 
    	'highPrice', 
    	'lowPrice', 
    	'volume', 
    	'avgVolume', 
    	'peRatio', 
    	'wkHigh', 
    	'wkLow', 
    	'yield'
    ]
});

App.models.RssData = Ext.regModel('App.models.RssData', {
	fields: [
		'title',
		'source',
		'date', //format: mm/dd/yy
		'time' //format: 13:05
	]
});

App.stores.stockStore = new Ext.data.Store({
    model: 'App.models.StockData',
    proxy: {
        type: 'ajax',
        url : 'app/models/data.json',
        reader: {
            type: 'json',
            root: 'stocks'
        }
    },
    autoLoad: true
});

App.stores.rssStore = new Ext.data.Store({
	model: 'App.models.RssData',
	proxy: {
		type: 'ajax',
		url: 'app/models/rss.json',
		reader: {
			type: 'json'
		}
	},
	autoLoad: true
});

App.stores.activeStock = new Ext.data.Store({
    model: 'App.models.StockData',
    proxy: {
        type: 'ajax',
        url : 'app/models/data.json',
        reader: {
            type: 'json',
            root: 'stocks'
        }
    },
    autoLoad: true
});
