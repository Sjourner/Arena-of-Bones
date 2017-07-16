var rolled_attribute = "";
var char_str = "";
var char_dex = "";
var char_con = "";
var char_int = "";
var char_wis = "";
var char_cha = "";
var attr_store = "";
man_char_numb_index=0;
var placeholder_1 = "";
var placeholder_2 = "";
var placeholder_3 = "";

function man_play_gen_input_gen2() {
	man_chargen = "";
	document.getElementById("manual_chargen").innerHTML = man_chargen;
	man_chargen += "Character "+ man_char_numb_index +"'s name:"+"</br>"+"<input type='text' id='charname" + man_char_numb_index + "'>"+"</br>";
	document.getElementById("manual_chargen").innerHTML = man_chargen;
	man_chargen += "Race:" + "</br>" + "<select name='raceSelector' id='race_selector" + man_char_numb_index + "' >"
	+"<option selected disabled>Select race</option>"
	+"<option value='Human'>Human</option>"
	+"<option value='Dwarf'>Dwarf</option>"
	+"<option value='Elf'>Elf</option>"
	+"<option value='Half-Elf'>Half-Elf</option>"
	+"<option value='Half-Orc'>Half-Orc</option>"
	+"<option value='Halfling'>Halfling</option>"
	+"<option value='Gnome'>Gnome</option>"
	+"</select>"+"</br>"; 
	document.getElementById("manual_chargen").innerHTML = man_chargen;
	man_chargen += "Class:" +"</br>"+ "<select name='classSelector' id='class_selector" + man_char_numb_index + "'>"
	+"<option selected disabled>Select class</option>"
	+"<option value='Barbarian'>Barbarian</option>"
	+"<option value='Bard'>Bard</option>"
	+"<option value='Cleric'>Cleric</option>"
	+"<option value='Druid'>Druid</option>"
	+"<option value='Fighter'>Fighter</option>"
	+"<option value='Monk'>Monk</option>"
	+"<option value='Paladin'>Paladin</option>"
	+"<option value='Ranger'>Ranger</option>"
	+"<option value='Rouge'>Rouge</option>"
	+"<option value='Sorcerer'>Sorcerer</option>"
	+"<option value='Wizard'>Wizard</option>"
	+"</select>"+"</br>";
	document.getElementById("manual_chargen").innerHTML = man_chargen;
	attr_store = man_char_numb_index;
	char_str = get_attribute2();
	char_dex = get_attribute2();
	char_con = get_attribute2();
	char_int = get_attribute2();
	char_wis = get_attribute2();
	char_cha = get_attribute2();
	man_chargen += "<span id='char_attributes" + man_char_numb_index + "'>STR:</span>"
	+ "<span id='char_str" + man_char_numb_index + "'>"+get_attribute2() + " </span>" + "DEX:" + "<span id='char_dex" + man_char_numb_index + "'>"+get_attribute2() + " </span>" + " CON:" + "<span id='char_con" + man_char_numb_index + "'>"+get_attribute2() + " </span>" + " INT:" + "<span id='char_int" + man_char_numb_index + "'>"+get_attribute2() + " </span>" + " WIS:" + "<span id='char_wis" + man_char_numb_index + "'>"+get_attribute2() + " </span>" + " CHA:" + "<span id='char_cha" + man_char_numb_index + "'>"+get_attribute2() + " </span>" +"; </p>";
	document.getElementById("manual_chargen").innerHTML = man_chargen;
	if (man_char_numb_index < (player2_numb-1)){
		++man_char_numb_index;
		man_chargen += "<button type='button' id='reroll_attr_button' onclick=man_play_gen()>Re-roll attributes</button>"+"</br>";
		document.getElementById("manual_chargen").innerHTML = man_chargen + "<button type='button' id='next_chargen_button' onclick=man_play_gen_input_gen2()>Next character</button>";
		} else { 
		man_chargen += "<button type='button' id='reroll_attr_button' onclick=man_play_gen()>Re-roll attributes</button>"+"</br>";
		document.getElementById("manual_chargen").innerHTML = man_chargen + "<button type='button' id='chargen_button' onclick=man_play_gen()>Generate character</button>";
		}
}

