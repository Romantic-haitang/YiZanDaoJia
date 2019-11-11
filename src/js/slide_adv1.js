import $ from "jquery"
function Slide_adv(name1){
   var i=0;
   var inter;
   
   //定时器调用
   inter = setInterval(moveStart,2000);
   
	//1）轮播区域  宽  高   定位 超过区域隐藏
	var obj = $("."+name1);

	obj.parent().css({
		"position":"relative",
		"overflow":"hidden",
//		"height":"500px"
	});
	
//	广告运动的盒子  宽  高  定位   左边距离  右边距离
//求取父亲盒子的宽度
    var wid=obj.parent().width();
//  求取父亲盒子的高度
     var hei=obj.parent().height();
//求取广告图片的张数
    var num = obj.children("img").length;
//  广告运动的盒子  宽  高  定位   左边距离  上边距离
    obj.css({
    	"width":(wid*num)+"px",
    	"height":hei+"px",
    	"position":"absolute",
    	"left":"0px",
    	"top":"0px",
    });
    
//  盒子中图片样式的制作
//  宽  高  定位  左边距离  上边距离
   obj.children("img").each(function(i,ele){
// 	  console.log(i);
//    i 图片的索引值
//    console.log(ele);
//    设定样式
      $(ele).css({
      	  "width":wid+"px",
      	  "height":hei+"px",
      	  "position":"absolute",
      	  "top":"0px",
      	  "left":(i*wid)+"px",

      });
   });
   //构建ul的字符串
   var btnStr="<ul>";
   for(var j=0;j<num-1;j++){
   	  btnStr += "<li>"+(j+1)+"</li>"
   }
   btnStr += "</ul>";
   //设定btnStr的css样式
   var btn = $(btnStr);
   btn.css({
// 	  定位
//   层次
      "position":"absolute",
      "bottom":"0px",
      "left":wid/2+"px",
      "z-index":1000,
      "color":"white"
   });
   //将btn 加入到banner盒子
   obj.parent().append(btn);
   //设置btn中li的css样式
   btn.children("li").css({
      "width":"10px",
      "height":"10px",
      "float":"left",
      "background-color":"gray",
      "margin-right":"10px",
      "line-height":"10px",
      "text-align":"center",
      "border-radius":"50%",
      "font-size":"12px",
      "cursor":"pointer"
   });
   
   
   // 默认第一个按钮为红色
   btn.children("li").eq(0).css("background-color","white");
   
   
   // 布局两个按钮
   var divLeft=$("<div><</div>");
   var divRight=$("<div>></div>");
   //设定css样式
   $(divLeft).css({
      "position":"absolute",     
      "z-index":1000,
      "color":"white",
   	  "top":"50px",
      "left":"0px",
      "width":"15px",
      "height":"35px",
      "text-align":"center",
      "line-height":"35px",
      "font-size":"15px",
      "background-color":"rgba(150,150,150,.3)",
      "cursor":"pointer"
      
   });
   $(divRight).css({
   	   "position":"absolute",     
       "z-index":1000,
       "color":"white",
       "top":"50px",
       "right":"0px",
       "width":"15px",
      "height":"35px",
       "text-align":"center",
       "line-height":"35px",
       "font-size":"15px",
       "background-color":"rgba(150,150,150,.3)",
       "cursor":"pointer"
   });
    obj.parent().append(divLeft);
    obj.parent().append(divRight);
   
   
   //鼠标事件   
   btn.children("li").click(function(){
   	 //停止定时器
   	 clearInterval(inter);
   	 //设定当前的i值
   	  i=$(this).index();
   	  btn.children("li").css("background-color","gray").eq(i).css("background-color","red");
   	 //调用move函数
   	 move();
   });
// 点击左边按钮
   $(divLeft).click(function(){

   	  moveRight();
   });
   //点击右边按钮
   $(divRight).click(function(){

   	  moveStart();
   });
   //停止动画
   obj.parent().mouseenter(function(){
   	  clearInterval(inter);
   }).mouseleave(function(){
     inter = setInterval(moveStart,2000);
   })
   
   
//移动开始函数
   function moveStart(){
   	//大于等于5 重置所有状态
   	  if(i>=num-1){
   	  	i=0;
   	  	obj.css("left","0px");
   	  }
   	   i++;
   	   if(i>=num-1){
   	   	 btn.children("li").css("background-color","gray").eq(0).css("background-color","red");
   	   }else{
   	       btn.children("li").css("background-color","gray").eq(i).css("background-color","red");
   	   }
// 	   console.log(i);
   	   //移动广告
   	   move()
   }
  
   function moveRight(){
   	//大于等于5 重置所有状态
   	  if(i<=0){
   	  	i=num-1;
   	  	obj.css("left",-(num-1)*wid+"px");
   	  }
   	   i--;
   	   if(i>=num-1){
   	   	 btn.children("li").css("background-color","gray").eq(0).css("background-color","red");
   	   }else{
   	       btn.children("li").css("background-color","gray").eq(i).css("background-color","red");
   	   }
// 	   console.log(i);
   	   //移动广告
   	   move()
   }
   //实现自动滚动的效果
   function move(){   	   
   	   obj.animate({
   	   	  "left":-(i*wid)+"px"
   	   },500);
   }
}


export default Slide_adv