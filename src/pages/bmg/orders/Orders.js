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
    const data = store?.getOrderDataReducer?.orderData?.data;
    const OrdersLoading = store?.getOrderDataReducer?.loading;
    const TotalRecords = store?.getOrderDataReducer?.orderData?.totalrecords;
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const [totalPages, setTotalPages] = useState(Math.ceil(TotalRecords / pageSize));
    const [activeTab, setActiveTab] = useState('Sale');
    console.log(store?.getOrderDataReducer?.orderData?.totalrecords, 'data');

    useEffect(() => {
        setTotalPages(Math.ceil(TotalRecords / pageSize));
    }, [TotalRecords, pageSize]);

    useEffect(() => {
        dispatch(
            getOrdersAction({
                search,
                limit: pageSize,
                page: pageIndex,
                type: activeTab,
            })
        );
    }, [activeTab, dispatch, search, pageIndex, pageSize]);

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
            {/* Tabs */}
            <div className="mb-3">
                <button
                    className={`btn ${activeTab === 'Sale' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                    onClick={() => setActiveTab('Sale')}
                >
                    Direct Sale
                </button>
                <button
                    className={`btn ${activeTab === 'Auction' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setActiveTab('Auction')}
                >
                    Auction
                </button>
            </div>
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
                                    {data && data?.length > 0 ? (
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
                                                            <th scope="col">Seller's Name</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Product Name</th>
                                                            <th scope="col">Customer Name</th>
                                                            <th scope="col">Payment Received data</th>
                                                            <th scope="col">Payment method</th>
                                                            <th scope="col">User Email</th>
                                                            <th scope="col">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {data?.map((data, index) => (
                                                            <tr key={index}
                                                                className="text-dark fw-bold text-nowrap text-start">
                                                                <th scope="row">{(pageIndex - 1) * pageSize + index + 1}</th>
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
                                                                    {data?.sellerId?.name || data?.sellerId?.lastName ? (
                                                                        <span>{data?.sellerId?.name || 'N/A'}{data?.sellerId?.lastName || 'N/A'} </span>
                                                                    ) : (
                                                                        <span className="d-flex justify-content-center">
                                                                            N/A
                                                                        </span>
                                                                    )}
                                                                </td>
                                                                <td className="text-uppercase fw-bold">
                                                                    <span>${data?.totalPrice || 'N/A'} </span>
                                                                </td>
                                                                <td className="text-uppercase fw-bold">
                                                                    <span>${data?.productName || 'N/A'} </span>
                                                                </td>
                                                                <td className="text-uppercase fw-bold">
                                                                    {data?.userId?.name || data?.userId?.lastName ? (
                                                                        <span>{data?.userId?.name || 'N/A'}{data?.userId?.lastName || 'N/A'} </span>
                                                                    ) : (
                                                                        <span className="d-flex justify-content-center">
                                                                            N/A
                                                                        </span>
                                                                    )}
                                                                </td>
                                                                <td className="text-uppercase fw-bold">
                                                                    {/* {data?.userId?.name || data?.userId?.lastName ? ( */}
                                                                    <span>
                                                                        {data?.createdAt
                                                                            ? new Date(data.createdAt)
                                                                                .toLocaleDateString('en-GB')
                                                                                .replace(/\//g, '-')
                                                                                .slice(0, 8)
                                                                            : 'N/A'}
                                                                    </span>
                                                                    {/* ) : (
                                                                         <span className="d-flex justify-content-center">
                                                                             N/A
                                                                         </span>
                                                                     )} */}
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
                                                                    {data?.deliveryStatus ? (
                                                                        <span>{data?.deliveryStatus}</span>
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
