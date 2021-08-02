import React from "react";
import { CFooter } from "@coreui/react";
import { ClinicName } from "../utilities/CustomData";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        {ClinicName}
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
