import { Button } from "antd-mobile"
import { Outlet } from "react-router-dom"

const Layout = () => {
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