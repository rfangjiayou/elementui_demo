export class FormError {
    __form = null;
    __schema = {};
    constructor(elForm, schema = {}) {
        this.__form = elForm;
        this.__schema = schema
    }

    async display(propName, schema = this.__schema) {
        const { [propName]: hooks = [] } = schema;
        const afterHooks = await this.invokeHooks(hooks);
        await this.__form.validateField([propName]);
        return this.invokeHooks(afterHooks);
    }

    async invokeHooks(hooks) {
        if (!Array.isArray(hooks)) {
            return;
        }
        return Promise.all(
            hooks.map(hook => {
                if (typeof hook === "function") {
                    return Promise.resolve(hook());
                }
            })
        );
    }
}