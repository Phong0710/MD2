class Profile {
    fname: string;
    lname: string;
    bday: string;

    constructor(fname: string, lname: string, bday: string) {
        this.fname = fname;
        this.lname = lname;
        this.bday = bday;
    }

    getFname():string{
        return this.fname;
    }
    show(a: Profile): void {
        console.log(a);
    }
}

let profile = new Profile('Code', 'Gym', '1979-01-02')
profile.show(profile)
