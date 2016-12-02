window.onload=function(){
     var headleft=$(".headleft");
	 var location=$(".location");
	 for(i=0;i<location.length;i++){
	 	headleft[i].index=i;
	 	headleft[i].onmouseover=function(){
	 		location[this.index].style.display="block";
	 	}
	 	headleft[i].onmouseout=function(){
	 		location[this.index].style.display="none";
	 	}
	 }



     var wode=$(".wode");
	 var myjd=$(".myjd");
	 for(i=0;i<myjd.length;i++){
	 	wode[i].index=i;
	 	wode[i].onmouseover=function(){
	 		myjd[this.index].style.display="block";
	 	}
	 	wode[i].onmouseout=function(){
	 		myjd[this.index].style.display="none";
	 	}
	 }




     var clain=$(".clain");
	 var clainewm=$(".clainewm");
	 for(i=0;i<clainewm.length;i++){
	 	clain[i].index=i;
	 	clain[i].onmouseover=function(){
	 		clainewm[this.index].style.display="block";
	 	}
	 	clain[i].onmouseout=function(){
	 		clainewm[this.index].style.display="none";
	 	}
	 }


     var serve=$(".serve");
	 var servenr=$(".servenr");
	 for(i=0;i<servenr.length;i++){
	 	serve[i].index=i;
	 	serve[i].onmouseover=function(){
	 		servenr[this.index].style.display="block";
	 	}
	 	serve[i].onmouseout=function(){
	 		servenr[this.index].style.display="none";
	 	}
	 }
    



     var sj=$(".sj");
	 var kehuduan=$(".kehuduan");
	 for(i=0;i<kehuduan.length;i++){
	 	sj[i].index=i;
	 	sj[i].onmouseover=function(){
	 		kehuduan[this.index].style.display="block";
	 	}
	 	sj[i].onmouseout=function(){
	 		kehuduan[this.index].style.display="none";
	 	}
	 }
    


     var headnav=$(".headnav");
	 var headnavnr=$(".headnavnr");
	 for(i=0;i<headnavnr.length;i++){
	 	headnav[i].index=i;
	 	headnav[i].onmouseover=function(){
	 		headnavnr[this.index].style.display="block";
	 	}
	 	headnav[i].onmouseout=function(){
	 		headnavnr[this.index].style.display="none";
	 	}
	 }


     var gwc=$(".gwc");
	 var gwclist=$(".gwclist");
	 for(i=0;i<gwclist.length;i++){
	 	gwc[i].index=i;
	 	gwc[i].onmouseover=function(){
	 		gwclist[this.index].style.display="block";
	 	}
	 	gwc[i].onmouseout=function(){
	 		gwclist[this.index].style.display="none";
	 	}
	 }


// bannerÑ¡Ïî¿¨
var well=$(".well");
 var lsbx=$(".lsbx");
  for(var i=0;i<well.length;i++){
    well[i].index=i;
    well[i].onmouseover=function(){
     lsbx[this.index].style.display="block";
     this.style.background="#f7f7f7";
    }
  }
  for(var i=0;i<well.length;i++){
    well[i].index=i;
    well[i].onmouseout=function(){
     lsbx[this.index].style.display="none";
     this.style.background="#c81623";
    }
  }





    var middle=$(".banmid")[0];
	var imgs=$("a",$(".imgbox")[0]);
	var lis=$("li",$(".imglist")[0]);
	var btnr=$(".btnr")[0];
	var btnl=$(".btnl")[0];
	// Ã’Â³ÃƒÃ¦Â³ÃµÃŠÂ¼Â»Â¯
	imgs[0].style.zIndex=10;
	lis[0].style.background="red";
	//Ã—Ã”Â¶Â¯Ã‚Ã–Â²Â¥
	//Â¼Ã‡Ã‚Â¼ÂµÂ±Ã‡Â°ÃÂ¼Ã†Â¬ÃÃ‚Â±Ãª
	var now=0;
	var t=setInterval(move,2000);
	//ÃŠÃ³Â±ÃªÃ’Ã†ÃˆÃ«ÃÂ£  Ã’Ã†Â³Ã¶Ã‚Ã–Â²Â¥
	middle.onmouseover=function(){
		clearInterval(t);
	}
	middle.onmouseout=function(){
		t=setInterval(move,2000);
	}


	for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onclick=function(){
        	for(var i=0;i<imgs.length;i++){
        		// imgs[i].style.zIndex=5;
                animate(imgs[i],{opacity:0});
        		lis[i].style.background="";
        	}
        lis[this.index].style.background="red";
		// imgs[this.index].style.zIndex=10;
        animate(imgs[this.index],{opacity:1});
		now=this.index;
        }
	}
	

	function move(){
		now++;
		if(now==imgs.length){
			now=0;
		}
		for(var i=0;i<imgs.length;i++){
			// imgs[i].style.zIndex=5;
            animate(imgs[i],{opacity:0});
			lis[i].style.background="";
		}
		lis[now].style.background="red";
		// imgs[now].style.zIndex=10;
        animate(imgs[now],{opacity:1});
	}

    function movel(){
		now--;
		if(now<0){
			now=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			// imgs[i].style.zIndex=5;
            animate(imgs[i],{opacity:0});
			lis[i].style.background="";
		}
		lis[now].style.background="red";
		// imgs[now].style.zIndex=10;
        animate(imgs[now],{opacity:1});
	}

 btnr.onclick=function(){
  	move()
  }
  btnl.onclick=function(){
  	movel()
  }




  
