// 设置公用今日参数，避免多次计算
var now: Date = new Date(),                             //当前日期
    nowDay: number = now.getDate(),                     //当前日
    nowMonth: number = now.getMonth(),                  //当前月
    nowYear: number = now.getFullYear(),                //当前年
    monthDays: number = getMonthDays(nowYear, nowMonth),// 本月天数
    weekday: number = now.getDay();                     // 当前周几，周日为0

// 格式化日期：yyyy-MM-dd
function formatDate(date: Date): string {
    let year: number = date.getFullYear();
    let month: number = date.getMonth() + 1;
    let day: number = date.getDate();

    return year + "-" + month + "-" + day;
}

// 获取今天日期
function getToday(): string {
    return nowYear + "-" + (nowMonth + 1) + "-" + nowDay;
}

// 获取明天日期
function getTomorrow(): string {
    let year: number = nowYear, 
        month: number = nowMonth, 
        day: number = nowDay + 1;

    if(nowDay + 1 > monthDays){
        day = 1;
        month += 1;
        if (nowMonth + 1 > 11) {
            month = 0;
            year += 1;
        }
    }

    return year + "-" + (month + 1) + "-" + day;
}

// 获得某月的天数
function getMonthDays(y: number, m: number): number {
    // 校验月份
    if(m > 11) {
        y += Math.ceil((m - 11) / 11);
        m = (m - 11) % 11;
    }

    let monthStartDate: number = new Date(y, m, 1).getTime(),
        monthEndDate: number = new Date(y, m + 1, 1).getTime();

    let days: number = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);

    return days;
}

// 获得本周的开始日期
function getWeekStartDate(): string {
    let gap: number = nowDay - (weekday === 0 ? 6 : weekday - 1),
        year: number = nowYear, 
        month: number, 
        day: number;
        
    if (gap > 0 ) {
        day = gap;
        month = nowMonth;
    } else if (nowMonth - 1 > 0) {
        month = nowMonth - 1;
        day = getMonthDays(year, month) + gap;
    } else {
        year = nowYear - 1;
        month = 11;
        day = getMonthDays(year, month) + gap;
    }

    return year + "-" + (month + 1) + "-" + day;
}

// 获得本周的结束日期
function getWeekEndDate(): string {
    let add: number = weekday === 0 ? 0 : 7 - weekday,
        year: number = nowYear, 
        month: number = nowMonth, 
        day: number = nowDay + add;

    if (nowDay + add > monthDays) {
        day = nowDay + add - monthDays;
        month += 1;
        if (nowMonth + 1 > 11) {
            month = 0;
            year += 1;
        }
    }

    return year + "-" + (month + 1) + "-" + day;
}

// 获得本周
function getThisWeek(): string[] {
    return [getWeekStartDate(), getWeekEndDate()]
}

// 获得本月
function getThisMonth(): string[] {
    return [ nowYear + "-" + (nowMonth + 1) + "-" + 1,
             nowYear + "-" + (nowMonth + 1) + "-" + monthDays]
}

export {
    getToday,
    getTomorrow,
    getThisWeek,
    getThisMonth,
    formatDate,
    getMonthDays,
}
