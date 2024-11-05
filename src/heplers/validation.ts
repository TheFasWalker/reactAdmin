import * as yup from 'yup'


export const userValidation = yup.object().shape({
    name:yup.string().typeError('Должно быть строкой').min(3, '3 знака минимум').required('Обязательное поле'),
    family:yup.string().typeError('Должно быть строкой').min(3, '3 знака минимум').required('Обязательное поле'), 
    email:yup.string().typeError('Должно быть строкой').email('Не валидная почта').required('Обязательное поле'),
    role:yup.string().required('Выберите роль'),
    password:yup.string().typeError('Должно быть строкой').min(8,'минимум 8 знаков').required('Обязательное поле')
})