var f1middle=$(".f1two2")[0];
	var f1imgs=$("a",$(".f1imgbox")[0]);
	var f1lis=$("li",$(".f1imglist")[0]);
	var f1btnr=$(".f1btnr")[0];
	var f1btnl=$(".f1btnl")[0];
    var f1mw=parseInt(getStyle(f1middle,"width"));
for(var i=0;i<f1imgs.length;i++){
    if(i==0){
        continue;
    }
    f1imgs[i].style.left=f1mw+"px";  
    
}

f1lis[0].style.background="red"; 

var f1now=0;
var f1next=0;
var r=setInterval(f1move,2000);


 f1middle.onmouseover=function(){
		clearInterval(r);
	}
 f1middle.onmouseout=function(){
		r=setInterval(f1move,2000);
	}


for(var i=0;i<f1lis.length;i++){
	f1lis[i].index=i;
	f1lis[i].onclick=function(){
	if(f1now>this.index){
		f1imgs[this.index].style.left=-f1mw+"px";	    
        animate(f1imgs[f1now],{left:f1mw});
        animate(f1imgs[this.index],{left:0});
    }else if(f1now<this.index){
        f1imgs[this.index].style.left=f1mw+"px";	    
        animate(f1imgs[f1now],{left:-f1mw});
        animate(f1imgs[this.index],{left:0});
    }else{
    	return;
    }
        f1lis[f1now].style.background="";
	    f1lis[this.index].style.background="red";
        f1now=this.index;
        f1next=this.index;
	}
}


function f1move(){
	f1next++;
	if(f1next==f1imgs.length){
		f1next=0;
		}

	f1imgs[f1next].style.left=f1mw+"px";
	f1lis[f1now].style.background="";
	f1lis[f1next].style.background="red";
    animate(f1imgs[f1now],{left:-f1mw});
    animate(f1imgs[f1next],{left:0},function(){flag=true});
    f1now=f1next;
}



function f1movel(){
	f1next--;
	if(f1next<0){
		f1next=f1imgs.length-1;
		}
	f1imgs[f1next].style.left=-f1mw+"px";
	f1lis[f1now].style.background="";
	f1lis[f1next].style.background="red";
    animate(f1imgs[f1now],{left:f1mw});
    animate(f1imgs[f1next],{left:0},function(){flag=true});
    f1now=f1next;
}


var flag=true;
f1btnr.onclick=function(){
	if(flag){
		f1move();
		flag=false;
	}
}
f1btnl.onclick=function(){
	if(flag){
		f1movel();
		flag=false;
	}
}







