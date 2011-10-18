App.views.Search = Ext.extend(Ext.Panel, {
	scroll: 'vertical',
	styleHtmlContent: true,
	style: 'background: #d8e2ef',
	html: '<h1 style="text-align:center">SEARCH VIEW</h1>'
});

Ext.reg('Search', App.views.Search);