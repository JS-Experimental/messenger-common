export const wait = (data:any, time:number) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(data);
  }, time);
});
