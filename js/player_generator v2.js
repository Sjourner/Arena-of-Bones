function player_generator(){
	for(player_numb_index=0; player_numb_index < player_numb; ++player_numb_index) {
 player_HP_generator();
 player_AC_generator();
 selected_class = classes[Math.floor(Math.random() * classes.length)];
 gen_player_container['prop'+player_numb_index]  
         = { 'value':'p' + (player_numb_index+1), 
             'label':'Adventurer '+ (player_numb_index+1), 
             'initiative': '',
             'level': 1,
	     'class': selected_class,
             'maxHP': player_HP_holder,
	     'HP': player_HP_holder,
 	     'AC': 13,
	     'damage_dice': 'd8',
	     'base_attack_mod': 1,
	     'land_speed': 30,
	     'player': 1,
	     'status': 'passive',
	     'pos': player_numb_index*5,
	     'AP': 5,
		 'regular_weapon': 'Longsword',
		 'damage_dice': 'd8',
           }; 
 selected_class = "";
	player_party.push(gen_player_container['prop'+player_numb_index]);
	}

}