
let antarcticaList = ["Antarctica"]

let africaList = [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "British Indian Ocean Territory",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cameroon",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Congo",
    "Côte d’Ivoire",
    "Democratic Republic of the Congo",
    "Djibouti",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "Eswatini",
    "Ethiopia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Réunion",
    "Rwanda",
    "Saint Helena",
    "Sao Tome and Principe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Western Sahara",
    "Zambia",
    "Zimbabwe"
]

let asiaList = [
    "Afghanistan",
    "Armenia",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Bhutan",
    "Brunei",
    "Cambodia",
    "China",
    "Cyprus",
    "Democratic People's Republic of Korea",
    "Georgia",
    "Hong Kong",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Lebanon",
    "Macao",
    "Malaysia",
    "Maldives",
    "Mongolia",
    "Myanmar",
    "Nepal",
    "Oman",
    "Palestine",
    "Pakistan",
    "Philippines",
    "Qatar",
    "Republic of Korea",
    "Saudi Arabia",
    "Singapore",
    "Sri Lanka",
    "Syria",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Turkey",
    "Turkmenistan",
    "United Arab Emirates",
    "Uzbekistan",
    "Vietnam",
    "Yemen"
]

let carribeanList = [
    "Anguilla",
    "Antigua and Barbuda",
    "Aruba",
    "Bahamas",
    "Barbados",
    "Bonaire, Sint Eustatius and Saba",
    "British Virgin Islands",
    "Cayman Islands",
    "Cuba",
    "Curaçao",
    "Dominica",
    "Dominican Republic",
    "Grenada",
    "Guadeloupe",
    "Haiti",
    "Jamaica",
    "Martinique",
    "Montserrat",
    "Puerto Rico",
    "Saint Barthélemy",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin",
    "Saint Vincent and the Grenadines",
    "Sint Maarten",
    "Trinidad and Tobago",
    "Turks and Caicos Islands",
    "United States Virgin Islands"
]

let centralAmericaList = [
    "Belize",
    "Costa Rica",
    "El Salvador",
    "Guatemala",
    "Honduras",
    "Mexico",
    "Nicaragua",
    "Panama"

]

let northAmericaList = [
    "Bermuda",
    "Canada",
    "Greenland",
    "Saint Pierre and Miquelon",
    "United States of America"

]

let southAmericaList = [
    "Argentina",
    "Bolivia",
    "Bouvet Island",
    "Brazil",
    "Chile",
    "Colombia",
    "Ecuador",
    "Falkland Islands (Malvinas)",
    "French Guiana",
    "Guyana",
    "Paraguay",
    "Peru",
    "South Georgia and the South Sandwich Islands",
    "Suriname",
    "Uruguay",
    "Venezuela"

]

let europeList = [
    "Åland Islands",
    "Albania",
    "Andorra",
    "Austria",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    "Bulgaria",
    "Croatia",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Faroe Islands",
    "Finland",
    "France",
    "Germany",
    "Gibraltar",
    "Greece",
    "Guernsey",
    "Hungary",
    "Iceland",
    "Ireland",
    "Isle of Man",
    "Italy",
    "Jersey",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "North Macedonia",
    "Norway",
    "Poland",
    "Portugal",
    "Moldova",
    "Romania",
    "Russia",
    "San Marino",
    "Sark",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Svalbard and Jan Mayen Islands",
    "Sweden",
    "Switzerland",
    "Ukraine",
    "United Kingdom"
]


let oceaniaList = [
    "American Samoa",
    "Australia",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Cook Islands",
    "Fiji",
    "French Polynesia",
    "Guam",
    "Heard Island and McDonald Islands",
    "Kiribati",
    "Marshall Islands",
    "Micronesia",
    "Nauru",
    "New Caledonia",
    "New Zealand",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Palau",
    "Papua New Guinea",
    "Pitcairn",
    "Samoa",
    "Solomon Islands",
    "Tokelau",
    "Tonga",
    "Tuvalu",
    "United States Minor Outlying Islands",
    "Vanuatu",
    "Wallis and Futuna Islands"
]

let generatedCountry;

const element = document.getElementById("countryNameText");
element.innerHTML = "newText";

let selectedRegion = document.getElementById('selectRegion').value;
console.log(selectedRegion);

// function getOption() {
//     selectElement = document.querySelector('#selectRegion');
//     output = 
//         selectElement.options
//         [selectElement.selectedIndex].value;
//     document.querySelector('.countryNameText2').textContent = output;
//     console.log(output);
//     output = selectElement.value;
//     document.getElementById("countryNameText2");
//     countryNameText2.textContent = output;
// }