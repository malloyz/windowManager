/**
 * Created by malloyzhu on 2015/10/29.
 */

var ConfirmPayWindow = WindowBase.extend({
    ctor: function () {
        this._super();

        var rootNode = UIHelper.bindUIWidget(this, res.confirm_pay_window_json);
        rootNode.setAnchorPoint(0.5, 0.5);
        this.addChild(rootNode);
    },

    _onConfirmButtonTouched: function (sender, type) {
        if (type === ccui.Widget.TOUCH_ENDED) {
            ConfirmPayWindow.Remove();
        }
    },
    
    _onMaskTouched: function () {
        ConfirmPayWindow.Remove();
    },

    onShowNotify: function () {
        console.log("confirmPayWindow onShowNotify");
    },

    onShow: function () {
        console.log("confirmPayWindow onShow");
    },

    onHideNotify: function () {
        console.log("confirmPayWindow onHideNotify");
    },

    onHide: function () {
        console.log("confirmPayWindow onHide");
    },

    onRemoveNotify: function () {
        console.log("confirmPayWindow onRemoveNotify");
    },

    onRemove: function () {
        console.log("confirmPayWindow onRemove");
    },

    onCover: function () {
        console.log("confirmPayWindow onCover");
    },

    onResume: function () {
        console.log("confirmPayWindow onResume");
    }
});

ConfirmPayWindow.GetInstance = function () {
    if (null == ConfirmPayWindow._instance) {
        ConfirmPayWindow._instance = new ConfirmPayWindow();
    }
    return ConfirmPayWindow._instance;
};

ConfirmPayWindow.Show = function () {
    var instance = ConfirmPayWindow.GetInstance();
    var action = WindowAction.getMoveInFromTopActionFullWindow(instance);
    WindowManager.getInstance().showWindow(instance, action, false, null, Util.handler(instance._onMaskTouched, instance));
};

ConfirmPayWindow.Hide = function () {
    var instance = ConfirmPayWindow.GetInstance();
    WindowManager.getInstance().hideWindow(instance);
};

ConfirmPayWindow.Remove = function () {
    WindowManager.getInstance().removeWindow(ConfirmPayWindow._instance);
    ConfirmPayWindow._instance = null;
};