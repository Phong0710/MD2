export class Regex {

    private nameRegex: RegExp = /^[A-Za-z0-9]+$/;

    public ckeckNameRegex(regex: string): boolean {
        return this.nameRegex.test(regex);
    }
}
