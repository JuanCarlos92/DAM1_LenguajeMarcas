function validarEmail() {
    var email = document.getElementById('email').value;
    var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
        alert('Por favor, introduce un email válido');
        return false;
    }else
        alert('Es correcto');
    return true;
}

function validarPassword() {
    var password = document.getElementById('password').value;
    var passwordValido = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{5,}$/;
    if (!passwordValido.test(password)) {
        alert('La contraseña debe tener al menos 5 caracteres, incluyendo al menos 1 mayúscula, 1 minúscula y 1 número');
        return false;
    }else
        alert('Es correcto');
    return true;
}

function validarUsuario() {
    var usuario = document.getElementById('usuario').value;
    var usuarioValido = /^.{3,}$/;
    if (!usuarioValido.test(usuario)) {
        alert('El nombre de usuario debe tener al menos tres caracteres');
        return false;
    }else
        alert('Es correcto');
    return true;
}

function validarNombre() {
    var nombre = document.getElementById('nombre').value;
    if (nombre.trim() === '') {
        alert('Por favor, introduce tu nombre y apellido');
        return false;
    }else
        alert('Es correcto');
    return true;
}

function validarFormulario() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var usuario = document.getElementById('usuario').value;
    var nombre = document.getElementById('nombre').value;

    var errores = [];

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errores.push('Por favor, introduce un email válido');
        document.getElementById('email').classList.add('errores');
    }
    
    if (!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{5,}$/)) {
        errores.push('La contraseña debe tener al menos 5 caracteres, incluyendo al menos 1 mayúscula, 1 minúscula y 1 número');
        document.getElementById('password').classList.add('errores');
    }

    if (!usuario.match(/^.{3,}$/)) {
        errores.push('El nombre de usuario debe tener al menos tres caracteres');
        document.getElementById('usuario').classList.add('errores');
    }

    if (nombre.trim() === '') {
        errores.push('Por favor, introduce tu nombre y apellido');
        document.getElementById('nombre').classList.add('errores');
    }
    if (errores.length > 0) {
        alert('Se encontraron los siguientes errores:\n\n' + errores.join('\n'));
        return false;
    }else
        alert('Todos los campos son correcto')
        return true;
    }
function limpiar() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('usuario').value = '';
    document.getElementById('nombre').value = '';
    document.getElementById('email').classList.remove('errores');
    document.getElementById('password').classList.remove('errores');
    document.getElementById('usuario').classList.remove('errores');
    document.getElementById('nombre').classList.remove('errores');
}