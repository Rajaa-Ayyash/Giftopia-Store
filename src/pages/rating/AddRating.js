import { Input, Modal, Rate } from 'antd';
import React, { useState } from 'react';

export const AddRating = () => {

  const [modal2Open, setModal2Open] = useState(true);

  const onCommentChange = (e) => {
    console.log('Change:', e.target.value);
  };

  return (
    <div>
      <Modal
        title="Rate this product"
        centered
        closeIcon={false}
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <Input placeholder="Add comments here" maxLength={150} onChange={onCommentChange} />
        <label>AddRating</label>
        <Rate style={{ paddingTop: '10px' }} allowHalf defaultValue={2.5} />
      </Modal>
    </div>
  )
}

export default AddRating;
