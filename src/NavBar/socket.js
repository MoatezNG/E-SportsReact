import { useEffect, useState } from "react";
const io = require("socket.io-client");

// Custom hook to create and return a socket instance

export default () => {
  // server url :

  const serverUrl = "http://localhost:3001/";
  // path

  const [client, setClient] = useState({
    emit: () => {},
    close: () => {},
    on: () => {},
  });

  useEffect(() => {
    // créer une instance socket
    setClient(io(serverUrl));
    return () => {
      client.close();
    };
    /*eslint-disable */
  }, []);
  return client;
};
