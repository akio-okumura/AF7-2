var tb = document.querySelector('#textboard'); // テキストボード
var p1 = document.querySelector('#page1');
var p2 = document.querySelector('#page2');

var p_num = 1;

tb.addEventListener('click', function () {
  if(p_num == 1) {
    p1.setAttribute('visible', 'false'); // p1を消す
    p2.setAttribute('visible', 'true');  // p2を出す
    p_num = 2;
  }
});
