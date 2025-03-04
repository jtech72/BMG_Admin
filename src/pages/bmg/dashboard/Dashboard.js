import { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import PageTitle from "../../../helpers/PageTitle";
import { getDashboardActions } from "../../../redux/actions";
import { FaUsers, FaLayerGroup, FaTags, FaUserShield } from "react-icons/fa";
import { Loading } from "../../../helpers/loader/Loading";

const Dashboard = () => {
  const store = useSelector((state) => state);
  const dashboardData = store?.dashboardDataReducer?.dashboardData;
  const dashboardLoading = store?.dashboardDataReducer?.loading;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardActions());
  }, [dispatch]);

  const dashboardItems = [
    { title: "Total Users", value: dashboardData?.totalUser, icon: <FaUsers />, color: "primary" },
    { title: "Total Categories", value: dashboardData?.totalCategory, icon: <FaLayerGroup />, color: "success" },
    { title: "Total Sub-Categories", value: dashboardData?.totalSubCategory, icon: <FaTags />, color: "info" },
    { title: "Total Admins", value: dashboardData?.totalAdmin, icon: <FaUserShield />, color: "danger" },
  ];

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "BMG Dashboard", path: "/bmg/dashboard" },
          { label: "Dashboard", path: "/bmg/dashboard", active: true },
        ]}
        title={"Dashboard"}
      />
{dashboardLoading?<Loading/>:
  <Row className="g-4 mt-3">
  {dashboardItems?.map((item, index) => (
    <Col key={index} md={6} lg={3}>
      <Card className={`shadow border-0 bg-${item.color} text-white`}>
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
</Row>}
    
    </>
  );
};

export default Dashboard;
