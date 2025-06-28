
🔗 **Демо:** [https://resume-editor-indol.vercel.app](https://resume-editor-indol.vercel.app)


### Клонируйте этот репозиторий

```bash 
git clone https://github.com/Keiiiru/resume-editor.git
cd resume-editor
```

### Установите зависимости 

```bash 
npm install
# или
yarn install
```

### Запустите проект в режиме разработки

```bash
npm run dev
# или
yarn dev
```

## TODO и планы по улучшению

- Заменить текущий `switch` на мапу функций для более чистого и расширяемого кода рендера секций.
- Добавить сохранение данных резюме в `localStorage` для автосохранения и восстановления состояния при обновлении страницы.
- Вынести повторяющийся код работы с контекстом (получение `resume` и `setResume`) в кастомный хук `useResumeContext` для улучшения читаемости и повторного использования.
