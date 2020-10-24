$(document).ready(function(){
 // alert("Eğer bu siteye tarayıcınızdan daha önceden giriş yaptıysanız, lütfen son değişiklikleri görmek için siteyi gizli sekmeden veya tarayıcınızın geçmişini temizleyip tekrar açınız.")
  $("#experience").click(function(){
        $("html,body").animate({
            scrollTop:1170},800)
        return false;
    });

    $("#education").click(function(){
        $("html,body").animate({
            scrollTop:1658},800)
        return false;
    });

    $("#skills").click(function(){
        $("html,body").animate({
            scrollTop:2170},800)
        return false;
    });

    $("#certification").click(function(){
        $("html,body").animate({
            scrollTop:2845},800)
        return false;
    });

    $("#top").click(function(){
        $("html,body").animate({
            scrollTop:0},800)
        return false;
    });

    $("#contact").click(function(){
        $("html,body").animate({
            scrollTop:3550},800)
        return false;
    });

    


}); 