import {formattedDate} from "./utils"

interface Streak {
    currentCount : number
    startDate:string
    lastLoginDate:string
}

const KEY = "streak"


export function streakCounter(storage:Storage,date:Date):Streak{
    const streakInLocalStorage =storage.getItem(KEY);

    if(streakInLocalStorage){
        try {
            const streak = JSON.parse(streakInLocalStorage || "");
            return streak;
        } catch(error) {
            console.error("Failed to parse streak from localStorage");
        }
    }
    
    const streak = {
        currentCount:1,
        startDate:formattedDate(date),
        lastLoginDate:formattedDate(date)
    }
    storage.setItem(KEY,JSON.stringify(streak))
    return streak
}
