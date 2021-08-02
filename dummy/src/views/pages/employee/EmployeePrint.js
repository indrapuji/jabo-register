import React, { useRef } from 'react';
import { CCard, CButton } from '@coreui/react';
import ComponentToPrint from './ComponentToPrint';
import { useReactToPrint } from 'react-to-print';

const EmployeePrint = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `@page {
      size: legal;
      margin: 0px;
    }
  
    @media all {
      .pagebreak {
        display: none;
      }
    }
  
    @media print {
      .pagebreak {
        display: block;
        page-break-before: always;
        page-break-after: always;
      }
    }`,
  });
  return (
    <div>
      <CCard>
        <div style={{ marginTop: 20, marginBottom: 20, marginRight: 20 }}>
          <CButton color="success" to="" className="float-right" onClick={handlePrint}>
            Print
          </CButton>
        </div>
      </CCard>
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};

export default EmployeePrint;
