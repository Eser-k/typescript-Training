import {Coach} from "./Coach";

export class RacingCoach implements Coach{
    getDailyWorkOut(): string {
        return "Racing Coach: Practice your Drifting Takumi!!!"
    }
}