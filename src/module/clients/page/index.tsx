import Table from "../components/Table";
import ClientContextProvider, { useClientContext } from "../context";
import styles from "./page.module.css";

export default function ClientPage() {
  return (
    <ClientContextProvider>
      <Table />
    </ClientContextProvider>
  );
}