// like
var like=$(".like")[0];
var likenr=$(".likenr")[0];
// var likeR=$(".right")[0];
var spans=$("span",likenr)[0];
var likeNwm=parseInt(getStyle(likenr,"width"));
var pwm=parseInt(getStyle(spans,"width"));

likenr.onmouseover=function(){
	        spans.style.left=0;            
            animate(spans,{left:likeNwm-pwm},400);
        }
likenr.onmouseout=function(){
            spans.style.left=likeNwm-pwm+"px";
        }


var lnr=$(".lnr",like);
var change=$(".change",like)[0];
var now=0;
var next=0;
for(var i=0;i<lnr.length;i++){
        lnr[i].style.zIndex="0";
    }
    lnr[0].style.zIndex="3";
change.onclick=function(){
        next=now+1;
        if(next==lnr.length){
            next=0;
        }
        for(var i=0;i<lnr.length;i++){
            lnr[i].style.zIndex="0";
        }
        lnr[next].style.zIndex="3";
        now=next;
    }




//商品区
function spsel(obj){
        var ftopr=$(".ftopr",obj)[0];
    	var divv=$("div",ftopr);
    	var spans=$("span",ftopr);
    	var slwm=[];
        var f1xxs=$(".f1xxs",obj);
    	//初始化
    	for(var i=0;i<divv.length;i++){
            divv[i].style.width=getStyle(divv[i],"width");
            slwm.push(divv[i].offsetWidth);
    	}
    	spans[0].className="tithot";
    	spans[0].style.width=slwm[0]-1+"px";
    	for(var j=0;j<divv.length;j++){
    		divv[j].index=j;
    		divv[j].onmouseover=function(){
    			for(var i=0;i<divv.length;i++){
    				spans[i].className="";
    				spans[i].style.width="auto";
                    f1xxs[i].style.display="none"
    			}
		    	spans[this.index].className="tithot";
		    	spans[this.index].style.width=slwm[this.index]-1+"px";
                f1xxs[this.index].style.display="block" 
    		}
    	}
    }
