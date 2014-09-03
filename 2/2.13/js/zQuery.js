 function rgb_color(){//随机rgb色生成函数，返回值为rgb颜色字符串
 var r=parseInt(Math.random()*255);
 var g=parseInt(Math.random()*255);
 var b=parseInt(Math.random()*255);
 var newcolor="rgb("+r+","+g+","+b+")";
 return newcolor;
 }
 function rgba_color(){//随机rgba色生成函数，返回值为rgba颜色字符串
 var r=parseInt(Math.random()*255);
 var g=parseInt(Math.random()*255);
 var b=parseInt(Math.random()*255);
 var a=Math.random();
 var newcolor="rgb("+r+","+g+","+b+","+a+")";
 return newcolor;
 }
  function getbyclass(parent,classname){//通过类名获取元素函数，参数为父元素、类名，返回值为元素数组
  var result=new Array();
  var allclass=parent.getElementsByTagName('*');
  for (var i=0; i<allclass.length;i++ )
  {

   if(classname==allclass[i].className)
	   result.push(allclass[i]);
  }
  return result;
  }
/**************************************************运动框架*****************************************************/
  function css(obj, attr, value)
{
	if(arguments.length==2)
	{
		if(attr=='opacity')
		{
			return Math.round(100*parseFloat(obj.currentStyle?obj.currentStyle[attr]:document.defaultView.getComputedStyle(obj, false)[attr]));
		}
		else if (attr=='translate')//transform 2d转换中的translate
		{
			var transformstr=obj.currentStyle?obj.currentStyle['transform']:document.defaultView.getComputedStyle(obj, false)['webkitTransform']||document.defaultView.getComputedStyle(obj, false)['msTransform']||document.defaultView.getComputedStyle(obj, false)['MozTransform']||document.defaultView.getComputedStyle(obj, false)['OTransform']||document.defaultView.getComputedStyle(obj, false)['transform']+"";
			var matrixarray=transformstr.split(",");
			var re=[];
			re.push(parseInt(matrixarray[4]));re.push(parseInt(matrixarray[5]));
			return re;
		}else if (attr=='translateX')//transform 2d转换中的translateX
		{
			var transformstr=obj.currentStyle?obj.currentStyle['transform']:document.defaultView.getComputedStyle(obj, false)['webkitTransform']||document.defaultView.getComputedStyle(obj, false)['msTransform']||document.defaultView.getComputedStyle(obj, false)['MozTransform']||document.defaultView.getComputedStyle(obj, false)['OTransform']||document.defaultView.getComputedStyle(obj, false)['transform']+"";
			var matrixarray=transformstr.split(",");
			var re=(parseInt(matrixarray[4]));
			return re;
		}else if (attr=='translateY')//transform 2d转换中的translateY
		{
			var transformstr=obj.currentStyle?obj.currentStyle['transform']:document.defaultView.getComputedStyle(obj, false)['webkitTransform']||document.defaultView.getComputedStyle(obj, false)['msTransform']||document.defaultView.getComputedStyle(obj, false)['MozTransform']||document.defaultView.getComputedStyle(obj, false)['OTransform']||document.defaultView.getComputedStyle(obj, false)['transform']+"";
			var matrixarray=transformstr.split(",");
			var re=(parseInt(matrixarray[5]));
			return re;
		}
		else
		{
			return parseInt(obj.currentStyle?obj.currentStyle[attr]:document.defaultView.getComputedStyle(obj, false)[attr]);
		}
	}
	else if(arguments.length==3)
		switch(attr)
		{
			case 'width':
			case 'height':
			case 'paddingLeft':
			case 'paddingTop':
			case 'paddingRight':
			case 'paddingBottom':
				value=Math.max(value,0);
			case 'left':
			case 'top':
			case 'marginLeft':
			case 'marginTop':
			case 'marginRight':
			case 'marginBottom':
				obj.style[attr]=value+'px';
				break;
			case 'opacity':
				obj.style.filter="alpha(opacity:"+value+")";
				obj.style.opacity=value/100;
				break;
			case 'translate':
			obj.style.webkitTransform="translate(" + value[0] + "px,"+value[1]+"px)";
			obj.style.msTransform="translate(" + value[0] + "px,"+value[1]+"px)";
			obj.style.MozTransform="translate(" + value[0] + "px,"+value[1]+"px)";
			obj.style.OTransform="translate(" + value[0] + "px,"+value[1]+"px)";
			obj.style.transform="translate(" + value[0] + "px,"+value[1]+"px)";
			break;
			case 'translateX':obj.style.webkitTransform="translateX(" + value + "px)";
			obj.style.msTransform="translateX(" + value + "px)";
			obj.style.MozTransform="translateX(" + value + "px)";
			obj.style.OTransform="translateX(" + value + "px)";
			obj.style.transform="translateX(" + value + "px)";
			break;
			case 'translateY':obj.style.webkitTransform="translateY(" + value + "px)";
			obj.style.msTransform="translateY(" + value + "px)";
			obj.style.MozTransform="translateY(" + value + "px)";
			obj.style.OTransform="translateY(" + value + "px)";
			obj.style.transform="translateY(" + value + "px)";
			break;
			default:
				obj.style[attr]=value;
		}
	
	return function (attr_in, value_in){css(obj, attr_in, value_in)};
}


