import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useForm, Controller, useFormContext } from 'react-hook-form';
// import { toast } from 'react-toastify';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { ButtonLoading, Loading } from '../../../../helpers/loader/Loading';

// Components
import ImageUploader from './functions/ImageUploader';
import Specification from './additionalFields/Specification';
import { specificProductDataActions } from '../../../../redux/actions';
import ViewImageModal from './Modals/ViewImageModal';
// Actions
// import { addProductFunction, resetProductDataAction, UpdateProductAction } from '../../../redux/products/actions';
// import { getCategoryAction } from '../../../redux/category/actions';
// import { getfindAllSubCategoryByIdAction, getTableSubCategoryByIdAction } from '../../../redux/sub-category/action';

// Constants
const MAX_IMAGES = 10;
const requiredStar = <span className="text-danger fs-4 ms-1 fw-bold position-absolute">*</span>;
const initialFormState = {
    publish: false,
    negotiable: '',
    productGenerateId: '',
    userId: '',
    status: '',
    categoryId: '',
    subCategoryId: '',
    image: '',
    type: '',
};

const PostAList = () => {
    // Hooks and state
    const store = useSelector((state) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    // Selectors
    const categoryLoading = store?.getCategoryReducer?.loading;
    const SubCategoryLoading = store?.getFindAllSubCategoryByIdReducer?.loading;

    // State
    // Form handling
    const {
        register,
        handleSubmit,
        getValues,
        watch,
        formState: { errors },
        setValue,
        reset,
        control,
        clearErrors,
    } = useForm({ defaultValues: initialFormState });

    const { id } = useParams();
    const product = store?.specificProductDataReducer?.productData?.product;
    // const unwantedDynamicFields = ['type', '_id', 'image', 'userId', 'Product_Name'];

    const filteredObject = useMemo(() => {
        if (!product) return {};
        const unwantedDynamicFields = ['type', '_id', 'userId', 'Product_Name'];

        return Object.entries(product)
            .filter(([key]) => !unwantedDynamicFields.includes(key))
            .reduce((obj, [key, value]) => {
                obj[key] = value;
                return obj;
            }, {});
    }, [product]);
    const [viewModal, setViewModal] = useState(false);
    const handleBack = () => {
        navigate(-1);
    };
    // console.log(, '987654345678');

    useEffect(() => {
        dispatch(specificProductDataActions({ id }));
    }, []);

    // useEffect(() => {
    //     if (product) {
    //         setValue('categoryId', {
    //             value: product?.categoryId?.name,
    //             label: product?.categoryId?.name,
    //         });
    //     }
    // }, [product]);
    const loading = store?.specificProductDataReducer?.loading;
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <Container className="my-3 px-5">
                    <h2 className="mx-5 mb-1 them_Text_color mainHeadings">
                        <i className="bi bi-arrow-left-circle-fill text-dark me-1" onClick={handleBack}></i> Product
                        Details
                    </h2>
                    <hr />
                    <ViewImageModal open={viewModal} close={() => setViewModal(false)} img={filteredObject?.image} />
                    <Form className="mx-5">
                        <Row>
                            {/* <Col sm={12} className="d-flex align-items-center justify-content-between pe-0 mt-3">
                        <h4 className="mx-0 mb-0 fw-semibold mt-0" style={{ fontSize: '18px' }}>
                            Product Details
                        </h4>
                    </Col> */}
                            <Row className="pe-0">
                                <Col sm={4} className="mt-2 pe-0">
                                    <Form.Label className='text-dark'>Category</Form.Label>
                                    {/* {requiredStar} */}
                                    <Controller
                                        name="categoryId"
                                        control={control}
                                        render={({ field }) => (
                                            <Select className='text-dark'
                                                {...field}
                                                isLoading={categoryLoading}
                                                isDisabled
                                                value={{
                                                    value: product?.categoryId?._id,
                                                    label: product?.categoryId?.name,
                                                }}
                                            />
                                        )}
                                    />
                                </Col>

                                <Col sm={4} className="mt-2 pe-0">
                                    <Form.Label className='text-dark'>Sub Category</Form.Label>
                                    {/* {requiredStar} */}
                                    <Controller
                                        name="subCategoryId"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                isDisabled
                                                isLoading={SubCategoryLoading}
                                                value={{
                                                    value: product?.subCategoryId?._id,
                                                    label: product?.subCategoryId?.subCategoryName,
                                                }}
                                            />
                                        )}
                                    />
                                </Col>

                                <div className="mt-2 pe-0 col-sm-4">
                                    <label className="form-label text-dark">Product Name</label>
                                    {/* {requiredStar} */}
                                    <input
                                        placeholder="Product Name"
                                        name="Product_Name"
                                        type="text"
                                        className="form-control text-dark"
                                        {...register('Product_Name', {
                                            required: 'Product Name is required',
                                        })}
                                        disabled
                                        value={product?.Product_Name}
                                    />
                                </div>
                                {Object.entries(filteredObject).map(([key, value]) => {
                                    // Skip nested objects and arrays if needed
                                    if (typeof value === 'object' && !Array.isArray(value)) return null;

                                    // Format label nicely (e.g., "Product_Name" → "Product Name")
                                    const formattedLabel = key.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2');

                                    return (
                                        <div key={key} className="mt-2 pe-0 col-sm-4">
                                            {key == 'image' ? (
                                                <div className="d-flex flex-column">
                                                    <label className="form-label text-capitalize">
                                                        {formattedLabel}
                                                    </label>
                                                    <Button onClick={() => setViewModal(true)}>View</Button>
                                                    {/* <img
                                                        // type="text"
                                                        name={key}
                                                        className="form-control"
                                                        src={Array.isArray(value) ? value.join(', ') : value}
                                                        disabled
                                                    /> */}
                                                </div>
                                            ) : (
                                                <>
                                                    <label className="form-label text-capitalize text-dark">
                                                        {formattedLabel}
                                                    </label>

                                                    <input
                                                        type="text"
                                                        name={key}
                                                        className="form-control text-dark"
                                                        value={
                                                            (() => {
                                                                if (!value) return "";

                                                                if (Array.isArray(value)) {
                                                                    return value
                                                                        .map((item) => {
                                                                            if (typeof item === "string") return item;
                                                                            if (typeof item === "object" && item !== null) {
                                                                                // Convert object to key-value pairs
                                                                                return Object.entries(item)
                                                                                    .map(([k, v]) => `${k}: ${v}`)
                                                                                    .join(", ");
                                                                            }
                                                                            return String(item);
                                                                        })
                                                                        .join(" | ");
                                                                }

                                                                if (typeof value === "object") {
                                                                    return Object.entries(value)
                                                                        .map(([k, v]) => `${k}: ${v}`)
                                                                        .join(", ");
                                                                }

                                                                // If value is HTML string
                                                                const temp = document.createElement("div");
                                                                temp.innerHTML = value;
                                                                return temp.innerText;
                                                            })()
                                                        }
                                                        disabled
                                                    />

                                                </>
                                            )}
                                        </div>
                                    );
                                })}
                            </Row>
                        </Row>
                    </Form>
                </Container>
            )}
        </>
    );
};

export default PostAList;
