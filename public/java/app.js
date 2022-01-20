function dispform() {
    document.getElementById('main-form-input').style.display = 'none';
    document.getElementById('form-display').style.display = 'block';
    document.getElementById('d-user-name').innerHTML = document.getElementById('name-user').value;
    document.getElementById('d-f-name').innerHTML = document.getElementById('father-name').value;
    // document.getElementById('d-bd-name').innerHTML = document.getElementById('user-bd-1').value + document.getElementById('user-bd-2').value+'-';
    document.getElementById('d-bd-name').innerHTML = document.getElementById('user-bd-1').value + document.getElementById('user-bd-2').value+'-' + document.getElementById('user-bd-3').value + document.getElementById('user-bd-4').value +'-' + document.getElementById('user-bd-5').value + document.getElementById('user-bd-6').value;
    document.getElementById('d-nationality').innerHTML = document.getElementById('user-nation').value;
    document.getElementById('d-gender').innerHTML = document.getElementById('user-gender').value;
    document.getElementById('d-religion').innerHTML = document.getElementById('user-religion').value;
    document.getElementById('d-address').innerHTML =  document.getElementById('user-address').value;
    document.getElementById('d-cnic').innerHTML = document.getElementById('user-cnic-1').value;
    document.getElementById('d-contact').innerHTML = document.getElementById('user-cell').value;
    document.getElementById('d-identification').innerHTML = document.getElementById('user-mark').value;
    document.getElementById('d-post').innerHTML = document.getElementById('user-post').value;
}