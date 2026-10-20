// let str ='MangoM'
// for (let i of str){
//     console.log(i)

// }
// console.log(str.indexOf('M'))

// let str= "aaaabbdd"
// console.log(str.lastIndexOf("a"))




// let str= 'aaaabb'
// console.log(str.indexOf("a"))


// let str= 'aaaabb'
// console.log(str.startsWith("a"))

// let str= 'aaaabb'
// console.log(str.endsWith("a"))

// let str = "     abc    "
// console.log(str.trimStart())

// let str = "     abc     "
// console.log(str.trimEnd())

// let str = 'ha'
// console.log(str.repeat(3))

// let str= 'aaaabb'
// console.log(str.slice(1))

// let arr= 'hello'

// for ( let i=arr.length -1;i>=0;i--){
//     let str = str[i]
//     console.log(arr[i])

// }
// // console.log(arr)

// console.log(arr.split('') .reverse() .join(''))


// // let str = "madam"
// // let str = "151"
// let str= "11011"
// if (str === str.split('').reverse().join('')){
//     console.log("Palindrone")
// }else{
//     console.log("not Palindrome")
// }
// let palindrome = str.split('').reverse().join('')
// if()


// let str = "madam"
// let res = str[0].toUpperCase()+str.slice(1 )
// console.log(res)


// let count = 0 
// let str = 'Godzilla'
// // let vowel = "aeiouAEIOU"
// for (let i = 0; i<str.length;i++)
// if (str[i]==='a'|| str[i]==='e'|| str[i]==='i'|| str[i]==='o'||str[i]==='u'){
//     count++
// }



// let vowel= ['a',"e",'i','o','u','A','E','I','O','U']
// let str = "Transformers"
// let count = 0
// for (let i= 0 ;i<str.length;i++)
//     if(vowel.includes(str[i])){
//         count++
//     } 
//     console.log(count)


// let vowel = ['a', "e", 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
// let str = "Transformers"
// let count = 0
// for (let i = 0; i < str.length; i++)
//     if (!vowel.includes(str[i])) {
//         count++
//     }
// console.log(count)

// let num = 21512
// let res = num.toString().split('').reverse().join('')
// if (num == res) {
//     console.log("True")
// } else {
//     console.log("False")
// }

//    To Remove spaces between words
// =====================================

// let str ="Hello World"
//     str=str.replace(' ','')
// // let res = str.split(' ').join('')
// console.log(str)

let str = 'programming'
let res = ' '
for (let i = 0; i < str.length; i++) {
    let flag = false;
    for (let j = 0; j<res.length; j++) {
        if (str[i] == res[j]) {
            flag = true
            break;
        }
    } if(!flag){
        res += (str[i])
    }
}
console.log(res);