var nr=$(".nr");
for(var i=0;i<nr.length-1;i++){
	spsel(nr[i]);
} 
        var f2=$(".f2")[0];
        var f2topr=$(".f2topr",f2)[0];
    	var divv2=$("div",f2topr);
    	var spans2=$("span",f2topr);
    	var slwm2=[];
        var f2xx2s=$(".f2xx2s",f2);
    	//初始化
    	for(var i=0;i<divv2.length;i++){
            divv2[i].style.width=getStyle(divv2[i],"width");
            slwm2.push(divv2[i].offsetWidth);
    	}
    	spans2[0].className="tithot";
    	spans2[0].style.width=slwm2[0]-1+"px";
    	for(var j=0;j<divv2.length;j++){
    		divv2[j].index=j;
    		divv2[j].onmouseover=function(){
    			for(var i=0;i<divv2.length;i++){
    				spans2[i].className="";
    				spans2[i].style.width="auto";
                    f2xx2s[i].style.display="none"
    			}
		    	spans2[this.index].className="tithot";
		    	spans2[this.index].style.width=slwm2[this.index]-1+"px";
                f2xx2s[this.index].style.display="block" 
    		}
    	}



        var f3=$(".f3")[0];
        var f3topr=$(".f3topr",f3)[0];
    	var divv3=$("div",f3topr);
    	var spans3=$("span",f3topr);
    	var slwm3=[];
        var f3xx3s=$(".f3xx3s",f3);
    	//初始化
    	for(var i=0;i<divv3.length;i++){
            divv3[i].style.width=getStyle(divv3[i],"width");
            slwm3.push(divv3[i].offsetWidth);
    	}
    	spans3[0].className="tithot";
    	spans3[0].style.width=slwm3[0]-1+"px";
    	for(var j=0;j<divv3.length;j++){
    		divv3[j].index=j;
    		divv3[j].onmouseover=function(){
    			for(var i=0;i<divv3.length;i++){
    				spans3[i].className="";
    				spans3[i].style.width="auto";
                    f3xx3s[i].style.display="none"
    			}
		    	spans3[this.index].className="tithot";
		    	spans3[this.index].style.width=slwm3[this.index]-1+"px";
                f3xx3s[this.index].style.display="block" 
    		}
    	}    	



        var f4=$(".f4")[0];
        var f4topr=$(".f4topr",f4)[0];
    	var divv4=$("div",f4topr);
    	var spans4=$("span",f4topr);
    	var slwm4=[];
        var f4xx4s=$(".f4xx4s",f4);
    	//初始化
    	for(var i=0;i<divv4.length;i++){
            divv4[i].style.width=getStyle(divv4[i],"width");
            slwm4.push(divv4[i].offsetWidth);
    	}
    	spans4[0].className="tithot";
    	spans4[0].style.width=slwm4[0]-1+"px";
    	for(var j=0;j<divv4.length;j++){
    		divv4[j].index=j;
    		divv4[j].onmouseover=function(){
    			for(var i=0;i<divv4.length;i++){
    				spans4[i].className="";
    				spans4[i].style.width="auto";
                    f4xx4s[i].style.display="none"
    			}
		    	spans4[this.index].className="tithot";
		    	spans4[this.index].style.width=slwm4[this.index]-1+"px";
                f4xx4s[this.index].style.display="block" 
    		}
    	}    	




    	var f5=$(".f5")[0];
        var f5topr=$(".f5topr",f5)[0];
    	var divv5=$("div",f5topr);
    	var spans5=$("span",f5topr);
    	var slwm5=[];
        var f5xx5s=$(".f5xx5s",f5);
    	//初始化
    	for(var i=0;i<divv5.length;i++){
            divv5[i].style.width=getStyle(divv5[i],"width");
            slwm5.push(divv5[i].offsetWidth);
    	}
    	spans5[0].className="tithot";
    	spans5[0].style.width=slwm5[0]-1+"px";
    	for(var j=0;j<divv5.length;j++){
    		divv5[j].index=j;
    		divv5[j].onmouseover=function(){
    			for(var i=0;i<divv5.length;i++){
    				spans5[i].className="";
    				spans5[i].style.width="auto";
                    f5xx5s[i].style.display="none"
    			}
		    	spans5[this.index].className="tithot";
		    	spans5[this.index].style.width=slwm5[this.index]-1+"px";
                f5xx5s[this.index].style.display="block" 
    		}
    	}    	


        var f6=$(".f6")[0];
        var f6topr=$(".f6topr",f6)[0];
    	var divv6=$("div",f6topr);
    	var spans6=$("span",f6topr);
    	var slwm6=[];
        var f6xx6s=$(".f6xx6s",f6);
    	//初始化
    	for(var i=0;i<divv6.length;i++){
            divv6[i].style.width=getStyle(divv6[i],"width");
            slwm6.push(divv6[i].offsetWidth);
    	}
    	spans6[0].className="tithot";
    	spans6[0].style.width=slwm6[0]-1+"px";
    	for(var j=0;j<divv6.length;j++){
    		divv6[j].index=j;
    		divv6[j].onmouseover=function(){
    			for(var i=0;i<divv6.length;i++){
    				spans6[i].className="";
    				spans6[i].style.width="auto";
                    f6xx6s[i].style.display="none"
    			}
		    	spans6[this.index].className="tithot";
		    	spans6[this.index].style.width=slwm6[this.index]-1+"px";
                f6xx6s[this.index].style.display="block" 
    		}
    	}    	





    	var f7=$(".f7")[0];
        var f7topr=$(".f7topr",f7)[0];
    	var divv7=$("div",f7topr);
    	var spans7=$("span",f7topr);
    	var slwm7=[];
        var f7xx7s=$(".f7xx7s",f7);
    	//初始化
    	for(var i=0;i<divv7.length;i++){
            divv7[i].style.width=getStyle(divv7[i],"width");
            slwm7.push(divv7[i].offsetWidth);
    	}
    	spans7[0].className="tithot";
    	spans7[0].style.width=slwm7[0]-1+"px";
    	for(var j=0;j<divv7.length;j++){
    		divv7[j].index=j;
    		divv7[j].onmouseover=function(){
    			for(var i=0;i<divv7.length;i++){
    				spans7[i].className="";
    				spans7[i].style.width="auto";
                    f7xx7s[i].style.display="none"
    			}
		    	spans7[this.index].className="tithot";
		    	spans7[this.index].style.width=slwm7[this.index]-1+"px";
                f7xx7s[this.index].style.display="block" 
    		}
    	}    	



    	var f8=$(".f8")[0];
        var f8topr=$(".f8topr",f8)[0];
    	var divv8=$("div",f8topr);
    	var spans8=$("span",f8topr);
    	var slwm8=[];
        var f8xx8s=$(".f8xx8s",f8);
    	//初始化
    	for(var i=0;i<divv8.length;i++){
            divv8[i].style.width=getStyle(divv8[i],"width");
            slwm8.push(divv8[i].offsetWidth);
    	}
    	spans8[0].className="tithot";
    	spans8[0].style.width=slwm8[0]-1+"px";
    	for(var j=0;j<divv8.length;j++){
    		divv8[j].index=j;
    		divv8[j].onmouseover=function(){
    			for(var i=0;i<divv8.length;i++){
    				spans8[i].className="";
    				spans8[i].style.width="auto";
                    f8xx8s[i].style.display="none"
    			}
		    	spans8[this.index].className="tithot";
		    	spans8[this.index].style.width=slwm8[this.index]-1+"px";
                f8xx8s[this.index].style.display="block" 
    		}
    	}    	




    	var f9=$(".f9")[0];
        var f9topr=$(".f9topr",f9)[0];
    	var divv9=$("div",f9topr);
    	var spans9=$("span",f9topr);
    	var slwm9=[];
        var f9xx9s=$(".f9xx9s",f9);
    	//初始化
    	for(var i=0;i<divv9.length;i++){
            divv9[i].style.width=getStyle(divv9[i],"width");
            slwm9.push(divv9[i].offsetWidth);
    	}
    	spans9[0].className="tithot";
    	spans9[0].style.width=slwm9[0]-1+"px";
    	for(var j=0;j<divv9.length;j++){
    		divv9[j].index=j;
    		divv9[j].onmouseover=function(){
    			for(var i=0;i<divv9.length;i++){
    				spans9[i].className="";
    				spans9[i].style.width="auto";
                    f9xx9s[i].style.display="none"
    			}
		    	spans9[this.index].className="tithot";
		    	spans9[this.index].style.width=slwm9[this.index]-1+"px";
                f9xx9s[this.index].style.display="block" 
    		}
    	}    	




    	var f10=$(".f10")[0];
        var f10topr=$(".f10topr",f10)[0];
    	var divv10=$("div",f10topr);
    	var spans10=$("span",f10topr);
    	var slwm10=[];
        var f10xx10s=$(".f10xx10s",f10);
    	//初始化
    	for(var i=0;i<divv10.length;i++){
            divv10[i].style.width=getStyle(divv10[i],"width");
            slwm10.push(divv10[i].offsetWidth);
    	}
    	spans10[0].className="tithot";
    	spans10[0].style.width=slwm10[0]-1+"px";
    	for(var j=0;j<divv10.length;j++){
    		divv10[j].index=j;
    		divv10[j].onmouseover=function(){
    			for(var i=0;i<divv10.length;i++){
    				spans10[i].className="";
    				spans10[i].style.width="auto";
                    f10xx10s[i].style.display="none"
    			}
		    	spans10[this.index].className="tithot";
		    	spans10[this.index].style.width=slwm10[this.index]-1+"px";
                f10xx10s[this.index].style.display="block" 
    		}
    	}    	



    	var f11=$(".f11")[0];
        var f11topr=$(".f11topr",f11)[0];
    	var divv11=$("div",f11topr);
    	var spans11=$("span",f11topr);
    	var slwm11=[];
        var f11xx11s=$(".f11xx11s",f11);
    	//初始化
    	for(var i=0;i<divv11.length;i++){
            divv11[i].style.width=getStyle(divv11[i],"width");
            slwm11.push(divv11[i].offsetWidth);
    	}
    	spans11[0].className="tithot";
    	spans11[0].style.width=slwm11[0]-1+"px";
    	for(var j=0;j<divv11.length;j++){
    		divv11[j].index=j;
    		divv11[j].onmouseover=function(){
    			for(var i=0;i<divv11.length;i++){
    				spans11[i].className="";
    				spans11[i].style.width="auto";
                    f11xx11s[i].style.display="none"
    			}
		    	spans11[this.index].className="tithot";
		    	spans11[this.index].style.width=slwm11[this.index]-1+"px";
                f11xx11s[this.index].style.display="block" 
    		}
    	}    	









