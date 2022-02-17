import { makeVar } from '@apollo/client';

type Task = {
  title: string;
}

// makeVarを使ってstateを作る(makeVarを実行した結果をtodoVarという名前でexport)
// 初期値は空の配列[], ジェネリクスで型を指定
export const todoVar = makeVar<Task[]>([])