function stop(obj)
{
	clearInterval(obj.timer);
}

function move(obj, oTarget, iType, fnCallBack, fnDuring)
{
	var fnMove=null;
	if(obj.timer)
	{
		clearInterval(obj.timer);
	}
	switch(iType)
	{
		case "buffer":
			fnMove=do_buffer_move;
			break;
		case "flex":
			fnMove=do_flex_move;
			break;
		default: 
			fnMove=do_buffer_move;
			break;
	}
	
	obj.timer=setInterval(function (){
		fnMove(obj, oTarget, fnCallBack, fnDuring);
	}, 30);
}

function do_buffer_move(obj, oTarget, fnCallBack, fnDuring)
{
	var bStop=true;
	var attr='';
	var speed=0;
	var cur=0;
	
	for(attr in oTarget)
	{
		cur=css(obj, attr);
		if(oTarget[attr]!=cur)
		{
			bStop=false;
			if(attr=="translate")
			{//x轴与y轴同时变化时
			if(!obj.oSpeed1)obj.oSpeed1={};//新开一个记录y轴速度的变量
			if(!obj.oSpeed1[attr])obj.oSpeed1[attr]=0;//新开一个记录translate属性y速度的变量
			if(!obj.oSpeed)obj.oSpeed={};
		    if(!obj.oSpeed[attr])obj.oSpeed[attr]=0;
			cur=css(obj, attr);
			obj.oSpeed[attr]=(oTarget[attr][0]-cur[0])/5;
			obj.oSpeed[attr]=obj.oSpeed[attr]>0?Math.ceil(obj.oSpeed[attr]):Math.floor(obj.oSpeed[attr]);
			var value1=cur[0]+obj.oSpeed[attr];
			obj.oSpeed1[attr]=(oTarget[attr][1]-cur[1])/5;
			obj.oSpeed1[attr]=obj.oSpeed1[attr]>0?Math.ceil(obj.oSpeed1[attr]):Math.floor(obj.oSpeed1[attr]);
			var value2=cur[1]+obj.oSpeed1[attr];
			var value=[];
			value.push(value1);
			value.push(value2);
			css(obj,attr,value);
			}
			else{
			speed=(oTarget[attr]-cur)/5;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			css(obj, attr, cur+speed);
			}
		}
	}
	
	if(fnDuring)fnDuring.call(obj);
	
	if(bStop)
	{
		clearInterval(obj.timer);
		obj.timer=null;
		
		if(fnCallBack)fnCallBack.call(obj);
	}
}

function do_flex_move(obj, oTarget, fnCallBack, fnDuring)
{
	var bStop=true;
	var attr='';
	var speed=0;
	var cur=0;
	
	for(attr in oTarget)
	{
		if(!obj.oSpeed)obj.oSpeed={};
		if(!obj.oSpeed[attr])obj.oSpeed[attr]=0;
		
		bStop=false;
		if(attr=="translate"){//x轴与y轴同时变化时
		if(!obj.oSpeed1)obj.oSpeed1={};//新开一个记录y轴速度的变量
		if(!obj.oSpeed1[attr])obj.oSpeed1[attr]=0;//新开一个记录translate属性y速度的变量
        cur=css(obj, attr);
		obj.oSpeed[attr]+=(oTarget[attr][0]-cur[0])/5;
		obj.oSpeed[attr]*=0.7;
		var value1=cur[0]+obj.oSpeed[attr];
		obj.oSpeed1[attr]+=(oTarget[attr][1]-cur[1])/5;
		obj.oSpeed1[attr]*=0.7;
		var value2=cur[1]+obj.oSpeed1[attr];
		var value=[];
		value.push(value1);
		value.push(value2);
		css(obj,attr,value);
		}else{
		if(Math.abs(oTarget[attr]-cur)>=1 || Math.abs(obj.oSpeed[attr])>=1)
		{
			cur=css(obj, attr);
			obj.oSpeed[attr]+=(oTarget[attr]-cur)/5;
			obj.oSpeed[attr]*=0.7;
			
			css(obj, attr, cur+obj.oSpeed[attr]);
		}
		}
	}
	
	if(fnDuring)fnDuring.call(obj);
	
	if(bStop)
	{
		clearInterval(obj.timer);
		obj.timer=null;
		
		if(fnCallBack)fnCallBack.call(obj);
	}
}
/**************************************************运动框架结束*****************************************************/
function index(current, obj){ //获取元素索引值
for (var i = 0; i < obj.length; i++) { 
if (obj[i] == current) { 
return i; 
} 
} 
} 