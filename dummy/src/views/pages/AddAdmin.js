import React, { useState } from "react";
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CInput, CInputGroup, CInputGroupPrepend, CInputGroupText, CRow, CImg } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import newAlert from "../../components/NewAlert";
import { Logo, ClinicName } from "../../utilities/CustomData";
import axios from "axios";
import HostUrl from "../../utilities/HostUrl";

const AddAdmin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    klinik: "PNC",
    adminType: 1,
  });
  const [val, setVal] = useState("");

  const onFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onFormValidate = (event) => {
    setVal(event.target.value);
  };

  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      if (formData.password !== val) {
        newAlert({ status: "error", message: "password tidak sama" });
        return;
      }
      await axios({
        method: "POST",
        url: HostUrl + "/v1/admins/create",
        data: { data: formData },
      });
      newAlert({ status: "success", message: "Register Admin Berhasil " });
    } catch (error) {
      const { message } = error.response.data;
      newAlert({ status: "error", message });
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
                  <h5 className="text-center text-success">Register Admin</h5>
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
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="verifikasi" name="verifikasi" onChange={onFormValidate} />
                    </CInputGroup>
                    <CButton color="primary" size="lg" block type="submit">
                      Register
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

export default AddAdmin;
