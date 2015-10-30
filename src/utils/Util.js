/**
 * Created by malloy on 2015/5/19.
 */

var Util = {
    /**
     * 回调函数处理
     * @param callback：回调函数
     * @param caller：函数调用对象
     * @returns {Function}
     *
     * eg:
     * var One = cc.Class.extend({
     *      setNextFunc:function(func) {
     *          this._nextFunc = func;
     *      },
     *
     *      _onNextBtnClicked:function(sender, type) {
     *          this._nextFunc();
     *          //如果有参数则直接传参数，如this._nextFunc("test1", xxx, yyy);
     *      }
     * });
     *
     * var Two = cc.Class.extend({
     *      ctor:function() {
     *          this._oneClass = new One();
     *          this._oneClass.setNextFunc(Util.handler(this._oneClassNextFunc, this));
     *      },
     *
     *      _oneClassNextFunc:function() {
     *
     *      }
     * })
     */
    handler: function (callback, caller) {
        return function () {
            callback.apply(caller, arguments);
        }
    },

    isBlankString: function (str) {
        return (!str || /^\s*$/.test(str));
    },

    endsWithString: function (str, suffix) {
        if (!Util.isBlankString(str)) {
            return str.match(suffix + "$") == suffix;
        } else {
            return false;
        }
    },

    startsWithString: function (str, prefix) {
        if (!Util.isBlankString(str)) {
            return str.indexOf(prefix) === 0;
        } else {
            return false;
        }
    },

    /**
     * 将第一个字母转换成大写
     */
    upperFirstLetter: function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
    },

    isArray: function (object) {
        return Object.prototype.toString.call(object) === '[object Array]';
    },

    isObject: function (object) {
        return ((typeof object) === "object");
    }
};
