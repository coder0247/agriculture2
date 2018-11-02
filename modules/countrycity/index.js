var _ = require('underscore')


module.exports = {
	getCountries: function () {
		var data = require('./countries.json')
		return data;
	},

	getCountryNames: function () {
		var data = require('./countries.json')
		return _.map(data, function(country){ return country.name.common; })
	},
	
	getCities: function (country) {
		// var splits = country.split(" ");
		// country = null;
		// splits.forEach(
		// 	function (split) {
		// 		split = split.charAt(0).toUpperCase() + split.slice(1);
		// 		country = ((country) ? (country + ' ' + split) : split);
		// 	}
		// );
		
		var data = require('./cities.json') // data : [country : [cities]]
		return data["countries"][country];
	},

	getRegions: function (country) {
		var data = require('./regions.json')
		var regionArray = [];
		for (var i = data.length - 1; i >= 0; i--) {
			var reg = new RegExp(country,'gi');
			if(reg.test(data[i].region_code)&&data[i].region_division!='country'){
				regionArray.push({name: data[i].region_name, shortCode: data[i].region_code.replace(reg,'')});
			};
		}
		return regionArray;
	},

	getLanguages: function () {
		var data = require('./languages.json')
		return _.map(data.lang, function(lang,code){ 
			return { name: lang[0], code: code }
		});
	},

	getASNS: function (country) {
		var data = require('./asn.json') 
		return data["asn"][country.toUpperCase()]; 
	}
}