/**
 * === Javascript editor 模块 ======================
 * Copyright (c) 2016 YangCheung, All rights reserved.
 * http://yangcheung.github.com
 * 
 * @version 1.0
 * @author  YangCheung <876753183@qq.com>
 * @description 描述文字
 * ---2016-6-29 ----------------------------------------
 */
Young.controller('EditorController', ['$scope', function($scope) {
    var editor = new wangEditor('youngEditor');
    editor.config.familys = ['黑体'];

    // 字号
    editor.config.fontsizes = {
        1: '16px'
    };
    editor.create();

    this.submit = function(){
    	var html = editor.$txt.html();
    	console.log(html);
    }
}]);
