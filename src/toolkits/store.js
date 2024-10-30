const { configureStore, combineReducers } = require("@reduxjs/toolkit");
const { persistReducer, persistStore } = require("redux-persist");
const storage = require("redux-persist/lib/storage").default;

const mainSlice = require("./features/main/mainSlice");
const modalSlice = require("./features/modal/modalSlice");
const filterSlice = require("./features/filter/filterSlice").default;
const userSlice = require("./features/user/userSlice");
const folderSlice = require("./features/folder/folderSlice").default;
const taskSlice = require("./features/task/taskSlice");
const { default: thunk } = require("redux-thunk");

const rootReducer = combineReducers({
  main: mainSlice,
  modal: modalSlice,
  filter: filterSlice,
  user: userSlice,
  folder: folderSlice,
  task: taskSlice,
});

const persistedReducer = persistReducer(
  {
    key: "tod",
    storage,
    serialize: true,
  },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistedStore = persistStore(store);

module.exports = { store, persistedStore };
