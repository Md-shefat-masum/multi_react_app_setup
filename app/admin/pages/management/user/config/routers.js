import All from "../All";
import Create from "../Create";
import Layout from "../Layout";
import setup from "./setup";

const { route_prefix } = setup;

export default {
    path: route_prefix,
    element: <Layout />,
    children: [
        {
            path: '',
            element: <All />
        },
        {
            path: 'create',
            element: <Create />
        },
    ]
};