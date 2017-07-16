function magic_missle () {
if (actors[i].status == "active" && actors[i].player == 1) {
	actors[j].AP -= 5;
	target = $('#magic_attack_selector :selected').text();
	document.getElementById("magic_attack_type_selector").style.display = "none";
	target_finder();
	damage = roller("d4") + 1;
	enemy_group[target_index].HP = enemy_group[target_index].HP - damage;
	if (enemy_group[target_index].HP > 0) {
	result += "Magic missles appearing from " + actors[j].label + "s fingers and slams into " + enemy_group[target_index].label + "'s body and caused " + damage + " HP loss." + "<br/>";
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
	}
}