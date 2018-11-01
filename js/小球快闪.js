// ball1();
// rectangle1();
// circle1();

//音乐
var musicbut=document.querySelector(".musicbut");
var audioevent=document.querySelector("audio");
var musicfalg=true;
musicbut.onclick=function () {
    musicfalg=!musicfalg;
    if(musicfalg==true){
        musicbut.value="关闭音乐";
    }
    else {
        musicbut.value="开启音乐";
    }
}


//时间
function time(){
        var caltime=document.querySelector(".caltime");
        var timenum=0;
        var timer=setInterval(function () {
            timenum++;
            caltime.innerText="你挺住了"+timenum+"秒";
        },1000);
}



//rectangle1 正方形1
    function rectangle1() {
    var box=document.querySelector(".box");
    var ball = document.querySelector(".rectangle1");
    var moveleft = 19;
    var movetop = 7;
    var maxwidth = box.offsetWidth - ball.offsetWidth;
    var maxheight = box.offsetHeight- ball.offsetHeight;
    var currentleft=0;
    var currentheight=0;
        var timer = setInterval(function () {
            currentleft +=  moveleft;
            currentheight +=movetop;
            if (currentleft>maxwidth){
                currentleft=maxwidth;
                moveleft=-moveleft;
            }
            else if(currentleft<=0){
                currentleft=0;
                moveleft=-moveleft;
            }
            if(currentheight>maxheight){
                currentheight=maxheight;
                movetop=-movetop;
            }
            else if(currentheight<=0){
                currentheight=0;
                movetop=-movetop;
            }
            ball.style.left = currentleft + "px";
            ball.style.top = currentheight + "px";
            strikeold(ball,timer);



    }, 200)
}

     //圆形1
    function circle1() {
    var box=document.querySelector(".box");
    var ball = document.querySelector(".circle1");
    var moveleft = 30;
    var movetop = 10;
    var maxwidth = box.offsetWidth - ball.offsetWidth;
    var maxheight = box.offsetHeight- ball.offsetHeight;
    var currentleft=0;
    var currentheight=0;
    var timer = setInterval(function () {
        currentleft +=  moveleft;
        currentheight +=movetop;
        if (currentleft>maxwidth){
            currentleft=maxwidth;
            moveleft=-moveleft;
        }
        else if(currentleft<=0){
            currentleft=0;
            moveleft=-moveleft;
        }
        if(currentheight>maxheight){
            currentheight=maxheight;
            movetop=-movetop;
        }
        else if(currentheight<=0){
            currentheight=0;
            movetop=-movetop;
        }
        ball.style.left = currentleft + "px";
        ball.style.top = currentheight + "px";
        strikeold(ball,timer);
    }, 100)
}

    //小球1
    function ball1() {
        var box=document.querySelector(".box");
        var ball = document.querySelector(".ball1");
        var moveleft = 10;
        var movetop = 10;
        var maxwidth = box.offsetWidth - ball.offsetWidth;
        var maxheight = box.offsetHeight- ball.offsetHeight;
        var currentleft=0;
        var currentheight=0;
        var timer = setInterval(function () {
            currentleft +=  moveleft;
            currentheight +=movetop;
            if (currentleft>maxwidth){
                currentleft=maxwidth;
                moveleft=-moveleft;
            }
            else if(currentleft<=0){
                currentleft=0;
                moveleft=-moveleft;
            }
            if(currentheight>maxheight){
                currentheight=maxheight;
                movetop=-movetop;
            }
            else if(currentheight<=0){
                currentheight=0;
                movetop=-movetop;
            }
            ball.style.left = currentleft + "px";
            ball.style.top = currentheight + "px";
            strikeold(ball,timer);
        }, 200)
    }

    //长方形2
function rectangle2() {
    var box=document.querySelector(".box");
    var ball = document.querySelector(".rectangle2");
    var moveleft = 10;
    var movetop = 10;
    var maxwidth = box.offsetWidth - ball.offsetWidth;
    var maxheight = box.offsetHeight- ball.offsetHeight;
    var currentleft=0;
    var currentheight=0;
    var timer = setInterval(function () {
        currentleft +=  moveleft;
        currentheight +=movetop;
        if (currentleft>maxwidth){
            currentleft=maxwidth;
            moveleft=-moveleft;
        }
        else if(currentleft<=0){
            currentleft=0;
            moveleft=-moveleft;
        }
        if(currentheight>maxheight){
            currentheight=maxheight;
            movetop=-movetop;
        }
        else if(currentheight<=0){
            currentheight=0;
            movetop=-movetop;
        }
        ball.style.left = currentleft + "px";
        ball.style.top = currentheight + "px";
        strikeold(ball,timer);
    }, 100)
}

//圆形2
function circle2() {
    var box=document.querySelector(".box");
    var ball = document.querySelector(".circle2");
    var moveleft = 5;
    var movetop = 7;
    var maxwidth = box.offsetWidth - ball.offsetWidth;
    var maxheight = box.offsetHeight- ball.offsetHeight;
    var currentleft=0;
    var currentheight=0;
    var timer = setInterval(function () {
        currentleft +=  moveleft;
        currentheight +=movetop;
        if (currentleft>maxwidth){
            currentleft=maxwidth;
            moveleft=-moveleft;
        }
        else if(currentleft<=0){
            currentleft=0;
            moveleft=-moveleft;
        }
        if(currentheight>maxheight){
            currentheight=maxheight;
            movetop=-movetop;
        }
        else if(currentheight<=0){
            currentheight=0;
            movetop=-movetop;
        }
        ball.style.left = currentleft + "px";
        ball.style.top = currentheight + "px";
        strikeold(ball,timer);
    }, 100)
}



