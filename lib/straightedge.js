xpath = require('./xpathGenerator');
inputHandler = require('./handleInput');

module.exports = class straightEdge {
    ActionList = [];
    constructor(window, callback = null) {

        this.window = window;
        this.window.addEventListener('click', this.eventListener);
        if (callback) {
            this.callback = callback;
            this.window.addEventListener('straightedge-push', callback);
        }
    }
    destroy = () => {
        this.window.removeEventListener('click', this.eventListener);
        this.window.removeEventListener('straightedge-push', this.callback);
    }
    eventListener = (event) => {
        let currentAction = {};
        currentAction['action'] = 'click';
        switch (event.target.tagName) {
            case 'SELECT': currentAction['selectValue'] = this.handleInput(event.target);
                currentAction['action'] = 'select';
                break;
            case 'INPUT': currentAction['input'] = this.handleInput(event.target);
                currentAction['action'] = 'input';
                break;
        }
        currentAction['path'] = xpath.getElementXPath(event.target);

        // event[path] = path;
        this.pushAction(currentAction);
        return event;
    }
    handleInput = async (target) => {
        let input = new inputHandler(target);
        let value = await input.inputChangeEvent();
        return value;
    }
    pushAction = (currentAction) => {
        let event = new Event('straightedge-push');
        event['currentAction'] = currentAction;
        this.window.dispatchEvent(event);
        this.ActionList.push(currentAction);
    }
    getActionList = () => {
        return this.ActionList;
    }
}
