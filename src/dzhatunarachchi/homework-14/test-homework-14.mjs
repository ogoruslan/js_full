import { getData, postData, putData, patchData, deleteData } from './homework-14.mjs';
async function run() {
  console.log('--- GET ---');
  await getData('/posts/1');

  console.log('--- POST ---');
  await postData('/posts', { title: 'foo', body: 'bar', userId: 1 });

  console.log('--- PUT ---');
  await putData(1, { id: 1, title: 'оновлений заголовок' });

  console.log('--- PATCH ---');
  await patchData(1, { title: 'частково оновлено' });

  console.log('--- DELETE ---');
  await deleteData(1);
}

run();
