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

function showMenu(){
	menu.show();
	menu.animate({right: "0"},300);
}
function hideMenu(){
	menu.animate({right: "-1000"},300, function() {menu.hide();});
}