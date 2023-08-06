// ** Redux Imports
import layout from "./layout"
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
