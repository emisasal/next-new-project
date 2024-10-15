import { createSlice } from "@reduxjs/toolkit"

type NewsStore = {
  newsId: number | null
  title: string
  text: string
}

const initialState: NewsStore = {
  newsId: null,
  title: "",
  text: "",
}

export const newsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    modifyNews: (state, action) => {
      ;(state.newsId = action.payload.newsId),
        (state.title = action.payload.title),
        (state.text = action.payload.text)
    },
  },
})

export const { modifyNews } = newsSlice.actions

export default newsSlice.reducer
