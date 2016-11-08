class CrewMember{

  constructor(hash){
    this.id = hash.id;
    this.position = hash.position;
    this.currentShip = "Looking for a Rig";
    Store.data.crewMembers.push(this);
  }

  assignShip(shipObj){
    this.spaceshipId = shipObj.id;
    shipObj.docked = false;
    this.currentShip = shipObj;
  }

  engageWarpDrive(){
    if (this.currentShip === "Looking for a Rig"){
      return "had no effect"
    } else if (this.position === "Pilot") {
      this.currentShip.warpDrive = 'engaged!'
    }
  }

  setsInvisibility(){
    if (this.currentShip === "Looking for a Rig"){
      return "had no effect"
    } else if (this.position === "Defender") {
      this.currentShip.cloaked = true
    } 
  }

  chargePhasers(){
    if (this.currentShip === "Looking for a Rig"){
      return "had no effect";
    } else if (this.position === "Gunner") {
      this.currentShip.phasersCharge = 'charged!'
    }
  }

}
  