lunbo(".f3two1",".f3imglist",".f3btnl",".f3btnr");
lunbo(".f4two1",".f4imglist",".f4btnl",".f4btnr");
lunbo(".f5two1",".f5imglist",".f5btnl",".f5btnr");
lunbo(".f10thtop",".f10imglist",".f10btnl",".f10btnr");
lunbo(".f11two1",".f11imglist",".f11btnl",".f11btnr");
lunbo(".f12two1",".f12imglist",".f12btnl",".f12btnr");
lunbo(".f12fr1",".f12imglist1",".f12btnl1",".f12btnr1");
lunbotu(".f6th",".f6lbtu",".f6imglist",".f6btnl",".f6btnr");
lunbotu(".f7th",".f7lbtu",".f7imglist",".f7btnl",".f7btnr");
lunbotu(".f8th",".f8lbtu",".f8imglist",".f8btnl",".f8btnr");
lunbotu(".f9th",".f9lbtu",".f9imglist",".f9btnl",".f9btnr");

// ½ÚµãÂÖ²¥
var gt=$(".gt")[0];
var zhual=$(".zhual")[0];
var zhuar=$(".zhuar")[0];
var gtto=$(".gtto")[0];
var img=$(".t2")[0];
var flag3=true;
var width=parseInt(getStyle(img,"width"));
var e=setInterval(rmove,2000);
function rmove(){
    animate(gtto,{left:-width},function(){
    var first=firstChild(gtto);
    gtto.appendChild(first);
    gtto.style.left=0;
    flag3=true;
  }) 
}
  gt.onmouseover=function(){
    clearInterval(e);
    zhual.style.display="block";
  	zhuar.style.display="block";
  }
  gt.onmouseout=function(){
    e=setInterval(rmove,2000);
    zhual.style.display="none";
  	zhuar.style.display="none";
  }
  zhual.onclick=function(){
    var last=lastChild(gtto);
    var first=firstChild(gtto);
    gtto.insertBefore(last,first);
    gtto.style.left=-width+"px";
    animate(gtto,{left:0});
  }
  zhuar.onclick=function(){
    rmove();
  }




