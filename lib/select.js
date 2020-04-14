module.exports = class SelectHandelr {
    constructor(window, optionModel) {
        this.options = this._optionModifier(optionModel);
        this.window = window;
        this.window.SetValue = this.SetValue;
        this.window.document.write(this.addView());
        this.SelectListener();
    };
    _optionModifier(optionModel) {
        let options = [];

        for (let i = 0; i < optionModel.length; i++) { // deepscan-disable-line
            let el = optionModel.item(i);
            options.push({
                'label': el.label,
                'value': el.value
            });
        }
        return options;
    }
    addView = () => {

        return `
            <h3>Please select one of the options you would have seleted from the drop down.</h3>
            <ol>
                ${
            this.options.map((el, i) => {
                return `
                                <li class="options">
                                <label for="${i}">${el.label}</label>
                                <input
                                    type="button" id="${i}"
                                value="${el.value}">
                                </li>
                            `;
            }).join('\n')
            }
            </ol >
            `;
    };
    SelectListener = () => {
        let li_s = this.window.document.querySelectorAll('.options');
        li_s.forEach(el => {
            el.addEventListener('click', (event) => {

                this.window.SetValue(event.target.value);
                this.window.close();
            });
            return el;
        });
    };
    SetValue = (value) => {
        this.value = value;
    }
    getValue = () => {
        return this.value;
    }
    closeEvent = () => {
        return new Promise(this._closeEvent);
    }
    _closeEvent = (resolve, reject) => {
        this.window.addEventListener('unload', (event) => {
            console.log(this.getValue());
            resolve(this.getValue());
        });
    }
};