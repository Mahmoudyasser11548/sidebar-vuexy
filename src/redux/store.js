// ** Redux Imports
import layout from "./layout.js"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
  reducer: {layout},
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

export { store }
