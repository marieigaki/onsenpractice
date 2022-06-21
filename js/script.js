'use strict';

/*=============================ハンバーガーメニュー=============================*/

//  ハンバーガーメニューがクリックされるたびにopenというクラスを付け外しする
const btn = document.getElementById('menu-btn');
const bg = document.getElementById('hum-gnav__inner');

// btnのテキスト変更
var btn_text = document.getElementById('humburger-menu__menu');

// クリックした際に画面表示 openというクラスを付け外しする 感染症
const btn_contact = document.getElementById('vurius-gnav');

// クリック時に三本線の変更
btn.onclick = function(e) {
   e.preventDefault();

	// class openの付け外し
	$('.bar1, .bar2, .bar3').toggleClass('open');

	// fadein,fadeout JQuery
	$('.menu').fadeToggle(500);

	// menu→close,close→menuの変更
	if(btn_text.textContent == "menu"){
		btn_text.textContent = "close";
	}else{
		btn_text.textContent = "menu";
	}

   // class openの付け外し
   $('.hum-gnav').toggleClass('open');
};

//gnav背景クリックでメニュー閉じる
bg.onclick = function(e) {
   e.preventDefault();

   // class openの付け外し
   $('.bar1, .bar2, .bar3').toggleClass('open');

   // fadein,fadeout JQuery
   $('.menu').fadeToggle(500);

   //close→menuの変更
   if(btn_text.textContent == "close"){
	   btn_text.textContent = "menu";
   }

  // class openの付け外し
  $('.hum-gnav').toggleClass('open');
};


 // クリック時に三本線の変更
 btn_contact.onclick = function(e) {
   e.preventDefault();

	// class openの付け外し
	$('.bar1, .bar2, .bar3').toggleClass('open');

	// fadein,fadeout JQuery
	$('.menu').fadeToggle(500);

	// menu→close,close→menuの変更
	if(btn_text.textContent == "menu"){
		btn_text.textContent = "close";
	}else{
		btn_text.textContent = "menu";
	}

   // class openの付け外し
   $('.hum-gnav').toggleClass('open');

   // 感染症に飛ばす
   document.location.href = "index.html#in-vurius";
};

//トップへ戻る
window.onscroll = function(event) {
   const position = document.documentElement.scrollTop || document.body.scrollTop;
 
   if(position >= 300){
	   document.getElementById('page-top').classList.add('open')
   }else{
	   document.getElementById('page-top').classList.remove('open')
   }
 }
