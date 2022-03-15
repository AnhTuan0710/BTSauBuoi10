import {configureStore} from '@reduxjs/toolkit';
import dataReact from '../component/DataReactSlide';
export default configureStore({
    reducer:{
        dataReactList: dataReact
    }
})