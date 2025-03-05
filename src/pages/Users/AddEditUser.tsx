import React from 'react'
import { useParams } from 'react-router'

const AddEditUser = () => {
    const { slug } = useParams();
    console.log('slug :>> ', slug);
    return (
        <div>AddEditUser</div>
    )
}

export default AddEditUser