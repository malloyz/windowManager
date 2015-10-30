/**
 * Created by malloyzhu on 2015/10/29.
 */

var PayWindow = WindowBase.extend({
    ctor: function () {
        this._super();

        var rootNode = UIHelper.bindUIWidget(this, res.payWindow_json);
        rootNode.setAnchorPoint(0.5, 0.5);
        this.addChild(rootNode);
    },

    _onConfirmButtonTouched: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            ConfirmPayWindow.Show();
        }
    },

    _onMaskTouched: function () {
        PayWindow.Remove();
    },
    
    onShowNotify: function () {
        console.log("payWindow onShowNotify");
    },
    
    onShow: function () {
        console.log("payWindow onShow");
    },
    
    onHideNotify: function () {
        console.log("payWindow onHideNotify");
    },
    
    onHide: function () {
        console.log("payWindow onHide");
    },
    
    onRemoveNotify: function () {
        console.log("payWindow onRemoveNotify");
    },
    
    onRemove: function () {
        console.log("payWindow onRemove");
    },
    
    onCover: function () {
        console.log("payWindow onCover");
    },
    
    onResume: function () {
        console.log("payWindow onResume");
    }
});

PayWindow.GetInstance = function () {
    if (null == PayWindow._instance) {
        PayWindow._instance = new PayWindow();
    }
    return PayWindow._instance;
};

PayWindow.Show = function () {
    var instance = PayWindow.GetInstance();
    var action = WindowAction.getScaleEaseElasticOutAction(instance);
    instance.setOpacity(255);
    WindowManager.getInstance().showWindow(instance, action, true, null, Util.handler(instance._onMaskTouched, instance));
};

PayWindow.Hide = function () {
    var instance = PayWindow.GetInstance();
    var action = WindowAction.getFadeOutAction();
    WindowManager.getInstance().hideWindow(instance, action);
};

PayWindow.Remove = function () {
    var action = WindowAction.getFadeOutAction();
    WindowManager.getInstance().removeWindow(PayWindow._instance, action);
    PayWindow._instance = null;
};