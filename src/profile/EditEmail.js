
import { Button, Card, Input } from 'antd';
import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

const EditEmail = () => {
    let navigate = useNavigate();
    const [currentEmail, setCurrentEmail] = useState();
    const [newEmail, setNewEmail] = useState();

    const onUpdateEmailClicked = async () => {
        const response = await Axios.post('http://localhost:6060/user/updateEmail', { currentEmail, newEmail }, { headers: { "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDUxOGFlMWZmYWNkMjdjODEzNjhlOCIsImVtYWlsIjoibm9vcjFAZ21haWwuY29tIiwiaWF0IjoxNzE3MDkxMzQxLCJleHAiOjE3MTcwOTQ5NDF9.N9Mo01DGCu2_bcn3Wgdyp-inYhSrmtIWNrdDp0p8n_I' } });
        console.log('hello', response)
        if (response.status === 200) {
            navigate("/edit-profile");
        }
    }

    return (
        <Card title="Edit email">
            <div>Your current email</div>
            <Input placeholder='Edit current email' onChange={(e) => {
                const inputValue = e.target.value;
                setCurrentEmail(inputValue);
            }} />
            <div>Your new email</div>
            <Input placeholder='Edit new email' onChange={(e) => {
                const inputValue = e.target.value;
                setNewEmail(inputValue);
            }} />
            <Button style={{ margin: '10px', color: '#F28482' }} onClick={() => onUpdateEmailClicked()}>Edit email</Button>
        </Card>
    )
}

export default EditEmail;