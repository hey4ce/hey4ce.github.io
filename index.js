let ti = te = si = se = ni = ne = fi = fe = 0;

let functions = {
    "ti": 0,
    "te": 0,
    "si": 0,
    "se": 0,
    "ni": 0,
    "ne": 0,
    "fi": 0,
    "fe": 0,
}

let questions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0];

function modify(input, num) {
    questions[num] = parseInt(input.value);
    console.log(num, input.value);
    calc();
    console.log(functions);
}

function calc() {
     functions = {
	"ti": 0,
	"te": 0,
	"si": 0,
	"se": 0,
	"ni": 0,
	"ne": 0,
	"fi": 0,
	"fe": 0,
    }

    questions.forEach((value, index) => {
	switch (index) {
	    case 0:
	    case 10:
	    case 20:
		functions.ti += value;
		break;

	    case 7:
	    case 15:
	    case 19:
		functions["te"] += value;
		break;

	    case 2:
	    case 14:
	    case 22:
		functions["si"] += value;
		break;

	    case 5:
	    case 9:
	    case 17:
		functions["se"] += value;
		break;

	    case 6:
	    case 12:
	    case 18:
		functions["ni"] += value;
		break;

	    case 3:
	    case 11:
	    case 21:
		functions["ne"] += value;
		break;

	    case 4:
	    case 8:
	    case 16:
		functions["fi"] += value;
		break;

	    case 1:
	    case 13:
	    case 23:
		functions["fe"] += value;
		break;
	}
    });
}

function calc_function() {
    console.log(window.location);

    let where = window.location.href;
    let index_html = (where.slice(where.length - 10) === "index.html");


    if (index_html) {
	where = where.slice(0, where.length - 10);
    }

    where += "result.html?";

    for (let [key, value] of Object.entries(functions)) {
	where += key + "=" + value; 
 
	where += "&";
    }

    window.location.replace(where);
}


update_vals();

