function showFooter(nameId, imageId) {
    var namaId = nameId;
    var gambar = imageId;

    document.getElementById(namaId).classList.toggle("show");
    document.getElementById(gambar).classList.toggle("rotated");
}

function showNavbar(menuId){
    var menu = menuId;

    document.getElementById(menu).classList.toggle("show");
}