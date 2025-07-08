import { useEffect, useState } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import PageTitle from '../../../helpers/PageTitle';
import { getDashboardActions, getRecentRegistrationsForDashboardActions } from '../../../redux/actions';
import { FaUsers, FaLayerGroup, FaTags, FaUserShield, FaGavel, FaMoneyBillWave } from 'react-icons/fa';
import { Loading } from '../../../helpers/loader/Loading';
import { AiOutlineLineChart } from 'react-icons/ai';
import Pagination from '../../../helpers/Pagination';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const store = useSelector((state) => state);
    const dashboardData = store?.dashboardDataReducer?.dashboardData;
    const getRecentRegistrationsForDashboard = store?.getRecentRegistrationsForDashboardReducer;

    const dashboardLoading = store?.dashboardDataReducer?.loading;
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    useEffect(() => {
        dispatch(getDashboardActions());
        dispatch(
            getRecentRegistrationsForDashboardActions({
                page,
                limit,
            })
        );
    }, [dispatch, page]);

    const dashboardItems = [
        { title: 'Total Users', value: dashboardData?.totalUser, icon: <FaUsers />, color: '' },
        { title: 'Total Categories', value: dashboardData?.totalCategory, icon: <FaLayerGroup />, color: '' },
        { title: 'Total Sub-Categories', value: dashboardData?.totalSubCategory, icon: <FaTags />, color: '' },
        { title: 'Total Admins', value: dashboardData?.totalAdmin, icon: <FaUserShield />, color: '' },
        { title: 'Auction', value: dashboardData?.totalLiveAuction, icon: <FaGavel />, color: '' },
        { title: 'Sales', value: dashboardData?.totalUpComingAuction, icon: <AiOutlineLineChart />, color: '' },
    ];
    const navigate = useNavigate();
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'BMG Dashboard', path: '/bmg/dashboard' },
                    { label: 'Dashboard', path: '/bmg/dashboard', active: true },
                ]}
                title={'Dashboard'}
            />
            {dashboardLoading ? (
                <Loading />
            ) : (
                <Row className="g-4">
                    {dashboardItems?.map((item, index) => (
                        <Col key={index} md={6} lg={4}>
                            <Card className={`shadow border-0 bg-${item.color} text-dark`}>
                                <Card.Body className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h6 className="fw-semibold">{item.title}</h6>
                                        <h2 className="fw-bold">{item.value}</h2>
                                    </div>
                                    <div className="fs-1">{item.icon}</div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                    <div className="table-responsive">
                        <Table bordered hover className="bg-white text-center">
                            <thead className="">
                                <tr className="text-nowrap text-secondary">
                                    <th>
                                        <i className="mdi mdi-merge"></i>
                                    </th>
                                    <th className="text-start">Name</th>
                                    <th className="text-start">Email</th>
                                    <th className="text-start">Phone Number</th>
                                    <th className="text-start">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getRecentRegistrationsForDashboard?.dashboardData?.allUsers?.map((data, index) => (
                                    <tr
                                        style={{
                                            cursor: 'pointer',
                                        }}
                                        key={data._id || index}
                                        className="fw-bold">
                                        <td>{(page - 1) * limit + index + 1}</td>

                                        <td className="text-start">
                                            {data?.name ? `${data?.name} ${data?.lastName || ''}` : 'N/A'}
                                        </td>
                                        <td className="text-start">{data?.email ? `${data?.email}` : 'N/A'}</td>
                                        <td className="text-start">
                                            {data?.phoneNumber ? `${data?.phoneNumber}` : 'N/A'}
                                        </td>
                                        <td className="text-start text-capitalize">{data?.role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        {/* <Pagination
                            pageIndex={page}
                            pageSize={limit}
                            totalPages={getRecentRegistrationsForDashboard?.dashboardData?.totalPages}
                            setPageIndex={setPage}
                            onChangePageSize={setLimit}
                        /> */}
                    </div>
                </Row>
            )}
        </>
    );
};

export default Dashboard;
