## Login Form with React

React-приложение с формой регистрации, созданное в целях базовой демонстрации работы компонентов и состояний React, валидации входных данных.

## Особенности
```
•   Страница является единым компонентом, использующим другие компоненты.
•   Форма логина (`LoginSection.jsx`):
    •   Валидация email:
        *   Проверка формата email.
        *   Проверка максимальной длины email.
    •   Валидация пароля:
        *   Проверка минимальной длины пароля.
        *   Проверка максимальной длины пароля.
    •   Отображение ошибок валидации.
•   Простая структура компонентов для легкой модификации и расширения.
•   Пример стилизации с использованием CSS (`App.css`).
```
## Установка

1.  Клонируйте репозиторий:
```
  git clone https://github.com/Pabloidd/LoginFofmWithReact.git
```

2. Перейдите в директорию проекта:
```
bash
  cd registration-form
```

3. Установите зависимости:  
```
bash
  npm install
```
  или
```
bash
  yarn install
```

▌Запуск приложения


```
npm start
```
или
```
yarn start
```

Приложение будет запущено по адресу http://localhost:3000.

▌Структура проекта
```
LoginFofmWithReact/
├── .idea/
│  ├── .gitignore
│  ├── LoginFofmWithReact.iml
│  ├── modules.xml
│  ├── vcs.xml
│  └── workspace.xml
├── registration-form/
│  ├── node_modules/ (library root)
│  ├── public/
│  │  ├── index.html
│  │  ├── manifest.json
│  │  └── robots.txt
│  └── src/
│    ├── components/
│    │  ├── GreetingSection.jsx
│    │  ├── LoginSection.jsx
│    │  ├── RegistrationForm.jsx
│    │  └── RegistrationFormPage.jsx
│    ├── App.css
│    ├── App.js
│    ├── App.test.js
│    ├── index.css
│    ├── index.js
│    ├── reportWebVitals.js
│    └── setupTests.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── LICENSE
```

▌Конфигурация

Основные параметры компонента настраиваются через константы непосредственно в коде компонента LoginSection.jsx:
```
•  SERVER_URL: URL вашего API для отправки данных логина/регистрации (по умолчанию: http://localhost:3001). Обратите внимание: В текущей версии приложения логика отправки данных на сервер не реализована, это заготовка для будущей разработки.
•  MAX_EMAIL_LENGTH: Максимальная длина email (по умолчанию: 255).
•  MAX_PASSWORD_LENGTH: Максимальная длина пароля (по умолчанию: 100).
•  MIN_PASSWORD_LENGTH: Минимальная длина пароля (по умолчанию: 6).
```
Эти константы можно изменить, чтобы настроить компонент в соответствии с требованиями вашего бэкенда (когда он будет добавлен).

▌Зависимости

•  React
•  React DOM

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

Автор

•  [Pabloidd  ]
