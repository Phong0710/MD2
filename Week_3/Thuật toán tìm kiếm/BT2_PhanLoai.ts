function phanLoai(data:string[]):void{
    let Viettel:string[]=[]
    let Mobifone:string[]=[]
    let Vinaphone:string[]=[]

    for (let i = 0; i < data.length; i++) {
        if(data[i].substring(0,3)==="084"||data[i].substring(0,3)==="085"){
            Viettel.push(data[i])
            console.log(`Viettel: + ${Viettel}`)
        } else if(data[i].substring(0,3)==="093"||data[i].substring(0,3)==="099"){
            Mobifone.push(data[i])
            console.log(`Mobi: + ${Mobifone}`)
        } else {
            Vinaphone.push(data[i])
            console.log(`Vina: + ${Vinaphone}`)
        }
    }
}

let arr:Array<string> = ["093093093","08484084","070996"]
phanLoai(arr)