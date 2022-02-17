import { ChangeEvent, FC, FormEvent, useState } from 'react';
// apollo/clientからuseReactiveVarをインポート
import { useReactiveVar } from '@apollo/client';
// 作成したstateをインポート
import { todoVar } from '../cache';
import Link from 'next/link';

export const LocalStateB: FC = () => {
  // useReactiveVarを用いてmakeVarで作ったstateの現在の値を参照
  // 引数に参照したいstateを指定
  const todos = useReactiveVar(todoVar);

  return (
    <>
      <p className="mb-3 font-bold">makeVar</p>
      {todos?.map((task, index) => {
        return (
          <p className="mb-3" key={index}>
            {task.title}
          </p>
        );
      })}
      <Link href="/local-state-a">
        <a>Back</a>
      </Link>
    </>
  );
};