// 天天低价轮播
var lunbodj=$(".djth")[0];
var djbox=$(".djthbox")[0];
var djlb=$(".djlb",djbox);
var aw=parseInt(getStyle(djlb[0],"height"))
djbox.style.width=aw*djlb.length+"px";
var p=setInterval(movej,3000);
function movej(){
    animate(djbox,{top:-aw},600,function(){
    	var first=firstChild(djbox);
    	djbox.appendChild(first);
    	djbox.style.top="0px";
    })
}

function movejl(){
	var first=firstChild(djbox);
	var last=lastChild(djbox);
	djbox.insertBefore(last,first);
	djbox.style.top=-aw+"px";
	animate(djbox,{top:0},600);

}


lunbo.onmouseover=function(){
		clearInterval(p);
	}
lunbo.onmouseout=function(){
		p=setInterval(movej,3000);
	}





// 边界导航

// document.documentElement.scrollTop=1;
// var obj=document.documentElement.scrollTop?document.documentElement:document.body;
// var ele=$(".ele")[0];
// // var li=$("li");
// var nr=$(".nr")
// var bm=$(".bm")
// var am=$(".am")
// var flagtop=1
// var flagdown=true
// var nows=0
// window.onscroll=function  () {
//   if(obj.scrollTop>=900){
//     if (flagtop==1) {
//       ele.style.display="block"
//       flagtop=2
//       flagdown=true
//     }
//   }
//   else{
//     if (flagdown==true) {
//       ele.style.display="none"
//       flagtop=1
//       flagdown=false
//     }
//   }
//   for (var i = 0; i < nr.length; i++) {
//     if(nr[i].offsetTop<=obj.scrollTop+150){
//       for (var j = 0; j < am.length; j++) {
//         bm[j].style.display="none"
//         // am[j].style.display="none"
//       }
//       bm[i].style.display="block"
//       // am[i].style.display="block"
//       nows=i
//     }
//   };
// }
// var elect=$(".elect")
// var li=$("li")
// for (var i = 0; i < bm.length; i++) {
//   bm[i].rr=i;
//   bm[i].onmouseover=function(){
//     bm[this.rr].style.display="block";
//   }
//   bm[i].onmouseout=function(){
//     bm[this.rr].style.display="none";
//   }
// };
// for (var k=0;k<bm.length;k++) {
//   bm[k].tt=k;
//   bm[k].onclick=function(){
//     animate(obj,{scrollTop:nr[this.tt].offsetTop-150},600);
//       am[this.tt].style.display="none";
//       bm[this.tt].style.display="block";
      
