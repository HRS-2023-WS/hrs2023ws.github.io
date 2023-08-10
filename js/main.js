const mainTitle = [
    ['飛▍', '　'],
    ['飛龍▍', '　'],
    ['飛龍祭▍', '　'],
    ['飛龍祭', '宣▍'],
    ['飛龍祭', '宣伝▍'],
    ['飛龍祭', '宣伝広▍'],
    ['飛龍祭', '宣伝広場▍'],
    ['飛龍祭', '宣伝広場'],
];

$(window).on('load', function() {
    startAnime(0);
});



function startAnime(num) {
    console.log(num);
    $("#main_title_1").html('<h1 class="main_title" id="main_title_1" data-text="' + mainTitle[num][0] + '">' + mainTitle[num][0] + '</h1>');
    $("#main_title_2").html('<h1 class="main_title" id="main_title_2" data-text="' + mainTitle[num][1] + '">' + mainTitle[num][1] + '</h1>');
    if (num < 14) {
        num++;
    } else {
        return;
    }
    const rand = Math.floor(Math.random() * 300) + 50;
    setTimeout('startAnime(' + num + ')', rand);
}


function onload() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0) // If Internet Explorer, return version number
    {
        //alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
        alert("Internet Explorerはサポートされていません。他のブラウザーを推奨します。")
    } else // If another browser, return 0
    {
        //alert('otherbrowser');
    }
    return false;
}