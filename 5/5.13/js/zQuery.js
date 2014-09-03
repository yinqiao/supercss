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
 var newcolor="rgba("+r+","+g+","+b+","+a+")";
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
function index(current, obj)
{ //获取元素索引值
	for (var i = 0; i < obj.length; i++)
	{ 
		if (obj[i] == current) 
		{ 
			return i; 
		} 
	} 
} 

function viewsize(attr)
{//获取可视区尺寸，参数为height|width
	switch(attr)
		{
			case 'height':return document.body.offsetHeight||document.documentElement.clientHeight;break;
			case 'width':return document.body.offsetWidth||document.documentElement.clientWidtht;break;
			default :return 0;break;
		}
}
/**************************************************运动框架*****************************************************/
  function css(obj, attr, value)
{
	var re=[];
	if(arguments.length==2)
	{
		if(attr=='opacity')
		{
			re.push(Math.round(100*parseFloat(obj.currentStyle?obj.currentStyle[attr]:document.defaultView.getComputedStyle(obj, false)[attr])));
		}
		else if(attr=='rotate')
		{
						var transformstr=obj.currentStyle?obj.currentStyle['transform']:document.defaultView.getComputedStyle(obj, false)['webkitTransform']||document.defaultView.getComputedStyle(obj, false)['msTransform']||document.defaultView.getComputedStyle(obj, false)['MozTransform']||document.defaultView.getComputedStyle(obj, false)['OTransform']||document.defaultView.getComputedStyle(obj, false)['transform']+"";
						var matrixarray=transformstr.split(",");
						re.push(Math.ceil(Math.acos(matrixarray[3])/Math.PI*180));
		}
		else if (attr=='translate')//transform 2d转换中的translate
		{
			var transformstr=obj.currentStyle?obj.currentStyle['transform']:document.defaultView.getComputedStyle(obj, false)['webkitTransform']||document.defaultView.getComputedStyle(obj, false)['msTransform']||document.defaultView.getComputedStyle(obj, false)['MozTransform']||document.defaultView.getComputedStyle(obj, false)['OTransform']||document.defaultView.getComputedStyle(obj, false)['transform']+"";
			var matrixarray=transformstr.split(",");
			
			re.push(parseInt(matrixarray[4]));re.push(parseInt(matrixarray[5]));
		}else if (attr=='translateX')//transform 2d转换中的translateX
		{
			var transformstr=obj.currentStyle?obj.currentStyle['transform']:document.defaultView.getComputedStyle(obj, false)['webkitTransform']||document.defaultView.getComputedStyle(obj, false)['msTransform']||document.defaultView.getComputedStyle(obj, false)['MozTransform']||document.defaultView.getComputedStyle(obj, false)['OTransform']||document.defaultView.getComputedStyle(obj, false)['transform']+"";
			var matrixarray=transformstr.split(",");
			re.push((parseInt(matrixarray[4])));
		}else if (attr=='translateY')//transform 2d转换中的translateY
		{
			var transformstr=obj.currentStyle?obj.currentStyle['transform']:document.defaultView.getComputedStyle(obj, false)['webkitTransform']||document.defaultView.getComputedStyle(obj, false)['msTransform']||document.defaultView.getComputedStyle(obj, false)['MozTransform']||document.defaultView.getComputedStyle(obj, false)['OTransform']||document.defaultView.getComputedStyle(obj, false)['transform']+"";
			var matrixarray=transformstr.split(",");
			re.push((parseInt(matrixarray[5])));
		}
		else if (attr=='transform')//transform 2d matrix方法
		{
			var transformstr=obj.currentStyle?obj.currentStyle['transform']:document.defaultView.getComputedStyle(obj, false)['webkitTransform']||document.defaultView.getComputedStyle(obj, false)['msTransform']||document.defaultView.getComputedStyle(obj, false)['MozTransform']||document.defaultView.getComputedStyle(obj, false)['OTransform']||document.defaultView.getComputedStyle(obj, false)['transform']+"";
			var matrixarray=transformstr.split(",");
			re.push(parseInt(matrixarray[0].match(/-?\d+(\.\d+)?/g)[0]*10000));//提出数组第一个字符串中的数字
			re.push(parseInt(matrixarray[1].match(/-?\d+(\.\d+)?/g)[0]*10000));
			re.push(parseInt(matrixarray[2].match(/-?\d+(\.\d+)?/g)[0]*10000));
			re.push(parseInt(matrixarray[3].match(/-?\d+(\.\d+)?/g)[0]*10000));
			re.push(parseInt(matrixarray[4].match(/-?\d+(\.\d+)?/g)[0]*10000));
			re.push(parseInt(matrixarray[5].match(/-?\d+(\.\d+)?/g)[0]*10000));
//						console.log(parseInt(matrixarray[0].match(/-?\d+(\.\d+)?/g)[0]*10000)+" "+
//							parseInt(matrixarray[1].match(/-?\d+(\.\d+)?/g)[0]*10000)+" "+
//			parseInt(matrixarray[2].match(/-?\d+(\.\d+)?/g)[0]*10000)+" "+
//			parseInt(matrixarray[3].match(/-?\d+(\.\d+)?/g)[0]*10000)+" "+
//			parseInt(matrixarray[4].match(/-?\d+(\.\d+)?/g)[0]*10000)+" "+
//			parseInt(matrixarray[5].match(/-?\d+(\.\d+)?/g)[0]*10000));
		}
		else
		{
			re.push(parseInt(obj.currentStyle?obj.currentStyle[attr]:document.defaultView.getComputedStyle(obj, false)[attr]));
		}
		return re;
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
				value[0]=Math.max(value[0],0);
			case 'left':
			case 'top':
			case 'marginLeft':
			case 'marginTop':
			case 'marginRight':
			case 'marginBottom':
				obj.style[attr]=value[0]+'px';
				break;
			case 'opacity':
				obj.style.filter="alpha(opacity:"+value[0]+")";
				obj.style.opacity=value[0]/100;
				break;
			case 'rotate':
			obj.style.webkitTransform="rotate(" + value[0]+ "deg)";
			obj.style.msTransform="rotate(" + value[0]+ "deg)";
			obj.style.MozTransform="rotate(" + value[0] + "deg)";
			obj.style.OTransform="rotate(" + value[0]+ "deg)";
			obj.style.transform="rotate(" + value[0] + "deg)";
			break;
			case 'translate':
			obj.style.webkitTransform="translate(" + value[0] + "px,"+value[1]+"px)";
			obj.style.msTransform="translate(" + value[0] + "px,"+value[1]+"px)";
			obj.style.MozTransform="translate(" + value[0] + "px,"+value[1]+"px)";
			obj.style.OTransform="translate(" + value[0] + "px,"+value[1]+"px)";
			obj.style.transform="translate(" + value[0] + "px,"+value[1]+"px)";
			break;
			case 'translateX':obj.style.webkitTransform="translateX(" + value[0] + "px)";
			obj.style.msTransform="translateX(" + value[0] + "px)";
			obj.style.MozTransform="translateX(" + value[0] + "px)";
			obj.style.OTransform="translateX(" + value[0] + "px)";
			obj.style.transform="translateX(" + value[0] + "px)";
			break;
			case 'translateY':obj.style.webkitTransform="translateY(" + value[0] + "px)";
			obj.style.msTransform="translateY(" + value[0] + "px)";
			obj.style.MozTransform="translateY(" + value[0] + "px)";
			obj.style.OTransform="translateY(" + value[0] + "px)";
			obj.style.transform="translateY(" + value[0] + "px)";
			break;
			case 'transform':obj.style.webkitTransform="matrix(" + value[0] + ","+value[1] + ","+value[2] + ","+value[3] + ","+value[4] + ","+value[5] +")";
			obj.style.msTransform="matrix(" + value[0] + ","+value[1] + ","+value[2] + ","+value[3] + ","+value[4] + ","+value[5] +")";
			obj.style.MozTransform="matrix(" + value[0] + ","+value[1] + ","+value[2] + ","+value[3] + ","+value[4] + ","+value[5] +")";
			obj.style.OTransform="matrix(" + value[0] + ","+value[1] + ","+value[2] + ","+value[3] + ","+value[4] + ","+value[5] +")";
			obj.style.transform="matrix(" + value[0] + ","+value[1] + ","+value[2] + ","+value[3] + ","+value[4] + ","+value[5] +")";
			break;
			default:
				obj.style[attr]=value[0];
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

/*------------------------------------运动函数中的全局变量-------------------------------------------*/
var attr='';
var next=[];
var cur;
var stopBtn=false;
function do_buffer_move(obj, oTarget, fnCallBack, fnDuring)
{
	stopBtn=false;var count=0;
	if(!obj.speed)obj.speed={};//该对象的速度属性，包括多个属性值速度，如果未定义则定义
	for(attr in oTarget)
	{
		if(!obj.speed[attr]){obj.speed[attr]=[];}//该对象的某一属性的速度值，值为该属性的速度值的数组
		cur=css(obj, attr);
		if (attr=='transform')
		{
			for (var j=0;j<cur.length ;j++)
			{
				if(undefined==obj.speed[attr][j])obj.speed[attr][j]=0;//在该对象目前的属性中，若某一速度参数未定义，则定义
				var temp=parseInt(oTarget[attr][j]*10000);
				if(Math.abs(temp-cur[j])>1000)//由于小数的特殊性，无法保证两数一致，相差很小时忽略差距
				{
					obj.speed[attr][j]=(temp-cur[j])/5;
					obj.speed[attr][j]=obj.speed[attr][j]>0?Math.ceil(obj.speed[attr][j]):Math.floor(obj.speed[attr][j]);
					next[j]=(cur[j]+obj.speed[attr][j])/10000;
					//console.log(j+" "+attr+" "+cur[j]+' '+obj.speed[attr][j]+' '+next[j]+' '+oTarget[attr][j]) ;//运动过程中的参数值
				}
				else{
					next[j]=parseInt(oTarget[attr][j]*10000)/10000;//已经到达目标的值保持
					count++;//记录以达到目标的个数
					//console.log(attr+"count"+count);
				}
			}
		}
		else{
				for (var j=0;j<cur.length ;j++)
				{
					if(undefined==obj.speed[attr][j])obj.speed[attr][j]=0;//在该对象目前的属性中，若某一速度参数未定义，则定义
					if(oTarget[attr][j]!=cur[j])
					{
						oTarget[attr][j]=parseInt(oTarget[attr][j]);
						obj.speed[attr][j]=(oTarget[attr][j]-cur[j])/5;
						obj.speed[attr][j]=obj.speed[attr][j]>0?Math.ceil(obj.speed[attr][j]):Math.floor(obj.speed[attr][j]);
						next[j]=cur[j]+obj.speed[attr][j];
						//console.log(j+" "+attr+" "+cur[j]+' '+obj.speed[attr][j]+' '+next[j]+' '+oTarget[attr][j]) ;//运动过程中的参数值
					}
					else{
						next[j]=oTarget[attr][j];//已经到达目标的值保持
						count++;//记录以达到目标的个数
						//console.log(attr+"count"+count);
					}
				}
				}
				css(obj,attr,next);
		}
		var allattr=0;//所有属性计数器清零
		for(attr in oTarget)
		{
			for (var i=0;i<oTarget[attr].length; i++)
			{
				allattr++;//计算出所有属性个数
			}
		}
		//console.log(count+" "+allattr);//以达个数与总个数对比
		if(count==allattr){stopBtn=true;}//当所有属性都达到目标时停止开关打开
	
	if(fnDuring)fnDuring.call(obj);
	if(stopBtn)
	{
		obj.speed={};
		//console.log("本次运动完成");
		clearInterval(obj.timer);
		if(fnCallBack)fnCallBack.call(obj);
	}
}
function do_flex_move(obj, oTarget, fnCallBack, fnDuring)
{
	stopBtn=false;var count=0;//有关是否运动的变量
	if(!obj.speed)obj.speed={};//该对象的速度属性，包括多个属性值速度，如果未定义则定义
	for(attr in oTarget)
	{
		if(!obj.speed[attr]){obj.speed[attr]=[];}//该对象的某一属性的速度值，值为该属性的速度值的数组
		//console.log(obj.speed[attr]);
		cur=css(obj, attr);
		if (attr=='transform')
		{
			for (var j=0;j<cur.length ;j++)
			{		
				if(undefined==obj.speed[attr][j])obj.speed[attr][j]=1;//在该对象目前的属性中，若某一速度参数未定义，则定义
				var temp=parseInt(oTarget[attr][j]*10000);
				if(Math.abs(parseInt(obj.speed[attr][j]))!=0)
				{
					obj.speed[attr][j]+=(temp-cur[j])/5;
					obj.speed[attr][j]*=0.7;
					obj.speed[attr][j]=parseInt(obj.speed[attr][j]);
					next[j]=(cur[j]+obj.speed[attr][j])/10000;
					//console.log(j+" "+attr+" "+cur[j]+' '+obj.speed[attr][j]+' '+next[j]+' '+oTarget[attr][j]) ;//运动过程中的参数值
				}
				else
				{
					next[j]=parseInt(oTarget[attr][j]*10000)/10000;//已经到达目标的值保持
					count++;//记录以达到目标的个数
					//console.log(attr+"count"+count);
				}
			}
		}else{
			for (var j=0;j<cur.length ;j++)
			{				
				if(undefined==obj.speed[attr][j])obj.speed[attr][j]=1;//在该对象目前的属性中，若某一速度参数未定义，则定义
				if(Math.abs(obj.speed[attr][j])!=0)
				{
					obj.speed[attr][j]+=(oTarget[attr][j]-cur[j])/5;
					obj.speed[attr][j]*=0.7;
					obj.speed[attr][j]=parseInt(obj.speed[attr][j]);
					next[j]=cur[j]+obj.speed[attr][j];
					//console.log(j+" attr "+attr+" "+cur[j]+' '+obj.speed[attr][j]+' '+next[j]+' '+oTarget[attr][j]) ;//运动过程中的参数值
				}
				else
				{
					next[j]=oTarget[attr][j];//已经到达目标的值保持
					count++;//记录以达到目标的个数
					//console.log(attr+"count"+count);
				}
			}
		}
		css(obj,attr,next);
	}
	
	var allattr=0;//所有属性计数器清零
		for(attr in oTarget)
		{
			for (var i=0;i<oTarget[attr].length; i++)
			{
				allattr++;//计算出所有属性个数
			}
		}
		//console.log(count+" "+allattr);//以达个数与总个数对比
		if(count==allattr){stopBtn=true;}//当所有属性都达到目标时停止开关打开
	
	if(fnDuring)fnDuring.call(obj);
	if(stopBtn)
	{
		obj.speed={};
		//console.log("本次运动完成");
		clearInterval(obj.timer);
		if(fnCallBack)fnCallBack.call(obj);
	}
}


/**************************************************运动框架结束*****************************************************/
