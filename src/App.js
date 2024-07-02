import logo from './logo.svg';
import './App.css';
import { MountDemo } from './MemoDemo/mount_demo';
import { ApiDemo } from './ApiDemo/apiDemo';
import { JqueryMethod } from './jueryMethod/jqueryDemo';
import { AxiosDemo } from './AxiosMethod/axiosDemo';


function App() {
  return (
    <>
    <MountDemo/>
    <ApiDemo/>
    <JqueryMethod/>
    <AxiosDemo/>

    </>
  );
}

export default App;
