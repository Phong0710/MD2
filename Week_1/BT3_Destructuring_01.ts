class Profile {
    fname: string;
    lname: string;
    bday: string;

    constructor(fname: string, lname: string, bday: string) {
        this.fname = fname;
        this.lname = lname;
        this.bday = bday;
    }

    getFname(){
        return this.fname;
    }
    // show(a: Profile): void {
    //     console.log(a.fname);
    //     console.log(a.lname)
    // }
}

let profile = new Profile('Code', 'Gym', '1979-01-02')
//profile.show(profile.getFname())
console.log(profile.getFname())