import { Button, Flex, Input, Rate } from 'antd';
import React from 'react';

const { TextArea } = Input;

export const AddRating = () => {

  return (
    <Flex vertical style={{ paddingBottom:'10px' }}>
      <TextArea rows={4} placeholder="Add comments here" />
      <Flex>
        <Flex style={{ width: '100%', paddingTop:'10px' }}>
          <Flex align='center' style={{width:'100%'}} gap="middle">
            <label>Add Rating</label>
            <Rate style={{ paddingTop: '10px', color: '#F5CAC3' }} defaultValue={2.5}  allowHalf  />
          </Flex>
          <Flex justify='flex-end'>
            <Button type="primary" style={{backgroundColor: '#F5CAC3'}}>Save</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AddRating;
