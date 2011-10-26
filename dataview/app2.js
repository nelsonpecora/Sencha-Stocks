Ext.regApplication({
	name: 'TestApp',
	listeners: {
		selectItem: function(record) {
			console.log(record.data);
			store2.clearFilter();
			var id = record.data.id;
			store2.filter({
				property: "id",
				value: id,
				exactMatch: true
			});
		}
	},
	launch: function() {
		this.viewport = new TestApp.views.Viewport();
	}
});

var model = Ext.regModel('People', {
	fields: ['id','name','age'],
	proxy: {
		type: 'localstorage',
		id: 'people'
	}
}),
	store1 = new Ext.data.Store({
		model: 'People',
		data: [
			{id:0, name:'alex', age:12},
			{id:1, name:'ben', age:13},
			{id:2, name:'carl', age:22},
			{id:3, name:'david', age:15},
			{id:4, name:'eleanor', age:30}
		]
	}),
	store2 = new Ext.data.Store({
		model: 'People',
		data: [
			{id:0, name:'alex', age:12},
			{id:1, name:'ben', age:13},
			{id:2, name:'carl', age:22},
			{id:3, name:'david', age:15},
			{id:4, name:'eleanor', age:30}
		]
	}),
	tpl1 = new Ext.XTemplate(
		'<tpl for=".">',
			'<div class="person">{#}. {name}</div>',
		'</tpl>'
	),
	tpl2 = new Ext.XTemplate(
		'<tpl for=".">',
			'<div class="person">{name}: {age} years old</div>',
		'</tpl>'
	),
	dataView1 = new Ext.DataView({
		store: store1,
		tpl: tpl1,
		autoHeight: true,
		itemSelector: 'div.person',
		flex:2,
		onItemTap: function(item,index){
			console.log(item,index);
			var record = store1.getAt(index);
			TestApp.fireEvent('selectItem',record);
		}
	}),
	dataView2 = new Ext.DataView({
		store: store2,
		tpl: tpl2,
		autoHeight: true,
		itemSelector: 'div.person',
		flex: 2
	});

TestApp.views.Viewport = Ext.extend(Ext.Panel, {
	fullscreen: true,
	layout: 'vbox',
	items: [dataView1,dataView2],
	title: 'TestApp',
	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'top',
			title: 'Test App'
		}	
	]
});