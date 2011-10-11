App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    dockedItems: [
        {
        	dock: 'bottom',
            xtype: 'toolbar',
            title: 'Web Stocks',
            items: [
                {
                    text: 'Back',
                    itemId: 'backBtn',
                    ui: 'back',
                },
                {xtype: 'spacer'},
                {
                    itemId: 'infoBtn',
                    iconCls: 'info',
                    iconMask: true,
                    ui: 'action',
                    handler: function() {
                    	Ext.dispatch({
                    	        controller: 'Home',
                    	        action: 'stockList',
                    	        historyUrl: 'Home/stockList',
                    	        animation: {
                    	            type: 'flip',
                    	            direction: 'right',
                    	            duration: 400
                    	        },
                    	});
                    }
                },
            ],
    	},
    ],
});