class EmailRegex {

    private EMAIL_REGEX: RegExp = /^[ACP]+[0-9]{4}[G-M]+$/;

    public validate(regex: string): boolean {
        return this.EMAIL_REGEX.test(regex);
    }
}
let emailRegex = new EmailRegex();
let validEmail: string[] = ["C0318G", "M0318G", "P0323A"];

for (let email of validEmail) {
    let isvalid: boolean = emailRegex.validate(email);
    console.log("Email is " + email + " is valid: " + isvalid);
}
