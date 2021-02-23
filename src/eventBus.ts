class EventBus {
    private events: Map<String, Function[]>;
    constructor () {
      this.events = new Map()
    }
    // 监听事件
    addListener (type:String, cb:Function) {
        if (!type || !cb) return;
        if (!this.events.has(type)) this.events.set(type, []);
        let cbs = this.events.get(type) || [];
        cbs.push(cb);
    }
    // 触发事件
    dispatchListener (type:String, params:any) {
        if (!type || !this.events.has(type)) return;
        let cbs = this.events.get(type);
        if (cbs) {
            cbs.forEach(cb => {
                cb.call(this, params)
            });
        }
    }
    // 注销事件
    removeListener (type:String, cb:Function) {
        if (!type || !this.events.has(type)) return;
        if (cb) {
            let cbs = this.events.get(type) || [];
            for (let i = 0; i < cbs.length; i++) {
                if(cbs[i] === cb) {
                    cbs.splice(i, 1);
                    break
                }
            }
        } else {
            this.events.delete(type)
        }
    }
}

export default EventBus;