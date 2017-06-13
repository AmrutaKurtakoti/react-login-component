import React, { Component } from 'react';
let localStorage = global.window.localStorage;
export const VALIDATE_USER = 'validate_user';

export function validateUser(user,callback){

  let users = JSON.parse(localStorage.users);
  let { username, password } = user;
  let errorMessage = "";

  if(users[username]){
    //check if password is valid
    if(!(password== users[username])){
      errorMessage = "Invalid Username/Password";
    }
    else{
      callback();
    }
  }
  else{
    errorMessage = "Invalid Username";
  }

  return {
    type: VALIDATE_USER,
    payload: {...user, errorMessage:errorMessage}
  }

}
