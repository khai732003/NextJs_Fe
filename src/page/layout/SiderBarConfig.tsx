import PATHS from "@/route/paths";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  CoffeeOutlined,
  AppstoreAddOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";

const { PATH_DASHBOARD, PATH_COMPANY, PATH_CHART } = PATHS;

const customMenuItem = (path: string, name: string) => {
  return {
    label: <Link href={path}>{name}</Link>,
    key: path,
  };
};

const SidebarLogo = () => (
  <div style={{ padding: "20px", textAlign: "center", borderRadius: "100%" }}>
    <Image
      src="/images/logo-deercoffee.jpg"
      alt="Logo 3D"
      width={100}
      height={100}
      style={{ borderRadius: "100%" }}
    />
  </div>
);

const SystemAdminSiderBarConfig = [
  {
    label: <SidebarLogo />,
    key: "logo",
    icon: null,
  },
  {
    label: <span style={{ fontSize: "16px", fontWeight: "bold" }}>Home</span>,
    key: "1",
    icon: <PieChartOutlined />,
  },
  {
    label: (
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>Company</span>
    ),
    key: "sub2",
    icon: <CoffeeOutlined />,
    children: [
      customMenuItem(PATH_DASHBOARD.partners, "Partners"),
      customMenuItem(PATH_DASHBOARD.brands, "Brand"),
    ],
  },
  {
    label: (
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>
        Brands Detail
      </span>
    ),
    key: "sub3",
    icon: <CoffeeOutlined />,
    children: [
      customMenuItem(PATH_DASHBOARD.inventoryitems, "Inventory Items"),
      customMenuItem(PATH_DASHBOARD.invoices, "Invoices"),
      customMenuItem(PATH_DASHBOARD.organizations, "Organizations"),
      customMenuItem(PATH_DASHBOARD.users, "Users"),
    ],
  },
];

const BrandAdminSiderBarConfig = [
  {
    label: <SidebarLogo />,
    key: "logo",
    icon: null,
  },
  {
    label: <span style={{ fontSize: "16px", fontWeight: "bold" }}>Home</span>,
    key: "1",
    icon: <PieChartOutlined />,
  },
  {
    label: (
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>Dashboard</span>
    ),
    key: "sub1",
    icon: <DesktopOutlined />,
    children: [
      customMenuItem(PATH_DASHBOARD.brands, "Brand"),
      customMenuItem(PATH_DASHBOARD.user, "User Manager"),
      customMenuItem(PATH_DASHBOARD.invoices, "Invoice Manager"),
      // customMenuItem(PATH_DASHBOARD.user, "User"),
      customMenuItem(PATH_COMPANY.invoicetemplate, "Invoice Template"),
    ],
  },
  {
    label: (
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>Company</span>
    ),
    key: "sub2",
    icon: <CoffeeOutlined />,
    children: [
      customMenuItem(PATH_COMPANY.organizations, "Organizations"),
      customMenuItem(PATH_DASHBOARD.partners, "Partners"),
      customMenuItem(PATH_COMPANY.stores, "Stores"),
    ],
  },
  {
    label: <span style={{ fontSize: "16px", fontWeight: "bold" }}>Chart</span>,
    key: "sub3",
    icon: <LineChartOutlined />,
    children: [customMenuItem(PATH_CHART.chart, "Chart")],
  },
];

const OrganizationSiderBarConfig = [
  {
    label: <SidebarLogo />,
    key: "logo",
    icon: null,
  },
  {
    label: <span style={{ fontSize: "16px", fontWeight: "bold" }}>Home</span>,
    key: "1",
    icon: <PieChartOutlined />,
  },
  {
    label: (
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>
        Quản lí hóa đơn
      </span>
    ),
    key: "sub1",
    icon: <DesktopOutlined />,
    children: [
      customMenuItem(PATH_COMPANY.invoicetemplate, "Template"),
      customMenuItem(PATH_DASHBOARD.invoice, "Invoice"),
    ],
  },
  {
    label: (
      <span style={{ fontSize: "16px", fontWeight: "bold" }}>
        Quản lí cửa hàng
      </span>
    ),
    key: "sub2",
    icon: <CoffeeOutlined />,
    children: [customMenuItem(PATH_COMPANY.stores, "Stores")],
  },
];

const SiderBarConfig = {
  SystemAdminSiderBarConfig,
  BrandAdminSiderBarConfig,
  OrganizationSiderBarConfig,
};
export default SiderBarConfig;
