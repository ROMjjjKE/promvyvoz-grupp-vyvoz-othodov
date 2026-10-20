document.body.classList.add('js');
(function(){
function scanReveal(){var els=document.querySelectorAll('.fx:not(.in)'),vh=window.innerHeight||800;
for(var i=0;i<els.length;i++){var r=els[i].getBoundingClientRect();
if(r.top<vh-36&&r.bottom>0)els[i].classList.add('in')}}
setInterval(scanReveal,300);scanReveal();
var mnav=document.getElementById('mnav'),burger=document.getElementById('burger');
if(burger&&mnav){burger.addEventListener('click',function(){mnav.classList.add('on')});
document.getElementById('mclose').addEventListener('click',function(){mnav.classList.remove('on')});
var ma=mnav.querySelectorAll('a');for(var i=0;i<ma.length;i++){(function(a){a.addEventListener('click',function(){mnav.classList.remove('on')})})(ma[i]);}}
var fqs=document.querySelectorAll('.fq');
for(var i=0;i<fqs.length;i++){(function(fq){
fq.querySelector('.fq-q').addEventListener('click',function(){
var open=fq.classList.contains('open');
for(var j=0;j<fqs.length;j++){fqs[j].classList.remove('open');fqs[j].querySelector('.fq-a').style.maxHeight='0px'}
if(!open){fq.classList.add('open');var a=fq.querySelector('.fq-a');a.style.maxHeight=a.scrollHeight+'px'}
});})(fqs[i]);}
var f=document.getElementById('leadForm');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var ok=true;
['lf-name','lf-tel'].forEach(function(id){var el=document.getElementById(id);
if(!el.value.trim()){ok=false;el.classList.add('err')}else{el.classList.remove('err')}});
if(!ok)return;var om=document.getElementById('leadOk');om.style.display='block';f.reset();
setTimeout(function(){om.style.display='none'},6000);});
/* техника: кнопка «в работе» перезапускает анимацию */
document.querySelectorAll('.t-play').forEach(function(btn){
btn.addEventListener('click',function(){
var svg=btn.closest('.tcard').querySelector('svg');
svg.classList.remove('anim');void svg.getBoundingClientRect();svg.classList.add('anim');
});});
})();
