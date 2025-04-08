import { useEffect, useState } from 'react';
import { Row, Col, Card, OverlayTrigger, Tooltip, Modal, Container, Carousel } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import PageTitle from '../../../helpers/PageTitle';
import { Loading } from '../../../helpers/loader/Loading';
import { getLiveBidDataActions } from '../../../redux/actions';
import Pagination from '../../../helpers/Pagination'
const LiveBidMonitoring = () => {
    const store = useSelector((state) => state);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const LiveBidData = store?.getLiveBidDataReducer?.leadData?.result

    console.log(store?.getLiveBidDataReducer?.leadData)
    const SoldAuctionLoading = store?.getLiveBidDataReducer?.loading

    const TotalRecords = store?.getLiveBidDataReducer?.leadData?.totalRecords;

    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(Math.ceil(TotalRecords / pageSize));

    useEffect(() => {
        setTotalPages(Math.ceil(TotalRecords / pageSize));
    }, [TotalRecords, pageSize]);

    useEffect(() => {
        dispatch(getLiveBidDataActions());
    }, [dispatch, pageIndex, pageSize, search]);


    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        if (product) {
            setSelectedProduct(product);
            setShowModal(true);
        }
    };

    // Format keys: Remove underscores, convert camelCase to words
    const formatKey = (key) => {
        return key
            .replace(/_/g, " ") // Replace underscores
            .replace(/([a-z])([A-Z])/g, "$1 $2") // Convert camelCase
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter
    };

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
    const isValidISODate = (value) => {
        if (typeof value !== "string") return false; // Ensure it's a string before calling includes()

        const date = new Date(value);
        return !isNaN(date.getTime()) && value.includes("T");
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    {
                        label: 'Live Bid Monitoring',
                        path: '/bmg/live-bids',
                        active: true,
                    },
                ]}
                title={`Live Bid Monitoring`}
            />
            <Row>
                <Col xs={12}>
                    <Card
                        style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}
                    >
                        <Card.Body className="text-center">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <span className="px-3 py-1 bg-dark text-light rounded">
                                    Total Bid's: {TotalRecords || 0}
                                </span>
                                <div className="d-flex">
                                    {/* <input
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
                                    )} */}
                                </div>
                            </div>

                            {SoldAuctionLoading ? (
                                <>
                                    <Loading />
                                </>
                            ) : (
                                <>
                                    {LiveBidData && LiveBidData?.length > 0 ? (

                                        <>
                                            <div className="d-flex justify-content-center table-responsive">
                                                <table className="table table-striped bg-white ">
                                                    <thead>
                                                        <tr className="text-nowrap" style={{ color: '#703133' }}>
                                                            <th scope="col"><i className="mdi mdi-merge"></i></th>
                                                            <th scope="col">Product Id</th>
                                                            <th scope="col">Product Name</th>
                                                            <th scope="col">Brand</th>
                                                            <th scope="col">Ask Price</th>
                                                            <th scope="col">User Name</th>
                                                            <th scope="col">User Email</th>
                                                            {/* <th scope="col">User Verified</th> */}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {LiveBidData?.map((data, index) => (
                                                            <tr
                                                                key={index}
                                                                className="text-dark fw-bold text-nowrap">
                                                                <th scope="row">{index + 1}</th>
                                                                <td className='text-uppercase fw-bold'>
                                                                    {data?.product?.productGenerateId ? (
                                                                        <span>{data?.product?.productGenerateId} </span>
                                                                    ) : (
                                                                        <span className="d-flex text-danger justify-content-center">
                                                                            N/A
                                                                        </span>
                                                                    )}
                                                                </td>

                                                                <td
                                                                    className="text-uppercase fw-bold"
                                                                    style={{ cursor: 'pointer', color: 'crimson', transition: 'color 0.3s ease-in-out' }}
                                                                    onMouseOver={(e) => e.target.style.color = 'rgb(10 207 151)'}
                                                                    onMouseOut={(e) => e.target.style.color = 'crimson'}
                                                                >
                                                                    <OverlayTrigger
                                                                        placement="left"
                                                                        overlay={
                                                                            <Tooltip id="overlay-example">
                                                                                View Detail's
                                                                            </Tooltip>
                                                                        }>
                                                                        <b>
                                                                            {data?.product?.Product_Name ? (
                                                                                <span onClick={() => handleProductClick(data?.product)}
                                                                                >{data?.product?.Product_Name} </span>
                                                                            ) : (
                                                                                <span className="d-flex text-danger justify-content-center">
                                                                                    N/A
                                                                                </span>
                                                                            )}
                                                                        </b>
                                                                    </OverlayTrigger>
                                                                </td>
                                                                <td className='text-uppercase fw-bold text-primary'>
                                                                    {data?.product?.Brand ? (
                                                                        <span>{data?.product?.Brand} </span>
                                                                    ) : (
                                                                        <span className="d-flex text-danger justify-content-center">
                                                                            N/A
                                                                        </span>
                                                                    )}
                                                                </td>
                                                                <td className='text-uppercase fw-bold text-success'>
                                                                    {data?.product?.Ask_Price ? (
                                                                        <span>$ {data?.product?.Ask_Price} </span>
                                                                    ) : (
                                                                        <span className="d-flex text-danger justify-content-center">
                                                                            N/A
                                                                        </span>
                                                                    )}
                                                                </td>

                                                                <td className='fw-bold'>
                                                                    {data?.user ? (
                                                                        <span className="fw-semibold">
                                                                            {`${data?.user?.name || ""} ${data?.user?.lastName || ""}`.trim() || "N/A"}
                                                                        </span>
                                                                    ) : (
                                                                        <span className="text-danger">N/A</span>
                                                                    )}

                                                                </td>
                                                                <td className='fw-bold text-info'>
                                                                    {data?.user?.email ? (
                                                                        <span>{data?.user?.email} </span>
                                                                    ) : (
                                                                        <span className="d-flex text-danger justify-content-center">
                                                                            N/A
                                                                        </span>
                                                                    )}
                                                                </td>
                                                                {/* <td className='fw-bold'>
                                                                    {data?.user ? (
                                                                        <span className={`badge ${data?.user?.isVerified ? "bg-success" : "bg-danger"} px-3 py-2`}>
                                                                            {data?.user?.isVerified ? "✅ Verified" : "❌ Not Verified"}
                                                                        </span>
                                                                    ) : (
                                                                        <span className="badge bg-secondary px-3 py-2">N/A</span>
                                                                    )}

                                                                </td> */}
                                                                {/* <td>
                                                            <OverlayTrigger
                                                                placement="left"
                                                                overlay={
                                                                    <Tooltip id="overlay-example">
                                                                        Send Mail
                                                                    </Tooltip>
                                                                }>
                                                                <a href={`mailto:${data?.email}`}>
                                                                    {data?.email ? (
                                                                        data?.email
                                                                    ) : (
                                                                        <span className="d-flex text-danger justify-content-center">
                                                                            N/A
                                                                        </span>
                                                                    )}
                                                                </a>
                                                            </OverlayTrigger>
                                                        </td> */}

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
                                                No Bid's found.
                                            </code>
                                        </div>
                                    )}
                                </>
                            )}
                            {/* <Pagination
                                pageIndex={pageIndex}
                                pageSize={pageSize}
                                totalPages={totalPages}
                                setPageIndex={setPageIndex}
                                onChangePageSize={setPageSize}
                            /> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
                <Modal.Header className='px-2 py-1 text-light' style={{ backgroundColor: '#008003' }}>
                    <Modal.Title className="fw-semibold">Product Details</Modal.Title>
                    <i className="mdi mdi-close fs-3" onClick={() => setShowModal(false)} style={{ cursor: 'pointer' }}></i>
                </Modal.Header>
                <Modal.Body>
                    {selectedProduct && (
                        <Container>
                            {/* Image Section */}
                            {selectedProduct.image?.length > 0 && (
                                <Carousel interval={5000} className="mb-3 shadow-sm rounded">
                                    {selectedProduct.image.map((img, index) => (
                                        <Carousel.Item key={index}>
                                            <img
                                                src={img}
                                                alt={`Slide ${index}`}
                                                className="d-block w-100 rounded"
                                                style={{
                                                    maxHeight: "400px",
                                                    objectFit: "contain",
                                                    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                                                }}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            )}


                            <Row className="border rounded p-3 bg-light">
                                {Object.entries(selectedProduct)
                                    .filter(([key, value]) =>
                                        !["_id", "createdAt", "updatedAt", "image", "status"].includes(key) && // Remove unnecessary fields
                                        !(typeof value === "string" && /^[0-9a-fA-F]{24}$/.test(value)) && // Remove any 24-char hex ID
                                        value // Ensure it's not empty
                                    )
                                    .map(([key, value]) => {
                                        let displayValue;

                                        if (Array.isArray(value)) {
                                            displayValue = (
                                                <ul className="mb-0">
                                                    {value
                                                        .filter(item => !(typeof item === "string" && /^[0-9a-fA-F]{24}$/.test(item))) // Remove ID-like values inside arrays
                                                        .map((item, index) => (
                                                            <li key={index}>{typeof item === "object" ? JSON.stringify(item, null, 2) : item}</li>
                                                        ))}
                                                </ul>
                                            );
                                        }
                                        else if (typeof value === "object" && value !== null) {
                                            displayValue = (
                                                <ul className="mb-0">
                                                    {Object.entries(value)
                                                        .filter(([subKey, subValue]) =>
                                                            !["_id", "createdAt", "updatedAt", "status", "image"].includes(subKey) &&
                                                            !(typeof subValue === "string" && /^[0-9a-fA-F]{24}$/.test(subValue))
                                                        )
                                                        .map(([subKey, subValue]) => (
                                                            <li key={subKey}>
                                                                <strong>{formatKey(subKey)}:</strong> {isValidISODate(subValue) ? formatDate(subValue) : subValue}
                                                            </li>
                                                        ))}
                                                </ul>
                                            );
                                        }
                                        else if (typeof value === "string" && isValidISODate(value)) {
                                            displayValue = formatDate(value);
                                        }
                                        else {
                                            displayValue = value;
                                        }

                                        return (
                                            <Col md={6} key={key} className="mb-3">
                                                <strong className="text-muted">{formatKey(key)}</strong>
                                                <div className="fw-bold">{displayValue}</div>
                                            </Col>
                                        );
                                    })}
                            </Row>
                            {/* Product Details */}
                            {/* <Row className="border rounded p-3 bg-light">
                                {Object.entries(selectedProduct)
                                    .filter(([key, value]) =>
                                        !["_id", "createdAt", "updatedAt", "image"].includes(key) &&
                                        !/^[0-9a-fA-F]{24}$/.test(value) && value // Remove ID fields & empty values
                                    )
                                    .map(([key, value]) => (
                                        <Col md={6} key={key} className="mb-3">
                                            <strong className="text-muted">{formatKey(key)}</strong>
                                            <div className="fw-bold">{typeof value === "object" ? JSON.stringify(value) : value}</div>
                                        </Col>
                                    ))}
                            </Row> */}
                        </Container>
                    )}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default LiveBidMonitoring
