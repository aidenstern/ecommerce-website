import ProfileBilling from "./ProfileBilling";
import ProfileDashboard from "./ProfileDashboard";
import ProfileOrders from "./ProfileOrders";
import ProfilePreferences from "./ProfilePreferences";
import ProfileShipping from "./ProfileShipping";

export default [
  { path: "billing", name: "Billing", component: ProfileBilling },
  { path: "dashboard", name: "Dashboard", component: ProfileDashboard },
  { path: "orders", name: "Orders", component: ProfileOrders },
  { path: "preferences", name: "Preferences", component: ProfilePreferences },
  { path: "shipping", name: "Shipping", component: ProfileShipping }
]


