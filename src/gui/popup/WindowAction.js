/**
 * Created by malloy on 2015/5/29.
 */

/**
 * 窗口 action
 * @type {{}}
 */
var WindowAction = {
    /**
     * 缩放并带回弹效果
     * @param window
     * @returns {*}
     */
    getScaleEaseElasticOutAction: function (window) {
        if (null == window) {
            return null;
        }
        var currentScale = 1.0;
        window.setScale(0.8);
        var scaleTo = new cc.ScaleTo(1.0, currentScale, currentScale);
        var easeElasticOut = new cc.EaseElasticOut(scaleTo);
        var actionCompleteCallBack = new cc.CallFunc(this._onActionComplete, this);
        var action = new cc.Sequence(easeElasticOut, actionCompleteCallBack);
        return action;
    },

    /**
     * 从上往下拉效果
     * @param window
     * @returns {*}
     */
    getMoveInFromTopActionFullWindow: function (window) {
        if (null == window) {
            return null;
        }
        var finalPosition = window.getPosition();
        window.setPositionY(finalPosition.y + cc.winSize.height);
        var moveTo = new cc.MoveTo(0.5, finalPosition);
        var callBack = new cc.CallFunc(this._onActionComplete, this);
        var action = new cc.Sequence(moveTo, callBack);
        return action;
    },

    /**
     * 淡入淡出效果
     * @param window
     * @returns {*}
     */
    getFadeInFadeOutAction: function (window) {
        if (null == window) {
            return null;
        }
        window.setOpacity(0);
        var fadeIn = new cc.FadeIn(1);
        var fadeOut = new cc.FadeOut(1);
        var delay = new cc.DelayTime(1);
        var actionCompleteCallBack = new cc.CallFunc(this._onActionComplete, this);
        var action = new cc.Sequence(fadeIn, delay, fadeOut, actionCompleteCallBack);
        return action;
    },

    getFadeOutAction: function () {
        var fadeOut = new cc.FadeOut(0.5);
        var actionCompleteCallBack = new cc.CallFunc(this._onActionComplete, this);
        var action = new cc.Sequence(fadeOut, actionCompleteCallBack);
        return action;
    },

    /**
     * 设置 action 完成回调
     */
    setActionCompleteCallBack: function (func) {
        this._actionCompleteCallBack = func;
    },

    /**
     * action 完成时回调
     * @param object
     * @private
     */
    _onActionComplete: function (object) {
        this._actionCompleteCallBack(object);
    }
};

