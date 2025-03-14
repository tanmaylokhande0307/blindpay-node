"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryCode = exports.TransferType = exports.Country = exports.Network = void 0;
var Network;
(function (Network) {
    Network["Sepolia"] = "sepolia";
    Network["Base"] = "base";
    Network["ArbitrumSepolia"] = "arbitrum_sepolia";
    Network["BaseSepolia"] = "base_sepolia";
    Network["Arbitrum"] = "arbitrum";
    Network["Polygon"] = "polygon";
    Network["PolygonAmoy"] = "polygon_amoy";
})(Network = exports.Network || (exports.Network = {}));
var Country;
(function (Country) {
    Country["Brazil"] = "BR";
    Country["UnitedStatesOfAmerica"] = "US";
    Country["Mexico"] = "MX";
    Country["Colombia"] = "CO";
    Country["Argentina"] = "AR";
})(Country = exports.Country || (exports.Country = {}));
var TransferType;
(function (TransferType) {
    TransferType["WIRE"] = "wire";
    TransferType["ACH"] = "ach";
    TransferType["PIX"] = "pix";
    TransferType["SPEI_BITSO"] = "spei_bitso";
    TransferType["TRANSFERS_BITSO"] = "transfers_bitso";
    TransferType["ACH_COP_BITSO"] = "ach_cop_bitso";
})(TransferType = exports.TransferType || (exports.TransferType = {}));
var CountryCode;
(function (CountryCode) {
    CountryCode["Afghanistan"] = "AF";
    CountryCode["Albania"] = "AL";
    CountryCode["Algeria"] = "DZ";
    CountryCode["AmericanSamoa"] = "AS";
    CountryCode["Andorra"] = "AD";
    CountryCode["Angola"] = "AO";
    CountryCode["Anguilla"] = "AI";
    CountryCode["Antarctica"] = "AQ";
    CountryCode["AntiguaAndBarbuda"] = "AG";
    CountryCode["Argentina"] = "AR";
    CountryCode["Armenia"] = "AM";
    CountryCode["Aruba"] = "AW";
    CountryCode["Australia"] = "AU";
    CountryCode["Austria"] = "AT";
    CountryCode["Azerbaijan"] = "AZ";
    CountryCode["Bahamas"] = "BS";
    CountryCode["Bahrain"] = "BH";
    CountryCode["Bangladesh"] = "BD";
    CountryCode["Barbados"] = "BB";
    CountryCode["Belarus"] = "BY";
    CountryCode["Belgium"] = "BE";
    CountryCode["Belize"] = "BZ";
    CountryCode["Benin"] = "BJ";
    CountryCode["Bermuda"] = "BM";
    CountryCode["Bhutan"] = "BT";
    CountryCode["Bolivia"] = "BO";
    CountryCode["Bonaire"] = "BQ";
    CountryCode["BosniaAndHerzegovina"] = "BA";
    CountryCode["Botswana"] = "BW";
    CountryCode["BouvetIsland"] = "BV";
    CountryCode["Brazil"] = "BR";
    CountryCode["BritishIndianOceanTerritory"] = "IO";
    CountryCode["BruneiDarussalam"] = "BN";
    CountryCode["Bulgaria"] = "BG";
    CountryCode["BurkinaFaso"] = "BF";
    CountryCode["Burundi"] = "BI";
    CountryCode["CaboVerde"] = "CV";
    CountryCode["Cambodia"] = "KH";
    CountryCode["Cameroon"] = "CM";
    CountryCode["Canada"] = "CA";
    CountryCode["CaymanIslands"] = "KY";
    CountryCode["CentralAfricanRepublic"] = "CF";
    CountryCode["Chad"] = "TD";
    CountryCode["Chile"] = "CL";
    CountryCode["China"] = "CN";
    CountryCode["ChristmasIsland"] = "CX";
    CountryCode["CocosIslands"] = "CC";
    CountryCode["Colombia"] = "CO";
    CountryCode["Comoros"] = "KM";
    CountryCode["Congo"] = "CD";
    CountryCode["CongoRepublic"] = "CG";
    CountryCode["CookIslands"] = "CK";
    CountryCode["CostaRica"] = "CR";
    CountryCode["Croatia"] = "HR";
    CountryCode["Cuba"] = "CU";
    CountryCode["Curacao"] = "CW";
    CountryCode["Cyprus"] = "CY";
    CountryCode["CzechRepublic"] = "CZ";
    CountryCode["CoteDIvoire"] = "CI";
    CountryCode["Denmark"] = "DK";
    CountryCode["Djibouti"] = "DJ";
    CountryCode["Dominica"] = "DM";
    CountryCode["DominicanRepublic"] = "DO";
    CountryCode["Ecuador"] = "EC";
    CountryCode["Egypt"] = "EG";
    CountryCode["ElSalvador"] = "SV";
    CountryCode["EquatorialGuinea"] = "GQ";
    CountryCode["Eritrea"] = "ER";
    CountryCode["Estonia"] = "EE";
    CountryCode["Eswatini"] = "SZ";
    CountryCode["Ethiopia"] = "ET";
    CountryCode["FalklandIslands"] = "FK";
    CountryCode["FaroeIslands"] = "FO";
    CountryCode["Fiji"] = "FJ";
    CountryCode["Finland"] = "FI";
    CountryCode["France"] = "FR";
    CountryCode["FrenchGuiana"] = "GF";
    CountryCode["FrenchPolynesia"] = "PF";
    CountryCode["FrenchSouthernTerritories"] = "TF";
    CountryCode["Gabon"] = "GA";
    CountryCode["Gambia"] = "GM";
    CountryCode["Georgia"] = "GE";
    CountryCode["Germany"] = "DE";
    CountryCode["Ghana"] = "GH";
    CountryCode["Gibraltar"] = "GI";
    CountryCode["Greece"] = "GR";
    CountryCode["Greenland"] = "GL";
    CountryCode["Grenada"] = "GD";
    CountryCode["Guadeloupe"] = "GP";
    CountryCode["Guam"] = "GU";
    CountryCode["Guatemala"] = "GT";
    CountryCode["Guernsey"] = "GG";
    CountryCode["Guinea"] = "GN";
    CountryCode["GuineaBissau"] = "GW";
    CountryCode["Guyana"] = "GY";
    CountryCode["Haiti"] = "HT";
    CountryCode["HeardIslandAndMcDonaldIslands"] = "HM";
    CountryCode["HolySee"] = "VA";
    CountryCode["Honduras"] = "HN";
    CountryCode["HongKong"] = "HK";
    CountryCode["Hungary"] = "HU";
    CountryCode["Iceland"] = "IS";
    CountryCode["India"] = "IN";
    CountryCode["Indonesia"] = "ID";
    CountryCode["Iran"] = "IR";
    CountryCode["Iraq"] = "IQ";
    CountryCode["Ireland"] = "IE";
    CountryCode["IsleOfMan"] = "IM";
    CountryCode["Israel"] = "IL";
    CountryCode["Italy"] = "IT";
    CountryCode["Jamaica"] = "JM";
    CountryCode["Japan"] = "JP";
    CountryCode["Jersey"] = "JE";
    CountryCode["Jordan"] = "JO";
    CountryCode["Kazakhstan"] = "KZ";
    CountryCode["Kenya"] = "KE";
    CountryCode["Kiribati"] = "KI";
    CountryCode["KoreaNorth"] = "KP";
    CountryCode["KoreaSouth"] = "KR";
    CountryCode["Kuwait"] = "KW";
    CountryCode["Kyrgyzstan"] = "KG";
    CountryCode["Laos"] = "LA";
    CountryCode["Latvia"] = "LV";
    CountryCode["Lebanon"] = "LB";
    CountryCode["Lesotho"] = "LS";
    CountryCode["Liberia"] = "LR";
    CountryCode["Libya"] = "LY";
    CountryCode["Liechtenstein"] = "LI";
    CountryCode["Lithuania"] = "LT";
    CountryCode["Luxembourg"] = "LU";
    CountryCode["Macao"] = "MO";
    CountryCode["Madagascar"] = "MG";
    CountryCode["Malawi"] = "MW";
    CountryCode["Malaysia"] = "MY";
    CountryCode["Maldives"] = "MV";
    CountryCode["Mali"] = "ML";
    CountryCode["Malta"] = "MT";
    CountryCode["MarshallIslands"] = "MH";
    CountryCode["Martinique"] = "MQ";
    CountryCode["Mauritania"] = "MR";
    CountryCode["Mauritius"] = "MU";
    CountryCode["Mayotte"] = "YT";
    CountryCode["Mexico"] = "MX";
    CountryCode["Micronesia"] = "FM";
    CountryCode["Moldova"] = "MD";
    CountryCode["Monaco"] = "MC";
    CountryCode["Mongolia"] = "MN";
    CountryCode["Montenegro"] = "ME";
    CountryCode["Montserrat"] = "MS";
    CountryCode["Morocco"] = "MA";
    CountryCode["Mozambique"] = "MZ";
    CountryCode["Myanmar"] = "MM";
    CountryCode["Namibia"] = "NA";
    CountryCode["Nauru"] = "NR";
    CountryCode["Nepal"] = "NP";
    CountryCode["Netherlands"] = "NL";
    CountryCode["NewCaledonia"] = "NC";
    CountryCode["NewZealand"] = "NZ";
    CountryCode["Nicaragua"] = "NI";
    CountryCode["Niger"] = "NE";
    CountryCode["Nigeria"] = "NG";
    CountryCode["Niue"] = "NU";
    CountryCode["NorfolkIsland"] = "NF";
    CountryCode["NorthernMarianaIslands"] = "MP";
    CountryCode["Norway"] = "NO";
    CountryCode["Oman"] = "OM";
    CountryCode["Pakistan"] = "PK";
    CountryCode["Palau"] = "PW";
    CountryCode["Palestine"] = "PS";
    CountryCode["Panama"] = "PA";
    CountryCode["PapuaNewGuinea"] = "PG";
    CountryCode["Paraguay"] = "PY";
    CountryCode["Peru"] = "PE";
    CountryCode["Philippines"] = "PH";
    CountryCode["Pitcairn"] = "PN";
    CountryCode["Poland"] = "PL";
    CountryCode["Portugal"] = "PT";
    CountryCode["PuertoRico"] = "PR";
    CountryCode["Qatar"] = "QA";
    CountryCode["RepublicOfNorthMacedonia"] = "MK";
    CountryCode["Romania"] = "RO";
    CountryCode["RussianFederation"] = "RU";
    CountryCode["Rwanda"] = "RW";
    CountryCode["Reunion"] = "RE";
    CountryCode["SaintBarthelemy"] = "BL";
    CountryCode["SaintHelena"] = "SH";
    CountryCode["SaintKittsAndNevis"] = "KN";
    CountryCode["SaintLucia"] = "LC";
    CountryCode["SaintMartin"] = "MF";
    CountryCode["SaintPierreAndMiquelon"] = "PM";
    CountryCode["SaintVincentAndTheGrenadines"] = "VC";
    CountryCode["Samoa"] = "WS";
    CountryCode["SanMarino"] = "SM";
    CountryCode["SaoTomeAndPrincipe"] = "ST";
    CountryCode["SaudiArabia"] = "SA";
    CountryCode["Senegal"] = "SN";
    CountryCode["Serbia"] = "RS";
    CountryCode["Seychelles"] = "SC";
    CountryCode["SierraLeone"] = "SL";
    CountryCode["Singapore"] = "SG";
    CountryCode["SintMaarten"] = "SX";
    CountryCode["Slovakia"] = "SK";
    CountryCode["Slovenia"] = "SI";
    CountryCode["SolomonIslands"] = "SB";
    CountryCode["Somalia"] = "SO";
    CountryCode["SouthAfrica"] = "ZA";
    CountryCode["SouthGeorgiaAndTheSouthSandwichIslands"] = "GS";
    CountryCode["SouthSudan"] = "SS";
    CountryCode["Spain"] = "ES";
    CountryCode["SriLanka"] = "LK";
    CountryCode["Sudan"] = "SD";
    CountryCode["Suriname"] = "SR";
    CountryCode["SvalbardAndJanMayen"] = "SJ";
    CountryCode["Sweden"] = "SE";
    CountryCode["Switzerland"] = "CH";
    CountryCode["SyrianArabRepublic"] = "SY";
    CountryCode["Taiwan"] = "TW";
    CountryCode["Tajikistan"] = "TJ";
    CountryCode["Tanzania"] = "TZ";
    CountryCode["Thailand"] = "TH";
    CountryCode["TimorLeste"] = "TL";
    CountryCode["Togo"] = "TG";
    CountryCode["Tokelau"] = "TK";
    CountryCode["Tonga"] = "TO";
    CountryCode["TrinidadAndTobago"] = "TT";
    CountryCode["Tunisia"] = "TN";
    CountryCode["Turkey"] = "TR";
    CountryCode["Turkmenistan"] = "TM";
    CountryCode["TurksAndCaicosIslands"] = "TC";
    CountryCode["Tuvalu"] = "TV";
    CountryCode["Uganda"] = "UG";
    CountryCode["Ukraine"] = "UA";
    CountryCode["UnitedArabEmirates"] = "AE";
    CountryCode["UnitedKingdom"] = "GB";
    CountryCode["UnitedStatesMinorOutlyingIslands"] = "UM";
    CountryCode["UnitedStatesOfAmerica"] = "US";
    CountryCode["Uruguay"] = "UY";
    CountryCode["Uzbekistan"] = "UZ";
    CountryCode["Vanuatu"] = "VU";
    CountryCode["Venezuela"] = "VE";
    CountryCode["Vietnam"] = "VN";
    CountryCode["VirginIslandsBritish"] = "VG";
    CountryCode["VirginIslandsUS"] = "VI";
    CountryCode["WallisAndFutuna"] = "WF";
    CountryCode["WesternSahara"] = "EH";
    CountryCode["Yemen"] = "YE";
    CountryCode["Zambia"] = "ZM";
    CountryCode["Zimbabwe"] = "ZW";
    CountryCode["AlandIslands"] = "AX";
})(CountryCode = exports.CountryCode || (exports.CountryCode = {}));
