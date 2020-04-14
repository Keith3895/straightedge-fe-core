var straightedge = require('./lib/straightedge');


straightedgefeRunner = class straightedgefe {
    run(window = window, cb = null) {
        if (!cb) {
            cb = (e) => {
                console.log(e);
            }
        }
        this.St = new straightedge(window, cb);
    }
    stop() {

        console.log('stop', this.St.getActionList());
        this.St.destroy();
        delete this.St;
    }
}
straightedgefe = new straightedgefeRunner();