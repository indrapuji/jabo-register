import React, { useEffect, useState } from 'react';
import {
  CCard,
  CCol,
  CRow,
  CDataTable,
  CFormGroup,
  CLabel,
} from '@coreui/react';
import { formatDate } from 'node-format-date';
import axios from '../../../utilities/axios';
import HostUrl from '../../../utilities/HostUrl';
import { tableCount1, tableCount2 } from '../../../utilities/TableCount';

const EmployeePrint = React.forwardRef((props, ref) => {
  const { dataPrint } = props;
  const [printData, setPrintData] = useState([]);
  const [symptomList, setSymptomList] = useState([]);

  useEffect(() => {
    getAllSympyom();
    getPrint(dataPrint);
  }, [dataPrint]);

  const getPrint = async (newData) => {
    const dataArr = JSON.stringify(newData);
    try {
      const { data } = await axios({
        method: 'POST',
        url: HostUrl + `/employee/check-id`,
        data: { dataArr },
      });
      console.log(data);
      setPrintData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllSympyom = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: HostUrl + '/symptom/all-list',
      });
      setSymptomList(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const fields = [
    { key: 'no_urut', label: 'No', _style: { width: '5%' } },
    { key: 'nama_riwayat', label: 'Jenis Penyakit', _style: { width: '35%' } },
    { key: 'status_riwayat', label: 'Ya / Tidak', _style: { width: '20%' } },
    { key: 'keterangan', label: 'Keterangan', _style: { width: '40%' } },
  ];

  const enFields = [
    { key: 'no_urut', label: 'No', _style: { width: '5%' } },
    { key: 'nama_riwayat', label: 'Illness', _style: { width: '35%' } },
    { key: 'status_riwayat', label: 'Yes / No', _style: { width: '20%' } },
    { key: 'keterangan', label: 'Description', _style: { width: '40%' } },
  ];

  return (
    <div className="print-container">
      <div className="print-page page-break" ref={ref}>
        {printData &&
          printData.map((item, index) => {
            const { status_bahasa } = item;
            let newSymptom = symptomList.map((data) => {
              if (!data.status_print) return false;
              const validation = item.symptoms.find(
                (sym) => sym.id === data.id
              );
              if (validation)
                return {
                  id: validation.id,
                  no_urut: validation.no_urut,
                  nama_riwayat:
                    status_bahasa === 'id'
                      ? validation.nama_riwayat
                      : validation.bahasa_inggris,
                  status_riwayat: validation.employee_symptom.status_riwayat
                    ? status_bahasa === 'id'
                      ? 'Ya'
                      : 'Yes'
                    : status_bahasa !== 'id'
                    ? 'Tidak'
                    : 'No',
                  keterangan: validation.employee_symptom.keterangan_riwayat,
                };
              else {
                if (item.status) {
                  if (item.updatedAt > data.createdAt) {
                    return {
                      id: data.id,
                      no_urut: data.no_urut,
                      nama_riwayat:
                        status_bahasa === 'id'
                          ? data.nama_riwayat
                          : data.bahasa_inggris,
                      status_riwayat: status_bahasa === 'id' ? 'Tidak' : 'No',
                      keterangan: '',
                    };
                  } else {
                    return {
                      id: data.id,
                      no_urut: data.no_urut,
                      nama_riwayat:
                        status_bahasa === 'id'
                          ? data.nama_riwayat
                          : data.bahasa_inggris,
                      status_riwayat:
                        status_bahasa === 'id' ? 'Ya / Tidak' : 'Yes / No',
                      keterangan: '',
                    };
                  }
                } else {
                  return {
                    id: data.id,
                    no_urut: data.no_urut,
                    nama_riwayat:
                      status_bahasa === 'id'
                        ? data.nama_riwayat
                        : data.bahasa_inggris,
                    status_riwayat:
                      status_bahasa === 'id' ? 'Ya / Tidak' : 'Yes / No',
                    keterangan: '',
                  };
                }
              }
            });
            newSymptom = newSymptom.filter((data) => data !== false);
            return (
              <>
                <div className="page-break" />
                <CCard key={item.id}>
                  <div
                    style={{
                      marginTop: 10,
                      marginBottom: 10,
                      marginLeft: 40,
                      marginRight: 40,
                    }}
                  >
                    <h5 style={{ marginLeft: 50, marginTop: 20 }}>
                      {item.nomor}
                    </h5>
                    <div style={{ textAlign: 'center' }}>
                      <h3 style={{ textDecoration: 'underline' }}>
                        {status_bahasa === 'id'
                          ? 'SURAT PERNYATAAN CALON PESERTA MEDICAL'
                          : 'INFORMED CONSENT'}
                      </h3>
                    </div>
                    <div>
                      <p style={{ textDecoration: 'underline' }}>
                        {status_bahasa === 'id'
                          ? 'DATA PRIBADI'
                          : 'PERSONAL DATA'}
                      </p>
                    </div>
                    <CRow>
                      <CCol xs="7">
                        <CFormGroup row className="card-print">
                          <CCol xs="4">
                            <CLabel>
                              {status_bahasa === 'id' ? 'Nama' : 'Name'}
                            </CLabel>
                          </CCol>
                          <CCol xs="7">
                            <p style={{ fontWeight: 'bold' }}>: {item.nama}</p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row className="card-print">
                          <CCol xs="4">
                            <CLabel>
                              {status_bahasa === 'id'
                                ? 'Umur / Jenis Kelamin'
                                : 'Age / Sex'}
                            </CLabel>
                          </CCol>
                          <CCol xs="8">
                            <p style={{ fontWeight: 'bold' }}>
                              : {item.umur}{' '}
                              {status_bahasa === 'id' ? 'tahun' : 'Years'} /{' '}
                              {status_bahasa === 'en'
                                ? item.gender
                                : item.gender === 'male'
                                ? 'Laki - laki'
                                : 'Perempuan'}
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row className="card-print">
                          <CCol xs="4">
                            <CLabel>
                              {status_bahasa === 'id'
                                ? 'No Karyawan'
                                : 'Employee ID'}
                            </CLabel>
                          </CCol>
                          <CCol xs="8">
                            <p style={{ fontWeight: 'bold' }}>
                              : {item.emp_id}
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row className="card-print">
                          <CCol xs="4">
                            <CLabel>
                              {status_bahasa === 'id'
                                ? 'Tempat / Tanggal Lahir'
                                : 'Place / Date of Birth'}
                            </CLabel>
                          </CCol>
                          <CCol xs="8">
                            <p style={{ fontWeight: 'bold' }}>
                              :{' '}
                              {item.tempat_lahir
                                ? item.tempat_lahir
                                : '....................'}{' '}
                              / {formatDate(item.tgl_lahir)}
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row className="card-print">
                          <CCol xs="4">
                            <CLabel>
                              {status_bahasa === 'id'
                                ? 'No HP'
                                : 'Phone Number'}
                            </CLabel>
                          </CCol>
                          <CCol xs="8">
                            <p style={{ fontWeight: 'bold' }}>: {item.no_hp}</p>
                          </CCol>
                        </CFormGroup>
                      </CCol>

                      <CCol xs="5">
                        <CFormGroup row className="card-print">
                          <CCol xs="6">
                            <CLabel>Dept / Section</CLabel>
                          </CCol>
                          <CCol xs="6">
                            <p style={{ fontWeight: 'bold' }}>
                              : {item.departemen}
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row className="card-print">
                          <CCol xs="6">
                            <CLabel>
                              {status_bahasa === 'id' ? 'Jabatan' : 'Position'}
                            </CLabel>
                          </CCol>
                          <CCol xs="6">
                            <p style={{ fontWeight: 'bold' }}>
                              : {item.jabatan}
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row className="card-print">
                          <CCol xs="6">
                            <CLabel>
                              {status_bahasa === 'id'
                                ? 'Medical Terakhir Di'
                                : 'Place of Last Medical'}
                            </CLabel>
                          </CCol>
                          <CCol xs="6">
                            <p style={{ fontWeight: 'bold' }}>
                              : {item.tempat_medical_terakhir}
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row className="card-print">
                          <CCol xs="6">
                            <CLabel>
                              {status_bahasa === 'id'
                                ? 'Tanggal Medical'
                                : 'Date'}
                            </CLabel>
                          </CCol>
                          <CCol xs="6">
                            <p style={{ fontWeight: 'bold' }}>
                              : {item.tanggal_medical_terakhir}
                            </p>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row className="card-print">
                          <CCol xs="6">
                            <CLabel>
                              {status_bahasa === 'id'
                                ? 'Nama Ayah'
                                : 'Father Name'}
                            </CLabel>
                          </CCol>
                          <CCol xs="6">
                            <p style={{ fontWeight: 'bold' }}>: {item.ayah}</p>
                          </CCol>
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CFormGroup row className="card-print">
                      <CCol xs="3">
                        <CLabel>
                          {status_bahasa === 'id'
                            ? 'Alamat Tinggal Sekarang'
                            : 'Address'}
                        </CLabel>
                      </CCol>
                      <CCol xs="9" style={{ marginLeft: -52 }}>
                        <p style={{ fontWeight: 'bold' }}>: {item.alamat_1}</p>
                      </CCol>
                    </CFormGroup>
                    <div className="card-print">
                      {status_bahasa === 'id' ? (
                        <p>
                          Apakah Anda sedang atau pernah menderita atau pernah
                          mendapat pengobatan dari gangguan kesehatan seperti di
                          bawah ini? Coret yang tidak perlu pada kolom yang
                          telah disediakan dan jelaskan.
                        </p>
                      ) : (
                        <p>
                          Do you have or have you had any significant or
                          recurrent health problems with the following? Cross
                          out unnecessary in the column provided and explain.
                        </p>
                      )}
                    </div>
                    <CRow className="card-print">
                      <CCol xs="6">
                        <CDataTable
                          items={tableCount1(newSymptom)}
                          fields={status_bahasa === 'id' ? fields : enFields}
                          hover
                          striped
                          bordered
                          size="sm"
                        />
                      </CCol>
                      <CCol xs="6">
                        <CDataTable
                          items={tableCount2(newSymptom)}
                          fields={status_bahasa === 'id' ? fields : enFields}
                          hover
                          striped
                          bordered
                          size="sm"
                        />
                      </CCol>
                    </CRow>
                    <div style={{ textAlign: 'center', marginTop: 10 }}>
                      <h3 style={{ textDecoration: 'underline' }}>
                        {status_bahasa === 'id' ? 'PERNYATAAN' : 'CONSENT'}
                      </h3>
                    </div>
                    <CRow>
                      <CCol xs="3">
                        <table
                          style={{
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderColor: 'black',
                            width: '100%',
                            height: '70%',
                          }}
                        >
                          <thead>
                            <tr>
                              <th
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  textAlign: 'center',
                                }}
                              >
                                Entry
                              </th>
                              <th style={{ textAlign: 'center' }}>Posted</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              style={{
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderColor: 'black',
                                height: '30%',
                              }}
                            >
                              <td
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  paddingBottom: 20,
                                }}
                              >
                                Personal by:
                              </td>
                              <td style={{ paddingBottom: 20 }}>Spiro by:</td>
                            </tr>
                            <tr
                              style={{
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderColor: 'black',
                                height: '30%',
                              }}
                            >
                              <td
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  paddingBottom: 20,
                                }}
                              >
                                Physical by:
                              </td>
                              <td
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  paddingBottom: 20,
                                }}
                              >
                                ECG by:{' '}
                              </td>
                            </tr>
                            <tr
                              style={{
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderColor: 'black',
                                height: '30%',
                              }}
                            >
                              <td
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  paddingBottom: 20,
                                }}
                              >
                                Urine by:
                              </td>
                              <td style={{ paddingBottom: 20 }}>Others:</td>
                            </tr>
                            <tr
                              style={{
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderColor: 'black',
                                height: '15%',
                              }}
                            >
                              <td colSpan="2" style={{ paddingBottom: 20 }}>
                                Certified by:
                              </td>
                            </tr>
                            <tr
                              style={{
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderColor: 'black',
                                height: '15%',
                              }}
                            >
                              <td colSpan="2" style={{ paddingBottom: 20 }}>
                                Printed by:
                              </td>
                            </tr>
                            <tr
                              style={{
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderColor: 'black',
                                height: '15%',
                              }}
                            >
                              <td colSpan="2" style={{ paddingBottom: 20 }}>
                                Photo Checked by:
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div style={{ marginTop: 20 }}>
                          <p style={{ textDecoration: 'underline' }}>
                            {item.pemeriksaan}
                          </p>
                        </div>
                      </CCol>
                      <CCol xs="9">
                        {status_bahasa === 'id' ? (
                          <ol style={{ fontSize: 15, textAlign: 'justify' }}>
                            <li>
                              Saya bersedia dan tidak keberatan memberikan
                              informasi yang benar pada tabel riwayat pengobatan
                              dan penyakit diatas dan segala kerugian akibat
                              kesalahan informasi yang saya berikan akan saya
                              tanggung jawab sendiri dan saya bersedia menerima
                              sanksi atas kerugian tersebut.
                            </li>
                            <li>
                              Saya bersedia dan tidak keberatan dilakukan
                              pemeriksaan kesehatan, pemeriksaan physic
                              diagnostic, pemeriksaan labolatorium (termasuk tes
                              HIV, VDRL, HBsAg {'&'} test labolatorium lainnya),
                              X-ray, dan penunjang diagnostic lainnya terhadap
                              diri saya sesuai dengan kriteria yang diperlukan,
                              baik kriteria medis atau kriteria yang ditentukan
                              perusahaan dan mengikuti prosedur yang dilakukan
                              oleh klinik Medilab.
                            </li>
                            <li>
                              Saya bersedia dan tidak keberatan memberikan hasil
                              pemeriksaan kesehatan saya kepada perusahaan yang
                              merekrut atau tempat saya bekerja.
                            </li>
                            <li>
                              Saya tidak akan menuntut siapapun terhadap segala
                              keputusan yang telah ditetapkan oleh Klinik
                              Medilab berupa FIT atau UNFIT bekerja sesuai
                              dengan kriteria medis atau kriteria yang telah
                              ditetapkan oleh perusahaan, atau terjadinya
                              kesalahan interpretasi yang bukan disebabkan oleh
                              kesalahan prosedur dan peralatan/reagensia yang
                              dipergunakan di Klinik Medilab.
                            </li>
                            <li>
                              <span style={{ fontWeight: 'bold' }}>
                                Saya telah setuju dengan semua pernyataan diatas
                                dan Form ini telah saya isi dengan
                                sebenar-benarnya
                              </span>{' '}
                              via online internet di aplikasi website
                              https://form.medilab-clinic.com dan persetujuan
                              saya pada form ini adalah sebagai pengganti tanda
                              tangan ketika salinan form dicetak di atas kertas.
                            </li>
                          </ol>
                        ) : (
                          <ol style={{ fontSize: 15, textAlign: 'justify' }}>
                            <li>
                              I Acknowledge and agree will provide the right
                              information of state of my health that described
                              above and all loss due to misinformation that I
                              gave would my own responsibility and I willing to
                              receive sanctions on the loss.
                            </li>
                            <li>
                              I understand and accept to undergo medical
                              examination (physical diagnostic, laboratory test
                              including HIV, VDRL, HBsAg, and other laboratory
                              tests, Chest X-Ray and additional diagnostic that
                              required in either medical criteria or in
                              accordance to company requirement and obey all of
                              medical examination procedures performed by Klinik
                              Medilab.
                            </li>
                            <li>
                              I agree to inform my Health Screening Report or
                              Medical Fitness Report for the company that
                              recruited me or related agency.
                            </li>
                            <li>
                              I will not sue anyone about alldecisions of FIT or
                              Unfit that have been established by Klinik Medilab
                              in accordance to medical criteria or company
                              criteria or or the occurrence of misinterpretation
                              that is not caused by procedural errors.
                            </li>
                            <li>
                              I have filled this form via online on the website
                              application
                              <span style={{ fontWeight: 'bold' }}>
                                http://form.medilab-clinic.com
                              </span>{' '}
                              and my approval on this form is a substitute for
                              my signature after this form is printed
                            </li>
                          </ol>
                        )}
                      </CCol>
                    </CRow>
                    <div>
                      <h5 style={{ textDecoration: 'underline' }}>
                        {status_bahasa === 'id'
                          ? '(Diisi oleh petugas kesehatan) tanggal:'
                          : '(For Physician and Paramedic):'}
                      </h5>
                    </div>
                    <div>
                      <table style={{ width: '100%' }}>
                        <tr>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: '5%',
                              textAlign: 'center',
                              padding: '8px 0px',
                            }}
                          >
                            No.
                          </td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 80,
                              textAlign: 'right',
                            }}
                          >
                            {item.company.kode_perusahaan}
                          </td>
                          <td style={{ width: 20 }}></td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                              textAlign: 'center',
                            }}
                          >
                            Vision
                          </td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                              textAlign: 'center',
                            }}
                          >
                            R
                          </td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                              textAlign: 'center',
                            }}
                          >
                            L
                          </td>
                          <td style={{ width: 20 }}></td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                              textAlign: 'center',
                            }}
                            rowSpan="2"
                          >
                            BP
                          </td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                            }}
                            rowSpan="2"
                          ></td>
                          <td style={{ width: 20 }}></td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                              textAlign: 'center',
                            }}
                            rowSpan="2"
                          >
                            PULSE
                          </td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                            }}
                            rowSpan="2"
                          ></td>
                          <td style={{ width: 20 }}></td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 180,
                              textAlign: 'center',
                            }}
                          >
                            Urine Test
                          </td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              textAlign: 'center',
                              padding: '8px 0px',
                            }}
                          >
                            {status_bahasa === 'id' ? 'BB' : 'Height'}
                          </td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 80,
                            }}
                          ></td>
                          <td style={{ width: 20 }}></td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                              textAlign: 'center',
                            }}
                          >
                            Unaided
                          </td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                            }}
                          ></td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                            }}
                          ></td>
                          <td style={{ width: 20 }}></td>

                          <td style={{ width: 20 }}></td>

                          <td style={{ width: 20 }}></td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 180,
                            }}
                            rowSpan="3"
                          ></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              textAlign: 'center',
                              padding: '8px 0px',
                            }}
                          >
                            {status_bahasa === 'id' ? 'TB' : 'Weight'}
                          </td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 80,
                            }}
                          ></td>
                          <td style={{ width: 20 }}></td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                              textAlign: 'center',
                            }}
                          >
                            Aided
                          </td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                            }}
                          ></td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                            }}
                          ></td>
                          <td style={{ width: 20 }}></td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                              textAlign: 'center',
                            }}
                            rowSpan="2"
                          >
                            Re-check
                          </td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                            }}
                            rowSpan="2"
                          ></td>
                          <td style={{ width: 20 }}></td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                              textAlign: 'center',
                            }}
                            rowSpan="2"
                          >
                            Re-check
                          </td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                            }}
                            rowSpan="2"
                          ></td>
                          <td style={{ width: 20 }}></td>
                        </tr>
                        <tr>
                          <td style={{ width: 80 }}></td>
                          <td style={{ width: 80 }}></td>
                          <td style={{ width: 20 }}></td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                              textAlign: 'center',
                              padding: '8px 0px',
                            }}
                          >
                            B.W
                          </td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                              textAlign: 'center',
                            }}
                          >
                            Ya
                          </td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              width: 60,
                              textAlign: 'center',
                            }}
                          >
                            Tidak
                          </td>
                          <td style={{ width: 20 }}></td>
                          <td style={{ width: 20 }}></td>
                          <td style={{ width: 20 }}></td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              paddingBottom: 30,
                              paddingLeft: 10,
                            }}
                            colSpan="13"
                          >
                            Physic :
                          </td>
                          <td
                            style={{
                              borderWidth: 1,
                              borderStyle: 'solid',
                              borderColor: 'black',
                              paddingBottom: 40,
                              paddingLeft: 10,
                            }}
                          >
                            {status_bahasa === 'id' ? 'THT :' : 'E.N.T'}
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div style={{ marginTop: 60 }}>
                      <CRow>
                        <CCol>
                          <h5>
                            {status_bahasa === 'id'
                              ? 'Untuk petugas Radiologi'
                              : 'For Radiografer'}
                          </h5>
                          <table style={{ width: '100%' }}>
                            <tr>
                              <td
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  width: '15%',
                                  padding: 10,
                                }}
                              >
                                No.
                              </td>
                              <td
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  textAlign: 'center',
                                }}
                              >
                                {item.company.kode_perusahaan}
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  paddingLeft: 10,
                                }}
                              >
                                {status_bahasa === 'id' ? 'Nama' : 'Name'}
                              </td>
                              <td
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  paddingLeft: 10,
                                }}
                              >
                                {' '}
                                {item.nama}
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  paddingLeft: 10,
                                }}
                              >
                                {status_bahasa === 'id' ? 'Umur' : 'Age'}
                              </td>
                              <td
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  paddingLeft: 10,
                                }}
                              >
                                {' '}
                                {item.umur}{' '}
                                {status_bahasa === 'id' ? 'Tahun' : 'Years'}
                              </td>
                            </tr>
                          </table>
                        </CCol>
                        <CCol>
                          <h5>
                            {status_bahasa === 'id'
                              ? 'Untuk petugas Lab'
                              : 'For Analyst / Lab'}
                          </h5>
                          <table style={{ width: '100%' }}>
                            <tr>
                              <td
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  width: '15%',
                                  padding: 10,
                                }}
                              >
                                No.
                              </td>
                              <td
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  textAlign: 'center',
                                }}
                              >
                                {item.company.kode_perusahaan}
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  paddingLeft: 10,
                                }}
                              >
                                {status_bahasa === 'id' ? 'Nama' : 'Name'}
                              </td>
                              <td
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  paddingLeft: 10,
                                }}
                              >
                                {' '}
                                {item.nama}
                              </td>
                            </tr>
                            <tr>
                              <td
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  paddingLeft: 10,
                                }}
                              >
                                {status_bahasa === 'id' ? 'Umur' : 'Age'}
                              </td>
                              <td
                                style={{
                                  borderWidth: 1,
                                  borderStyle: 'solid',
                                  borderColor: 'black',
                                  paddingLeft: 10,
                                }}
                              >
                                {' '}
                                {item.umur}{' '}
                                {status_bahasa === 'id' ? 'Tahun' : 'Years'}
                              </td>
                            </tr>
                          </table>
                        </CCol>
                      </CRow>
                    </div>
                  </div>
                </CCard>
              </>
            );
          })}
      </div>
    </div>
  );
});

export default EmployeePrint;
