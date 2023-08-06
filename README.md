# one-time-notes-backend

---

### Создать заметку

`POST (/api/notes)`

body:
```json
{
  "author": "admin",
  "title": "Привет из Ростова",
  "content": "Серёжа, живи там, хорошо, для себя живи. Тут жизни нету и нескоро будет"
}
```
---
### Получить все заметки

`GET(/api/notes)`

---
### Получить одну заметку по id

`GET(/api/notes/:id)`

пример: `/api/notes/64cbae9d3f3bc5381d44f22e`

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
**Поле "_id" обязательно**! После ID указываем те поля, которые требуется обновить.

---
### Удалить заметку

`DEL(/api/notes/649d3f3bc5381d44f22e)`