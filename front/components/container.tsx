import Head from "next/head";
import Nav from "./nav";

export interface ContainerProps {
  children: any;
}

const Container: React.SFC<ContainerProps> = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="container p-4">
        <Head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/minty/bootstrap.min.css"
            integrity="sha384-HqaYdAE26lgFCJsUF9TBdbZf7ygr9yPHtxtg37JshqVQi6CCAo6Qvwmgc5xclIiV"
            crossOrigin="anonymous"
          />
          <title>SSR simple CRUD</title>
        </Head>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Container;
