import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CPagination,
  CInputCheckbox,
} from '@coreui/react';
import axios from '../../../utilities/axios';
import HostUrl from '../../../utilities/HostUrl';

const Riwayat = () => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '');
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);
  const [riwayatList, setRiwayatList] = useState(null);

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  useEffect(() => {
    getRiwayatList();
  }, []);

  const getRiwayatList = async (page = 1) => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${HostUrl}/symptom/all?page=${page}`,
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      setRiwayatList(data);
    } catch (error) {
      console.log(error);
    }
  };
  const changePage = (page) => {
    getRiwayatList(page);
    setPage(page);
  };

  const handdleEdit = (id) => {
    history.push(`/riwayat/edit/${id}`);
  };

  const onCheck = async (e) => {
    const { checked, name } = e.target;
    // eslint-disable-next-line
    const { data } = await axios({
      method: 'PUT',
      url: HostUrl + '/symptom/edit/' + name,
      data: {
        status_print: checked,
      },
    });
    getRiwayatList(page);
  };

  const fields = [
    { key: 'no_urut', label: 'No Urut', _style: { width: '15%' } },
    { key: 'nama_riwayat', label: 'Jenis Penyakit ', _style: { width: '39%' } },
    { key: 'bahasa_inggris', label: 'Symptom ', _style: { width: '38%' } },
    {
      key: 'check_data',
      label: '',
      sorter: false,
      filter: false,
      _style: { width: '3%' },
    },
    {
      key: 'show_details',
      label: '',
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
            <strong>Master Riwayat</strong>
          </CCardHeader>
          <CCol>
            <div style={{ marginTop: 15, marginLeft: 5 }}>
              <CButton color="success" to="/riwayat/register">
                Tambah
              </CButton>
            </div>
          </CCol>
          {riwayatList && (
            <CCardBody>
              <CDataTable
                items={riwayatList.data}
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
                          Edit
                        </CButton>
                      </td>
                    );
                  },
                  check_data: (item, index) => {
                    console.log(item);
                    return (
                      <td key={item.id}>
                        <CInputCheckbox
                          name={item.id}
                          checked={item.status_print}
                          onChange={onCheck}
                        />
                      </td>
                    );
                  },
                }}
              />
              {riwayatList.pages > 1 && (
                <CPagination
                  activePage={riwayatList.currentPage}
                  pages={riwayatList.pages}
                  onActivePageChange={changePage}
                />
              )}
            </CCardBody>
          )}
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Riwayat;
