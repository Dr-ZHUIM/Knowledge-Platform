import {describe, it, expect} from "vitest";

function findUnique(arr:number[]){
  return arr.reduce((pre,cur) => pre ^ cur);
}

const test1 = [5,2,3,3,5,1,2,4,6,4,6];
const test2 = [3,4,5,8,9,12,7,8,9,7,12,4,3];
const test3 = [7,1,0,2,4,0,2,1,7];
const test4 = [7,1,0,2,4,4,2,1,7];

const expected1 = 1;
const expected2 = 5;
const expected3 = 4;
const expected4 = 0;

describe("findUnique",() => {
  it ("first test",()=>{
    expect(findUnique(test1)).toBe(expected1);
  })
  it.concurrent("second test",()=>{
    expect(findUnique(test2)).toBe(expected2);
  })
  it.concurrent("third test",()=>{
    expect(findUnique(test3)).toBe(expected3);
  })
  it.concurrent("forth test",()=>{
    expect(findUnique(test4)).toBe(expected4);
  })
})