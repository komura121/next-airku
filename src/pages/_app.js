import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./layouts/mainLayout";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>;
}
