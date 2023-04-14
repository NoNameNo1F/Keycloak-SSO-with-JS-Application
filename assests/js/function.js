var keycloak = new Keycloak();

function initKeycloak() {
    keycloak.init({ onLoad: 'login-required' }).then(function () {
        constructTableRows(keycloak.idTokenParsed);
        pasteToken(keycloak.token);
    }).catch(function () {
        alert('failed to initialize');
    });
}

var logout = function () {
    keycloak.logout({ "redirectUri": "http://localhost:9999/logout.html" });
}