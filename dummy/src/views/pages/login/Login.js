import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
// import axios from "../../../utilities/axios";
// import HostUrl from "../../../utilities/HostUrl";
import newAlert from "../../../components/NewAlert";
import Panacea from "../../../assets/images/logo.png";

const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const onFormSubmit = async (e) => {
    // try {
    //   e.preventDefault();
    //   const { data } = await axios({
    //     method: "POST",
    //     url: HostUrl + "/users/login",
    //     data: formData,
    //   });
    //   localStorage.setItem("token", data.access_token);
    //   newAlert({ status: "success", message: "Berhasil" });
    //   history.push("/");
    // } catch (error) {
    //   const { msg } = error.response.data;
    //   newAlert({ status: "error", message: msg });
    //   console.log(error.response.data);
    // }
    e.preventDefault();
    if (formData.email === "admin123" && formData.password === "admin123") {
      localStorage.setItem("token", "initoken");
      newAlert({ status: "success", message: "Berhasil" });
      history.push("/");
    } else {
      newAlert({ status: "error", message: "email atau password salah" });
    }
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-3">
                <CImg src={Panacea} align="center" height={100} />
                <h3 className="text-center my-2 font-weight-bold text-success">
                  Klinik Utama Panacea
                </h3>
                <CCardBody>
                  <CForm action="" method="post" onSubmit={onFormSubmit}>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Email"
                        autoComplete="username"
                        name="email"
                        onChange={onFormChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        name="password"
                        onChange={onFormChange}
                      />
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
