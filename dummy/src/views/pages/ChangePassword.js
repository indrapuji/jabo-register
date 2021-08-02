import React, { useState } from "react";
import { CContainer, CRow, CCol, CInput, CFormGroup, CForm, CLabel, CCardFooter, CButton, CCard, CCardBody, CCardHeader } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useHistory } from "react-router-dom";
import axios from "../../utilities/axios";
import HostUrl from "../../utilities/HostUrl";
import newAlert from "../../components/NewAlert";

const ChangePassword = () => {
  const history = useHistory();
  const [val, setVal] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    oldPassword: "",
    newPassword: "",
  });

  const onFormChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onFormValidate = (event) => {
    setVal(event.target.value);
  };

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      if (formData.newPassword !== val) {
        newAlert({ status: "error", message: "password tidak sama" });
        return;
      }
      await axios({
        method: "POST",
        url: HostUrl + "/v1/admins/change-password",
        data: {
          data: {
            username: formData.username,
            oldPassword: formData.oldPassword,
            newPassword: formData.newPassword,
          },
        },
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      newAlert({ status: "success", message: "Berhasil" });
      localStorage.clear();
      history.push("/login");
    } catch (error) {
      const { message } = error.response.data;
      newAlert({ status: "error", message });
    }
  };
  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol xs="12" md="9">
          <CCard>
            <CCardHeader color="primary">
              <strong>Ganti Password</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={submitForm}>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="text-input">
                      <small>username</small>
                    </CLabel>
                  </CCol>
                  <CCol md="8">
                    <CInput custom size="sm" name="username" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="text-input">
                      <small>Password Lama</small>
                    </CLabel>
                  </CCol>
                  <CCol md="8">
                    <CInput custom size="sm" name="oldPassword" type="password" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="text-input">
                      <small>Password Baru</small>
                    </CLabel>
                  </CCol>
                  <CCol md="8">
                    <CInput custom size="sm" name="newPassword" type="password" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel htmlFor="text-input">
                      <small>Verifikasi</small>
                    </CLabel>
                  </CCol>
                  <CCol md="8">
                    <CInput custom size="sm" name="verifikasi" type="password" onChange={onFormValidate} />
                  </CCol>
                </CFormGroup>
                <CCardFooter>
                  <CButton type="submit" size="sm" color="primary" className="float-right">
                    <CIcon name="cil-scrubber" /> Update
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

export default ChangePassword;
