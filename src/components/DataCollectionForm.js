import React, { useState } from 'react';
import TextInput from './TextInput';
import Button from './Button';
import ConfirmationDialog from './ConfirmationDialog';

const DataCollectionForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    alternativeProduct: '',
    place: '',
    location: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (key) => (e) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    console.log('Data submitted:', formData);
    // Here you would send the data to your server
    setShowConfirmation(false);
    setFormData({ productName: '', alternativeProduct: '', place: '', location: '' });
  };

  const handleEdit = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#2D2C2C' }}>
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-semibold text-odoo-purple mb-6 text-center">Data Collection Site</h1>
        <form onSubmit={handleSubmit}>
          <TextInput label="Product Name" value={formData.productName} onChange={handleChange('productName')} />
          <TextInput label="Alternative Product" value={formData.alternativeProduct} onChange={handleChange('alternativeProduct')} />
          <TextInput label="Place" value={formData.place} onChange={handleChange('place')} />
          <TextInput label="Location" value={formData.location} onChange={handleChange('location')} />
          <div className="flex justify-end">
            <Button label="Submit" className="p-button-success" />
            <Button label="Clear" type="button" onClick={() => setFormData({ productName: '', alternativeProduct: '', place: '', location: '' })} className="p-button-danger" />
          </div>
        </form>
        <ConfirmationDialog
          visible={showConfirmation}
          onHide={() => setShowConfirmation(false)}
          data={formData}
          onConfirm={handleConfirm}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default DataCollectionForm;

