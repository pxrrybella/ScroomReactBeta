import React from "react";
import { useEffect, useState } from "react";
import { Banner } from "../components";
import { getUserwebFirstLastName } from "../services/UserwebService";
import Setting from "../components/Setting";


const SettingPage = () => {
    const [userweb, setUserweb] = useState([]);

    const getUserwebNombreApellido = async () => {
        setUserweb(await getUserwebFirstLastName());
    }

    useEffect(() => {
        getUserwebNombreApellido();
    }, [])
    return (
        <div className="flex-body">
            <Banner userweb={userweb} />
            <Setting/>
            <div className="empty-space"></div>
        </div>

    )
}

export default SettingPage;