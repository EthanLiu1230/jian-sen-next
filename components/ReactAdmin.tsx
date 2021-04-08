import {Admin} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import React from "react";

const dataProvider = jsonServerProvider('https://jsonServerProvider.typicode.com')

const ReactAdmin = () => <Admin dataProvider={dataProvider}/>

export default ReactAdmin