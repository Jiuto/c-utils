var now = new Date(); //当前日期
var nowDay = now.getDate(); //当前日
var nowMonth = now.getMonth(); //当前月
var nowYear = now.getFullYear(); //当前年

// 格式化日期：yyyy-MM-dd
function formatDate(date: Date): string {
    let year:number = date.getFullYear();
    let month:number = date.getMonth() + 1;
    let day:number = date.getDate();

    return year + "-" + month + "-" + day;
}

// 获取今天日期
function getToday(): string {
    return nowYear+'-'+(nowMonth+1)+'-'+nowDay;
}

// 获取明天日期
function getTomorrow(): string {
    let year:number, 
        month:number, 
        day:number;

    if(nowDay + 1 > getMonthDays(nowYear,nowMonth)){
        day = 1;
        month = nowMonth + 1 > 11 ? 0 : nowMonth + 1;
        year = nowMonth + 1 > 11 ? nowYear + 1 : nowYear;
    }else{
        day = nowDay + 1;
        month = nowMonth;
        year = nowYear
    }

    return year + "-" + (month + 1) + "-" + day;
}

// 获得某月的天数
function getMonthDays(y: number, m: number): number {
    let monthStartDate:number = new Date(y, m, 1).getTime(),
        monthEndDate:number = new Date(y, m + 1, 1).getTime();

    let days:number = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);

    return days;
}

// 获得本周的开始日期
function getWeekStartDate(): string {
    let already:number = now.getDay() - 1,
        year:number, 
        month:number, 
        day:number;
        
    if(nowDay - already > 0 ){
        day = nowDay - already;
        month = nowMonth;
        year = nowYear;
    }else if(nowMonth - 1 > 0){
        year = nowYear;
        month = nowMonth - 1;
        day = getMonthDays(year,month) + nowDay - already;
    }else{
        year = nowYear - 1;
        month = 11;
        day = getMonthDays(year,month) + nowDay - already;
    }

    return year + "-" + (month + 1) + "-" + day;
}

// 获得本周的结束日期
function getWeekEndDate(): string {
    let add:number = 7 - now.getDay(),
        year:number, 
        month:number, 
        day:number;

    if(nowDay + add > getMonthDays(nowYear,nowMonth)){
        day = nowDay + add - getMonthDays(nowYear,nowMonth) ;
        month = nowMonth + 1 > 11 ? 0 : nowMonth + 1;
        year = nowMonth + 1 > 11 ? nowYear + 1 : nowYear;
    }else{
        year = nowYear;
        month = nowMonth;
        day = nowDay + add;
    }

    return year + "-" + (month + 1) + "-" + day;
}

// 获得本周
function getThisWeek(): string[] {
    return [getWeekStartDate(),getWeekEndDate()]
}

// 获得本月
function getThisMonth(): string[] {
    return [ nowYear+"-"+(nowMonth+1)+"-"+1,
             nowYear+"-"+(nowMonth+1)+"-"+getMonthDays(nowYear,nowMonth)]
}

export {
    getToday,
    getTomorrow,
    getThisWeek,
    getThisMonth,
    formatDate,
}
