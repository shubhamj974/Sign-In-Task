let cl = console.log;

const form = document.getElementById('form');
const username = document.getElementById('username');
const pass = document.getElementById('password');

let emailDB = 'ssjagdale974@gmail.com';
let passDB = 'shubham123'
const Onsubmit = (e) => {
    e.preventDefault();
    let emailval = username.value;
    let passval = pass.value;
    if ((emailval === emailDB && passval === passDB) || (passval >= 8 && passval <= 15)) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully sign in',
            showConfirmButton: false,
            timer: 3000,
        })
        form.reset()
        return
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid username or password!!!',
            timer: '3000',

        })
        alert('Password must be at least 8 characters')
        form.reset()
        return
    }
}

form.addEventListener('submit', Onsubmit)