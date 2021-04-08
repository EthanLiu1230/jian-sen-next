import {Admin, Resource} from 'react-admin';
import React from "react";
import {CategoryList} from "./components/CategoryList";
import {dataProvider} from "./data.provider";


const ReactAdmin = () => <Admin dataProvider={dataProvider}>
    <Resource name={'categories'} list={CategoryList}/>
</Admin>

export default ReactAdmin