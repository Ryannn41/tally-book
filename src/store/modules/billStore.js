import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
    name: 'bill',
    initialState: {
        billList: []
    },
    reducers: {
        setBillList(state, action) {
            state.billList = action.payload
        }
    }
})

// 解构 axtionCreater 函数
const { setBillList } = billStore.actions

// 异步编写
const getBillList = () => {
    return async (dispatch) => {
        // 异步请求
        const res = await axios.get('http://localhost:8888/ka')
        // 触发同步 reducer
        dispatch(setBillList(res.data))
    }
}

export { getBillList }

// 导出 reducer
const reducer = billStore.reducer

export default reducer;