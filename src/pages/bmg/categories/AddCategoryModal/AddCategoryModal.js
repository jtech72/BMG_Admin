import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Select from 'react-select';

const AddCategoryModal = ({
    show,
    handleClose,
    allSubCategories = [],
    onSubmit,
    newSubCategory,
    setNewSubCategory,
    addedCategories,
    setAddedCategories,
    modalCheck,
    setModalCheck,
    selectedCategories,
    setSelectedCategories,
}) => {
    const store = useSelector((state) => state);
    const [categoryName, setCategoryName] = useState('');
    const [subCategoryError, setSubCategoryError] = useState('');

    const [confirmName, setConfirmName] = useState('');
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    // const handleCategorySubmit = (payload) => {
    //     // payload = { categoryName: 'test1', subCategories: [...] }
    //     setAddedCategories((prev) => [...prev, payload.categoryName]);
    // };

    const handleAddSubCategory = () => {
        if (newSubCategory.trim() !== '') {
            setAddedCategories((prev) => [...prev, newSubCategory]);
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
            setCategoryConfirmationMatch('Category names do not match!');
            return;
        }

        if (selectedSubCategories.length === 0 && modalCheck === 'Sub-category') {
            setSubCategoryError('Please select at least one subcategory.');
            return;
        }

        const payload = {
            categoryName,
            subCategories: selectedSubCategories.map((item) => item.value),
        };

        onSubmit?.(payload);
        setCategoryName('');
        setConfirmName('');
        setSelectedSubCategories([]);
        setSubCategoryError(''); // reset error
    };

    const subCategoryOptions =
        store?.subCategoryDataReducer?.categoryData?.subCategories?.map((item) => ({
            label: item?.subCategoryName,
            value: item?._id,
        })) || [];

    const categoryOptions =
        store?.categoryDataReducer?.categoryData?.groupedCategories?.map((item) => ({
            label: item?.categoryName,
            value: item?._id,
        })) || [];

    const selectOptions = modalCheck === 'Sub-category' ? subCategoryOptions : categoryOptions;

    // return());
    useEffect(() => {
        if (!show) {
            setModalCheck('');
            setSelectedSubCategories([]);
            setSubCategoryError('');
            setCategoryName('');
            setConfirmName('');
            setSelectedCategories([]);
            setNewSubCategory('');
            setCategoryConfirmationMatch('');
        }
    }, [show]);

    const NoDropdownIndicator = () => null;
    console.log(subCategoryError, 'kjhgfdsdfghj˚');

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add {modalCheck == 'Sub-category' && 'Sub-'}Category</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleFormSubmit}>
                <Modal.Body>
                    {!modalCheck ? (
                        <Form.Group className="mb-3">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                                required
                            />
                        </Form.Group>
                    ) : (
                        <Form.Group className="mb-3">
                            <Form.Label>Assign Category</Form.Label>

                            <Select
                                value={selectedCategories}
                                options={selectOptions}
                                onChange={setSelectedCategories}
                                classNamePrefix="react-select"
                            />
                        </Form.Group>
                    )}
                    {!modalCheck && (
                        <>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirm Category Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={confirmName}
                                    onChange={(e) => setConfirmName(e.target.value)}
                                    required
                                />
                                {categoryConfirmationMatch && (
                                    <p className="text-danger">{categoryConfirmationMatch}</p>
                                )}
                            </Form.Group>
                        </>
                    )}
                    <Form.Group className="mb-3">
                        <Form.Label>Selected New Subcategories</Form.Label>
                        {!modalCheck ? (
                            <>
                                <Select
                                    isMulti
                                    value={selectedSubCategories}
                                    options={subCategoryOptions}
                                    onChange={(selected) => {
                                        setSelectedSubCategories(selected);
                                        setSubCategoryError(''); // clear error on change
                                    }}
                                    classNamePrefix="react-select"
                                />
                            </>
                        ) : (
                            <>
                                <Select
                                    isMulti
                                    value={selectedSubCategories}
                                    options={!modalCheck ? subCategoryOptions : []}
                                    onChange={(selected) => {
                                        setSelectedSubCategories(selected);
                                        setSubCategoryError(''); // clear error on change
                                    }}
                                    menuIsOpen={!modalCheck}
                                    isClearable
                                    classNamePrefix="react-select"
                                    components={{ DropdownIndicator: !modalCheck ? undefined : NoDropdownIndicator }}
                                />
                                {subCategoryError && <p className="text-danger mt-1">{subCategoryError}</p>}
                            </>
                        )}
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
