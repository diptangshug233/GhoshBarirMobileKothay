import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  deviceName: "",
  location: null,
  errorMsg: null,
  formScreen: true,
  masterView: false,
  locationsFromDB: [],
  currentDeviceData: null,
};

const appSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setDeviceName: (state, action) => {
      state.deviceName = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
    },
    setFormScreen: (state, action) => {
      state.formScreen = action.payload;
    },
    setMasterView: (state, action) => {
      state.masterView = action.payload;
    },
    setLocationsFromDB: (state, action) => {
      state.locationsFromDB = action.payload;
    },
    setCurrentDeviceData: (state, action) => {
      state.currentDeviceData = action.payload;
    },
  },
});

export const {
  setDeviceName,
  setLocation,
  setErrorMsg,
  setFormScreen,
  setMasterView,
  setLocationsFromDB,
  setCurrentDeviceData,
} = appSlice.actions;

export default configureStore({
  reducer: {
    appState: appSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