//点击开始
var target=document.querySelector(".target");
var box=document.querySelector(".box");
var falg=false;  //鼠标按下标记
var downfalg=true;
var downX;
var downY;
var timefalg=true;  //右边计时标记
var lifalg=true;
var eventtimer=true;
target.onmousedown=function (e) {
    paomadeng();  //触发跑马灯
    falg=true;//鼠标按下标记
    if(timefalg==true){
        time(); //触发计时

        timefalg=!timefalg;

    }
    if(lifalg==true){
        event(); //触发跑马灯
        lifalg=!lifalg;
    }
    //音乐
    if(musicfalg){
        audioevent.play();
    }



    downX=e.clientX-target.offsetLeft;
    downY=e.clientY-target.offsetTop;
    // console.log(downX);
    if(downfalg==true){
        ball1();
        rectangle1();
        circle1();
        rectangle2();
        circle2();
        downfalg=false;
    }


}
window.onmousemove=function (e) {
    if(falg==true){
        var moveX=e.clientX;
        var moveY=e.clientY;
        // console.log(moveX,box.offsetLeft);
        if(moveX<box.offsetLeft+target.offsetWidth/2+2){
            moveX=box.offsetLeft+target.offsetWidth/2+2;
        }
        if(moveY<box.offsetTop+target.offsetHeight/2){
            moveY=box.offsetTop+target.offsetHeight/2;
        }
        if(moveX>box.offsetLeft+box.offsetWidth-target.offsetWidth/2){
            moveX=box.offsetLeft+box.offsetWidth-target.offsetWidth/2;
        }
        if(moveY>box.offsetTop+box.offsetHeight-target.offsetHeight/2){
            moveY=box.offsetTop+box.offsetHeight-target.offsetHeight/2;
        }
        target.style.left=moveX-downX+"px";
        target.style.top=moveY-downY+"px";


    }
}
target.onmouseup=function () {
    falg=false;
}

//原有的元素触发碰撞
function strikeold(obj,timer){

    if((target.offsetLeft-obj.offsetLeft-obj.offsetWidth<0 && target.offsetTop-obj.offsetTop-obj.offsetHeight<0) &&( obj.offsetLeft-target.offsetWidth<target.offsetLeft  && obj.offsetTop-target.offsetHeight<target.offsetTop) ){
        clearInterval(timer);
        audioevent.pause();
        alert("没了1");
        location.href="./小球快闪.html";

    }
}
//新生的元素触发碰撞
function strikenew(obj,timer){

    // console.log(target.offsetWidth);
    // console.log(target.offsetLeft);
    if((target.offsetLeft-obj.offsetLeft-obj.offsetWidth+400<0 && target.offsetTop-obj.offsetTop-obj.offsetHeight+100<0)    &&( obj.offsetLeft-target.offsetWidth-400<target.offsetLeft  && obj.offsetTop-target.offsetHeight-100<target.offsetTop) ){
        clearInterval(timer);
        audioevent.pause();
        alert("没了2");
        location.href="./小球快闪.html";
    }
}



//跑马灯事件
function event() {
    var even=document.querySelectorAll(".even ul li");
    var index=0;
    // var rand=parseInt(Math.random()*21+70,10);
    var rand=parseInt(parseInt(Math.random()*(10-1+1)+10,10));
    var randnum=0;
    var timer=setInterval(function () {
        randnum++;
        if(randnum>=rand){
            clearInterval(timer);
            indexevent(index);
            return;
        }
        // console.log(randnum);
            if(index>even.length-1){
                index=0;
            }
            for(var i=0;i<even.length;i++){
                even[i].style.backgroundColor="white";
            }
            even[index].style.backgroundColor="red";
            index++;
            // console.log(index);

    },200)


    // 对应的触发事件
    function indexevent(index) {
        switch (index) {
            case 1:
                bird();
                break;
            case 2:
                whale();
                break;
            case 3:
                arrow();
                break;
            case 4:
                star();
                break;
        }
    }


}

//跑马灯被调用函数
function paomadeng() {
    if(eventtimer==true){
        eventtimer=false;
        var pmdtimer=setInterval(function () {
            // clearInterval(pmdtimer);
            event();
            console.log("触发");
        },5000);
    }

}







//小鸟事件

function bird() {
    var bird=document.querySelector(".bird");
    bird.style.display="block";

    setTimeout(function () {
        egg();

    },9000);
}

//下蛋事件

function egg() {
    var egg=document.querySelector(".egg");
    egg.style.display="block";
    // egg.style.opacity=1;
    var timer=setInterval(function () {
        strikenew(egg,timer);

    },500);
    var eggnone=setTimeout(function () {
        egg.style.display="none";
    },8500);

}
// 蓝海精灵
function whale() {
    var whale=document.querySelector(".whale");
    whale.style.display="block";
    var timer=setInterval(function () {
        strikenew(whale,timer);
    },500);

}
// 百发百中
function arrow() {
    var arrow=document.querySelector(".arrow");
    arrow.style.display="block";
    var timer=setInterval(function () {
        strikenew(arrow,timer);
    },500);
}
// 陨星天降
function star() {
    var star=document.querySelector(".star");
    star.style.display="block";
    var timer=setInterval(function () {
        strikenew(star,timer);
    },500);
}


