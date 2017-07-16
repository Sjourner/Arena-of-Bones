function roller (m) {
switch (m) {
	case "1d2":
		roll_result = Math.floor(Math.random() * (2)) + 1;
		break;
	case "1d3":
		roll_result = Math.floor(Math.random() * (3)) + 1;
		break;	
	case "1d4":
		roll_result = Math.floor(Math.random() * (4)) + 1 + 1;
		break;
	case "2d4":
		roll_result = Math.floor(Math.random() * (4)) + Math.floor(Math.random() * (4)) + 2;
		break;
	case "1d4 fire":
		roll_result = Math.floor(Math.random() * (4)) + 1;
		break;	
	case "1d6":
		roll_result = Math.floor(Math.random() * (6)) + 1;
		break;
	case "2d6":
		roll_result = Math.floor(Math.random() * (6)) + Math.floor(Math.random() * (6)) + 2;
		break;
	case "1d6/1d6":
		roll_result = Math.floor(Math.random() * (6)) + 1;
		break;	
	case "1d8":
		roll_result = Math.floor(Math.random() * (8)) + 1;
		break;
	case "1d8/1d6":
		roll_result = Math.floor(Math.random() * (8)) + 1;
		break;
	case "1d8/1d8":
		roll_result = Math.floor(Math.random() * (8)) + 1;
		break;
	case "1d10":
		roll_result = Math.floor(Math.random() * (10)) + 1;
		break;
	case "1d12":
		roll_result = Math.floor(Math.random() * (12)) + 1;
		break;
	case "see text":
		roll_result = Math.floor(Math.random() * (4)) + 1;
		break;
	}
}