/* eslint-disable no-unused-vars */
import SidebarComponent from './Components'
import {useSkin} from './utility/hooks/useSkin'
import navigation from './navigation/vertical';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {handleMenuCollapsed} from "./redux/layout";
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const { skin, setSkin } = useSkin();
  const [menuVisibility, setMenuVisibility] = useState(false);

  const layoutStore = useSelector((state) => state.layout);

  // ** Vars
  const isHidden = layoutStore.menuHidden;
  const menuCollapsed = layoutStore.menuCollapsed;

  // ** Toggles Menu Collapsed
  const setMenuCollapsed = (val) => dispatch(handleMenuCollapsed(val));
  

  return (
    <>
      {!isHidden ? (
        <SidebarComponent
          skin={skin}
          menuData={navigation}
          menuCollapsed={menuCollapsed}
          menuVisibility={menuVisibility}
          setMenuCollapsed={setMenuCollapsed}
          setMenuVisibility={setMenuVisibility}
        />
      ) : null}
    </> 
  )
}

export default App
