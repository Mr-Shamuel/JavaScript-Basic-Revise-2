const  names = [
    'shamuel molla daffodil age 26 student',
    'Rashida sultana brac age 23 teacher',
    'shamuel molla bangla age 36 student',
    'risha sultana nsu age 23 teacher',
    //includes 
]
// const searching = 'student';
// const output =[];
// for(const name of names){
//     if(name.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) !=-1){
//         output.push(name);
//     }
// }
// console.log(output);


//by using includes
const searching = 'nsu';
const output =[];
for (const name of names){
    if(name.toLocaleLowerCase().includes(searching.toLocaleLowerCase())){
        output.push(name);
    }
}
console.log(output);