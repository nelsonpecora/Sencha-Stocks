App.views.Search = Ext.extend(Ext.Panel, {
	scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: #d8e2ef',
	floating: true,
	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'top',
			items: [
				{
					xtype: 'searchfield',
					flex: 1
				},
				{
					itemId: 'cancelBtn',
					text: 'Cancel',
					ui: 'normal',
					handler: function() {
						Ext.dispatch({
							controller: 'Home',
							action: 'stockList',
							historyUrl: 'Home/stocklist',
							animation: {
								type: 'slide',
								duration: 400,
								direction: 'down'
							}
						});
					}
				}
			]
		}
	],
	html: '<h1 style="text-align:center">SEARCH VIEW</h1>'
});

Ext.reg('Search', App.views.Search);