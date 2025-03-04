import { useEffect, useState } from 'react';
import { Row, Col, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
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
    const CategoryData = store?.categoryDataReducer?.categoryData?.categories
    const SubCategoryData = store?.subCategoryDataReducer?.categoryData?.subCategories
    console.log({ CategoryData, SubCategoryData })
    const CategoryLoading = store?.categoryDataReducer?.loading
    const SubCategoryLoading = store?.subCategoryDataReducer?.loading
    const [activeTab, setActiveTab] = useState(0);

    const connectTab = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    const TotalRecords = activeTab === 0 ? store?.categoryDataReducer?.categoryData?.totalRecords : store?.subCategoryDataReducer?.categoryData?.totalRecords;
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(Math.ceil(TotalRecords / pageSize));

    useEffect(() => {
        setTotalPages(Math.ceil(TotalRecords / pageSize));
    }, [TotalRecords, pageSize]);
    useEffect(() => {
        dispatch(getCategoryActions({ search: search, limit: pageSize, page: pageIndex }));
        dispatch(getSubCategoryActions({ search: search, limit: pageSize, page: pageIndex }));
    }, [dispatch, pageIndex, pageSize, search]);

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
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Categories', path: '/bmg/categories' },
                    {
                        label: 'Categories',
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
                                            Total Categories: {CategoryData?.length}
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
                                                    <div className="d-flex justify-content-center">
                                                        <table className="table table-striped bg-white">
                                                            <thead>
                                                                <tr className="" style={{ color: '#703133' }}>
                                                                    <th scope="col"><i className="mdi mdi-merge"></i></th>
                                                                    <th scope="col">Category Name</th>
                                                                    <th scope="col">Created At</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {CategoryData?.map((data, index) => (
                                                                    <tr
                                                                        key={index}
                                                                        className="text-dark fw-bold text-nowrap">
                                                                        <th scope="row">{index + 1}</th>
                                                                        {console.log({ data })}
                                                                        <td className='text-uppercase fw-bold text-success'>
                                                                            {data?.name ? (
                                                                                <span>{data?.name}  </span>
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
                                                        No Category found. Please create or add Category to view.{' '}
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
                                                Total Sub Categories: {SubCategoryData?.length}
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
                                                        <div className="d-flex justify-content-center">
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
                                                                            {console.log({ data })}
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
                                                                                {data?.categoryId ? (
                                                                                    <span>{CategoryData?.find((item) => item?._id === data?.categoryId)?.name} </span>
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
                                                            No Sub Category found. Please create or add Sub Category to view.{' '}
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
        </>
    )
}

export default Categories
