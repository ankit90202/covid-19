import NotFound from "../components/NotFound";
import Home from "../components/Pages/Home/Home";
import India from "../components/Pages/India/India";
import State from "../components/Pages/State/State";
import Resources from "../components/Pages/Resources/Resources";
import SingleCountry from "../components/Pages/Home/singlecountry/singlecountry";
import SingleState from "../components/Pages/State/SingleState";
import HospitalBeds from "../components/Pages/State/HospitalBeds";


export default [{
  component: NotFound,
  exact: false,
  path: '/not-found'
}, {
  component: HospitalBeds,
  exact: false,
  path: '/india/hospital-beds'
}, {
  component: SingleCountry,
  exact: false,
  path: '/world/country/:slug/:id'
}, {
  component: SingleState,
  exact: false,
  path: '/world/india/:state'
}, {
  component: India,
  exact: false,
  path: '/india'
}, {
  component: State,
  exact: false,
  path: '/india-state'
}, {
  component: Resources,
  exact: false,
  path: '/resources'
}, {
  component: Home,
  exact: true,
  path: '/'
}]