import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");
// loading
$(window).load(function() { // 整個頁面讀取完再將這三個 div 隱藏起來
    $("#status").delay(1500).fadeOut(1500); //delay 延遲 2 秒才fadeOut
    $("#preloader").delay(500).fadeOut(1500);
})
