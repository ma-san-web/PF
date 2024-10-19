$(function(){
  /*自分で書いたもの*/

  /*TOP about フェードイン*/
    $('#fadeIn').hide().fadeIn(3000);

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

  $(function(){
    var pagescroll = $('.page-top');
    // 初めはボタンを非表示にする
    pagescroll.hide();
  
    // 50px スクロールをすると、ボタンが表示される
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagescroll.fadeIn();
       } else {
    // 50px以上スクロールされていない時は、ボタンを表示しない
            pagescroll.fadeOut();
       }
    });
    // ボタンを押すと、0.8秒かけてトップに戻る
    pagescroll.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 800);
       return false;
    });
  });


});
