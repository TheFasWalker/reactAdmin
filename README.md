# Настрйока Проекта и запуск
сделать из файла .env.example файл .env <br>
**Обязательные поля :**
<ul>
    <li>`VITE_EDITOR_API_KEY` - ключ для использования плагина https://www.tiny.cloud/</li>
    <li>`VITE_API_DB_URL` -URL с портом - куда будет стучаться для получения обсновных данных</li>
    <li>`VITE_API_PHOTOS_URL`</li>
    <li>`VITE_APP_TITLE`  - title страницы +  заголовки на странице логина и на обзей странице на месте логотипа</li>
    <li>VITE_ADMIN_ROLE_CODE - код для админа, приходящей с сервера</li>
    <li>VITE_MANAGER_ROLE_CODE - код для менеджера, приходящей с сервера</li>
    <li>VITE_PARTNER_ROLE_CODE - код для партнёра, приходящей с сервера</li>

</ul>

**необязательные поля (Для разработки)**
<ul>
    <li>`VITE_ROOT_ADMIN_LOGIN` -  данные для входа.( будут автоматически прописаны  на странице авторизации)</li>
    <li>`VITE_ROOTD_AMIN_PASSWORD` -  данные для входа.( будут автоматически прописаны  на странице авторизации)</li>
</ul>

`npm install` Установка пакетов<br>
`npm run dev` локальная разработка

## Сборка 
`npm run build` сборка происходит в папку disr ( находится в гитигноре)











----
## Что есть в данной сборке :

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) for utility CSS classes
- [ESLint](https://eslint.org/) configured with some initial rules
- [Prettier](https://prettier.io/) to enforce consistent code style
- [Vitest](https://vitest.dev/) for unit testing and code coverage
- [Vite](https://vitejs.dev/) to build the project for development or production
- [Husky 🐶](https://typicode.github.io/husky/) runs the full list of specs before committing your changes to ensure that you have a green build


### Tailwind + CSS Modules

1. Create a CSS Module file by following the naming convention - `<Component>.module.css`
2. Use the `@apply` directive in your CSS class definitions to use Tailwind's utility classes into your own custom CSS
    
    ```css
    .app-heading {
        @apply text-5xl font-semibold mb-4;
    }
    ```
3. Import the CSS Module file into the React component file

### Dev Loop

- `prettier-format` - run the autoformatter
- `lint` - run the linter
- `test` - run the specs
- `test-filter <spec-name>` - run a specific spec
- `coverage` - get a coverage report of the specs
- `build` - build the project files for distribution
- `dev` - run the local development server

<br>
<br>
<br>
<br>
---

Сборка взята <a href="https://github.com/nrabhiram/vite-react-ts-tailwind-template.git">тут</a>
