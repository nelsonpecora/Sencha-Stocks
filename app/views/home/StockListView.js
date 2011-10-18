App.views.StockList = Ext.extend(Ext.Panel, {
	scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: #d8e2ef',
	html: '<h1 style="text-align:center">STOCK LIST</h1>',
	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'top',
			title: 'Stocks',
			id: 'tbar',
			items: [
				{
					itemId: 'addBtn',
					iconCls: 'add',
					iconMask: true,
					ui: 'normal',
					handler: function() {
						Ext.dispatch({
							controller: 'Home',
							action: 'search',
							historyUrl: 'Home/search',
							animation: {
								type: 'slide',
								duration: 400,
								direction: 'up'
							}
						});
					}
				},
				{ xtype: 'spacer' },
				{
					itemId: 'doneBtn',
					text: 'Done',
					iconCls: '',
					ui: 'action',
					handler: function() {
						Ext.dispatch({
							controller: 'Home',
							action: 'index',
							historyUrl: 'Home/index',
							animation: {
								type: 'flip',
								duration: 600,
								direction: 'left'
							}
						});
					}
				}
			]
		}
	]
});

Ext.reg('StockList', App.views.StockList);