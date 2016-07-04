/**
 * === Javascript 主控制器 模块 ======================
 * Copyright (c) 2016 YangCheung, All rights reserved.
 * http://yangcheung.github.com
 * 
 * @version 1.0
 * @author  YangCheung <876753183@qq.com>
 * @description CSS3LibCtrl页面第一个controller层 
 * ---2016-6-29 ---------------------------------------
 */

/**
 * 
 */
Young.controller('CSS3LibCtrl', function() {
    this.viewCSScode = function(event) {
        var $this = angular.element(event.target);
        if($this.attr("data-you-show") == "true"){
        	$this.parent().parent().find('pre').removeClass('hideCssAnimation').addClass('showCssAnimation');
        	$this.attr("data-you-show",false);
        	$this.text("Hide CSS Code");
        }else{
        	$this.parent().parent().find('pre').removeClass('showCssAnimation').addClass('hideCssAnimation');
			$this.attr("data-you-show",true);
			$this.text("Show CSS Code");
        }
    };

    this.showMenu = function(event){
        angular.element(event.target).toggleClass('show');
        if (angular.element(event.target).hasClass('show')) {
            $(".left-column").css("width","300px");
        }else{
            $(".left-column").css("width","0");
        }
        
    }
});
