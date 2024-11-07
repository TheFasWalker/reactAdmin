export interface userRole{
    role:'Content manager' | 'RootAdmin' | 'partner'
}

export const AccessGroup ={
    admin:{
        title:'Администратор',
        value:'RootAdmin'
    },
    manager:{
        title:'Контент менеджер',
        value:'Content manager'
    },
    partner:{
        title:'Партнёр',
        value:'partner'
    }
}