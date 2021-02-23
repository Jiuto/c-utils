## dc-utils 

一个正在完善的常用方法库

### 时间

#### 示例

``` js
import { utils } from "@dc/utils"
utils.formatDate(new Date())
```

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

### EventBus事件总线

#### 示例

``` js
import { EventBus } from "@dc/utils";

let eventBus = new EventBus();

let fun1 = function () {
    console.log(1)
}

eventBus.addListener("type1",fun1)

eventBus.dispatchListener("type1") // 1

eventBus.removeListener("type1",fun1)

let fun42 = function (v) {
    console.log(v)
}

eventBus.addListener("type2",fun2)

eventBus.dispatchListener("type2","this is a parameter") // this is a parameter

eventBus.removeListener("type2")

```

#### addListener

`addListener (type:String, cb:Function)` 监听事件

#### dispatchListener

`dispatchListener (type:String, params:any)` 触发事件

#### removeListener

`removeListener (type:String, cb:Function)` 注销事件，cb不传时，注销该事件下所有回调
