export default class FormValidation {
    nameValidator = (value) => {
        return /^[a-zA-Z]+ [a-zA-Z]+$/.test(value);
    }

    emailValidator = (value) => {
        return /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(value);
    }

    phoneNoValidator = (value) => {
        return ((value.length <= 10) && 
        (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)));
    }

    passwordValidator = (value) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(value);
    }
}
