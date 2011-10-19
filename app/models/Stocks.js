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

/* App.stores.activeList = new Ext.data.Store({
    model: 'StockData',
    data : ["SMPL","Sample",10,2.4,"0.5%","23.4M",9.5,12,9.3,"25.6M","42.3M",6.2,15,9,2.3],
    proxy: {
        type: 'memory'
    },
    autoLoad: true
});
*/