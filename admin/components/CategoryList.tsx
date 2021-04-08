import React from "react";
import {List, Datagrid, TextField, EditButton, DeleteButton, DateField} from 'react-admin';

export const CategoryList = (props) => {
    const basePath = 'categories';

    return <List {...props}>
        <Datagrid>
            <TextField source={'id'}/>
            <TextField source={'name'}/>
            <DateField source={'createdAt'}/>
            <DateField source={'updatedAt'}/>
            <EditButton basePath={basePath}/>
            {/*<ReferenceField reference={} source={}/>*/}
            <DeleteButton basePath={basePath}/>
        </Datagrid>
    </List>
}