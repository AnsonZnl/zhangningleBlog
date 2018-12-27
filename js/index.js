
var banneri= document.querySelector('.banner-li').children;
banneri[0].onmouseover= function(){
    bannerImg.src="images/chatu2.png";
    banneri[0].style.backgroundColor = "#ff9985";
    banneri[1].style.backgroundColor = "#848484";
}
banneri[1].onmouseover= function(){
    bannerImg.src="images/chatu1.png";
    banneri[0].style.backgroundColor = "#848484";
    banneri[1].style.backgroundColor = "#ff9985";
}

weixinShow.onmouseover=function(){
    weixinImg.style.display="block"
}
wechat.onmouseout=function(){
    weixinImg.style.display="none"
}