function man_play_gen_input_gen() {
	for(man_char_numb_index=0; man_char_numb_index < player2_numb; ++man_char_numb_index){
	man_chargen += "Character "+ man_char_numb_index +"'s name:"+"</br>"+"<input type='text' id='charname" + man_char_numb_index + "'>"+"</br>";
	document.getElementById("manual_chargen").innerHTML = man_chargen;
	man_chargen += "Race:" + "</br>" + "<select name='raceSelector" + man_char_numb_index + "' id='race_selector" + man_char_numb_index + "' >"
	+"<option selected disabled>Select race</option>"
	+"<option value='Human' id='race_human" + man_char_numb_index + "'>Human</option>"
	+"<option value='Dwarf' id='race_dwarf" + man_char_numb_index + "'>Dwarf</option>"
	+"<option value='Elf' id='race_elf" + man_char_numb_index + "'>Elf</option>"
	+"<option value='Half-Elf' id='race_half-elf" + man_char_numb_index + "'>Half-Elf</option>"
	+"<option value='Half-Orc' id='race_half-orc" + man_char_numb_index + "'>Half-Orc</option>"
	+"<option value='Halfling' id='race_halfling" + man_char_numb_index + "'>Halfling</option>"
	+"<option value='Gnome' id='race_gnome" + man_char_numb_index + "'>Gnome</option>"
	+"</select>"+"</br>"; 
	document.getElementById("manual_chargen").innerHTML = man_chargen;
	man_chargen += "Class:" +"</br>"+ "<select name='classSelector' id='class_selector" + man_char_numb_index + "'>"
	+"<option selected disabled>Select class</option>"
	+"<option value='Barbarian'>Barbarian</option>"
	+"<option value='Bard'>Bard</option>"
	+"<option value='Cleric'>Cleric</option>"
	+"<option value='Druid'>Druid</option>"
	+"<option value='Fighter'>Fighter</option>"
	+"<option value='Monk'>Monk</option>"
	+"<option value='Paladin'>Paladin</option>"
	+"<option value='Ranger'>Ranger</option>"
	+"<option value='Rouge'>Rouge</option>"
	+"<option value='Sorcerer'>Sorcerer</option>"
	+"<option value='Wizard'>Wizard</option>"
	+"</select>"+"</br>";
	document.getElementById("manual_chargen").innerHTML = man_chargen;
	attr_store = man_char_numb_index;
	char_str = get_attribute2();
	char_dex = get_attribute2();
	char_con = get_attribute2();
	char_int = get_attribute2();
	char_wis = get_attribute2();
	char_cha = get_attribute2();
	man_chargen += "<span id='char_attributes" + man_char_numb_index + "'>STR:</span>"
	+ "<span id='char_str" + man_char_numb_index + "'>"+get_attribute2() + " </span>" + "DEX:" + "<span id='char_dex" + man_char_numb_index + "'>"+get_attribute2() + " </span>" + " CON:" + "<span id='char_con" + man_char_numb_index + "'>"+get_attribute2() + " </span>" + " INT:" + "<span id='char_int" + man_char_numb_index + "'>"+get_attribute2() + " </span>" + " WIS:" + "<span id='char_wis" + man_char_numb_index + "'>"+get_attribute2() + " </span>" + " CHA:" + "<span id='char_cha" + man_char_numb_index + "'>"+get_attribute2() + " </span>" +"; </p>";
	document.getElementById("manual_chargen").innerHTML = man_chargen;
	man_chargen += "<button type='button' id='reroll_attr_button" + man_char_numb_index + "' onclick= re_roll(this.id)>Re-roll attributes</button>"+"</br>";
	document.getElementById("manual_chargen").innerHTML = man_chargen + "<button type='button' id='chargen_button' onclick=man_play_gen()>Generate character</button>";
	}
}

function re_roll(clicked_id) {
	placeholder_1 = clicked_id;
	placeholder_2 = placeholder_1.substr(18,10);
	document.getElementById("char_str"+ placeholder_2 +"").innerHTML = get_attribute2() + " ";
	document.getElementById("char_dex"+ placeholder_2 +"").innerHTML = get_attribute2() + " ";
	document.getElementById("char_con"+ placeholder_2 +"").innerHTML = get_attribute2() + " ";
	document.getElementById("char_int"+ placeholder_2 +"").innerHTML = get_attribute2() + " ";
	document.getElementById("char_wis"+ placeholder_2 +"").innerHTML = get_attribute2() + " ";
	document.getElementById("char_cha"+ placeholder_2 +"").innerHTML = get_attribute2() + " ";
}

function get_attribute() {
	man_chargen += "<p id='char_attributes" + man_char_numb_index + "'>STR:"+ ((Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)) 
	+"; " + "DEX:"
	+ ((Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)) 
	+"; " + "CON:"
	+ ((Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)) 
	+"; " + "INT:"
	+ ((Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)) 
	+"; " + "WIS:"
	+ ((Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)) 
	+"; " + "CHA:"
	+ ((Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)) 
	+"; </p>";
}

function get_attribute2() {
	rolled_attribute = ((Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1));
	return rolled_attribute;
}

function get_attribute3() {
	document.getElementById('char_attributes' + man_char_numb_index).innerHTML = "";
	char_str = get_attribute2();
	char_dex = get_attribute2();
	char_con = get_attribute2();
	char_int = get_attribute2();
	char_wis = get_attribute2();
	char_cha = get_attribute2();
	document.getElementById('char_attributes' + man_char_numb_index).innerHTML = "STR:"
	+ char_str + " DEX:" + char_dex + " CON:" + char_con + " INT:" + char_int + " WIS:" + char_wis + " CHA:" + char_cha
	+"; </p>";
}


function get_name() {
	console.log("charname" + man_char_numb_index);
	charname = document.getElementById("charname" + man_char_numb_index).value;
	}

function get_class () {
	selected_class = $('#class_selector' + man_char_numb_index).val();
	}
	
function get_race () {
	selected_race = $('#race_selector' + man_char_numb_index).val();
	}
	
function get_str () {
	char_str = document.getElementById("char_str" + man_char_numb_index).innerHTML;
	}
	
