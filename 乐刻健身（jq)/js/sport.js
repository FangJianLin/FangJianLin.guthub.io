$(function(){
	
	//      具体的假数据

        var date1 = new Date();
        var date2 = date1.getFullYear()+"/"+(date1.getMonth()+1)+"/"+date1.getDate();

        var data = {"鱼人马甲":{"时间":"10:00-12:00","人数":"12","教练":"Mike","日期":"2017/11/29","难易程度":"4","运动简介":"鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲"},
		            "腹肌撕裂":{"时间":"07:00-08:00","人数":"10","教练":"Jay","日期":"2017/11/30","难易程度":"2","运动简介":"腹肌撕裂鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲"},
		            "长跑运动":{"时间":"11:00-12:00","人数":"7","教练":"Mirke","日期":"2017/11/28","难易程度":"2","运动简介":"长跑运动鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲"},
		            "户外登山":{"时间":"09:00-14:00","人数":"7","教练":"Mitke","日期":"2017/11/27","难易程度":"3","运动简介":"户外登山鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲"},
		            "产后运动":{"时间":"14:00-16:00","人数":"4","教练":"Sike","日期":"2017/11/28","难易程度":"4","运动简介":"产后运动鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲"},
		            "手臂练习":{"时间":"20:00-22:00","人数":"3","教练":"Join","日期":"2017/11/29","难易程度":"2","运动简介":"手臂练习鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲"},
		            "引体向上":{"时间":"16:00-17:00","人数":"2","教练":"Mikess","日期":"2017/11/26","难易程度":"3","运动简介":"引体向上鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲鱼人马甲"},
		}
              
        var data2 = [];   //运动，时间，人数，教练，日期，难易程度，简介
        
        
	
//		分页点击右标
		$(".white-right").click(function(){	
			$(".fenye").css("display","none");
			$(this).next().css("display","block");
			$(this).next().find("#my-course").css("display","block");
			$(".yidong").css("left","-100%");		
			$(".choose-area>input").show();
			$(".choose-area>input").val("");
			$(".shuruzhi").text("");			
		});
		
		
//		返回按钮
		$(".head-title-first").click(function(){
			var _left = parseInt($(".yidong").css("left"))+$(".yidong").width();	
			$(this).parent().parent().css("display","none");
			$("#on-vip").css("display","none"); 
			$("#no-vip").css("display","none"); 
			$(".yidong").css("left",_left);
			coureinti();
		});
		
//		输入框
		$(".choose-area>input").blur(function(){
			if($(this).val()!=""){
				$(this).next().text($(this).val());	
			    $(this).hide();
			}		
		});
		
//		保存按钮
		$("#store").click(function(){
			var s=[];
			$(".shuruzhi").each(function(){			
				if($(this).text()==""){			
					s.push($(this).prev().prev().text());					
				}			
			});	
			if(s.length!=0){			
				$("#comfirm").text(s.join("、")+"未输入");
				$("#comfirm").fadeTo(1000,1);
				$("#comfirm").fadeTo(1000,0);
			}else{
				$(".yidong").css("left","0");
			}
		});
		
//		会员卡选择
		$(".choose-area2>span:first-child").click(function(){		 
			$(".choose-area2>span:first-child").each(function(){			
				var that=this;
				$(that).removeClass("on-choose-span");
			});
			$(this).toggleClass("on-choose-span");
		});
		
//		点击出现买会员界面
        $(".white-right").eq(2).click(function(){     	    	
        	var panding =[];     	
        	$(".no-choose-span").each(function(){
        		if($(this).hasClass("on-choose-span")){
        			panding.push($(this));
        		}
        	});
        	if(panding.length!=0){
        		$("#on-vip").css("display","block"); 		
        	}else{       
        		$("#no-vip").css("display","block");       	    
        	}
        });

//      买会员 
        $("#buy").click(function(){     
        	var now = new Date();
        	if($(".no-choose-span").hasClass("on-choose-span")){
        		if($("#become-vip-comfirm").hasClass("hasbuy")){
        			$("#on-vip").css("display","none"); 
			        $("#no-vip").css("display","none");
	        		$(".yidong").css("left","0");
	        	}else{
	        		var getpassword="";
		        	for (var i=1;i<8;i++) {
		        		var s=Math.floor(Math.random()*8+1);	         		
		        		getpassword=getpassword+s;
		        	}
	        		$("#no-vip").css("display","none");
	      	        $("#become-vip-comfirm").css("display","block").addClass("hasbuy");
	        	    $("#become-vip-comfirm").children("#get-password").find("span").eq(1).text(getpassword);        	       	    
	        	}    	        	
        	}else{
        		$("#no-pay").fadeTo(1000,1);
        		$("#no-pay").fadeTo(1000,0);
        	}  
        	$(".vip-imformation").eq(0).text($("#become-vip-comfirm>#get-password").find("span").eq(1).text());      
	        $(".vip-imformation").eq(1).text(parseInt($("#no-vip>.choose-area2").children(".on-choose-span").next().next().text())+"元健身月卡");   
	        $(".vip-imformation").eq(2).text(-parseInt($("#no-vip>.choose-area2").children(".on-choose-span").next().text())*30+"天");  
	        if($(".vip-imformation").eq(3).text()!=""){
	        	$(".vip-imformation").eq(3).text((parseInt($(".vip-imformation").eq(3).text())+parseInt($("#no-vip>.choose-area2").children(".on-choose-span").next().text())*30)+"天");
	        }else if($(".vip-imformation").eq(3).text()==""){
	        	$(".vip-imformation").eq(3).text((parseInt($("#no-vip>.choose-area2").children(".on-choose-span").next().text())*30)+"天");
	        }     
        });
        
        $("#continue-vip").click(function(){
        	$("#no-vip").css("display","block");
        	$(".no-choose-span").removeClass("on-choose-span");
        	$("#on-vip").css("display","none");
        });
     
     
     //      评价教练
        $(".pingjia").click(function(){
        	$(".yidong").css("left","-200%");
        	$("#pingjiajiemian").css("display","block");
        });
  
//       添加满意等级
       
        $(".pingjia-xinxin").find("img").click(function(){     
        	if($(this).attr("src")=="img/xinxin-white_07.png"){
        		if($(this).index()!=0){
	        		if($(this).prev().attr("src")=="img/xinxin-orange_03.png"){
	        			$(this).attr("src","img/xinxin-orange_03.png");
	        		}
	        	}else{
	        		$(this).attr("src","img/xinxin-orange_03.png");
	        	}
        	}else if($(this).attr("src")=="img/xinxin-orange_03.png"){
        		if($(this).index()!=4){
        			if($(this).next().attr("src")=="img/xinxin-white_07.png"){
        				$(this).attr("src","img/xinxin-white_07.png");
        			}     			
        		}else{
        			$(this).attr("src","img/xinxin-white_07.png");
        		}
        	}       	
        }); 
        
        $("#submit").click(function(){
        	$(".yidong").css("left","-100%");
        	
        	$(".pingjia-xinxin").find("img").attr("src","img/xinxin-white_07.png");     	
        	$(".liuyankuang").children("textarea").val("");
        });
   
   
   //      课程界面       
   
        $(".white-right").eq(1).click(function(){
        	if($("#course-show").children('div').eq(0).children().length==0){
        		$("#no-sport-p").css("display","block");
      		    $("#add-sport-btn").addClass("add-sport-btn1");
        	}else{    	
      		    $("#add-sport-btn").addClass("add-sport-btn2");
        	}
        });
        
        
//      添加课程

        $("#add-sport-btn").click(function(){       	
        	$(".yidong").css("left","-200%");
        	$("#week-sportscourse>div").css("display","block");          
            gettime();          
        });
               
	   sportinit();
	  
     //     根据日期选择运动
       
       $(".date>ul:first-child").find("li").click(function(){
       	   var week = ["日","一","二","三","四","五","六"];
       	   var day="";
       	   for (var i=0;i<week.length;i++) {
       	   	  if(week[i]==$(this).html()){
       	   	  	  day = $(".date>ul:last-child").find("li").eq(i).html();
       	   	  }
       	   }
       	   $(".date>ul:first-child").find("li").removeClass("color-orange");
       	   $(this).addClass("color-orange");
       	   $(".date>ul:last-child").find("li").removeClass("bgcolor-orange");
       	   $(".date>ul:last-child").find("li").eq($(this).index()).addClass("bgcolor-orange");   	   
       	   date2 = date1.getFullYear()+"/"+(date1.getMonth()+1)+"/"+day;   
     	   removesport();
       	   sportinit();
       });
       
        $(".date>ul:last-child").find("li").click(function(){       
       	   $(".date>ul:last-child").find("li").removeClass("bgcolor-orange");
       	   $(this).addClass("bgcolor-orange");
       	   $(".date>ul:first-child").find("li").removeClass("color-orange");
       	   $(".date>ul:first-child").find("li").eq($(this).index()).addClass("color-orange");     	   
       	   date2 = date1.getFullYear()+"/"+(date1.getMonth()+1)+"/"+$(this).html();  
     	   removesport();
       	   sportinit();
       });
        
        
        //      显示时间的函数
        
        function gettime(){
        	var montharray1 = [31,28,31,30,31,30,31,31,30,31,30,31];
        	var montharray2 = [31,29,31,30,31,30,31,31,30,31,30,31];
        	var day = [];      	
        	var now = new Date();
        	var year = now.getFullYear();
        	var month = now.getMonth();
        	var nowday = now.getDay();
        	var nowdate = now.getDate();
        	var startday = nowdate-nowday;
        	$(".date>ul:first-child").find("li").eq(nowday).addClass("color-orange");
      	    $(".date>ul:first-child").find("li").eq(nowday).siblings().removeClass("color-orange");
        	$(".date>ul:last-child").find("li").eq(nowday).addClass("bgcolor-orange"); 
      	    $(".date>ul:last-child").find("li").eq(nowday).siblings().removeClass("bgcolor-orange");
         	
            if(startday>0){                 	
	            for (var i=0;i<8;i++) {
	            	day.push(startday);
	            	startday++;
	            }  
            }else{
            	var montharray3=[];
            	var start=1;
            	if(year%400==0){
            		montharray3=montharray2;
            	}else{
            		montharray3=montharray1;
            	}
                for (var j=0;j<1-startday;i++) {
                    day.push(montharray3[month]+startday);
                    startday++;
                }
                for (var m=0;m<7+startday;m++) {                	
                	day.push(start);
                	start++;
                }
            }  
            
//          for (var k=0;k<8;k++) {
//          	$(".date>ul:last-child").find("li").eq(k).html(day[k]);
//          }
        };
       
//     当天的运动项目
       
        function removesport(){
        	$("#sport-table").html("");       	       	
        }
        
        function sportinit(){	
        	      	
        	data2=[];    
        	
	      	for (var key in data) {   
	        	var dandata=[];
	        	dandata.push(key);
	        	for (var key2 in data[key]) {
	        		dandata.push(data[key][key2]);
	        	}
	        	data2.push(dandata);
	        }
         
	        for (var i=0;i<data2.length;i++) {
	        	if(data2[i][4]==date2){        		
	        		var html="<div class='course-list'><div></div><div></div><div>可预约</div><div class='renweiman'>预约</div></div>";        		
	        		$("#sport-table").append(html);
	        		$(".course-list").find("div:first-child").last().text(data2[i][0]);
	        		$(".course-list").find("div:nth-child(2)").last().text(data2[i][1]);
	        		$(".course-list").find("div:nth-child(3)").css({"width":"1rem","text-align":"center"});
	        		$(".course-list").find("div:not(:first)").css("margin-left","0.55rem");	  
	        	}	        	
	        };	
	       	      
	    };
	    
	               
//    添加课程 
       
       
            
     
//      人数满时状态   
//      $(".course-list").find("div:last-child").click(function(){            
//      	var maxnumber;
//      	var index;
//      	for (var i=0;i<data2.length;i++) {
//      		if(data2[i][0]==$(this).prev().prev().text()){
//      			maxnumber=data2[i][2];   
//      			index=i;
//      		}
//      	}
//      	    
//   	    if(++joinnumber[index]==maxnumber){
//   	    	$(this).addClass("renyiman").text("排队");
//   	    	$(this).prev().text("满员");
//   	    	alert("您选择的运动人数已满");
//   	    };
//      });
   
   
         var joinnumber=[];     
		    for (var i=0;i<data2.length;i++) {
		      	joinnumber.push(0);
		    };
        
        
   //    选择运动
   
        var chooseSport;       //储存选择的运动
        var index;
          
             
        $(".course-list").find("div:last-child").click(function(){
        	

        	if(joinnumber[$(".course-list").find("div:last-child").index($(this))]==1){
        		alert("您已经选择了这个运动");
        	}else{
        		chooseSport=data2[$(".course-list").find("div:last-child").index($(this))];
        		index=$(".course-list").find("div:last-child").index($(this))       		  
        		$(".yidong").css("left","-300%");
        		if($("#has-chat").html()){      		 	
        	    	$("#no-chat").css("display","block");
        	    }
        		var xuanze = $("#sport-imformation-basic").children("div").eq(0).children("p");
        	    $("#sport-imformation").css("display","block");  
        	    xuanze.eq(0).children("span").eq(1).text(data2[$(".course-list").find("div:last-child").index($(this))][0]);    
        	    xuanze.eq(1).children("span").eq(1).text(data2[$(".course-list").find("div:last-child").index($(this))][3]);
        	    xuanze.eq(2).children("span").eq(1).text(data2[$(".course-list").find("div:last-child").index($(this))][5]);
        	    $("#sport-imformation-basic").children("div").eq(1).children("p").eq(1).text(data2[$(".course-list").find("div:last-child").index($(this))][6]);  
        	};     	
        });
        
        
    //      预约界面
        
        $("#buy-now").click(function(){
        	joinnumber[index]++;
        	$(".yidong").css("left","-200%");
        	$("#course-show").css("display","block");
        	$("#course-show").children("div").eq(0).append("<div class='course-list-style'><div><p></p><p></p><p></p></div><div><p></p><p><span>教练:&nbsp;&nbsp;</span><span></span></p><p><span>地点:&nbsp;&nbsp;</span><span>城西银泰</span></p></div></div>");
        	$(".course-list-style:last-child").children("div").eq(0).children("p").eq(0).text(chooseSport[4].split("/")[1]+"月");
        	$(".course-list-style:last-child").children("div").eq(0).children("p").eq(1).text(chooseSport[4].split("/")[2]);
        	$(".course-list-style:last-child").children("div").eq(0).children("p").eq(2).text(chooseSport[1]);
        	$(".course-list-style:last-child").children("div").eq(1).children("p").eq(0).text(chooseSport[0]);
        	$(".course-list-style:last-child").children("div").eq(1).children("p").eq(1).find("span").eq(1).text(chooseSport[3]);
        	$("#no-sport-p").css("display","none");
        	$("#add-sport-btn").removeClass("add-sport-btn1").addClass("add-sport-btn2");
        });
             
             //      我的课程情况
        function coureinti(){
        	$("#course-show>ul>li:first-child").addClass("on-my-course-information").siblings().removeClass("on-my-course-information");        
            $("#course-show").children("div").eq(0).css("display","block");
            $("#course-show").children("div").not(":first").css("display","none");
        }
        
        coureinti();
     
        $(".no-class").each(function(){
        	if($(this).parent().children("div").length==1){
        		$(this).css("display","block");
        	}
        })
       
        
        $("#course-show>ul>li").click(function(){
        	$(this).addClass("on-my-course-information").siblings().removeClass("on-my-course-information");
            $("#course-show").children("div").css("display","none");  	
        	$("#course-show").children("div").eq($(this).index()).css("display","block");
        });     
            
});