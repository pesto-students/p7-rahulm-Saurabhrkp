async function executeTasksAsync() {
  try {
    await doTask1();
    await doTask2();
    await doTask3();
    console.log('All tasks completed successfully!');
  } catch (error) {
    console.error(error);
  }
}

function doTask1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Task 1 completed.');
      resolve();
    }, 1000);
  });
}

function doTask2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Task 2 completed.');
      resolve();
    }, 2000);
  });
}

function doTask3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Task 3 completed.');
      resolve();
    }, 3000);
  });
}

executeTasksAsync();
