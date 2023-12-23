# node_hw1

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

![Command get all contacts](./assets/action_list.png)

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

![Command get contact by id](./assets/action_get.png)

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

![Command for create new contact](./assets/action_add.png)

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

![Command for remove contact](./assets/action_remove.png)
