import {Create, SimpleForm, TextInput} from 'react-admin'
import React from "react";

const CategoryCreate = (props) => {
    return (
        <Create title={'Create a category'} {...props}>
            <SimpleForm onSubmit={}>
                <TextInput source={'name'}/>
            </SimpleForm>
        </Create>
    )
}

export default CategoryCreate;