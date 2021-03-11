### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Redux Basic Setup`

Redux operations can be done with the help of an npm package named redux.
React-Redux is the another package which combines the redux operations with the react application.
Provider is the object from react-redux library which wraps the react application with redux, due to which we can able to access the redux store globally throughout the application.

<!-- Redux Concepts -->

1.Actions
2.Reducers
3.Store

These are the 3 main concepts when implementing a state management application using redux.

Along with thsese we can use some middlewares like redux-thunk or redux-sagas as well for reducing side effects through out the application.

Actions => are the user actions happening in the application. For each action , we can able to send a type of action and a payload(data).

Reducer => is the place where the state gets updated for each action.

Store => 1.Everything starts from here. Data will be stored in a central store which is used for state management for the particular actions.
    2. When reducer changes the state , then data inside the store will be chnaged according to the action.
    3. Then this changed state with the respective data will be dispatched to particular components.

useSelector and useDispatch:
    useSelector => will be implemented in required components to access the state values from the store.
    useDispatch => is used to dispatch the same data into required fields in the app to show up in UI.