var tb = document.querySelector('#textboard'); // テキストボード
//var col = document.querySelector('#board_coll'); // ボードのコライダー
var p1 = document.querySelector('#page1');
var p2 = document.querySelector('#page2');

var p_num = 1;

tb.addEventListener('click', function () {
  switch (p_num) {
    case 1: p1.setAttribute('visible', 'false'); // p1を消す
            p2.setAttribute('visible', 'true');  // p2を出す
            p_num = 2;

            break;
    case 2: p2.setAttribute('visible', 'false'); // p2を消す
            p3.setAttribute('visible', 'true');  // p3を出す
            p_num = 3;

            break;

    default:  break;


  }


});
