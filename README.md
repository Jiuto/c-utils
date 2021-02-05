## dc-utils 

一个正在完善的常用方法库

### 时间

#### formatDate

`formatDate(date: Date): string`接受一个Date类型的参数，返回`YYYY-MM-DD`格式的字符串

#### getToday

`getToday(): string`返回`YYYY-MM-DD`格式的今日日期

#### getTomorrow

`getTomorrow(): string`返回`YYYY-MM-DD`格式的明日日期

#### getMonthDays

`getMonthDays(y: number, m: number): number`接受两个number类型的参数表示年份和月份，返回number类型的当月天数

#### getThisWeek

`getThisWeek(): string[]`返回`['YYYY-MM-DD','YYYY-MM-DD']`格式的本周起始和结束日期

#### getThisMonth

`getThisMonth(): string[]`返回`['YYYY-MM-DD','YYYY-MM-DD']`格式的本月起始和结束日期
