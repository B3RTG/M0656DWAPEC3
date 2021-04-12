export default class PlayerAttributes {

    private height: Number; 
    private weight: Number; 
    private speed: Number; 
    private defense: Number; 
    private jump: Number; 
    private energy: Number; 
    private ft: Number; 
    private fg2p: Number;
    private fg3p: Number;
    private rebounds: Number;
    private assist: Number;

    constructor(height: Number, weight: Number, speed: Number, defense: Number, jump: Number, energy: Number, ft: Number, fg2p: Number, fg3p: Number,rebounds: Number,assist: Number) {
        this.height = height;
        this.weight = weight;
        this.speed = speed;
        this.defense = defense;
        this.jump = jump;
        this.energy = energy;
        this.ft = ft;
        this.fg2p = fg2p;
        this.fg3p = fg3p;
        this.rebounds = rebounds;
        this.assist = assist;
    }

    getAssist(): Number {
        return this.assist;
    }
    setAssist(assist: Number) {
        this.assist = assist;
    }

    getHeight(): Number {
        return this.height;
    }
    setHeight(height: Number) {
        this.height = height;
    }

    getWeight(): Number {
        return this.weight;
    }
    setWeight(weight: Number) {
        this.weight = weight;
    }
    
    getSpeed(): Number {
        return this.speed;
    }
    setSpeed(speed: Number) {
        this.speed = speed;
    }

    getDefense(): Number {
        return this.defense;
    }
    setDefense(defense: Number) {
        this.defense = defense;
    }

    getJump(): Number {
        return this.jump;
    }
    setJump(jump: Number) {
        this.jump = jump;
    }

    getEnergy(): Number {
        return this.energy;
    }
    setEnergy(energy: Number) {
        this.energy = energy;
    }

    getFt(): Number {
        return this.ft;
    }
    setFt(ft: Number) {
        this.ft = ft;
    }

    getFg2p(): Number {
        return this.fg2p;
    }
    setFg2p(fg2p: Number) {
        this.fg2p = fg2p;
    }
    
    getFg3p(): Number {
        return this.fg2p;
    }
    setFg3p(fg2p: Number) {
        this.fg2p = fg2p;
    }
    
    getRebounds(): Number {
        return this.rebounds;
    }
    setRebounds(rebounds: Number) {
        this.rebounds = rebounds;
    }
    
    getAverate(): Number {
        return 0;
    }
}