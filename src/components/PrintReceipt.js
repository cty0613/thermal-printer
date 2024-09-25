import { render } from "react-thermal-printer";
import UserReceipt from "./UserReceipt";

const PrintReceipt = ({ items }) => {
  const onClickPrintHandler = async () => {
    const data = await render(UserReceipt({ items }));
    console.log(data);
    const port = await window.navigator.serial.requestPort();
    await port.open({ baudRate: 115200 });
    const writer = port.writable?.getWriter();
    if (writer !== null) {
      await writer.write(data);
      await writer.releaseLock();
    }
    await port.close({ baudRate: 115200 });
  };

  return (
    <div>
      <button onClick={onClickPrintHandler}> 주문하기 </button>
      {/* <button onClick={onClickPrintHandler}> 주문하기 </button> */}
    </div>
  );
};

export default PrintReceipt;
