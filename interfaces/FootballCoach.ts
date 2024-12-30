import {Coach} from './Coach';

export class FootballCoach implements Coach{
    getDailyWorkOut(): string {
        return "Football Coach: Practice your Crossing-Skil!!!"
    }
}