class Spaceship{

  constructor(hash){
    this.id = hash.id;
    this.name = hash.name;
    this.phasers = hash.phasers;
    this.shields = hash.shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    this.docked = true;
    Store.data.spaceships.push(this);
  }

  // if(Store.data.crewMembers){
  //   this.docked = false;
  // }


}