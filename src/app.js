
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    _modalBg: null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var closeItem = new cc.MenuItemImage(
            res.CloseNormal_png,
            res.CloseSelected_png,
            function () {
                PayWindow.Show();
            }, this);
        closeItem.attr({
            x: size.width - 20,
            y: 20,
            anchorX: 0.5,
            anchorY: 0.5
        });

        var menu = new cc.Menu(closeItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);

        var sprite = new cc.Sprite(res.HelloWorld_png);
        sprite.setPosition(size.width / 2, size.height / 2);
        this.addChild(sprite);
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

