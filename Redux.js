//-------------------------------------------------------------------------------------

//Redux Store

//createSlice
import { createSlice } from '@reduxjs/toolkit';

export const dateRangeSlice = createSlice({
    name: 'dataRange',
    initialState: {
        dataRange: {
            fromDate: getDate(7),
            toDate: getDate(),
            env: '',
            selectedRelease: ''
        }
    },
    reducers: {
        updateDate: (state, action) => {
            state.dataRange = action.payload
        },
    },
})

export const { updateDate } = dateRangeSlice.actions
export default dateRangeSlice.reducer


//configure store
import { configureStore } from '@reduxjs/toolkit'
import dateRangeSlice from './slices/dateRangeSlice';

const store = configureStore({
    reducer: {
        dateRange: dateRangeSlice
    }
})

export default store;



//import store 
import store from '../../'
import { Provider } from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
)



//dispatch and useSelector

import { useSelector, useDispatch } from 'react-redux';
const dateRange = useSelector((state) => state.dateRange.dataRange);
const dispatch = useDispatch();

dispatch(updateDate({
    fromDate: type == 'from' ? newDate : dateRange.fromDate,
    toDate: type == 'to' ? newDate : dateRange.toDate,
    env: env,
    selectedRelease: 'Custom'
}));