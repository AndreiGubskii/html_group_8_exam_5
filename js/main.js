var btn_menu = $(".menu-btn"),
menu = $(".menu");


btn_menu.click(function () {
	if (menu.is(":hidden")) {
		showMenu();
	} else {
		hideMenu();		
	}
	return false;
});

//Slick
$(".slider").slick({
        dots: false,
        mobileFirst: true
    });

function showMenu(){
	menu.show();
	menu.animate({right: "0"},300);
}
function hideMenu(){
	menu.animate({right: "-1000"},300, function() {menu.hide();});
}

// Плавная прокрутка по якорям
menu.on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 700 мс
    $('body,html').animate({scrollTop: top}, 700);
});