import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, database } from "./";
import { onValue, ref, set } from "firebase/database";
import { useDispatch } from "react-redux";
import user_auth_slice from "../../store/slices/user_auth_slice";
import { useState } from "react";

const create_account = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
  //   .then((userCredential) => {
  //     // Signed up
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });
};

const login_account = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });
};

function write_user_data(user_id, data) {
  return set(ref(database, "users/" + user_id), {
    ...data,
  });
}

// const read_user_data = (user_id) => {
//   const dispatch = useDispatch();
//   const reference = ref(database, "users/" + user_id);
//   onValue(reference, (snapshot) => {
//     const data = snapshot.val();
//     dispatch(setUserData({ user_id: data }));
//   });
// };

export { create_account, login_account, write_user_data };
