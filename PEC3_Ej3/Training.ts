import Player from './Player'

export default class Training {
    
    /*+----------+     +----------+
      | Training |---<>| Player   |
      +----------+     +----------+*/
    private player: Player;

    private numWeeks: Number;

    constructor(player: Player) {
        this.player = player;
    }

    setPlayer(player: Player) {
    this.player = player;
    }
    getPlayer(): Player {
        return {} as Player;
    }

    getNumWeeks(): Number {
    return this.numWeeks;
    }
    setNumWeeks(weeks: Number) {
        this.numWeeks = weeks;
    }

    increaseNumWeeks() {
        //TODO
    }
    decreaseNumWeeks() {
        //TODO
    }


    toString(): String {
        return "";
    }

}