# one-time-notes-backend

---

### Создать заметку

`POST (/api/notes)`

body:

```json
{
  "userId": "akj83bsl2aq1tec",
  "title": "Привет из Ростова",
  "content": "Серёжа, живи там, хорошо, для себя живи. Тут жизни нету и нескоро будет"
}
```

---

### Получить все заметки

`GET(/api/my-notes/:userId)`

Пример: `/api/mynotes/akj83bsl2aq1tec`

---

### Получить одну заметку по id

`GET(/api/notes/:id)`

Пример: `/api/notes/64cbae9d3f3bc5381d44f22e`

---

### Обновить заметку

`PUT(/api/notes)`

body:

```json
{
  "_id": "64913f3bc5381d44f22b",
  "title": "Привет",
  "content": "Сережа, возвращайся"
}
```

Пример изменения поля "прочитано" в заметке

```json
{
  "_id": "64913f3bc5381d44f22b",
  "isRead": true
}
```

**Поле "_id" обязательно**! После ID указываем те поля, которые требуется обновить.

---

### Удалить заметку

`DEL(/api/notes/649d3f3bc5381d44f22e)`
---
### Создать пользователя
`POST (/api/user)`
```json
{
  "login": "admin",
  "password": "87654"
}
```
---
### Получить себя / войти
`POST (/api/get-user)`
```json
{
  "login": "admin",
  "password": "87654"
}
```
---
### Обновить данные пользователя
`PUT (/api/user)`
```json
{
  "_id": "akj83bsl2aq1tec",
  "login": "gek-flopper",
  "password": "master-of-slide"
}
```
---
### Удалить пользователя
`DEL(/api/user/akj83bsl2aq1tec)`
