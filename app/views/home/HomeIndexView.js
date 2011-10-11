App.views.HomeIndex = Ext.extend(Ext.Panel, {
	scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: #d8e2ef',
    html: "<a href='#Home/stockList' class='menu-item'>Stock List</a>",
});
Ext.reg('HomeIndex', App.views.HomeIndex);