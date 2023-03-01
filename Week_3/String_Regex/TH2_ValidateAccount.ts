class AccountRegex {
    private ACCOUN_REGEX: RegExp = /^[_a-z0-9]{6,}$/;
    public validate(regex:string):boolean{
        return this.ACCOUN_REGEX.test(regex);
    }
}
let account = new AccountRegex();
let valiAccount:string[]=["123abc_", "_abc123", "______", "123456", "abcdefgh"]
let invaliAccount:string[]=[".@", "12345", "1234_", "abcde"]
for (let item of invaliAccount) {
    let isvalid:boolean = account.validate(item)
    console.log("Account is " + account + " is valid: " + isvalid);
}
for (let item of valiAccount) {
    let isvalid:boolean = account.validate(item)
    console.log("Account is " + account + " is valid: " + isvalid);
}