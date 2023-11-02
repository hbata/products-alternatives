import React from 'react';
import { Dialog } from 'primereact/dialog';
import Button from './Button';

const ConfirmationDialog = ({ visible, onHide, data, onConfirm, onEdit }) => {
  return (
    <Dialog header="Confirm Submission" visible={visible} onHide={onHide} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }} className="p-fluid">
      <div className="flex flex-col">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="mb-2">
            <strong>{key}:</strong> {value}
          </div>
        ))}
        <div className="flex justify-end mt-4">
          <Button label="Confirm" onClick={onConfirm} className="p-button-success" />
          <Button label="Edit" onClick={onEdit} className="p-button-warning" />
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmationDialog;

