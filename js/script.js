$(function(){
  /*自分で書いたもの*/

  /*TOP about フェードイン*/
    $('#mainvisual').hide().fadeIn(5000);
  // モーダル
    $(".modal a").click(function(){
      $("body").append('<div id="bg">');

      $("body").append('<div id="photo">');

      $("#bg").hide();
      $("#photo").hide();

      $("#photo").html("<img>");

      $("#photo img").attr("src", $(this).attr("href"));

      $("#photo img").attr("width", );
      $("#photo img").attr("height", );
      $("#photo img").attr("alt", "Photo");

      $("#bg").fadeIn();
      $("#photo").fadeIn();

      $("#bg").click(function(){
          $(this).fadeOut(function(){
              $(this).remove();
          });
           

          $("#photo").fadeOut(function(){
              $(this).remove();
          });

      });
      return false;
  });
  // モーダル mini
  $(".modalmini a").click(function(){
    $("body").append('<div id="bgmini">');

    $("body").append('<div id="photomini">');

    $("#bgmini").hide();
    $("#photomini").hide();

    $("#photomini").html("<img>");

    $("#photomini img").attr("src", $(this).attr("href"));

    $("#photomini img").attr("width", );
    $("#photomini img").attr("height", );
    $("#photomini img").attr("alt", "Photo");

    $("#bgmini").fadeIn();
    $("#photomini").fadeIn();

    $("#bgmini").click(function(){
        $(this).fadeOut(function(){
            $(this).remove();
        });
         

        $("#photomini").fadeOut(function(){
            $(this).remove();
        });

    });
    return false;
});


 // モーダル mini
 $(".modalmini2 a").click(function(){
  $("body").append('<div id="bgmini">');

  $("body").append('<div id="photomini2">');

  $("#bgmini").hide();
  $("#photomini2").hide();

  $("#photomini2").html("<img>");

  $("#photomini2 img").attr("src", $(this).attr("href"));

  $("#photomini2 img").attr("width", );
  $("#photomini2 img").attr("height", );
  $("#photomini2 img").attr("alt", "Photo");

  $("#bgmini").fadeIn();
  $("#photomini2").fadeIn();

  $("#bgmini").click(function(){
      $(this).fadeOut(function(){
          $(this).remove();
      });
       

      $("#photomini2").fadeOut(function(){
          $(this).remove();
      });

  });
  return false;
});

  

  $(function(){
    var pagescroll = $('.page-top');
    // 初めはボタンを非表示にする
    pagescroll.hide();
  
    // 120px スクロールをすると、ボタンが表示される
    $(window).scroll(function () {
       if ($(this).scrollTop() > 120) {
            pagescroll.fadeIn();
       } else {
    // 120px以上スクロールされていない時は、ボタンを表示しない
            pagescroll.fadeOut();
       }
    });
    // ボタンを押すと、0.8秒かけてトップに戻る
    pagescroll.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 800);
       return false;
    });
  });

  // ハンバーガーメニュー
  $(function () {
    $('#js-hamburger-menu, .navigation__link').on('click', function () {
      $('.navigation').slideToggle(500)
      $('.hamburger-menu').toggleClass('hamburger-menu--open')
    });

    $("button").click(function(){
      $("ul").slideToggle(200);
    });
  });
});
