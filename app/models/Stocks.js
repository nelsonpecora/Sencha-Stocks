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

App.stores.stockStore = new Ext.data.Store({
    model: 'App.models.StockData',
    proxy: {
        type: 'ajax',
        url : '/app/models/data.json',
        reader: {
            type: 'json'
        }
    },
    autoLoad: true
});

App.stores.watchList = new Ext.data.Store({
    model: 'StockData',
    proxy: {
        type: 'sessionstorage',
        id  : 'watchList'
    }
});