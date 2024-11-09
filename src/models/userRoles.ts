export interface userRole{
    role:'Content manager' | 'RootAdmin' | 'partner' | ''
}

const adminValue:string = import.meta.env.VITE_ADMIN_ROLE_CODE
const adminTitle:string = 'Администратор'

const managerValue:string = import.meta.env.VITE_MANAGER_ROLE_CODE
const managerTitle:string = 'Контент\u00A0менеджер'


const partnerValue:string = import.meta.env.VITE_PARTNER_ROLE_CODE
const partnerTitle:string= 'Партнёр'

interface UserRolesDataInterface {
    title:string,
    role:userRole['role']
}

export const AccessGroup ={
    admin:{
        title:adminTitle,
        value:adminValue
    },
    manager:{
        title:managerTitle,
        value:managerValue
    },
    partner:{
        title:partnerTitle,
        value:partnerValue
    }
}

export const UserRolesData: UserRolesDataInterface[] =[
    {
        title:adminTitle,
        role:adminValue as userRole['role']
    },
    {
        title:managerTitle,
        role:managerValue as userRole['role']
    },
    {
        title:partnerTitle,
        role:partnerValue as userRole['role']
    }
]