function get_dex () {
	char_dex = document.getElementById("char_dex" + man_char_numb_index).innerHTML;
	}

function get_con () {
	char_con = document.getElementById("char_con" + man_char_numb_index).innerHTML;
	}

function get_int () {
	char_int = document.getElementById("char_int" + man_char_numb_index).innerHTML;
	}	

function get_wis () {
	char_wis = document.getElementById("char_wis" + man_char_numb_index).innerHTML;
	}
	
function get_cha () {
	char_str = document.getElementById("char_cha" + man_char_numb_index).innerHTML;
	}	
	
function man_play_gen () {
	for (man_char_numb_index=0; man_char_numb_index < player2_numb; ++man_char_numb_index){
	player_AC_generator();
	get_name();
	get_class ();
	get_race ();
	weapon_gen_with_selector ();
	get_str ();
	get_dex ();
	get_con ();
	get_int ();
	get_wis ();
	get_cha ();
	placeholder_3 = Math.floor((char_con-10)/2);
	if (placeholder_3 < 0) {
	player_HP_holder = (Math.floor(Math.random() * (8)) + 1);
	} else {
	player_HP_holder = (Math.floor(Math.random() * (8)) + 1)+ (Math.floor((char_con-10)/2));
	}
	gen_player_container['prep'+man_char_numb_index]  
         = { 'value':'p' + (player_numb_index + man_char_numb_index+1), 
             'label': charname, 
             'initiative': '',
             'level': 1,
	     'class': selected_class,
             'maxHP': player_HP_holder,
	     'race': selected_race,
		 'HP': player_HP_holder,
 	     'AC': 13,
	     'regular_weapon': weapon_list.filter(function( obj ){ return obj.Label == primary_weapon;})[0].Label,
	     'damage_dice': weapon_list.filter(function( obj ){ return obj.Label == primary_weapon;})[0].Dmg_M,
	     'base_attack_mod': 1,
		 'strength': char_str,
		 'dexterity': char_dex,
		 'constitution': char_con,
		 'intelligence': char_int,
		 'wisdom': char_wis,
		 'charisma': char_cha,
	     'land_speed': 30,
	     'player': 1,
	     'status': 'passive',
	     'pos': (player_numb_index+man_char_numb_index+1)*5,
	     'AP': 5,
           }; 
		   selected_class = "";
	player_party.push(gen_player_container['prep'+man_char_numb_index]);
	}
	document.getElementById("manual_chargen").style.display = "none";
	document.getElementById("intro_text3").style.display = "none";
	document.getElementById("intro2").style.display = "block";
	document.getElementById("actor_counter").style.display = "block";
}

function player_generator(){
	for(player_numb_index=0; player_numb_index < player_numb; ++player_numb_index) {
 player_HP_generator();
 player_AC_generator();
 selected_class = classes[Math.floor(Math.random() * classes.length)];
 selected_race = race[Math.floor(Math.random() * race.length)];
 char_str = ((Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1));
 char_dex = ((Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)); 
 char_con = ((Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1));
 char_int = ((Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1));
 char_wis = ((Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1));
 char_cha = ((Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1)+(Math.floor(Math.random() * (6)) + 1));
 weapon_gen_with_selector ();
 gen_player_container['prop'+player_numb_index]  
         = { 'value':'p' + (player_numb_index+1), 
             'label':'Adventurer '+ (player_numb_index+1), 
             'initiative': '',
             'level': 1,
	     'class': selected_class,
		 'race': selected_race,
             'maxHP': player_HP_holder,
		 'HP': player_HP_holder,
 	     'AC': 13,
	     'regular_weapon': weapon_list.filter(function( obj ){ return obj.Label == primary_weapon;})[0].Label,
	     'damage_dice': weapon_list.filter(function( obj ){ return obj.Label == primary_weapon;})[0].Dmg_M,
	     'base_attack_mod': 1,
		 'strength': char_str,
		 'dexterity': char_dex,
		 'constitution': char_con,
		 'intelligence': char_int,
		 'wisdom': char_wis,
		 'charisma': char_cha,
	     'land_speed': 30,
	     'player': 1,
	     'status': 'passive',
	     'pos': player_numb_index*5,
	     'AP': 5,
           }; 
 selected_class = "";
	player_party.push(gen_player_container['prop'+player_numb_index]);
	}

};

function weapon_gen_with_selector (){
dummy3 = weapon_list_names[Math.floor(Math.random() * weapon_list_names.length)];
console.log(dummy3);
dummy = classlist.filter(function( obj ){ return obj.Label == selected_class;})[0].Class_Weapon_proficiency;
console.log(dummy);
dummy2 = weapon_list.filter(function( obj ){ return obj.Label == dummy3;})[0].Type;
console.log(String(dummy2));
dummy4 = weapon_list.filter(function( obj ){ return obj.Label == dummy3;})[0].Type5;
if (dummy.search(dummy2) == -1) {
  if (dummy.search(dummy4) == -1) {
	weapon_gen_with_selector ();
	} else {	
 primary_weapon = dummy3;
	} 
} else {
primary_weapon = dummy3;
}
};