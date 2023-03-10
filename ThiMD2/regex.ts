export class Regex {

    private nameRegex: RegExp = /^[A-Za-z0-9\s]+$/;

    public checkNameRegex(regex: string): boolean {
        return this.nameRegex.test(regex);
    }

}
