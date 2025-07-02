import { useEffect, useState } from 'react';
import { Row, Col, Card, OverlayTrigger, Tooltip, Modal, Container, Carousel } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import PageTitle from '../../../helpers/PageTitle';
import { Loading } from '../../../helpers/loader/Loading';
import { getOrdersAction } from '../../../redux/actions';
import Pagination from '../../../helpers/Pagination';
const Orders = () => {
    const store = useSelector((state) => state);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const OrdersData = store?.getOrderDataReducer?.orderData?.orderDetails;

    console.log(OrdersData);
    const OrdersLoading = store?.getOrderDataReducer?.loading;

    const TotalRecords = store?.getOrderDataReducer?.orderData?.totalRecords;
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(Math.ceil(TotalRecords / pageSize));

    useEffect(() => {
        setTotalPages(Math.ceil(TotalRecords / pageSize));
    }, [TotalRecords, pageSize]);
    useEffect(() => {
        dispatch(getOrdersAction({ search: search, limit: pageSize, page: pageIndex }));
    }, [dispatch, pageIndex, pageSize, search]);

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    {
                        label: `Order's`,
                        path: '/bmg/orders',
                        active: true,
                    },
                ]}
                title={`Order's`}
            />
            <Row>
                <Col xs={12}>
                    <Card
                        style={{
                            boxShadow:
                                'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                        }}>
                        <Card.Body className="text-center">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <span className="px-3 py-1 bg-dark text-light rounded">
                                    Total Order's: {TotalRecords || 0}
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
                                            onClick={() => setSearch('')}
                                            style={{ cursor: 'pointer' }}></i>
                                    )}
                                </div>
                            </div>

                            {OrdersLoading ? (
                                <>
                                    <Loading />
                                </>
                            ) : (
                                <>
                                    {OrdersData && OrdersData?.length > 0 ? (
                                        <>
                                            <div className="d-flex justify-content-center table-responsive">
                                                <table className="table table-striped bg-white text-start">
                                                    <thead>
                                                        <tr className="text-nowrap">
                                                            <th scope="col">
                                                                <i className="mdi mdi-merge"></i>
                                                            </th>
                                                            <th scope="col">Order Id</th>
                                                            <th scope="col">Payment Id</th>
                                                            <th scope="col">Payment method</th>
                                                            <th scope="col">User Email</th>
                                                            <th scope="col">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {OrdersData?.map((data, index) => (
                                                            <tr
                                                                key={index}
                                                                className="text-dark fw-bold text-nowrap text-start">
                                                                <th scope="row">{index + 1}</th>

                                                                <td className="text-uppercase fw-bold">
                                                                    {data?.orderId ? (
                                                                        <span>{data?.orderId}</span>
                                                                    ) : (
                                                                        <span className="d-flex justify-content-center">
                                                                            N/A
                                                                        </span>
                                                                    )}
                                                                </td>

                                                                <td className="text-uppercase fw-bold">
                                                                    {data?.paymentId ? (
                                                                        <span>{data?.paymentId}</span>
                                                                    ) : (
                                                                        <span className="d-flex justify-content-center">
                                                                            N/A
                                                                        </span>
                                                                    )}
                                                                </td>

                                                                <td className="text-uppercase fw-bold">
                                                                    {data?.paymentMethod ? (
                                                                        <span>{data?.paymentMethod}</span>
                                                                    ) : (
                                                                        <span className="d-flex justify-content-center">
                                                                            N/A
                                                                        </span>
                                                                    )}
                                                                </td>

                                                                <td className="fw-bold">
                                                                    {data?.userId?.email ? (
                                                                        <span>{data?.userId?.email}</span>
                                                                    ) : (
                                                                        <span className="d-flex justify-content-center">
                                                                            N/A
                                                                        </span>
                                                                    )}
                                                                </td>

                                                                <td className="text-uppercase fw-bold">
                                                                    {data?.status ? (
                                                                        <span>{data?.status}</span>
                                                                    ) : (
                                                                        <span className="d-flex justify-content-center">
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
                                            <code className="fs-4">No Order's found. </code>
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
                </Col>
            </Row>
        </>
    );
};

export default Orders;
