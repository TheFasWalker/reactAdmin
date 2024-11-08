export interface userRole{
    role:'Content manager' | 'RootAdmin' | 'partner'
}

const adminValue:string =  'RootAdmin'
const managerValue:string =  'Content manager'
const partnerValue:string =  'partner'




export const AccessGroup ={
    admin:{
        title:'Администратор',
        value:adminValue
    },
    manager:{
        title:'Контент менеджер',
        value:managerValue
    },
    partner:{
        title:'Партнёр',
        value:partnerValue
    }
}

export const UserRolesData =[
    {
        title:'Администратор',
        value:adminValue
    },
    {
        title:'Контент менеджер',
        value:managerValue
    },
    {
        title:'Партнёр',
        value:partnerValue
    }
]