export const checkEnv = ()=>{
    const requiredEnvElems = [
                        'VITE_API_DB_URL',
                        'VITE_ADMIN_ROLE_CODE',
                        'VITE_MANAGER_ROLE_CODE',
                        'VITE_PARTNER_ROLE_CODE',
                        'VITE_EDITOR_API_KEY'
                    ]
    const missing = requiredEnvElems.filter(varName => !import.meta.env[varName])
    if (missing.length > 0) {
        alert(`файл .env заполнен не полностью
Подробности в консоли`)
            console.log('незаполненные поля:')
            console.log(missing)
        }else{
            console.log('env заполнен корректно');  
    }



}
