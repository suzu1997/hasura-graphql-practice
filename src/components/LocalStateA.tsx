import { ChangeEvent, FC, FormEvent, useState } from 'react';
// apollo/clientからuseReactiveVarをインポート
import { useReactiveVar } from '@apollo/client';
// 作成したstateをインポート
import { todoVar } from '../cache';
import Link from 'next/link';

export const LocalStateA: FC = () => {
  const [input, setInput] = useState<string>('');

  // useReactiveVarを用いてmakeVarで作ったstateの現在の値を参照
  // 引数に参照したいstateを指定
  const todos = useReactiveVar(todoVar);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ページがリロードしないようにする
    todoVar([...todoVar(), { title: input }]); // stateの内容を更新
    setInput('');
  };

  return (
    <>
      <p className="mb-3 font-bold">makeVar</p>
      {todos?.map((task, index) => {
        return (
          <p className="mb-3 y-1" key={index}>
            {task.title}
          </p>
        );
      })}
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          className="mb-3 px-3 py-2 border border-gray-300"
          placeholder="New task ?"
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
        <button
          disabled={!input}
          className="disabled:opacity-40 mb-3 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl focus:outline-none"
          type="submit"
        >
          Add new state
        </button>
      </form>
      <Link href="/local-state-b">
        <a>Next</a>
      </Link>
    </>
  );
};
