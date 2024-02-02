function showAlert(title, text) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalText').innerText = text;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
}

function hideAlert() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
}

function validateAndShowAlert() {
    var title = document.getElementById('title').value;
    var text = document.getElementById('text').value;

    if (title.trim() !== '' && text.trim() !== '') {
        showAlert(title, text);
    } else {
        alert('Please fill in both title and text fields.');
    }
}
