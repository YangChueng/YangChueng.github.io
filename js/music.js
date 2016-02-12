/**
 * 扩展jquery插件，简单的音乐播放器
 * @author Vince
 */
;
(function($){

	$.fn.extend({
		/**
		 * 简单的音乐播放器
		 * @return {[type]} [description]
		 */
		vinceMusic:function(options){

			/**
			 * 入参
			 * @type {Object}
			 */
			var defaults = {
				musicPath:""
			};

			var options = $.extend(defaults,options);

			/**
			 * add style sheet
			 * @param {[type]} obj [description]
			 */
			var addStyleSheet = function(obj){
				obj.css({
					display: 'block',
				    width: '55px',
				    height: '55px',
				    'border-radius': '100%',
				    position: 'absolute',
				    top: '10%',
				    right: '10%',
				    'z-index': '1000',
				    cursor:'pointer'
				});

				obj.find(".circle").css({
					display: 'block',
				    width: '50px',
				    height: '50px',
				    'border-radius': '100%',
				    border: '5px solid rgba(0,0,0,0)',
				    'border-top-color': '#E8271E',
				    'border-bottom-color': '#300DEF',
				    position: 'absolute',
				    background: '#17F128',
				    left: 0,
				    'box-shadow': '0 0 35px #FBD20A'
				});
			};

			/**
			 * 插入音乐
			 * @param  {[当前对象]} obj     [description]
			 * @return {[type]}         [description]
			 */
			var insertMusic = function(obj){
				if('' != options.musicPath){
					var musicSrc = options.musicPath;
				    var audio = null;
				    function setAudio(){
				        audio = document.createElement('audio');
				        audio.src = musicSrc;
				        if(!audio){
				            audio.load(); //加载音乐
				        }else{
				            audio.play();
				            audio.loop = true; //循环播放
				        }
				    }
				    var $music = obj.find('.circle');
				    //控制
				    obj.off('click').on('click',function(){
				        if($music.hasClass('play')){ //如果已经播放，则暂停
				            audio && (audio.pause());
				            $music.addClass('pause').removeClass('play');
				        }else{
				            audio && (audio.play());
				            $music.addClass('play').removeClass('pause');
				        }
				    });

				    setAudio();
				}
			};

			return this.each(function(){

				//1.create dom element
				var element = "<span class='circle'></span>",
					$element = $(element),
					_this = $(this);

				_this.html($element);

				//2.add style sheet
				addStyleSheet(_this);
				
				//3.添加动画
				_this.find('span').toggleClass('play');

				//4.insert music
				insertMusic(_this);
			});
		}
	});
})(jQuery);