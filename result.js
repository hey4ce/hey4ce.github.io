function mayus(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}



let param = window.location.href.split('?')[1];
let query = new URLSearchParams(param);

let big = "";
let big_num = -100;

let functions = {};

for (let pair of query.entries()) {
    functions[pair[0]] = parseInt(pair[1], 10);

    console.log(typeof pair[1], typeof big_num);

    if (parseInt(pair[1], 10) > big_num) {
	console.log("pipo");
	big_num = parseInt(pair[1], 10);
	big = pair[0];
    }

}

let secondary = "";
let secondary_num = -100;

switch (big) {
    case "te":
    case "fe":
	if (functions["si"] > functions["ni"]) {
	    secondary = "si";
	} else {
	    secondary = "ni";
	}
	break;

    case "ti":
    case "fi":
	if (functions["se"] > functions["ne"]) {
	    secondary = "se";
	} else {
	    secondary = "ne";
	}
	break;

    case "si":
    case "ni":
	if (functions["te"] > functions["fe"]) {
	    secondary = "te";
	} else {
	    secondary = "fe";
	}
	break;

    case "se":
    case "ne":
	if (functions["ti"] > functions["fi"]) {
	    secondary = "ti";
	} else {
	    secondary = "fi";
	}
	break;
}

console.log(secondary);

console.log(big, big_num);

document.getElementById("result").innerHTML += mayus(big) + mayus(secondary);
