App.models.StockData = Ext.regModel('App.models.StockData', {
    fields: [
    	'id',
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

App.stores.watchList = new Ext.data.Store({
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

function generateData(){
        var today = new Date(),
            before = today.add(Date.DAY, -200),
            data = [{
                date: before,
                num: 0,
                stockPrice: 1100
            }],
            i, currentDate = before;

        for (i = 1; i < 200; i++) {
            data.push({
                date: (currentDate = currentDate.add(Date.DAY, 1)),
                num: i,
                stockPrice: data[i - 1].stockPrice + ((Math.floor(Math.random() * 2) % 2) ? -1 : 1) * Math.floor(Math.random() * 7)
            });
        }
        return data;
    }

    App.stores.chartData = new Ext.data.JsonStore({
        fields: ['date', 'num', 'stockPrice'],
        data: generateData()
    });

    App.stores.chartData.loadData(generateData());
