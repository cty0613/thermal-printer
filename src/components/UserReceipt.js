import { Br, Cut, Line, Printer, Text, Row } from "react-thermal-printer";
import moment from "moment";


const UserReceipt = () => {

  return (
    <Printer type="epson" width={42} characterSet="korea">
        <Text>주방주문서</Text>
        <Text size={{ width: 2, height: 2 }}>[주문시간] YYYY-MM-DD</Text>
        <Text>[오더번호] 123452</Text>
        <Line />
            <Row left="메뉴명" right="수량(구분)" />
        <Line />
        <Br />
            <Row left="상품 A" right = "10,000" />
        <Line />
        <Text>매장컵</Text>
        <Line />
        <Br />
        <Line />
        <Cut />
    </Printer>
  );
};

export default UserReceipt;