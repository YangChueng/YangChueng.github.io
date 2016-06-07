// JavaScript Document

//创建Html元素
function createHtmlElement(left,classname,top)
{
  var div = document.createElement("Div");
  var parentDiv = document.getElementById("content"); 
  div.id = "cloudone";
  div.className = classname;
  
  //var temp = Math.random();
  //console.log(temp)
  div.style.left = left;
  div.style.top = top;
  parentDiv.appendChild(div);
  /*
  div.addEventListener("animationend",function(){
	  	parentDiv.removeChild(this);
	  },false);
	  
  div.addEventListener("webkitAnimationEnd",function(){
	  	parentDiv.removeChild(this);
	  },false);
	  */
}



//设置Body背景图片
function setBackGroundImage(imageName)
{
	//设置背景图片
	var bgStr = "url(./images/"+imageName +")";
	var x =  document.getElementById("bgImgDivF");
	x.style.backgroundImage = bgStr;	
}

//设置Div背景图片
function setDivBackGroundImage(imageName)
{
	//设置背景图片
	var bgStr = "url(./images/"+imageName +")";
	var x =  document.getElementById("bgImgDiv");
	x.style.backgroundImage = bgStr;	
}

//动态切换背景图片
function changeBgImage()
{
	if(cjType==0)
	{
		setCJOneBg();	
	}else if(cjType==1)
	{
		setCJTwoBg();
	}else if(cjType==2)
	{
		setCJThreeBg();
	}else if(cjType==3)
	{
		setCJFourBg();
	}else if(cjType==4)
	{
		setCJFiveBg();
	}else if(cjType==5)
	{
		setCJSixBg();
	}else if(cjType==6){
		setCJSevenBg();
	}else if(cjType==7){
		setCJEightBg();
	}
	
	bgImg++;
	
}

//春花烂漫
function setCJOneBg()
{
	var divObj =  document.getElementById("bgImgDiv");
	if(bgImg % 2 ==1)
	{
		startrun(100);
		startrunF(0);
	}else{
		startrun(0);
		startrunF(100);
	}
}


//冬日飘雪
function setCJTwoBg()
{

	if(bgImg % 3 ==1)
	{
		startrun(100);
		startrunF(0);
	}else{
		startrun(0);
		startrunF(100);
	}
	
	if (bgImg % 3 ==0)
	{
		
		setTimeout(function(){setBackGroundImage("xuejing2.jpg");},3000);
	}else if (bgImg % 3 ==1)
	{
		setTimeout(function(){setBackGroundImage("xuejing3.jpg");},3000);
	}else if (bgImg % 3 ==2)
	{
		setTimeout(function(){setDivBackGroundImage("xuejing1.jpg");},3000);
	}
	
}



//海底世界
function setCJThreeBg()
{
	
	if(bgImg % 4 ==1 || bgImg % 4 ==3)
	{
		startrun(100);
		startrunF(0);
	}else{
		startrun(0);
		startrunF(100);
	}
	
	if (bgImg % 4 ==0)
	{
		setTimeout(function(){setDivBackGroundImage("haidishijie2.jpg");},3000);
		
	}else if (bgImg % 4 ==1)
	{
		setTimeout(function(){setBackGroundImage("haidishijie3.jpg");},3000);
		
	}else if (bgImg % 4 ==2)
	{
		setTimeout(function(){setDivBackGroundImage("haidishijie4.jpg");},3000);
	}else if (bgImg % 4 ==3)
	{
		setTimeout(function(){setBackGroundImage("haidishijie1.jpg");},3000);
	}
	
	
}


//蓝天白云
function setCJFourBg()
{
	
	var divObj =  document.getElementById("bgImgDiv");
	if(bgImg % 2 ==1)
	{
		startrun(100);
		startrunF(0);
	}else{
		startrun(0);
		startrunF(100);
	}
}


//绿意盎然
function setCJFiveBg()
{
	var divObj =  document.getElementById("bgImgDiv");
	if(bgImg % 3 ==1)
	{
		startrun(100);
		startrunF(0);
	}else{
		startrun(0);
		startrunF(100);
	}
	if (bgImg % 3 ==0)
	{
		
		setTimeout(function(){setBackGroundImage("lvyiangran2.jpg");},3000);
	}else if (bgImg % 3 ==1)
	{
		setTimeout(function(){setBackGroundImage("lvyiangran3.jpg");},3000);
		
	}else if (bgImg % 3 ==2)
	{
		setTimeout(function(){setDivBackGroundImage("lvyiangran1.jpg");},3000);
		
	}
	
	
	
}


//炫彩图案
function setCJSixBg()
{
	
	var divObj =  document.getElementById("bgImgDiv");
	if(bgImg % 3 ==1)
	{
		startrun(100);
		startrunF(0);
	}else{
		startrun(0);
		startrunF(100);
	}
	
	
	if (bgImg % 3 ==0)
	{
		
		setTimeout(function(){setBackGroundImage("caidai2.jpg");},3000);
	}else if (bgImg % 3 ==1)
	{
		
		setTimeout(function(){setBackGroundImage("caidai3.jpg");},3000);
	}else if (bgImg % 3 ==2)
	{
		
		setTimeout(function(){setDivBackGroundImage("caidai1.jpg");},3000);
	}
	
	
}


