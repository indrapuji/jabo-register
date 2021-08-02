import React, { useState } from "react";
import { CContainer, CRow, CCol, CInput, CFormGroup, CForm, CLabel, CCardFooter, CButton, CCard, CCardBody, CCardHeader } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useHistory } from "react-router-dom";
import axios from "../../utilities/axios";
import HostUrl from "../../utilities/HostUrl";
import newAlert from "../../components/NewAlert";

const RegisterAdmin = () => {
  const history = useHistory()
  const [val, setVal] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    klinik: localStorage.getItem("klinik"),
    adminType: 1,
    outlet: localStorage.getItem("outlet")
  });

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
      const { username, password, outlet } = formData
      if (password !== val) {
        newAlert({ status: "error", message: "password tidak sama" });
        return;
      }
      if (username === "" || password === "" || val === "" || outlet === "") {
        newAlert({ status: "error", message: "Isi semua form" });
        return;
      }
      await axios({
        method: "POST",
        url: HostUrl + "/v1/admins/create",
        data: { data: formData },
      });
      newAlert({ status: "success", message: "Register Admin Berhasil" });
      history.push('/admin')
    } catch (error) {
      const { message } = error.response.data;
      newAlert({ status: "error", message });
    }
  };
  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader color="primary">
              <strong>Daftar Admin Baru</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={onFormSubmit}>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="text-input">
                      <small>Username</small>
                    </CLabel>
                  </CCol>
                  <CCol md="8">
                    <CInput custom size="sm" placeholder="username" name="username" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="text-input">
                      <small>Password</small>
                    </CLabel>
                  </CCol>
                  <CCol md="8">
                    <CInput type="password" size="sm" placeholder="password" name="password" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel >
                      <small>Verifikasi</small>
                    </CLabel>
                  </CCol>
                  <CCol md="8">
                    <CInput type="password" size="sm" placeholder="verifikasi" name="verifikasi" onChange={onFormValidate} />
                  </CCol>
                </CFormGroup>
                <CCardFooter>
                  <CButton type="submit" size="sm" color="primary" className="float-right" onClick={onFormSubmit}>
                    <CIcon name="cil-scrubber" /> Simpan
                  </CButton>
                </CCardFooter>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default RegisterAdmin;
