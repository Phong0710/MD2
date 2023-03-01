let regexpEmail = new RegExp(/^((?!(badstring)).)*$/);
console.log(regexpEmail.test('marco@expertcodebolg.com'))
// expected output: true
console.log(regexpEmail.test('marco@expertcodebolg.com'));