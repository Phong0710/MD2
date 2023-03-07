export class MapLogin {
    map = new Map()

    constructor() {
        this.map.set("phong123", `phong00`)
    }

    addMap(account: string, pass: string) {
        return this.map.set(account, pass)
    }

    checkAccount(account: string): boolean {
        let flag: boolean = false
        this.map.forEach((value, key, map1) => {
            if (account === key) {
                return flag = true
            }
        })
        return flag;
    }

    checkLogin(account: string, pass: string): boolean {
        let flag = false;
        this.map.forEach((value, key, map1) => {
            if (key === account && value === pass) {
                return flag = true
            }
        })
        return flag;
    }
}