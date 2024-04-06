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
