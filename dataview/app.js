Ext.regApplication({
	name: 'TestApp',
	launch: function() {
		this.viewport = new TestApp.views.Viewport();
	}
});

TestApp.models.StoreMe = Ext.regModel('TestApp.models.StoreMe', {
	fields: [
		'id',
		'name',
		'age'
	]
});

TestApp.stores.storeMe = new Ext.data.Store({
	model: 'TestApp.models.StoreMe',
	proxy: {
		type: 'ajax',
		url: 'data.json',
		reader: {
			type: 'json',
			root: function(data) {
				if (data) {
					if (data instanceof Array) {
			         	return data;
			        } else {
			            return [data];
			        }                    
				}                
			}
		}
	},
	autoLoad: true
});
/*
TestApp.stores.storeMe.filter({
	property: 'id',
	value: '1',
	exactMatch: true
});
*/
TestApp.views.Viewport = Ext.extend(Ext.Panel, {
	fullscreen: true,
	layout: 'card',
	items: [
		{
			id: 'dataView',
			xtype: 'dataview',
			store: TestApp.stores.storeMe,
			collectData: function(records, startIndex){
				// map over the records and collect just the ones we want
				var r = [];
				for( var i=0, l=records.length; i<l; i++ ) {
					if( records[i].data.id ) {
						r.push( this.prepareData(records[i].data, 0, records[i]) );
						return r;
					}
				}
			},
			itemSelector: 'div.dataViewItem',
			emptyText: 'NO DATA',
			tpl: '<tpl for "."><div class="dataViewItem">ID: {id}<br />Name: {name}<br />Age: {age}</div></tpl>',
			listeners: {
				render: function() {
					//this.collectData(TestApp.stores.storeMe.data.items,0)
					console.log(TestApp.stores.storeMe.data);
				}
			}
		}
	]
});