const uriBack = 'http://localhost:8001'
const regExp = /^([A-Za-zÑñÁáÉéÍíÓóÚú\s]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú\s]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú\s]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú\s]+))*$/;
const regExp_password = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
const regExp_mail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

module.exports = {
    uriBack,
    regExp,
    regExp_password,
    regExp_mail
};