//       nows=this.tt;
//   }
//   }



    var elect=$(".elect")[0];
    var li=$("li",elect);
    var eleflag=true;
    var nr=$(".nr");
    for(var i=0;i<nr.length;i++){
        nr[i].hh=nr[i].offsetTop;
    }
    window.onscroll=function(){
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        var bodyh=$("body")[0].offsetHeight;
        if(obj.scrollTop>=nr[0].hh-700&&obj.scrollTop<bodyh-1000){
            elect.style.display="block";
        }else{
            elect.style.display="none";
        }
        if(eleflag){
          for(var i=0;i<li.length;i++){
            if(obj.scrollTop>=nr[i].hh-280){
                for(var j=0;j<nr.length;j++){
                    $(".bm",li[j])[j].style.display="none";
                    $(".am",li[j])[j].style.display="block";
                    // tradetit1s[j].style.backgroundImage="url(images/floor1new.png)"
                }
                $(".bm",li[i])[i].style.display="block";
                $(".am",li[i])[i].style.display="none";
                // tradetit1s[i].style.backgroundImage="url(images/tradetit.png)"
            }else if(obj.scrollTop<nr[0].hh-300){
                $(".bm",li[0])[0].style.display="none";
                $(".am",li[0])[0].style.display="block";
                // tradetit1s[0].style.backgroundImage="url(images/floor1new.png)"
            }
          }
        }
    }
    //左侧导航点击事件
    for(var i=0;i<li.length;i++){
        li[i].index=i;
        li[i].onclick=function(){
            eleflag=false;
            var obj=document.documentElement.scrollTop?document.documentElement:document.body;
            animate(obj,{scrollTop:nr[this.index].hh-160},function(){
                eleflag=true;
            });
        }
    }
    // 右侧导航
    var sidediv=$("div",$(".bar")[0]);
    for(var i=0;i<sidediv.length;i++){
        sidediv[i].index=i;
        /*hover(sidelis[i],function(){
            this.style.backgroundColor="#c81623";
            animate($("span",this)[0],{left:-60});
        },function(){
            animate($("span",this)[0],{left:0});
            this.style.backgroundColor="#7a6e6e";
        })*/
        sidediv[i].onmouseover=function(){
            this.index.backgroundColor="#c81623";
            animate($("p",this)[0],{left:-60},200);
        }
        sidediv[i].onmouseout=function(){
            var that=this.index;
            animate($("p",this)[0],{left:1},200,function(){
               sidediv[that].style.backgroundColor="#7a6e6e";
            })
        }
    }



// $(document).ready(function(){
//            console.log($("img.lazy").length)
//             $("img.lazy").lazyload({
//           threshold : -100
//                 });
//           })

}