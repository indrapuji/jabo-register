import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow, CButton, CPagination } from '@coreui/react';
import axios from '../../../utilities/axios';
import HostUrl from '../../../utilities/HostUrl';
import ReactExport from 'react-export-excel';
import GetColumn from '../../../utilities/GetColumn';

const Company = () => {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
  const history = useHistory();
  const [companyList, setCompanyList] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const [column, setColumn] = useState(null);

  useEffect(() => {
    getCompanyList(1);
    getCompanyData();
  }, []);

  const getCompanyData = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: HostUrl + '/company/all-list',
      });
      setCompanyData(data);
      setColumn(GetColumn(data));
    } catch (error) {
      console.log(error);
    }
  };

  const getCompanyList = async (page) => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${HostUrl}/company/all?page=${page}`,
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      setCompanyList(data);
    } catch (error) {
      console.log(error);
    }
  };
  const changePage = (page) => {
    getCompanyList(page);
  };

  const handdleEdit = (id) => {
    history.push(`/perusahaan/edit/${id}`);
  };

  const fields = [
    { key: 'nama', label: 'Nama Perusahaan', _style: { width: '30%' } },
    { key: 'kode_perusahaan', label: 'Kode', _style: { width: '10%' } },
    { key: 'telepon', label: 'Telepon ', _style: { width: '15%' } },
    { key: 'pic', label: 'PIC ', _style: { width: '10%' } },
    { key: 'alamat_1', label: 'Alamat ', _style: { width: '30%' } },
    {
      key: 'show_details',
      label: 'Action',
      _style: { width: '5%' },
      sorter: false,
      filter: false,
    },
  ];
  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader color="success">
            <strong>Perusahaan</strong>
          </CCardHeader>
          <CCol>
            <div style={{ marginTop: 15, display: 'flex', marginLeft: 5 }}>
              <div>
                <CButton color="success" to="/perusahaan/register">
                  Tambah
                </CButton>
              </div>
              <div style={{ marginLeft: 10 }}>
                <CButton color="primary" to="/perusahaan/import">
                  Import
                </CButton>
              </div>
              <div style={{ marginLeft: 10 }}>
                <ExcelFile element={<CButton color="warning">Export</CButton>} filename="LIST PT ANNUAL">
                  <ExcelSheet data={companyData} name="ONSITE">
                    {column &&
                      column.map((item) => {
                        return <ExcelColumn key={item.id} label={item.header} value={item.field} />;
                      })}
                  </ExcelSheet>
                </ExcelFile>
              </div>
            </div>
          </CCol>
          {companyList && (
            <CCardBody>
              <CDataTable
                items={companyList.data}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                scopedSlots={{
                  show_details: (item, index) => {
                    return (
                      <td className="float-right">
                        <CButton
                          color="warning"
                          size="sm"
                          onClick={() => {
                            handdleEdit(item.id);
                          }}
                        >
                          Detail
                        </CButton>
                      </td>
                    );
                  },
                }}
              />
              {companyList.pages > 1 && (
                <CPagination activePage={companyList.currentPage} pages={companyList.pages} onActivePageChange={changePage} />
              )}
            </CCardBody>
          )}
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Company;
