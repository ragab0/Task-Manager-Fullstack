const { configureStore, combineReducers } = require("@reduxjs/toolkit");
const { persistReducer, persistStore } = require("redux-persist");
const mainSlice = require("./features/main/mainSlice");
const modalSlice = require("./features/modal/modalSlice");
const filterSlice = require("./features/filter/filterSlice").default;
const userSlice = require("./features/user/userSlice");
const folderSlice = require("./features/folder/folderSlice").default;
const taskSlice = require("./features/task/taskSlice");
const boardSlice = require("./features/board/boardSlice");
const { default: thunk } = require("redux-thunk");
const { customStorage } = require("./storage");

const rootReducer = combineReducers({
  main: mainSlice,
  modal: modalSlice,
  filter: filterSlice,
  user: userSlice,
  folder: folderSlice,
  task: taskSlice,
  board: boardSlice,
});

const persistedReducer = persistReducer(
  {
    key: "tod",
    storage: customStorage,
    serialize: true,
    blacklist: ["modal"], // to exclude transient state
    // configuration options
    writeFailHandler: (err) => {
      console.warn("Redux persist write failed:", err);
    },
  },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }).concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});

const persistedStore = persistStore(store);

module.exports = { store, persistedStore };
