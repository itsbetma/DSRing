import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  processAmount: number
  processStarted: boolean
  rightIndex: number
}

const initialState: CounterState = {
  processAmount: 1,
  processStarted: false,
  rightIndex: 0,
}

export const processSlice = createSlice({
  name: 'process',
  initialState,
  reducers: {
    changeProcessAmount: (state, action: PayloadAction<CounterState['processAmount']>) => {
      state.processAmount = action.payload
    },
    changeProcessStarted: (state, action: PayloadAction<CounterState['processStarted']>) => {
      state.processStarted = action.payload
    },
    changeRightIndex: (state, action: PayloadAction<CounterState['rightIndex']>) => {
      state.rightIndex = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeProcessAmount, changeProcessStarted, changeRightIndex } = processSlice.actions

export default processSlice.reducer
