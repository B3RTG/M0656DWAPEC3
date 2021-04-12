import Team from "./Team";

class Match {

    private pointsHomeTeam: Number = 0;
    private pointsAwayTeam: Number = 0;

    /*+------+     +--------+
      | Team |---<>| Match  |
      +------+     +--------+*/
    private homeTeam: Team;
    /*+------+     +--------+
      | Team |---<>| Match  |
      +------+     +--------+*/
    private awayTeam: Team;

    constructor(homeTeam: Team, awayTeam: Team) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
    }

    getHomeTeam(): Team {
        return this.homeTeam;
    }
    setHomeTeam(team: Team) {
        this.homeTeam = team;
    }

    getAwayTeam(): Team {
        return this.awayTeam;
    }
    setAwayTeam(team: Team) {
        this.awayTeam = team;
    }

    getPointsHomeTeam(): Number {
        return 0;
    }
    private setPointsHomeTeam(points: Number) {
        this.pointsHomeTeam = points;
    }

    getPointsAwayTeam(): Number {
        return 0;
    }
    private setPointsAwayTeam(points: Number) {
        this.pointsAwayTeam = points;
    }

    play()
    {
        //TODO
    }

}