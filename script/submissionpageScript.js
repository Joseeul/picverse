function validateForm() {
    var email = document.getElementById('email').value;
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var tag = document.getElementById('tag').value;

    if (!email.trim()) {
        document.getElementById('emailValidate').style.display = 'block';
    } else{
        document.getElementById('emailValidate').style.display = 'none';
    }

    if (!title.trim()) {
        document.getElementById('titleValidate').style.display = 'block';
    } else {
        document.getElementById('titleValidate').style.display = 'none';
    }

    if (!description.trim()) {
        document.getElementById('descriptionValidate').style.display = 'block';
    } else {
        document.getElementById('descriptionValidate').style.display = 'none';
    }

    if (!tag.trim()) {
        document.getElementById('tagValidate').style.display = 'block';
    } else {
        document.getElementById('tagValidate').style.display = 'none';
    }
}

document.getElementById('submitBtn').addEventListener('click', validateForm);