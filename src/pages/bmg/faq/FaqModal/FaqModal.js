import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createFaqActions, getFaqActions, updateFaqActions } from "../../../../redux/actions";
import { ButtonLoading } from "../../../../helpers/loader/Loading";

const FaqModal = ({ show, hide, faqData }) => {
    const dispatch = useDispatch();
    const store = useSelector((state) => state);

    const loading = store?.createFaqDataReducer?.loading || store?.updateFaqDataReducer?.loading
    const createStatus = store?.createFaqDataReducer?.faqData?.status
    const updateStatus = store?.updateFaqDataReducer?.faqData?.status
    console.log({ createStatus, updateStatus })
    console.log({ faqData })
    // State to manage form data
    const [faq, setFaq] = useState({
        question: "",
        answer: "",
        status: false,
    });

    // Handle changes in form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFaq((prev) => ({ ...prev, [name]: value }));
    };

    // Handle ReactQuill editor changes
    const handleQuillChange = (value) => {
        setFaq((prev) => ({ ...prev, answer: value }));
    };

    // Load existing FAQ data for editing
    useEffect(() => {
        if (faqData?.data) {
            setFaq({
                question: faqData?.data?.question || "",
                answer: faqData?.data?.answer || "",
                status: faqData?.data?.status ?? false,
            });
        }
    }, [faqData?.data]);


    // Handle form submission
    const handleSubmit = () => {
        if (!faq.question.trim() || !faq.answer.trim()) {
            alert("Please fill in all required fields.");
            return;
        }

        const data = {
            _id: faqData?.data?._id,
            question: faq?.question,
            answer: faq?.answer,
            status: faq?.status
        }
        if (faqData?.data?._id) {
            dispatch(updateFaqActions(data));
        } else {
            dispatch(createFaqActions(faq));
        }

    };
    useEffect(() => {
        if (!loading && (createStatus === 200 || updateStatus === 200)) {
            dispatch(getFaqActions({ search: '', limit: '', page: '' }));
            hide();
        }
    }, [createStatus, updateStatus, loading, dispatch]); 
    

    return (
        <Modal show={show} onHide={hide} centered size="md">
            <Modal.Header className="px-2 py-1 text-light" style={{backgroundColor:'#008003'}}>
                <Modal.Title>{faqData?.type} FAQ</Modal.Title>
                <i className="mdi mdi-close fs-3" onClick={hide} style={{ cursor: 'pointer' }}></i>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* Question Input */}
                    <Form.Group className="mb-3">
                        <Form.Label>Question</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter question"
                            name="question"
                            value={faq.question}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    {/* Answer (Rich Text Editor) */}
                    <Form.Group className="mb-3">
                        <Form.Label>Answer</Form.Label>
                        <ReactQuill
                            value={faq.answer}
                            onChange={handleQuillChange}
                            theme="snow"
                            placeholder="Enter answer..."
                        />
                    </Form.Group>
                    {faqData?.data && (
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select name="status" value={faq.status} onChange={handleChange}>
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </Form.Select>
                        </Form.Group>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={hide}>
                    Cancel
                </Button>
                <Button style={{backgroundColor:'#008003'}} onClick={handleSubmit} disabled={loading}>
                    {loading ? <ButtonLoading /> : <>{faqData?.type} FAQ</>}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FaqModal;
