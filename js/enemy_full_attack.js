function enemy_full_attack_function (){
	switch (actors[j].number_of_primary_attacks) {
	case 1:
		rolld20 ();
		attack = Math.floor(Math.random() * (20)) + 1 + actors[j].base_attack_mod_pri_first;
		if (attack >= player_party[target].AC) {
		roller (actors[j].damage_dice_pri_first);
	damage = roll_result;
	player_party[target].HP = player_party[target].HP - damage;
	if (player_party[target].HP > 0) {
	actors[j].status = "passive";
	result += actors[j].label + " megtámadta " + player_party[target].label + " és " + attack + "-t gurított és " + damage + " sebzést okozott." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	actorsList ();
	updateScroll();
	} else {
	actors[j].status = "passive";
	result += actors[j].label + " megtámadta és legyőzte " + player_party[target].label +"-t." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	updateScroll();
	remove_dead_player ();
	actorsList ();
	}
		} else {
	actors[j].status = "passive";
	result += actors[j].label + " megtámadta " + player_party[target].label + " és " + attack + "-t gurított, de nem talált." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	updateScroll();
	}
		break;
	}
	switch (actors[j].number_of_secondary_attacks) {
	case 0:
		break;
	case 1:
		rolld20 ();
		attack = Math.floor(Math.random() * (20)) + 1 + actors[j].base_attack_mod_sec_first;
		if (attack >= player_party[target].AC) {
		roller (actors[j].damage_dice_sec_first);
	damage = roll_result;
	player_party[target].HP = player_party[target].HP - damage;
	if (player_party[target].HP > 0) {
	actors[j].status = "passive";
	result += actors[j].label + " megtámadta " + player_party[target].label + " és " + attack + "-t gurított és " + damage + " sebzést okozott." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	actorsList ();
	updateScroll();
	} else {
	actors[j].status = "passive";
	result += actors[j].label + " megtámadta és legyőzte " + player_party[target].label +"-t." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	updateScroll();
	remove_dead_player ();
	actorsList ();
	}
		} else {
	actors[j].status = "passive";
	result += actors[j].label + " megtámadta " + player_party[target].label + " és " + attack + "-t gurított, de nem talált." + "<br/>";
	document.getElementById("result_text").innerHTML = result;
	updateScroll();
	}
		break;	
	}
}