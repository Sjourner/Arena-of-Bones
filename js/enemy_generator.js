function enemy_generator(){
	var primary_weapon = "Scimitar";
	var secondary_weapon = "Claw";
	for(enemy_numb_index=0; enemy_numb_index < enemy_numb; ++enemy_numb_index) {
 enemy_HP_generator();
 gen_enemy_container['prop'+enemy_numb_index]  
         = { 'value':'e' + (enemy_numb_index+1), 
             'label':'Skeleton '+ (enemy_numb_index+1), 
             'initiative': '',
             'maxHP': enemy_HP_holder,
	     'HP': enemy_HP_holder,
 	     'AC': 13,
	     'damage_dice_pri_first': weapon_list.filter(function( obj ){ return obj.Label == primary_weapon;})[0].Dmg_M,
	     'damage_mod_pri_first': 0,
	     'damage_dice_sec_first': weapon_list.filter(function( obj ){ return obj.Label == secondary_weapon;})[0].Dmg_M,
	     'damage_mod_sec_first': 1,
	     'base_attack_mod_pri_first': 0,
	     'number_of_primary_attacks': 1,
	     'number_of_secondary_attacks': 1,
	     'base_attack_mod_sec_first': -3,
	     'land_speed': 30,
	     'player': 0,
	     'status': 'passive',
	     'pos': (player_numb_index*5) + Number(start_distance) + (enemy_numb_index*5),
	     'AP': 5,
           }; 
	enemy_group.push(gen_enemy_container['prop'+enemy_numb_index]);
	}
}