import { useEffect, useState } from "react";
import { isTemplateSpan } from "typescript";
import Header from "./components/Header";
import Table from "./components/Table";

type errorLogsType = {
  message: string;
  facility: string;
  level: string;
  timeStamp: string;
};

function App() {
  const [errosLogs, setErrorLogs] = useState<errorLogsType[]>([]);

  // [{
  //   message: "---------------------------------------- \nFor this NETBOX is a starter- or connection cable required.\nPlease select it in ea NETLINE!",
  //   facility: "GF::afml",
  //   level: "Notice",
  //   timeStamp: "2019-02-05T20:51:58.357Z"
  // }, {
  //   message: "\"CHASSIS\" has not been declared as a pron relation \"000000000000004839\" of \"@ahm_ahmpb\".",
  //   facility: "GF::eai:eproduct",
  //   level: "Debug",
  //   timeStamp: "2019-02-05T20:52:05.057Z"
  // }, {
  //   message: "\"STROMAUSGANG\" has not been declared as a property alias in relation \"000000000000004839\" of \"@ahm_ahmpb\".",
  //   facility: "GF::eai:eproduct",
  //   level: "Debug",
  //   timeStamp: "2019-02-05T20:52:05.057Z"
  // }]

  useEffect(() => {
    const getErrors = async () => {
      const response = await import("./data/errors.json");

      const data = response.data;

      const mergedData = data.reduce((self: errorLogsType[], item) => {
        console.log(self, item);
        const index = self.findIndex(
          (selfItem) =>
            selfItem!.level === item.level &&
            selfItem!.timeStamp === item.timeStamp &&
            selfItem!.facility === item.facility
        );

        if (self[index]) {
          self[index]!.message = self[index]!.message + "\n" + item.message;
        } else {
          self.push(item);
        }
        // ? (self[index]!.message = self[index]!.message + "\n" + item.message)
        // : self.push(item);
        return self;
      }, []);

      console.log(mergedData);
      setErrorLogs(mergedData);
    };
    getErrors();
  }, []);

  return (
    <div className="App">
      {/* <Header /> */}
      <Table errorLogs={errosLogs} />
    </div>
  );
}

export default App;
