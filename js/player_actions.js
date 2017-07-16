function positive_distance_measurer () {	
	enemy_pos_list = enemy_group.map(function(a) {return a.pos;});
	for (l = 1; l < Math.round((actors[j].land_speed + 5) / 5); l++) {
	if (jQuery.inArray((actors[j].pos + (l*5)), enemy_pos_list) == -1)  { 
	positive_movement_list += "<option>" + (l*5);
	} else { continue;}
		}
	document.getElementById("movement_selector").innerHTML = positive_movement_list;
} 

function negative_distance_measurer () {	
	enemy_pos_list = enemy_group.map(function(a) {return a.pos;});
	for (l = (-(Math.round(actors[j].land_speed / 5))); l < 0; l++) {
		if (jQuery.inArray((actors[j].pos + (l*5)), enemy_pos_list) == -1)  { 
		negative_movement_list += "<option>" + (l*5);
		} else { continue;}
	}
	document.getElementById("negativemovement_selector").innerHTML = negative_movement_list;
} 

function running_distance_measurer () {	
	enemy_pos_list = enemy_group.map(function(a) {return a.pos;});
	for (l = (-(Math.round((actors[j].land_speed*4) / 5))); l < Math.round(((actors[j].land_speed*4) + 5) / 5); l++) {
	if (jQuery.inArray((actors[j].pos + (l*5)), enemy_pos_list) == -1)  { 
	run_movement_list += "<option>" + (l*5);
	} else { break;}
		}
	document.getElementById("run_selector").innerHTML = run_movement_list;
}


function player_move_function() {
	actors[j].AP -= 2;
	movement = $('#movement_selector :selected').val();
	player_index_finder2 ();
	player_party[actor_index].pos += Number(movement);
	result += actors[j].label + " moved forwards " + movement + "'." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	updateScroll();
	actorsList ();
	enemy_list = "";
	mySelector();
	$("#dummy_action").prop("selected", true);
	$("#action_selector").val("Please select");
	$("#movement_type_selector").val("Please select");
	document.getElementById("movement_type_selector").style.display = "none";
	document.getElementById("movement_selector").style.display = "none";
	document.getElementById("PlayerMoveButton").style.display = "none";
}

function player_move_back_function() {
	actors[j].AP -= 2;
	movement = $('#negativemovement_selector :selected').val();
	player_index_finder2 ();
	player_party[actor_index].pos += Number(movement);
	result += actors[j].label + " move backwards " + Math.abs(movement) + "'." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	updateScroll();
	actorsList ();
	enemy_list = "";
	mySelector();
	$("#dummy_action").prop("selected", true);
	$("#action_selector").val("Please select");
	$("#movement_type_selector").val("Please select");
	document.getElementById("movement_type_selector").style.display = "none";
	document.getElementById("movement_selector").style.display = "none";
	document.getElementById("negativemovement_selector").style.display = "none";
	document.getElementById("PlayerMoveButton").style.display = "none";
	document.getElementById("PlayerMoveBackButton").style.display = "none";
}

function player_run_function() {
	actors[j].AP -= 5;
	movement = $('#run_selector :selected').val();
	player_index_finder2 ();
	player_party[actor_index].pos += Number(movement);
	result += actors[j].label + " ran " + movement + "'." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	updateScroll();
	actorsList ();
	enemy_list = "";
	mySelector();
	$("#dummy_action").prop("selected", true);
	$("#action_selector").val("Please select");
	$("#movement_type_selector").val("Please select");
	document.getElementById("movement_type_selector").style.display = "none";
	document.getElementById("movement_selector").style.display = "none";
	document.getElementById("run_selector").style.display = "none";
	document.getElementById("PlayerMoveButton").style.display = "none";
	document.getElementById("PlayerRunButton").style.display = "none";
}

function player_single_attack_function (){
	actors[j].AP -= 3;
	target = $('#attack_selector :selected').text();
	document.getElementById("attack_type_selector").style.display = "none";
	target_finder();
	rolld20 ();
	attack = d20roll + actors[j].base_attack_mod;
	if (attack >= enemy_group[target_index].AC) {
	player_hit_function ();
	} else {
	result += actors[j].label + " attacked " + enemy_group[target_index].label + " and rolled " + attack + ", but missed." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	updateScroll();
	$("#dummy_action").prop("selected", true);
	$("#action_selector").val("Please select");
	$("#attack_type_selector").val("Please select");
	document.getElementById("attack_type_selector").style.display = "none";
	document.getElementById("attack_selector").style.display = "none";
	document.getElementById("PlayerSingleAttackButton").style.display = "none";
	}
}

function player_charge_function () {
}

function player_hit_function () {
	damage = roller (actors[j].damage_dice);
	enemy_group[target_index].HP = enemy_group[target_index].HP - damage;
	if (enemy_group[target_index].HP > 0) {
	result += actors[j].label + " attacked " + enemy_group[target_index].label + " and rolled " + attack + " and caused " + damage + " HP loss." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	updateScroll();
	$("#dummy_action").prop("selected", true);
	$("#action_selector").val("Please select");
	$("#attack_type_selector").val("Please select");
	document.getElementById("attack_type_selector").style.display = "none";
	document.getElementById("attack_selector").style.display = "none";
	document.getElementById("PlayerSingleAttackButton").style.display = "none";
	actorsList ();
	} else {
	result += actors[j].label + " attacked and destroyed " + enemy_group[target_index].label +"." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	updateScroll();
	remove_dead_enemy ();
	i++;
	battle_end_checker ();
	actorsList ();
	if (j == actors.length -1) {
	j--;
		} else {
		}
	enemy_list = "";
	mySelector();
	$("#dummy_action").prop("selected", true);
	$("#action_selector").val("Please select");
	$("#attack_type_selector").val("Please select");
	document.getElementById("attack_type_selector").style.display = "none";
	document.getElementById("attack_selector").style.display = "none";
	document.getElementById("PlayerSingleAttackButton").style.display = "none";
	}
}


function player_runchecker () {

}