import React, { useRef } from 'react';
import { useReactToPrint } from "react-to-print";

const MyComponent = () => {
  return (
    <div>
      <h1>프린트할 내용</h1>
      <p>이 텍스트가 인쇄됩니다.</p>
    </div>
  );
};

const PrintPage = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button onClick={handlePrint}>프린트</button>
      {/* 프린트할 컴포넌트 */}
      <div style={{ display: 'none' }}>
        <MyComponent ref={componentRef} />
      </div>
    </div>
  );
};

export default PrintPage;