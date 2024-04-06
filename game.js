class Warrior{
  constructor(){
   this.lvl = 1 ;
   this.warrior_rank = "Pushover";
    this.warrior_ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
    this.warrior_experiance = 100;
    this.warrior_achievements =[];
      }
level(){

    this.lvl = Math.floor(this.warrior_experiance/100);
    if(this.lvl > 100){this.lvl = 100};
    return this.lvl;
  }
rank(){
   return this.warrior_ranks[Math.floor(this.lvl/10)];
   
  }
experience(){
 
  if(this.warrior_experiance > 10000){ this.warrior_experiance = 10000};
  return this.warrior_experiance;
}
achievements(){
    return this.warrior_achievements;
    
  }  
training([name_achievement,enemy_exp,minlvl]){
    if(this.lvl >= minlvl){
      //brake point
      this.warrior_achievements.push(name_achievement);
      this.warrior_experiance += enemy_exp;
      this.update()
      return name_achievement;
      }
     else{
      
      return "Not strong enough";
      
   }

}

  battle(enemy_level){
        if ( enemy_level<= 0 || enemy_level > 100) {
      return "Invalid level";
    }
    if (enemy_level+1 < this.lvl) {
      return "Easy fight";
    }
    if (enemy_level+1 == this.lvl) {
      this.warrior_experiance += 5;
      this.update()
      return "A good fight";
    }
    if (enemy_level == this.lvl) {
      this.warrior_experiance += 10;
      this.update()
      return "A good fight";
    }
    if (Math.floor(this.lvl/10) < Math.floor(enemy_level/10) && enemy_level > this.lvl+4) {
      return "You've been defeated";
    }
    if (enemy_level > this.lvl) {
      this.warrior_experiance += 20 * (enemy_level-this.lvl)**2;
      this.update();
      return "An intense fight";
    }
  }  
