import fs from './lib/fs';
import data from './../../data.json';
import task from './lib/task';

const table = (data) => {
  return data.map(row).join('\n');
};

const row = (rowData) => {
  return `| **${rowData.name}** | ${rowData.community || ''} | ${rowData.description || ''} | ${rowData.links.gitter || ''} | ${rowData.links.slack || ''} | ${rowData.links.skype || ''} | ${rowData.links.other || ''} | ${rowData.comments || ''} |`;
};

const content = `Это - список русскоязычных чатов об IT.

![Teaser](teaser.jpg)

Общие правила
-------------

* не используйте список для найма сотрудников
* спам с предложениями работы запрещён (\`перспективная-компания-лидер-рынка ишет 5 лет super senior swift developer\`)
* используйте теги типа \`@question\` \`@link\`  \`@offtop\`
* почему так много чатов называются \`<тема>-UA\`? Читайте об этом [здесь](https://gist.github.com/listochkin/c81c198a2b7b044a0dc5).

*Мы принимаем Pull Request'ы!*

Список
------

| Название             | Коммьюнити | Технологии                      | Gitter | Slack | Skype | Другой клиент | Правила участия |
|--------------------- | ---------- | ------------------------------- | ------ | ----- | ----- | ------------- |       :-:       |
${table(data)}
`;

export default task( async function generate_readme() {
  return fs.writeFile('../README.md', content);
});


