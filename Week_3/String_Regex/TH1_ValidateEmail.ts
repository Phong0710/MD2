class EmailRegex {
     private EMAIL_REGEX : RegExp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
     validate(regex:string):boolean{
          return this.EMAIL_REGEX.test(regex)
     }
}
let email = new EmailRegex();
let validEmail:string[]=["a@gmail.com", "ab@yahoo.com", "abc@hotmail.com"];
let invalEmail:string[]=["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];
for (let item of validEmail) {
     let isvalid:boolean = email.validate(item)
     console.log("Email is " +item + " is valid: " + isvalid)
}
for (let item of invalEmail) {
     let isvalid:boolean = email.validate(item)
     console.log("Email is " +item + " is valid: " + isvalid)
}