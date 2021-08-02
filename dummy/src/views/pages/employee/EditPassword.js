import React, { useState } from 'react';
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
  CRow,
  CFormGroup,
  CLabel,
  CInputCheckbox,
} from '@coreui/react';
import axios from '../../../utilities/axios';
import HostUrl from '../../../utilities/HostUrl';
import newAlert from '../../../components/NewAlert';

const Login = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const lang = localStorage.getItem('lang');
  const [formData, setFormData] = useState({
    new_password: '',
  });
  const [repeat, setRepeat] = useState('');

  const onFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onRepeatChange = (e) => {
    setRepeat(e.target.value);
  };

  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      let messageErr = '';
      if (lang === 'en') {
        messageErr =
          'Password  at least 8 characters, combination of letters and numbers.';
      } else {
        messageErr =
          'Password harus terdiri dari minimal 8 karakter kombinasi huruf dan angka.';
      }
      let passw = /^(?=.{8,20}$)(?=.*[a-z]).*\d/i;
      if (formData.new_password !== repeat) {
        newAlert({ status: 'error', message: 'Password not match' });
        return;
      }
      if (!formData.new_password.match(passw)) {
        newAlert({ status: 'error', message: messageErr });
        return;
      }
      await axios({
        method: 'PUT',
        url: HostUrl + '/employee/edit-password',
        data: formData,
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      newAlert({ status: 'success', message: 'Berhasil' });
      localStorage.removeItem('token');
      localStorage.removeItem('type');
      history.push('/employe');
    } catch (error) {
      const { msg } = error.response.data;
      newAlert({ status: 'error', message: msg });
      console.log(error.response.data);
    }
  };

  const onCheck = async (e) => {
    const { checked } = e.target;
    setShow(checked);
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="4">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={onFormSubmit}>
                    <CRow>
                      <CCol xs="12">
                        <div
                          style={{
                            borderWidth: 1,
                            borderColor: '#006633',
                            borderStyle: 'solid',
                            backgroundColor: '#006633',
                            marginBottom: 20,
                          }}
                        >
                          <p
                            style={{
                              textAlign: 'center',
                              color: 'white',
                              marginBottom: 0,
                              padding: 10,
                            }}
                          >
                            {lang === 'en'
                              ? 'Please replace the password provided by the system with a new password'
                              : 'Silahkan mengganti password yang telah diberikan oleh sistem dengan password baru yang hanya diketahui oleh anda'}
                          </p>
                        </div>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs="12">
                        <CFormGroup>
                          <CLabel>
                            {lang === 'en' ? 'New Password' : 'Password Baru'}
                          </CLabel>
                          <CInput
                            type={show ? 'text' : 'password'}
                            name="new_password"
                            onChange={onFormChange}
                          />
                          <div style={{ fontSize: 8, color: 'red' }}>
                            {lang === 'en'
                              ? 'Password  at least 8 characters, combination of letters and numbers.'
                              : 'Password harus terdiri dari minimal 8 karakter kombinasi huruf dan angka.'}
                          </div>
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs="12">
                        <CFormGroup>
                          <CLabel>
                            {lang === 'en'
                              ? 'Confirm Password'
                              : 'Ulangi Password Baru'}
                          </CLabel>
                          <CInput
                            type={show ? 'text' : 'password'}
                            name="repeat"
                            onChange={onRepeatChange}
                          />
                        </CFormGroup>
                      </CCol>
                    </CRow>
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
                    <CButton
                      color="primary"
                      block
                      type="submit"
                      className="mt-3"
                    >
                      {lang === 'en' ? 'Change Password' : 'Ganti Password'}
                    </CButton>
                  </CForm>
                  <div style={{ marginTop: 20 }}>
                    <p style={{ textAlign: 'center' }}>
                      {lang === 'en'
                        ? 'Please contact admin if you have problems'
                        : 'Silahkan menghubungi admin Klinik Medilab jika anda mengalami kendala'}
                    </p>
                  </div>
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
