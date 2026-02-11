import { useAuth } from "@clerk/clerk-react";

function TestComponent() {
  const { getToken } = useAuth();

  const getTo = async () => {
    const resToken = await getToken();
    console.log(resToken);
  };

  return <button onClick={getTo}>Get Token</button>;
}

export default TestComponent;
