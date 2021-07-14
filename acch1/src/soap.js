const soap = require('soap');
const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL';
const args = {}

const listOfCountry = (args) => {
    soap.createClient(url, (err, client) => {
        if (err) {
            console.log(err);
        } else {
            client.ListOfCountryNamesByName(args, (err, res) => {
                const items = res.ListOfCountryNamesByNameResult.tCountryCodeAndName;

                for (var i = 0; i < items.length; i++) {
                    console.log(items[i].sName, " - ", items[i].sISOCode);
                }
            })
        }
    });
};

const urlFlagByISO = (args) => {
    soap.createClient(url, (err, client) => {
        if (err) {
            console.log(err);
        } else {
            client.CountryFlag(args, (err, res) => {
                console.log(res.CountryFlagResult);
            })
        }
    });
}



module.exports = {
    listOfCountry,
    urlFlagByISO
}