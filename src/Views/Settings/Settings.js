import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import MainBox from "../../UI/MainBox/MainBox";
import SettingsSidebar from "../../Components/SettingsSidebar/SettingsSidebar";

const Settings = () => {
    const user = useSelector(state => state.auth.user);
    return (
        <div className="container">

            <div className="settings">
                <div className="row g-2">
                    <div className="co-12">
                        <MainBox>
                            <div className="settings-header">
                                <h3 className="settings-header-username">{user.name}</h3>
                                <h6 className="settings-header-email">{user.email}</h6>
                            </div>
                        </MainBox>
                    </div>
                    <div className="col-md-4">
                        <MainBox>
                            <SettingsSidebar />
                        </MainBox>
                    </div>
                    <div className="col-md-8">
                        <MainBox>
                            <Outlet />
                        </MainBox>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;