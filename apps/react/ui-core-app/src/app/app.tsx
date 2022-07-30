// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NxWelcome from './nx-welcome';

import {Link, Route, Routes} from 'react-router-dom';
import {Button, Icon} from "@itlab-core-lib/react/ui-core";
import React from "react";

export function App() {


  return (
    <>
      <Button size={"large"} onClick={(e) => console.log(e)} icon={<Icon type={"fill"} size={2656} name={"home"} color={"general-light"}/>}
              iconPosition={"left"}>fds</Button>

      <Icon className={"test"} onClick={(e) => {
        console.log(e);
      }} name={"loader-2"} color={"general"}/>

      <NxWelcome title="react-ui-core-app"/>
      <div/>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br/>
      <hr/>
      <br/>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
