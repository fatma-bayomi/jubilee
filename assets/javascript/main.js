// let grade=Number(prompt('enter number'))
// grade%2==0?console.log("the number is even"):console.log('the number is odd')
let arr=[{name:'ahmed',age:18},
    {name:'ali',age:20,
    },{name:'maohamed',age:17}
]
for(i=0;i<arr.length;i++){
    if(arr[i].age<18){
        console.log(arr[i].name+' ' +'not allowed')
    }
}