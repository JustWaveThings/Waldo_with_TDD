/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import './style.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, query, where, orderBy, onSnapshot, deleteDoc, addDoc, serverTimestamp, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDHbAqh5qZOjfDBB4J4VnbcN6-gwBfdS3I',
  authDomain: 'library-add-firebase.firebaseapp.com',
  projectId: 'library-add-firebase',
  storageBucket: 'library-add-firebase.appspot.com',
  messagingSenderId: '1044075796113',
  appId: '1:1044075796113:web:da6200fcfae6fb706d1130',
};

initializeApp(firebaseConfig);

const db = getFirestore();

const myLibrary = [];

// book collection

const colRef = collection(db, 'myLibrary');

// queries

const queryAllAscending = query(colRef, orderBy('createdAt'));

// real time collection subscription

/* onSnapshot(queryAllAscending, snapshot => {
  emptyBookshelf();
  const firebaseBooks = [];
  snapshot.docs.forEach(docs => {
    firebaseBooks.push({
      ...docs.data(),
      id: docs.id,
    });
  });

  myLibrary = [];
  firebaseBooks.forEach(item => {
    new Book(item.title, item.author, item.pages, item.readStatus, item.id).addBookToLibrary();
  });
  drawLibrary();
});

// firestore add book
const addBookForm = document.querySelector('#book-add');
addBookForm.addEventListener('submit', e => {
  e.preventDefault();
  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    pages: addBookForm.pages.value,
    readStatus: false,
    createdAt: serverTimestamp(),
  })
    .then(() => {
      addBookForm.reset();
    })
    .catch(err => {
      console.log(err.message);
    });
});

const Book = class {
  constructor(title, author, pages, readStatus, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = id;
  }
}; */

/* Book.prototype.addBookToLibrary = function () {
  myLibrary.push(this);
}; */

function deleteFsBookWrapper() {
  const deleteFsBooks = document.querySelectorAll('#delete');

  deleteFsBooks.forEach(deleteFsBook => {
    deleteFsBook.addEventListener('click', () => {
      const docRef = doc(db, 'myLibrary', deleteFsBook.dataset.id);

      deleteDoc(docRef);
    });
  });
}

// update book record (read /unread only in this example)

function updateFsReadStatusWrapper() {
  const readCheckListeners = document.querySelectorAll('#checkbox');

  readCheckListeners.forEach(readStatus => {
    readStatus.addEventListener('change', e => {
      const docRef = doc(db, 'myLibrary', e.target.dataset.id);

      updateDoc(docRef, {
        readStatus: e.target.checked,
      });
    });
  });
}

const container = document.querySelector('#proj-cont');
