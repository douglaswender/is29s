const { program } = require('commander');
program.version('0.0.1');

const soap = require('./src/soap');

program.command('countries').description("seleciona todos paises do SOAP").action(() => {
    var args = {};

    soap.listOfCountry(args);
});

program.command('url').description("mostra a url da imagem do pais").argument("<code>").action((code) => {
    var args = {sCountryISOCode: code};

    soap.urlFlagByISO(args);
});


program.parse(process.argv);


