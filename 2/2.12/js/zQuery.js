  function getbyclassname(tagname,classname){//通过类名获取元素函数，参数为父元素、类名，返回值为元素数组
  var result=new Array();
  var allclass=document.getElementsByTagName(tagname);
  for (var i=0; i<allclass.length;i++ )
  {

   if(classname==allclass[i].className)
	   result.push(allclass[i]);
  }
  return result;
  }

function win(attr)
{//获取可视区尺寸，参数为height|width
	switch(attr)
		{           
			case 'height'://获取窗口高度
             if (window.innerHeight)
			{
                   winHeight = window.innerHeight;return winHeight;
			}else if ((document.body) && (document.body.clientHeight)){
                   winHeight = document.body.clientHeight;return winHeight;
			}
			if (document.documentElement  && document.documentElement.clientHeight)
             {
                 winHeight = document.documentElement.clientHeight;return winHeight;
             }
			 break;
			case 'width'://获取窗口宽度
			  if (window.innerWidth){
                   winWidth = window.innerWidth;return winWidth;
			  }else if ((document.body) && (document.body.clientWidth)){
                   winWidth = document.body.clientWidth;   return winWidth;          
			  }//通过深入Document内部对body进行检测，获取窗口大小
             if (document.documentElement  &&document.documentElement.clientWidth)
             {
                 winWidth = document.documentElement.clientWidth;return winWidth;
             }
			 break;
			 case 'scrollTop':
				var scrollTop;
				if(typeof window.pageYOffset != 'undefined'){
				scrollTop = window.pageYOffset;
				}
				else
				if(typeof document.compatMode != 'undefined' &&
				document.compatMode != 'BackCompat'){
				scrollTop = document.documentElement.scrollTop;
				}
				else 
				if(typeof document.body != 'undefined'){
				scrollTop = document.body.scrollTop;
				}
				return scrollTop;break;
			default :return 0;break;
		}
}

  function css(obj, attr)
{
	var re=[];
		switch(attr){
		case 'rotate':var transformstr=obj.currentStyle?obj.currentStyle['transform']:document.defaultView.getComputedStyle(obj, false)['webkitTransform']||document.defaultView.getComputedStyle(obj, false)['msTransform']||document.defaultView.getComputedStyle(obj, false)['MozTransform']||document.defaultView.getComputedStyle(obj, false)['OTransform']||document.defaultView.getComputedStyle(obj, false)['transform']+"";
								var matrixarray=transformstr.split(",");
								re.push(Math.asin(matrixarray[1])/Math.PI*180);return re;break;
			default :
			re.push(parseInt(obj.currentStyle?obj.currentStyle[attr]:document.defaultView.getComputedStyle(obj, false)[attr]));return re;break;
		}
}
 function drag(obj){//实现拖拽，参数为对象
	obj.onmousedown=function (ev){//按下鼠标
	var oev=ev||event;
	var disX=oev.clientX-obj.offsetLeft;
	var disY=oev.clientY-obj.offsetTop;
	document.onmousemove=function (ev){//拖动鼠标
	var oev=ev||event;
	var left=oev.clientX-disX;
	var top=oev.clientY-disY;
	obj.style.left=left+'px';//更新对象的位置
	obj.style.top=top+'px';
	}
	document.onmouseup=function (){//抬起鼠标
	document.onmousemove=null;
	document.onmouseup=null;
	}
	}
 }

