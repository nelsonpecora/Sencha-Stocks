App.views.Index = Ext.extend(Ext.Panel, {
	scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: #d8e2ef',
	html: '<h1 style="text-align:center">Hello World!</h1>',
	dockedItems: [
		{
			xtype: 'toolbar',
			dock: 'bottom',
			title: 'Web Stocks',
			items: [
				{ xtype: 'spacer' },
				{
					itemId: 'infoBtn',
					iconCls: 'info',
					iconMask: true,
					ui: 'action',
					handler: function() {
						Ext.dispatch({
							controller: 'Home',
							action: 'stockList',
							historyUrl: 'Home/stocklist',
							animation: {
								type: 'flip',
								duration: 600,
								direction: 'reverse'
							}
						});
					}
				}
			]
		}
	]
});

Ext.reg('Index', App.views.Index);