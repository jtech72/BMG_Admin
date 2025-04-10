import { useEffect, useState } from 'react';
import { Row, Col, Card, OverlayTrigger, Tooltip, Container, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import PageTitle from '../../../helpers/PageTitle';
import { Loading } from '../../../helpers/loader/Loading';
import { getCategoryActions, getSubCategoryActions } from '../../../redux/actions';
import Pagination from '../../../helpers/Pagination'
import Tab from './tabs/Tab';
const Categories = () => {
    const store = useSelector((state) => state);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const CategoryData = store?.categoryDataReducer?.categoryData?.groupedCategories
    console.log({ CategoryData })
    const SubCategoryData = store?.subCategoryDataReducer?.categoryData?.subCategories
    const CategoryLoading = store?.categoryDataReducer?.loading
    const SubCategoryLoading = store?.subCategoryDataReducer?.loading
    const [activeTab, setActiveTab] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0)

    const connectTab = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(Math.ceil(totalRecords / pageSize));

    useEffect(() => {
        setTotalPages(Math.ceil(totalRecords / pageSize));
    }, [totalRecords, pageSize]);
    
    useEffect(() => {
        if (activeTab === 0) {
            dispatch(getCategoryActions({ search, limit: pageSize, page: pageIndex }));
        } else if (activeTab === 1) {
            dispatch(getSubCategoryActions({ search, limit: pageSize, page: pageIndex }));
        }
    }, [dispatch, activeTab, pageIndex, pageSize, search]);

    // Separate useEffect to watch for store updates and set totalRecords
    useEffect(() => {
        if (activeTab === 0) {
            setTotalRecords(store?.categoryDataReducer?.categoryData?.totalRecords || 0);
            setPageIndex(1)
        } else if (activeTab === 1) {
            setTotalRecords(store?.subCategoryDataReducer?.categoryData?.totalRecords || 0);
            setPageIndex(1)
        }
    }, [store?.categoryDataReducer?.categoryData?.totalRecords, store?.subCategoryDataReducer?.categoryData?.totalRecords, activeTab]);

    const formatDate = (dateString) => {
        if (!dateString) return "";

        const date = new Date(dateString);
        return date.toLocaleString("en-US", {
            weekday: "short",   // "Thu"
            month: "short",     // "Feb"
            day: "2-digit",     // "27"
            year: "numeric",    // "2025"
            hour: "2-digit",    // "12"
            minute: "2-digit",  // "00"
            hour12: true,       // "AM/PM"
        });
    };


    const [showModal, setShowModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCategoryData, setSelectedCategoryData] = useState(null);

    const handleViewSubCategories = (category) => {
        console.log({ category })
        if (category) {
            setSelectedCategory(category?.categoryName);
            setSelectedCategoryData(category?.subCategories);
            setShowModal(true);
        }
    }
    // Format keys: Remove underscores, convert camelCase to words
    const formatKey = (key) => {
        return key
            .replace(/_/g, " ") // Replace underscores
            .replace(/([a-z])([A-Z])/g, "$1 $2") // Convert camelCase
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter
    };


    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    {
                        label: `${activeTab===0?'Categories':'Sub-Categories'}`,
                        path: '/bmg/categories',
                        active: true,
                    },
                ]}
                title={'Categories'}
            />
            <Row>
                <Col lg={6} className="d-flex justify-content-start ">
                    <Tab connectTab={connectTab} />
                </Col>
                <div>
                    {activeTab === 0 ?
                        <Col xs={12}>
                            <Card
                                style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}
                            >
                                <Card.Body className="text-center">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="px-3 py-1 bg-dark text-light rounded">
                                            Total Categories: {totalRecords}
                                        </span>
                                        <div className="d-flex">
                                            <input
                                                type="text"
                                                className="form-control w-auto me-1"
                                                placeholder="Search..."
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                            />
                                            {search && (
                                                <i
                                                    className="mdi mdi-backspace-outline text-danger fs-3"
                                                    onClick={() => setSearch("")}
                                                    style={{ cursor: "pointer" }}
                                                ></i>
                                            )}
                                        </div>
                                    </div>

                                    {CategoryLoading ? (
                                        <>
                                            <Loading />
                                        </>
                                    ) : (
                                        <>
                                            {CategoryData && CategoryData?.length > 0 ? (

                                                <>
                                                    <div className="table-responsive">
                                                        <table className="table table-striped bg-white">
                                                            <thead>
                                                                <tr className="" style={{ color: '#703133' }}>
                                                                    <th scope="col"><i className="mdi mdi-merge"></i></th>
                                                                    <th scope="col">Category Name</th>
                                                                    <th scope="col">Sub Categories</th>
                                                                    <th scope="col">Created At</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {CategoryData?.map((data, index) => (
                                                                    <tr
                                                                        key={index}
                                                                        className="text-dark fw-bold text-nowrap">
                                                                        <th scope="row">{index + 1}</th>
                                                                        <td className='text-uppercase fw-bold text-success'>
                                                                            {data?.categoryName ? (
                                                                                <span>{data?.categoryName}  </span>
                                                                            ) : (
                                                                                <span className="d-flex text-danger justify-content-center">
                                                                                    N/A
                                                                                </span>
                                                                            )}
                                                                        </td>
                                                                        <td className='text-uppercase fw-bold text-success'>
                                                                            {data?.subCategories?.length > 0 ? (
                                                                                <span style={{ cursor: 'pointer', color: 'crimson' }}
                                                                                    onMouseOver={(e) => e.target.style.color = 'rgb(10 207 151)'}
                                                                                    onMouseOut={(e) => e.target.style.color = 'crimson'} onClick={() => handleViewSubCategories(data)}> View Sub Categories</span>
                                                                            ) : (
                                                                                <span className="d-flex text-danger justify-content-center">
                                                                                    N/A
                                                                                </span>
                                                                            )}
                                                                        </td>
                                                                        <td className='text-uppercase fw-bold text-primary'>
                                                                            {data?.createdAt ? (
                                                                                <span>{formatDate(data?.createdAt)}  </span>
                                                                            ) : (
                                                                                <span className="d-flex text-danger justify-content-center">
                                                                                    N/A
                                                                                </span>
                                                                            )}
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </>
                                            ) : (
                                                <div
                                                    className="text-center d-flex align-items-center justify-content-center"
                                                    style={{ height: '30vh' }}>
                                                    <code className="fs-4">
                                                        No Categories found.
                                                    </code>
                                                </div>
                                            )}
                                        </>
                                    )}
                                    <Pagination
                                        pageIndex={pageIndex}
                                        pageSize={pageSize}
                                        totalPages={totalPages}
                                        setPageIndex={setPageIndex}
                                        onChangePageSize={setPageSize}
                                    />
                                </Card.Body>
                            </Card>
                        </Col> : activeTab === 1 ?
                            <Col xs={12}>
                                <Card
                                    style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}
                                >
                                    <Card.Body className="text-center">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span className="px-3 py-1 bg-dark text-light rounded">
                                                Total Sub Categories: {totalRecords}
                                            </span>
                                            <div className="d-flex">
                                                <input
                                                    type="text"
                                                    className="form-control w-auto me-1"
                                                    placeholder="Search..."
                                                    value={search}
                                                    onChange={(e) => setSearch(e.target.value)}
                                                />
                                                {search && (
                                                    <i
                                                        className="mdi mdi-backspace-outline text-danger fs-3"
                                                        onClick={() => setSearch("")}
                                                        style={{ cursor: "pointer" }}
                                                    ></i>
                                                )}
                                            </div>
                                        </div>
                                        {SubCategoryLoading ? (
                                            <>
                                                <Loading />
                                            </>
                                        ) : (
                                            <>
                                                {SubCategoryData && SubCategoryData?.length > 0 ? (

                                                    <>
                                                        <div className="table-responsive">
                                                            <table className="table table-striped bg-white">
                                                                <thead>
                                                                    <tr className="" style={{ color: '#703133' }}>
                                                                        <th scope="col"><i className="mdi mdi-merge"></i></th>
                                                                        <th scope="col">Sub-Category Name</th>
                                                                        <th scope="col">Category Name</th>
                                                                        <th scope="col">Created At</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {SubCategoryData?.map((data, index) => (
                                                                        <tr
                                                                            key={index}
                                                                            className="text-dark fw-bold text-nowrap">
                                                                            <th scope="row">{index + 1}</th>
                                                                            <td className='text-uppercase fw-bold text-success'>
                                                                                {data?.subCategoryName ? (
                                                                                    <span>{data?.subCategoryName}  </span>
                                                                                ) : (
                                                                                    <span className="d-flex text-danger justify-content-center">
                                                                                        N/A
                                                                                    </span>
                                                                                )}
                                                                            </td>
                                                                            <td className='text-uppercase fw-bold text-danger'>
                                                                                {data?.categoryId?.name ? (
                                                                                    <span>{data?.categoryId?.name} </span>
                                                                                ) : (
                                                                                    <span className="d-flex text-danger justify-content-center">
                                                                                        N/A
                                                                                    </span>
                                                                                )}
                                                                            </td>
                                                                            <td className='text-uppercase fw-bold text-primary'>
                                                                                {data?.createdAt ? (
                                                                                    <span>{formatDate(data?.createdAt)}  </span>
                                                                                ) : (
                                                                                    <span className="d-flex text-danger justify-content-center">
                                                                                        N/A
                                                                                    </span>
                                                                                )}
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <div
                                                        className="text-center d-flex align-items-center justify-content-center"
                                                        style={{ height: '30vh' }}>
                                                        <code className="fs-4">
                                                            No Sub Category found.
                                                        </code>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                        <Pagination
                                            pageIndex={pageIndex}
                                            pageSize={pageSize}
                                            totalPages={totalPages}
                                            setPageIndex={setPageIndex}
                                            onChangePageSize={setPageSize}
                                        />
                                    </Card.Body>
                                </Card>
                            </Col> : null}
                </div>

            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
                <Modal.Header className="px-2 py-1 text-light" style={{ backgroundColor: "#008003" }}>
                    <Modal.Title className="fw-semibold">Sub Categories in  {selectedCategory} ({selectedCategoryData?.length})</Modal.Title>
                    <i className="mdi mdi-close fs-3" onClick={() => setShowModal(false)} style={{ cursor: "pointer" }}></i>
                </Modal.Header>
                <Modal.Body>
                    {selectedCategoryData && selectedCategoryData?.length > 0 ? (
                        <Container>
                            <table className="table table-striped rounded shadow-sm">
                                <thead className="bg-success text-light">
                                    <tr>
                                        <th scope="col" className="px-3 py-2">#</th>
                                        <th scope="col" className="px-3 py-2">Sub Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedCategoryData?.map((item, index) => (
                                        <tr key={index} className="align-middle">
                                            <td className="px-3 py-2 fw-bold">{index + 1}</td>
                                            <td className="px-3 py-2">{item?.name || "N/A"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Container>
                    ) : (
                        <div className="text-center text-muted py-3">No products available.</div>
                    )}
                </Modal.Body>
            </Modal>

        </>
    )
}

export default Categories
