import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
    name: 'bill',
    // 数据状态state
    initialState: {
        billList: []
    },
    reducers: {
        // 同步修改方法
        setBillList(state, action) {
            state.billList = action.payload
        },
        // 同步添加账单方法
        addBill(state, action) {
            state.billList.push(action.payload)
        }
    }
})

// 解构 axtionCreater 函数
const { setBillList, addBill } = billStore.actions

// 异步编写
const getBillList = () => {
    return async (dispatch) => {
        // 异步请求
        const res = await axios.get('http://localhost:8888/ka')
        // 触发同步 reducer
        dispatch(setBillList(res.data))
    }
}

const addBillList = (data) => {
    return async (dispatch) => {
        // 异步请求
        const res = await axios.post('http://localhost:8888/ka', data)
        // 触发同步 reducer
        dispatch(addBill(res.data))
    }
}

export { getBillList, addBillList }

// 导出 reducer
const reducer = billStore.reducer

export default reducer;