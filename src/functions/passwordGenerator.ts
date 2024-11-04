const maxPasswordLength = 20;
const minpasswordLength = 8;
const baseElems ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&\*()-_=+[]{}|;:",.<>?/`~1234567890'

export const passwordGenerator =()=>{
    let passLength = genereteNumber(minpasswordLength,maxPasswordLength)
    let password=''
    
    for (let i=0 ; i<=passLength; i++){
        let elemIndex = genereteNumber(0, baseElems.length)
        password = password + baseElems[elemIndex]
    }
    return password
}

const genereteNumber =(max:number,min:number)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return  Math.floor(Math.random()*(max - min) + min)
}
