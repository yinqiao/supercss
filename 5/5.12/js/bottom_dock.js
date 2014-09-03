//  本代码由任建智童鞋于2013/12/31最后编辑,2014年，新的开始！
//  仿苹果桌面底部DOCK栏，接近完美，您可以免费使用本代码，但请尊重作者劳动成果
//  HTML结构如下：
//  <div id="bottom_dock">
//  <a href="javascript:showplayer();" id="iTunes"><img src="imgs/iTunes.png" alt="iTunes" /></a>
//  ...中间可以加多个a标签
//  <div id="bottom_dock_background"><img src="imgs/dock.png" alt="background" /></div>
//  </div>
  $(function(){
//	  调整DOCK栏居中
	  var n=0;
	  var window_width=$(document.body).width();
	  var dock_width=$("#bottom_dock").width();
	  var left=parseInt((window_width-dock_width)/2);
	  $("#bottom_dock").css("left",left);
//鼠标悬浮事件
  $("#bottom_dock>a").hover(
  function(){
	  n=$(this).index();
	  dock_big(n);
	  if(0==n)
	  {
		dock_big_lite(n+1);
	  }
	  else if($("#bottom_dock>a").length==n)
	  {
		dock_big_lite(n-1);
	  }
	  else
	  {
		dock_big_lite(n-1);
		dock_big_lite(n+1);
	  }
	  },
//鼠标离开
	function(){
	  dock_small(n);
	  if(0==n)
	  {
		dock_small(n+1);
	  }
	  else if($("#bottom_dock>a").length==n)
	  {
		dock_small(n-1);
	  }
	  else
	  {
		dock_small(n-1);
		dock_small(n+1);
	  }
	}
	);//end hover
//	放大缩小函数
	function dock_big(index){
	$("#bottom_dock>a>img").eq(index).stop(true,false).animate({"width":"128px","height":"128px"},"fast","swing" );
	$("#bottom_dock").stop(true,false).animate({"left":left-46},"fast","swing");
	}
	function dock_small(index){
	$("#bottom_dock>a>img").eq(index).stop(true,false).animate({"width":"64px","height":"64px"},"fast","swing"  );
	$("#bottom_dock").stop(true,false).animate({"left":left},"fast","swing");
	}
	function dock_big_lite(index){
	$("#bottom_dock>a>img").eq(index).stop(true,false).animate({"width":"96px","height":"96px"},"fast","swing" );
	}
  })  