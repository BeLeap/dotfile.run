import { FunctionComponent } from "preact";
import Layout from "../components/layout/Layout.tsx";
import Card from "../components/LinkCard.tsx";

const home: FunctionComponent = () => {
  return (
    <Layout active="home">
      <div className="flex px-4 gap-4">
        <Card className="w-500">
          Welcome to dotfile.run!
        </Card>
        <Card>
          Lorem Ipsum
        </Card>
        <Card>
          Dolor Sit
        </Card>
      </div>
    </Layout>
  );
};
export default home;
