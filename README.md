1. protectshop2024@gmail.com password Qwer123456789 - Це пошта нашого майбутнього сайта

PositiveFrontEnd - пароль до resend 

2. Проект пишеться за допомогою збирача vite : npm i -установка усіх залежностей ; nmp run dev - запуск проекта; npm run test - запуск тестів

3. MongoDB - protectshop2024 password- Qwer1234567890 link- mongodb+srv://protectshop2024:Qwer1234567890@cluster0.cf6q40i.mongodb.net/ProtectShop

4. https://saribeg.github.io/DAN.IT-API-Documentation/#about-project це ссилка на документацію по запитам , що повертає той чи інший запит , в якому форматі треба відправити запит . Замість Axios запиту у нас універсальна функція SendRequest

5. Треба встановити додаток за посиланням https://www.mongodb.com/products/tools/compass , він допоможе відстежувати результати запитів , відео як з ним працювати
   https://www.youtube.com/watch?v=xnR5XiQBdJw&list=PLNkWIWHIRwMFJ-3-gI7GC5JDg1ivbIKNR

6. Для того щоб додати товар вам потрібен обовязково token без нього нічого не вийде , він надається при логіні User якщо такий є то respons повертає токен , його требе зберігати в LocalStorage

7. https://trello.com/b/GAWZQVCr/protect-shop-board це силка на To Do List де ми будемо висти записи по проекту , які задачі потрібно зробити які вже реалізували , які в роботі

8. node server.js - запуск back end

9. https://github.com/PositiveFrontEnd/Protect-Shop.git силка на наш репозиторій

10. Стосовно stylelint він встановленний і працює , він допомагає структурувати нащі стилі .Команда npm run stylelint запустит линтер и выведет в консоль список ошибок, а npm run stylelint:fix дополнительно исправит ошибки, доступные для автоисправления.

Едине що вам всім треба зробити це - Відкрийте Visual Studio Code.

Перейдіть в меню "File" (Файл).

Виберіть "Preferences" (Настройки) і потім "Keyboard Shortcuts" (Гарячі клавіші). Ви також можете використовувати комбінацію клавіш Ctrl+K Ctrl+S.

В верхньому правому куті області гарячих клавіш натисніть посилання "Open Keyboard Shortcuts (JSON)" (Відкрити гарячі клавіші (JSON)).

Це відкриє файл keybindings.json або створить новий, якщо він не існує.

І тут треба замінити старий код на цей -

[
{
"key": "alt+shift+f",
"command": "stylelint.executeAutofix",
"when": "editorTextFocus && editorLangId == 'css'"
},
{
"key": "alt+shift+f",
"command": "stylelint.executeAutofix",
"when": "editorTextFocus && editorLangId == 'scss'"
},
{
"key": "alt+shift+f",
"command": "stylelint.executeAutofix",
"when": "editorTextFocus && editorLangId == 'less'"
}
]

11. eslint - теж встановленний і готовий до роботи , допомогає структурувати js код та знаходити помилки

12. Додавання svg картинок за допомогою такого синтаксиса (import Favorites from "../icons/heart.svg?react")

13. Дотримуємось методології BEM , тому всі пишимо через подвійне нижне підкреслення , а якщо модивікатор то додаємо тире

14. Медіа запити пишемо в такому форматі для того щоб було більш комфортно
    @media (width >= 992px) {
    font-size: 42px;
    padding-top: 79px;
    margin-bottom: 39px;
    }

    @media (width >= 768px) {
    font-size: 35px;
    }

    @media (width >= 480px) {
    font-size: 28px;
    line-height: 150%;
    }

15.

POST Запит на регістрацію юзера
const newCustomer = {
firstName: "Admin",
lastName: "Shop",
login: "Admin",
email: "admin@gmail.com",
password: "1111111",
telephone: "+380630000000",
gender: "male",
avatarUrl: "img/customers/023648.png",
isAdmin: true,
};

    const createCardRequest = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCustomer),
    };

    useEffect(() => {
      sendRequest(
        "http://localhost:4000/api/customers",
        "POST",
        createCardRequest
      )
        .then((data) => {
          console.log("Успішна відповідь:", data);
          // Ваш код для обробки успішної відповіді тут
        })
        .catch((error) => {
          console.error("Помилка:", error);
          if (error.response) {
            // Якщо відповідь містить інформацію про помилку
            console.error("Деталі помилки:", error.response.data);
          }
          // Ваш код для обробки помилки тут
        });
    }, []);

POST Запит на перевірку юзера є такий чи ні
const CardRequest = {
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
loginOrEmail: "admin@gmail.com",
password: "1111111",
}),
};
useEffect(() => {
sendRequest(
"http://localhost:4000/api/customers/login",
"POST",
CardRequest
)
.then((data) => {
console.log("Успішна відповідь:", data);
// Ваш код для обробки успішної відповіді тут
})
.catch((error) => {
console.error("Помилка:", error);
if (error.response) {
// Якщо відповідь містить інформацію про помилку
console.error("Деталі помилки:", error.response.data);
}
// Ваш код для обробки помилки тут
});
}, []);

GET Запит на юзерів
useEffect(() => {
sendRequest("http://localhost:4000/api/customers")
.then((data) => {
console.log("Успішна відповідь:", data);
// Ваш код для обробки успішної відповіді тут
})
.catch((error) => {
console.error("Помилка:", error);
if (error.response) {
// Якщо відповідь містить інформацію про помилку
console.error("Деталі помилки:", error.response.data);
}
// Ваш код для обробки помилки тут
});
}, []);

POST запит на створення нового продукту
const newProduct = {
name: "new product for testing purposes",
currentPrice: 200,
previousPrice: 260,
categories: "men",
imageUrls: [
"img/products/men/001.png",
"img/products/men/002.png",
"img/products/men/003.png",
"img/products/men/004.png",
],
quantity: 10,
status: "new",
productUrl: "/men",
brand: "braaaand",
myCustomParam: "some string or json for custom param",
};
const createCardRequest = {
method: "POST",
headers: {
"Content-Type": "application/json",
Authorization:
"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTQ1NDFhYzkyNGU1NGQyMDU3MjNmZiIsImZpcnN0TmFtZSI6IkFkbWluIiwibGFzdE5hbWUiOiJTaG9wIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNzA0MzkzNzQ5LCJleHAiOjE3MDQ0Mjk3NDl9.2IF5nghiZ0O-OC-Yq-HgJPfXwQ32Q0wyU4ev2uLshhY",
},
body: JSON.stringify(newProduct),
};

useEffect(() => {
sendRequest("http://localhost:4000/api/products", "POST", createCardRequest)
.then((data) => {
console.log("Успішна відповідь:", data);
// Ваш код для обробки успішної відповіді тут
})
.catch((error) => {
console.error("Помилка:", error);
if (error.response) {
// Якщо відповідь містить інформацію про помилку
console.error("Деталі помилки:", error.response.data);
}
// Ваш код для обробки помилки тут
});
}, []);
