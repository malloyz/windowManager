var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
    payWindow_json: "res/PayWindow.json",
    confirm_pay_window_json: "res/ConfirmPayWindow.json"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}