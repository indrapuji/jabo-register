import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
  CSelect,
  CImg,
  CFormGroup,
  CInputCheckbox,
  CLabel,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import axios from '../../../utilities/axios';
import HostUrl from '../../../utilities/HostUrl';
import newAlert from '../../../components/NewAlert';
import Medilab from '../../../assets/images/medilab-logo.png';

const LoginEmployee = () => {
  const history = useHistory();
  const [companyList, setCompanyList] = useState(null);
  const [show, setShow] = useState(false);
  // eslint-disable-next-line
  const [lang, setLang] = useState(localStorage.getItem('lang'));
  const [dataForm, setDataForm] = useState({
    company_id: '',
    emp_id: '',
    password: '',
    status_bahasa: '',
  });

  const onChangeForm = (event) => {
    const { name, value } = event.target;
    setDataForm({ ...dataForm, [name]: value });
  };
  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios({
        method: 'POST',
        url: HostUrl + '/employee/login',
        data: dataForm,
      });
      if (!data.userData.status_password) {
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('type', 'employee');
        newAlert({ status: 'success', message: 'Berhasil' });
        history.push('/karyawan/pass');
      } else {
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('type', 'employee');
        newAlert({ status: 'success', message: 'Berhasil' });
        history.push(`/${data.userData.id}/update`);
      }
    } catch (error) {
      const { msg } = error.response.data;
      newAlert({ status: 'error', message: msg });
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('lang')) {
      history.push('/language');
    } else {
      getCompanyList();
      setDataForm({ ...dataForm, status_bahasa: localStorage.getItem('lang') });
      setLang(localStorage.getItem('lang'));
    }
    // eslint-disable-next-line
  }, []);

  console.log(dataForm);

  const onCheck = async (e) => {
    const { checked } = e.target;
    setShow(checked);
  };

  const getCompanyList = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: HostUrl + '/company/all-list',
      });
      setCompanyList(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-4">
                <p></p>
                <CImg src={Medilab} align="center" height={40} />
                <p></p>
                <CCardBody>
                  <CForm action="" method="post" onSubmit={onSubmitForm}>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-settings" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CSelect name="company_id" onChange={onChangeForm}>
                        <option value="0">
                          {lang === 'en'
                            ? 'Select Company'
                            : 'Pilih Perusahaan'}
                        </option>
                        {companyList &&
                          companyList.map((data) => {
                            return (
                              <option key={data.id} value={data.id}>
                                {data.nama}
                              </option>
                            );
                          })}
                      </CSelect>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder={
                          lang === 'en' ? 'Employee Id' : 'Nomor Karyawan'
                        }
                        name="emp_id"
                        onChange={onChangeForm}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type={show ? 'text' : 'password'}
                        placeholder={lang === 'en' ? 'Password' : 'Sandi'}
                        name="password"
                        onChange={onChangeForm}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="12" style={{ marginTop: -10 }}>
                        <CFormGroup variant="custom-checkbox" inline>
                          <CInputCheckbox onChange={onCheck} />
                          <CLabel>
                            {lang === 'en'
                              ? 'Show Password'
                              : 'Tampilkan sandi'}
                          </CLabel>
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CButton color="primary" size="lg" block type="submit">
                      {lang === 'en' ? 'Login' : 'Masuk'}
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

export default LoginEmployee;
