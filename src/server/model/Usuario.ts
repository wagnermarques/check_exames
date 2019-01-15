interface Usuario {
    login: string;
    senha: string;
}


function toString(Usuario: u) {
    return "Usuario "+u.login+" , senha *****";
}
