console.log('开始')
console.log(process.argv[2])
setTimeout(() =>{
    throw new Error('11')
},2000)