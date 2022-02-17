import { gql } from '@apollo/client';

// データベースを操作するクエリを定義する

// gqlでバックスラッシュの中にqueryを書くと、それがクエリーとして扱われる
// ユーザー一覧を取得するクエリー
export const GET_USERS = gql`
  query GetUsers {
    users(order_by: {created_at: desc}) {
      id
      name
      created_at
    }
  }
`
// ユーザー一覧を取得するクエリー
// @client クライアントサイドにあるキャッシュを使うことができる
// export const GET_USERS_LOCAL = gql`
//   query GetUsers {
//     users(order_by: {created_at: desc}) @client {
//       id
//       name
//       created_at
//     }
//   }
// `
// ユーザーのID一覧を取得するクエリー
export const GET_USERIDS = gql`
  query GetUserIds {
    users(order_by: {created_at: desc}) {
      id
    }
  }
`
// idからユーザーを取得するクエリー
export const GET_USERBY_ID = gql`
  query GetUserById($id: uuid!) {
    users_by_pk(id: $id) {
      id
      name
      created_at
    }
  }
`
// ユーザーを作成するクエリー
// データ更新はmutationで行う
export const CREATE_USER = gql`
  mutation CreateUser($name: String!) {
    insert_users_one(object: { name: $name }) {
      id
      name
      created_at
    }
}
`
// ユーザーを削除するクエリー
export const DELETE_USER = gql`
  mutation DeleteUser($id: uuid!) {
    delete_users_by_pk(id: $id) {
      id
      name
      created_at
    }
  }
`

// ユーザー情報を更新するクエリー
export const UPDATE_USER = gql`
  mutation MyMutation($id: uuid!, $name: String!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
      name
      created_at
    }
  }
`


