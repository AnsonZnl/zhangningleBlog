weixinShow.onmouseover=function(){
    weixinImg.style.display="block"
}
wechat.onmouseout=function(){
    weixinImg.style.display="none"
}

var bannerMain1= document.querySelector('.banner-main1');
var bannerMain2= document.querySelector('.banner-main2');
if(bannerMain1){
    var banneri= document.querySelector('.banner-li').children;
    banneri[0].onmouseover= function(){
        bannerMain1.style.display= 'block';
        bannerMain2.style.display= 'none';
        banneri[0].style.backgroundColor = "#ff9985";
        banneri[1].style.backgroundColor = "#848484";
    }
    banneri[1].onmouseover= function(){
        bannerMain1.style.display= 'none';
        bannerMain2.style.display= 'block';
        banneri[0].style.backgroundColor = "#848484";
        banneri[1].style.backgroundColor = "#ff9985";
    }
    
}else{
    console.log("undefined");
}
