import FormCreateClient from "../components/FormCreateClient"
import Table from "../../shared/components/Table";
import ClientContextProvider, { useClientContext } from "../context";
import styles from "./page.module.css";
import ListClients from "../components/ListClients";

export default function ClientPage() {
  return (
    <ClientContextProvider>
      <FormCreateClient />
      <ListClients />
    </ClientContextProvider>
  );
}