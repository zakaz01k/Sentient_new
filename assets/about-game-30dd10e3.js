import"./menu-55e2c08d.js";document.addEventListener("DOMContentLoaded",function(){document.querySelector(".slider-wrapper");const n=document.querySelector(".slides"),t=document.querySelector(".prev-arrow"),s=document.querySelector(".next-arrow"),i=402,r=5;let e=0;function d(){n.style.transform=`translateX(-${e*i}px)`,e===0?t.classList.add("disabled"):t.classList.remove("disabled"),e===r-1?s.classList.add("disabled"):s.classList.remove("disabled")}t.addEventListener("click",function(){e>0&&(e--,d())}),s.addEventListener("click",function(){e<r-1&&(e++,d())}),d()});