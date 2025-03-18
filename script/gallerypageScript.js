function changeCategory(category, element) {
    var buttons = document.getElementsByClassName('tag-button');
    var content = document.getElementsByClassName('content')

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    for (var i = 0; i < content.length; i++) {
        content[i].classList.remove('g-active');
    }

    element.classList.add('active');
    document.querySelector('.' + category).classList.add('g-active');
}

function showModal(trigger, content, close) {
    var modal = content;
    var btn = trigger;
    var span = close;

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}