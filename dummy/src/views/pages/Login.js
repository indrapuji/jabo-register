import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CInput, CInputGroup, CInputGroupPrepend, CInputGroupText, CRow, CImg } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import newAlert from "../../components/NewAlert";
import { Logo, ClinicName } from "../../utilities/CustomData";
import axios from "axios";
import HostUrl from "../../utilities/HostUrl";

const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios({
        method: "POST",
        url: HostUrl + "/v1/admins/login",
        data: { data: formData },
      });
      if (data.content.data.klinik === "DUMMY" && data.content.data.outlet === "DUMMY") {
        localStorage.setItem("token", data.content.accessToken);
        localStorage.setItem("type", data.content.data.adminType);
        localStorage.setItem("klinik", data.content.data.klinik);
        localStorage.setItem("adminId", data.content.data.adminId);
        localStorage.setItem("outlet", data.content.data.outlet);
        newAlert({ status: "success", message: "Berhasil" });
        history.push("/");
      } else {
        newAlert({ status: "error", message: "NOT ALLOWED" });
      }
    } catch (error) {
      const { message } = error.response.data;
      newAlert({ status: "error", message });
      console.log(error.response.data.message);
    }
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-3">
                <CImg src={Logo} align="center" height={100} />
                <h3 className="text-center my-2 font-weight-bold text-success">{ClinicName}</h3>
                <CCardBody>
                  <CForm action="" method="post" onSubmit={onFormSubmit}>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="username" autoComplete="username" name="username" onChange={onFormChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" name="password" onChange={onFormChange} />
                    </CInputGroup>
                    <CButton color="primary" size="lg" block type="submit">
                      Login
                    </CButton>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
