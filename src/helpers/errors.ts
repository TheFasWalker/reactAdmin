export const errorMessage =(message:string)=>{
    switch (message){
        case ('Failed to fetch'):
            return ('Сервер недоступен')
        break
        case ('sss'):
            return('Доступ запрещен')
            break
        case('www'):
            return ('Неправильные даныне')
            break
        default:
            return('noNameError')
    
    }
}