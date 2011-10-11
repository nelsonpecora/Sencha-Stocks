App.views.SearchIndex = Ext.extend(Ext.Panel, {
    cls: 'search-panel',
    fullscreen: true,
    floating: true,
    floatingCls: '',
 
    dockedItems: [{
        xtype: 'toolbar',
        items: [
            {
                xtype: 'searchfield',
                flex: 1,
            },
            {
                text: 'Cancel',
                itemId: 'cancelSearchBtn',
                ui: 'action',
            }
        ],
    }],
});
Ext.reg('SearchIndex', App.views.SearchIndex);