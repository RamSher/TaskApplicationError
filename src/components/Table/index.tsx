import TableItems from "./TableItems";

type errorLogsType = {
  message: string;
  facility: string;
  level: string;
  timeStamp: string;
};

const Table = (props: { errorLogs: errorLogsType[] }) => {
  return (
    <table>
      <tr>
        <th>Serial No</th>
        <th>Message</th>
        <th>Facility</th>
        <th>Level</th>
        <th>Time Stamp</th>
      </tr>
      {props.errorLogs.map((error, index) => (
        <TableItems
          key={index}
          index={index}
          message={error.message}
          facility={error.facility}
          timeStamp={error.timeStamp}
          level={error.level}
        />
      ))}
    </table>
  );
};

export default Table;
