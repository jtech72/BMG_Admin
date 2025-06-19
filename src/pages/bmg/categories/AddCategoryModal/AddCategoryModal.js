import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Select from 'react-select';

const AddCategoryModal = ({
    show,
    handleClose,
    allSubCategories = [],
    onSubmit,
    newSubCategory,
    setNewSubCategory,
}) => {
    console.log(allSubCategories, 'kjhgfdsdfghj˚');
    const [categoryName, setCategoryName] = useState('');
    const [confirmName, setConfirmName] = useState('');
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);

    const handleAddSubCategory = () => {
        if (newSubCategory.trim() !== '') {
            const newOption = { label: newSubCategory, value: newSubCategory };
            setSelectedSubCategories((prev) => [...prev, newOption]);
            setNewSubCategory('');
        }
    };
    const [categoryConfirmationMatch, setCategoryConfirmationMatch] = useState('');
    useEffect(() => {
        if (categoryName == confirmName) {
            setCategoryConfirmationMatch('');
        }
    }, [categoryName, confirmName]);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (categoryName !== confirmName) {
            // alert('Category names do not match!');
            setCategoryConfirmationMatch('Category names do not match!');
            return;
        }

        const payload = {
            categoryName,
            subCategories: selectedSubCategories.map((item) => item.value),
        };

        onSubmit?.(payload); // call parent handler
        // handleClose();
        // Clear state
        setCategoryName('');
        setConfirmName('');
        setSelectedSubCategories([]);
    };

    const subCategoryOptions = allSubCategories.map((name) => ({ label: name?.subCategoryName, value: name?._id }));

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add Category</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleFormSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Category Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={confirmName}
                            onChange={(e) => setConfirmName(e.target.value)}
                            required
                        />
                        {categoryConfirmationMatch && <p className="text-danger">{categoryConfirmationMatch}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Assign Subcategories</Form.Label>
                        <Select
                            isMulti
                            value={selectedSubCategories}
                            options={subCategoryOptions}
                            onChange={setSelectedSubCategories}
                            classNamePrefix="react-select"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Add new subcategory"
                            value={newSubCategory}
                            onChange={(e) => setNewSubCategory(e.target.value)}
                        />
                        <Button type="button" onClick={handleAddSubCategory} className="ms-2">
                            Add
                        </Button>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        Save Category
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default AddCategoryModal;
