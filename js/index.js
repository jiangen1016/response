/**
 * Created by hxsd on 2016/10/12.
 */
$(function(){
    $(".tabs-ul li").click(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".tabs-content").eq($(this).index()).siblings(".tabs-content").hide().end().fadeIn();
    })
    $(".backtop").on("click",function(){
        $("body").animate({"scrollTop":0},1000)
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>50){
            $(".backtop").css("opacity","1");
            $("#nav").addClass("navtop")
        }else{
            $(".backtop").css("opacity","0");
            $("#nav").removeClass("navtop")
        }
    });

    var index=0;
    setInterval(function(){
        $(".btn-right").click();
    },4000);
    $(".btn-left").click(function(){
        if(index>3)index=0;
        index++
        imgshow(index)
    })
    $(".btn-right").click(function(){
        if(index<0) index=3
        index--;
        imgshow(index)
    })
    function imgshow(index){
        $(".banner img").eq(index).addClass("imgshow").siblings("img").removeClass("imgshow")
        console.log(index)
    }
    imgshow(index)


    $(".list dl dd").on("click",function(){
        $(this).addClass("bgcolor")
    })
    $(".submit").on("click",function(){

           if($("input[name='name']").val()==""){
               alert("请填写姓名")
           }else if($("input[name='phone']").val()==""){
               alert("请填写你的电话")
           }else if($("input[name='email']").val()==""){
               alert("请填写你的邮箱")
           }else if($(".area").val()==""){
               alert("给点意见吧，亲")
           }else{
               alert("提交成功，感谢您的宝贵建议");
               $("form input").val("");
               $("form .area").val("");
           }

    })

    $(".navicon").on("click",function(){
        $(this).find(".dl").slideToggle(800);
    })


});
