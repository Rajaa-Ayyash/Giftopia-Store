import React from 'react';
import { Link } from "react-router-dom";

import { Card, Flex } from 'antd';
const { Meta } = Card;

const SettingsPage = () => {
    return (
        <div>
            <Card
                style={{
                    margin: '20px'
                }}
            >
                <Meta

                    title="Settings"
                />
            </Card>
            <Card
                style={{ margin: '20px' }}  >
                <Meta title="Personal information" />
                <Flex style={{ padding: '20px' }} justify='space-around'>
                    <Link to="/upload-picture">Upload picture</Link>
                    <Link to="/edit-profile">Edit profile</Link>
                    <Link to="/country">Country/region</Link>
                </Flex>

                <Meta title="Security information" />
                <Flex style={{ padding: '20px' }} justify='space-around'>
                    <Link to="/edit-email">Change email address</Link>
                    <Link to="/edit-password">Change password</Link>
                    <Link to="/edit-profile">Set security question</Link>
                </Flex>

                <Meta title="Active notification" />
                <Flex style={{ padding: '20px' }}>
                    <Link to="/active">Active</Link>
                </Flex>

                <Meta title="Social media account" />
                <Flex style={{ padding: '20px' }}>
                    <Link to="/messenger">Messanger Link</Link>
                </Flex>

            </Card>

        </div>
    )
}


export default SettingsPage;