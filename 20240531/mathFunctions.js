export const add = (a, b) => a + b;
export const cross = (a, b) => a * b;
export const subtract = (a, b) => a - b;
export const greet = (name)=>{
  console.log(`${name} say hello.`);
}


// 或者在最後統一匯出
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
export { multiply, divide };
