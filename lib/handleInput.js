module.exports = class inputHandelr {
    constructor(target) {
        this.target = target;
    }
    inputChangeEvent = () => {
        return new Promise((resolve, reject) => {
            this.target.addEventListener('change', (event) => {
                console.log(event.target.value);
                this.InputValue = event.target.value;
                resolve(this.InputValue);
                this.destroy();
            });
        });
    }
    destroy = () => {
        this.target.removeEventListener('change', this.inputChangeEvent);
    }
}   
