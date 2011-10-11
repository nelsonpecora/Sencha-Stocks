App.views.HomeAbout = Ext.extend(Ext.Panel, {
    html: '<h2>About</h2> <p>Web Stocks is a Sencha Touch demo.</p>',
    scroll: 'vertical',
    styleHtmlContent: true,
    style: 'background: #d8efed',
});
Ext.reg('HomeAbout', App.views.HomeAbout);