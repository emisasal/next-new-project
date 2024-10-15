import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type UserStore = {
  name: string
  id: number | null
  role: string
}

const initialState: UserStore = {
  name: "",
  id: null,
  role: "",
}

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserStore>) => {
      ;(state.name = action.payload.name),
        (state.id = action.payload.id),
        (state.role = action.payload.role)
    },
  },
})

export const { addUser } = userSlice.actions

export default userSlice.reducer
