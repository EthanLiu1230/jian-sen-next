import {Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import React from "react";
import {CategoryList} from "./components/CategoryList";
import {dataProvider} from "./data.provider";

// const dataProvider = jsonServerProvider('https://jsonServerProvider.typicode.com')


const ReactAdmin = () => <Admin dataProvider={dataProvider}>
    <Resource name={'categories'} list={CategoryList}/>
</Admin>

export default ReactAdmin