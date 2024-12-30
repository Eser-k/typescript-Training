"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FootballCoach_1 = require("./FootballCoach");
var RacingCoach_1 = require("./RacingCoach");
var footballCoach = new FootballCoach_1.FootballCoach();
var racingCoach = new RacingCoach_1.RacingCoach();
var coaches = [];
coaches.push(footballCoach);
coaches.push(racingCoach);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var tempCaoch = coaches_1[_i];
    console.log(tempCaoch.getDailyWorkOut());
}
