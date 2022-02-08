function changeDogImg(){
    document.getElementById("img").src = 'https://ggsc.s3.amazonaws.com/images/made/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner_600_400_int_c1-2x.jpg';
}
function changeHorseImg(){
    document.getElementById("img").src = 'https://www.thesprucepets.com/thmb/-NzJYc3uIJFTeQ-1XFDAByOW1Gw=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/horse-galloping-in-grass-688899769-587673275f9b584db3a44cdf.jpg';
}
function changeCatImg(){
    document.getElementById('img').src = 'https://www.thesprucepets.com/thmb/yDhjVLM24xV1ehc5uGzP4M_CmNg=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/33351631_260594934684461_1144904437047754752_n-5b17d77604d1cf0037f3ea5a.jpg';
}
function changeCowImg(){
    document.getElementById('img').src = 'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/2021/09/articles/main/20210918_stp504.jpg';
}
function changeSmallImg(){
    document.querySelector("#img").style.width = "200px";
}
function changeBigImg(){
    document.querySelector("#img").style.width = "800px";
}
document.getElementById("dog").addEventListener("click", changeDogImg);
document.getElementById("horse").addEventListener("click", changeHorseImg);
document.getElementById("cat").addEventListener("click", changeCatImg);
document.getElementById("cow").addEventListener("click", changeCowImg);
document.getElementById("small").addEventListener("click", changeSmallImg);
document.getElementById("big").addEventListener("click", changeBigImg);