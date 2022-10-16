interface ITableItems {
  message: string;
  facility: string;
  level: string;
  timeStamp: string;
  index: number;
}

const TableItems = (props: ITableItems) => {
  const messages = props.message.split("\n").map((message, index) => (
    <div key={index} style={{ marginBottom: "1rem" }}>
      {" "}
      {message}
    </div>
  ));

  return (
    <tr>
      <td>{props.index}</td>
      <td>{messages}</td>
      <td>{props.facility}</td>
      <td>{props.level}</td>
      <td>{props.timeStamp}</td>
    </tr>
  );
};

export default TableItems;
