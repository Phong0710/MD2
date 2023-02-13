const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
]

let totalMachineValue = inventory.filter((item) => {
    return item.type === "machine"
})
console.log(totalMachineValue)
let sum =0;
totalMachineValue.map((item) => {
    return sum += item.value
})

console.log(sum)


