// Create a model (with any proxy)
Ext.regModel('Car', {
    fields: ['id', 'name', 'sports'],
    proxy: {
      type: 'localstorage',
      id  : 'cars'
    }
});

// Create a store to access the records
var store = new Ext.data.Store({
    model: 'Car',
    data: [
      {id: 1, name:'Skoda', sports: false},
      {id: 2, name:'VolksWagon', sports: false},
      {id: 3, name:'Porcshe', sports: true},
      {id: 4, name:'Toyota', sports: false}
    ]
});

// create a basic xtemplate that will list the records
var tpl = new Ext.XTemplate(
    '<tpl for=".">',
        '<div class="car">{name}</div>',
    '</tpl>'
);

// Use the template in a first DataView that will 
// list ALL items from the store
var dataView1 = new Ext.DataView({
    store: store,
    tpl: tpl,
    autoHeight:true,
    multiSelect: true,
    itemSelector:'div.car',
    emptyText: 'No cars',
    flex: 2,
	onItemTap: function(item, index) {
		var record = store.getAt(index);
		dataView2.collectData(record,index);
	}
});

// Use the template in a second DataView that will 
// list SOME items from the store by reducing the 
// number of items via collectData
var dataView2 = new Ext.DataView({
    store: store,
    tpl: tpl,
    autoHeight:true,
    multiSelect: true,
    itemSelector:'div.car',
    emptyText: 'No cars',
    flex: 2,
    collectData: function(record, index){
      // map over the records and collect just the ones we want
      var r = [],
		  i = index;
		console.log(record[i]);
	  if(record.data)
	  	r.push( this.prepareData(record[i].data, 0, record[i]) );
	
	/*
      for( var i=0; i<records.length; i++ )
        if( records[i].data.sports )
          r.push( this.prepareData(records[i].data, 0, records[i]) );
	*/
      return r;
    }
});


// an action to run to update one of the records
// running this action will cause an error when trying to update
// dataView2
var updateFirstCar = function(index){
  // find first record
  var record = store.getById(index);
  // make it a sports car
  record.set('sports', true);
};


// show the views with a button to trigger an update
Ext.setup({
    onReady: function() {
        var panel = new Ext.Panel({
            fullscreen:true,
            layout:'hbox',
            title:'Shared DataViews',
            items: [dataView1,dataView2],
            dockedItems: [
              {
                xtype: 'toolbar',
                dock: 'bottom',
                items: [
                  {ui: 'round', text: 'update a car', handler: updateFirstCar(1)}
                ]
              }
            ]
        });
    }
});