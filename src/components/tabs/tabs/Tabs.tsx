import React, { useState } from "react";
import FormTab from "./FormTab";
import { UserInfoTab } from "./UserTab";
import "../../../App.css";

const Tabs = (): JSX.Element => {
    const [tabState, setTabState] = useState(1);
    const toggleTab = (index:number) => {
      setTabState(index);
    };
  
    return (
      <div className="container">
        <div className="tab_buttons">
          <button className={tabState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)} >
                FORM
          </button>
          <button className={tabState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)} >
                USER
          </button>
        </div>
        <div className="tabs_content">
          <div className={tabState=== 1 ? "content  active-content" : "content"} >
           <FormTab />
          </div>
          <div className={tabState === 2 ? "content  active-content" : "content"} >
            <UserInfoTab />
          </div>

        </div>
      </div>
    );
  }
  
  export default Tabs;