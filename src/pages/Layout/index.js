import { Button } from "antd-mobile"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getBillList } from "@/store/modules/billStore"

const Layout = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBillList())
    }, [dispatch])

    return (
        <div>
            <Outlet />
            I am Layout
            <Button color="primary">全局样式测试</Button>
            <div className="purple">
                <Button color="primary">局部样式测试</Button>
            </div>
        </div>
    )
}

export default Layout