//午夜星空
function setCJSevenBg()
{
	
	if(bgImg % 4 ==1 || bgImg % 4 ==3)
	{
		startrun(100);
		startrunF(0);
	}else{
		startrun(0);
		startrunF(100);
	}
	
	if (bgImg % 4 ==0)
	{
		setTimeout(function(){setDivBackGroundImage("wuyexingkong2.jpg");},3000);
		
	}else if (bgImg % 4 ==1)
	{
		setTimeout(function(){setBackGroundImage("wuyexingkong3.jpg");},3000);
		
	}else if (bgImg % 4 ==2)
	{
		setTimeout(function(){setDivBackGroundImage("wuyexingkong4.jpg");},3000);
	}else if (bgImg % 4 ==3)
	{
		setTimeout(function(){setBackGroundImage("wuyexingkong1.jpg");},3000);
	}
	
	
}


//雨天心情
function setCJEightBg()
{
	var divObj =  document.getElementById("bgImgDiv");
	if(bgImg % 3 ==1)
	{
		startrun(100);
		startrunF(0);
	}else{
		startrun(0);
		startrunF(100);
	}
	if (bgImg % 3 ==0)
	{
		
		setTimeout(function(){setBackGroundImage("yutianxinqing1.jpg");},3000);
	}else if (bgImg % 3 ==1)
	{
		setTimeout(function(){setBackGroundImage("yutianxinqing2.jpg");},3000);
		
	}else if (bgImg % 3 ==2)
	{
		setTimeout(function(){setDivBackGroundImage("yutianxinqing3.jpg");},3000);
		
	}
	
	
	
}

function setbodyFrame()
{
	var bodyV =  document.getElementById("body");
	if(bodyV.width<bodyV.height){
		bodyV.style.width= "70%";	
	}
	
}

//添加动画结束监听事件
function animationEnd(){
		var div =  document.getElementById("box")
		//动画结束
	  div.addEventListener("animationend",function(){	
			animation();
		  });
		  
	  div.addEventListener("webkitAnimationEnd",function(){
			animation();
		  });
		  
	div.addEventListener("animationiteration",function(){
			
			animation();
		  });
		  
	  div.addEventListener("webkitAnimationIteration",function(){
			animation();
		  });
}
	
	

//每隔7秒切换动画	
function animation(){
	
		if(i%4==0){
			changeBgImage();
		}
	
		//设置图片的位置
		//var p =  document.getElementById("box");	
		var el =  document.getElementById("image");	
		//var el = imgagess[i%imgCount];
	 	 el.src = imagesArr[i%imgCount];	
		el.id="image";
		
		
		//p.replaceChild(el,temp);	
		
		
		//el.src = imgagess[i%imgCount].src;
		el.hidden = true;
	    setTimeout(function() {
		        el.hidden = false;
                var clientheight =document.body.clientHeight;
				el.style.top = (clientheight - el.clientHeight)/2 +"px";
				
				console.log('clientheight ：',el.clientHeight); 
				
				//设置动画
				
				if(i%2 ==0 ){
					var aName = animations[(i/2)%16];
					if (sb ==1){
						document.getElementById("box").style.webkitAnimationName = aName;
						}else{
					   document.getElementById("box").style.animationName = aName;
					}	
				}
				
				
				i ++;
				
				
            
		 },500);
		
		
	}
				
				
//播放或者停止音乐
function musicBtnClick(){
		var musicElement = document.getElementById("musicBtn");
		var musicPlayElement = document.getElementById('audioPlay');
		if(musicPlayElement.paused){
			musicPlayElement.play();
			var sb = ToEditProduction();
			if (sb ==2){
				musicElement.style.animationPlayState = "running";
				return;
			}else{
				musicElement.style.webkitAnimationPlayState = "running";
				return;
				}
				
		}else{
			musicPlayElement.pause();	
			var sb = ToEditProduction();
			if (sb ==2){
				musicElement.style.animationPlayState = "paused";
				return;
			}else{
				musicElement.style.webkitAnimationPlayState = "paused";
				return;
			}
		}
				
}


//判断当前显示网页的设备 PC 手机 平板
function ToEditProduction(){
		var sUserAgent = navigator.userAgent.toLowerCase();

        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";

        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";

        var bIsMidp = sUserAgent.match(/midp/i) == "midp";

        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";

        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";

        var bIsAndroid = sUserAgent.match(/android/i) == "android";

        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";

        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

        var ua = window.navigator.userAgent.toLowerCase();

        // 是否为移动端浏览器

        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {

            // 移动端浏览器

            if(ua.match(/MicroMessenger/i) == 'micromessenger'){

                // 微信

				return 1;
            }else{

                // android app 接口

                if(typeof android != "undefined") {

                    if(typeof android.closeWebView != "undefined") {

                        android.closeWebView();

                        return 1;

                    }

                }

                // 非android app,且非微信
				return 1;

            }

        } else {

			return 2;
            // pc端浏览器


        }
}

// bgImgDiv 切换背景图片
function startrun(target){
    clearInterval(timer);
	var run = document.getElementById("bgImgDiv");
    timer = setInterval(function(){
      if(target > alpha){
        speed = 5;
      }else{
        speed = -5;
      }
      
      if(alpha == target){
        clearInterval(timer);
      }
      else{
        alpha = alpha + speed;
        run.style.filter = 'alpha(opacity='+alpha+')';
        run.style.opacity = alpha/100;
      }
    },20)
  }
  
  // bgImgDivF 切换背景图片
function startrunF(target){
    clearInterval(timerF);
	var run = document.getElementById("bgImgDivF");
    timerF = setInterval(function(){
      if(target > alphaF){
        speed = 5;
      }else{
        speed = -5;
      }
      
      if(alphaF == target){
        clearInterval(timerF);
      }
      else{
        alphaF = alphaF + speed;
        run.style.filter = 'alpha(opacity='+alphaF+')';
        run.style.opacity = alphaF/100;
      }
    },10)
  }
