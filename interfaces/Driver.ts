import { FootballCoach } from "./FootballCoach";
import { RacingCoach } from "./RacingCoach";
import { Coach } from "./Coach";

let footballCoach = new FootballCoach();

let racingCoach = new RacingCoach();

let coaches : Coach[] = []; 

coaches.push(footballCoach);
coaches.push(racingCoach);

for(let tempCaoch of coaches){
    console.log(tempCaoch.getDailyWorkOut());
}
