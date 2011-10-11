App.views.HomeStockList = Ext.extend(Ext.Panel, {
    html: '<h2 style="text-align:center">Stocks</h2> <p style="text-align: center">Web Stocks is a Sencha Touch demo.</p>',
    scroll: 'vertical',
    styleHtmlContent: true,
    style: 'background: #ddd',
});
Ext.reg('HomeStockList', App.views.HomeStockList);