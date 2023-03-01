class EmailRegex {

    private EMAIL_REGEX: RegExp = /^[0-9]{2,}[-][0-9]{10}$/;

    public validate(regex: string): boolean {
        return this.EMAIL_REGEX.test(regex);
    }
}
let emailRegex = new EmailRegex();
let validEmail: string[] = ["84-0978489648", "a8222-22222"];

for (let email of validEmail) {
    let isvalid: boolean = emailRegex.validate(email);
    console.log("Email is " + email + " is valid: " + isvalid);
}
