;jQuery(function($){
    var $selectedDemoItem = null;
    var selectedDemoId = null;
    var $demoListUl = $('#demoList');
    var execCommand = function(cmd, event, element){
        switch(cmd){
            case 'showChild':{
                selectCategory(element, true);
                break;
            }
            case 'viewDemo':{
                // selectDemo(element);
                break;
            }
        }
     };
     var viewDemo = function(url){
        parent.qwt.main.viewDemo(url);
     }
     var getActionTarget = function(event, level, property, parent){
        var t = event.target,
            l = level || 3,
            s = level !== -1,
            p = property || 'cmd',
            end = parent || document.body;
        while(t && (t !== end) && (s ? (l-- > 0) : true)){
            if(t.getAttribute(p)){
                return t;
            }else{
                t = t.parentNode;
            }
        }
        return null;
    }
     $demoListUl.click(function(e){
        var target = getActionTarget(e, -1, 'cmd', this);
        if(target){
            e.preventDefault();
            var cmd = target.getAttribute('cmd');
            execCommand(cmd, e, target);
        }
    });
    
    $demoListUl.css('visibility', 'hidden')
        .find('.child')
        .each(function(i){
            var $this = $(this);
            $this.data('childHeight', $this.height()).height(0);
        });
    $demoListUl.css('visibility', 'visible');

    var selectCategory = function(cateId, toggle){
        var $element = typeof(cateId) == 'string' ? $('#' + cateId) : $(cateId);
        if(!$element.length){
            return;
        }
        var $element = $element.parent();
        var $child = $element.children('ul');
        
        if($element.data('isShowChild')){
            if(toggle){
                $element.removeClass('show-child');
                $element.data('isShowChild', 0);
                $child.height(0);
            }
        }else{
            $element.addClass('show-child');
            $child.height($child.data('childHeight'));
            $element.data('isShowChild', 1);
        }
        
    }

    var selectDemo = function(demoId){
        var $element = typeof(demoId) == 'string' ? $('#' + demoId) : $(demoId);
        if(!$element.length){
            return;
        }
        demoId = $element.attr('id');
        if(selectedDemoId === demoId){
            return;
        }
        selectedDemoId = demoId;
        $selectedDemoItem && $selectedDemoItem.removeClass('selected');
        $element.addClass('selected');
        $selectedDemoItem = $element;
        viewDemo($element.attr('href'));
    }

    window.selectCategory = selectCategory;
    window.selectDemo = selectDemo;
//end of package
});