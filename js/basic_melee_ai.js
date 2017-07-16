function enemy_target_function (){
	var player_pos_list = player_party.map(function(e) {return e.pos;});
	nearest_player_pos = closest (actors[j].pos,player_pos_list);
	player_index_finder3 ();
	basic_meelee_ai ();
}

function open_path_measurer_run () {	
	actors_pos_list = actors.map(function(e) {return e.pos;});
	self_pos_index = actors_pos_list.indexOf(actors[j].pos)
	if (self_pos_index > -1) {
   	 actors_pos_list.splice(self_pos_index, 1);
	}
	for (l = -1; l > (-(Math.round(((actors[j].land_speed * 4) + 5) / 5))); l--) {
	if (jQuery.inArray((actors[j].pos + (l*5)), actors_pos_list) == -1)  { 
	isrunpossible = 1;
	} else { isrunpossible = 1;}
	}
} 

function runchecker () {
enemy_index_finder2 ();
	open_path_measurer_run ();
	if (isrunpossible == 1){
		enemy_group[actor_index].pos -=	(enemy_group[actor_index].land_speed * 4);
		result += actors[j].label + " ran forward for " + (enemy_group[actor_index].land_speed * 4) + " feet."  + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	actors[j].AP = 0;	
		} else {
		meelee_ai_move ();
	}
}

function chargechecker () {
	enemy_index_finder2 ();
	actors_pos_list = actors.map(function(e) {return e.pos;});
	self_pos_index = actors_pos_list.indexOf(actors[j].pos)
	if (self_pos_index > -1) {
   	 actors_pos_list.splice(self_pos_index, 1);
	for (l = -1; l > (-(Math.round(((actors[j].land_speed * 2) + 5) / 5))); l--) {
		if (jQuery.inArray((actors[j].pos + (l*5)), actors_pos_list) == -1)  { 
		isrunpossible = 1;
		} else { isrunpossible = 0;
		}
	}
	if (isrunpossible == 1){
		enemy_group[actor_index].pos =	(player_party[target].pos + 5)
		result += actors[j].label + " charged " + player_party[target].label + "." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	actors[j].AP -= 5;
	console.log(actors[j].AP);
	enemy_attack_function ();	
		} else {
		meelee_ai_move ();
	}
	}
}

function meelee_ai_move (){
	enemy_index_finder2 ();
	enemy_group[actor_index].pos -=	enemy_group[actor_index].land_speed ;
		result += actors[j].label + " approached for " + enemy_group[actor_index].land_speed + " feet." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	actors[j].AP -= 2;
}

function basic_meelee_ai (){
	console.log(actors[j].AP);
	console.log(ai_selected_step);
	if ((actors[j].pos - player_party[target].pos) > (actors[j].land_speed * 4) && actors[j].AP == 5){
	ai_selected_step = 1;
	runchecker ();
	basic_meelee_ai ();
	} else if ((actors[j].pos - player_party[target].pos) > (actors[j].land_speed * 4) && actors[j].AP <= 4 && actors[j].AP > 1) {
	ai_selected_step = 2;
	meelee_ai_move ();
	basic_meelee_ai ();
	} else if ((actors[j].pos - player_party[target].pos) > (Number((actors[j].land_speed * 2)) + 5) && (actors[j].pos - player_party[target].pos) <= (actors[j].land_speed * 4) && actors[j].AP > 1 ){
	ai_selected_step = 3;
	meelee_ai_move ();
	basic_meelee_ai ();
	} else if ((actors[j].pos - player_party[target].pos) <= (Number((actors[j].land_speed * 2) + 5)) && (actors[j].pos - player_party[target].pos) > actors[j].land_speed && actors[j].AP == 5) {
	ai_selected_step = 4;
	console.log(actors[j].label);
	chargechecker ();
	basic_meelee_ai ();
	} else if ((actors[j].pos - player_party[target].pos) <= (Number((actors[j].land_speed * 2) + 5)) && (actors[j].pos - player_party[target].pos) > actors[j].land_speed && actors[j].AP <= 4 && actors[j].AP > 1 ) {
	ai_selected_step = 5;
	meelee_ai_move ();
	basic_meelee_ai ();
	} else if ((actors[j].pos - player_party[target].pos) <= actors[j].land_speed && (actors[j].pos - player_party[target].pos) > 5 && actors[j].AP > 1 ) {
	ai_selected_step = 6;
	enemy_index_finder2 ();
	enemy_group[actor_index].pos =	(player_party[target].pos + 5);
	result += actors[j].label + " approached for " + enemy_group[actor_index].land_speed + " feet." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	actors[j].AP -= 2;
	basic_meelee_ai ();
	} else if ((actors[j].pos - player_party[target].pos) == 5 && actors[j].AP > 2 && actors[j].AP <= 4) {
	ai_selected_step = 7;
	enemy_attack_function ();
	} else if ((actors[j].pos - player_party[target].pos) == 5 && actors[j].AP == 5) {
	ai_selected_step = 8;
	enemy_full_attack_function ();
	actors[j].AP -= 5;
	} else if ((actors[j].pos - player_party[target].pos) == -5 && actors[j].AP > 2) {
	enemy_attack_function ();
	} else if ((actors[j].pos - player_party[target].pos) >= (-(actors[j].land_speed)) && (actors[j].pos - player_party[target].pos) < -5) {
	enemy_index_finder2 ();
	travelled_distance = Math.abs(enemy_group[actor_index].pos - (player_party[target].pos - 5));
	enemy_group[actor_index].pos =	(player_party[target].pos - 5);
	result += actors[j].label + " " + actors[j].land_speed + " lábnyit távolodott." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	} else if ((actors[j].pos - player_party[target].pos) >= (-(actors[j].land_speed)) && (actors[j].pos - player_party[target].pos) < (-(actors[j].land_speed))){
	enemy_index_finder2 ();
	enemy_group[actor_index].pos +=	enemy_group[actor_index].land_speed;
	result += actors[j].label + " withdraw with " + actors[j].land_speed + " feet." + "<br/>";
	document.getElementById("result_text").innerHTML = result;	
	} else if (actors[j].AP <= 0) {
	}
}

function enemy_attack_function (){
	rolld20 ();
	console.log(d20roll);
	attack = d20roll + actors[j].base_attack_mod_pri_first;
	console.log(attack);
	if (attack >= player_party[target].AC) {
	enemy_hit_function ();
	actors[j].AP -= 3;
	} else {
	actors[j].status = "passive";
	actors[j].AP -= 3;
	result += actors[j].label + " attacked " + player_party[target].label + " and rolled " + attack + ", but missed." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	updateScroll();
	}
}

function enemy_hit_function (){
	roller (actors[j].damage_dice_pri_first);
	damage = roll_result;
	player_party[target].HP = player_party[target].HP - damage;
	if (player_party[target].HP > 0) {
	actors[j].status = "passive";
	result += actors[j].label + " attacked " + player_party[target].label + " and rolled " + attack + " and caused " + damage + " HP loss." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	actorsList ();
	updateScroll();
	} else {
	actors[j].status = "passive";
	result += actors[j].label + " attacked and defeated " + player_party[target].label +"." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	updateScroll();
	remove_dead_player ();
	actorsList ();
	}
	
}