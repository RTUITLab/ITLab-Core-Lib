// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import {Button, Icon, Radio} from '@itlab-core-lib/react/ui-core'
import React, {useEffect, useRef, useState} from 'react'

export function App() {

  const ref=useRef()
  const[checkedId, setCheckedId] = useState()
  const handleChange = (e:any) => {
    setCheckedId(e.target.id)
  }

  return (
    <>
      <Button onClick={(e)=> console.log(e)} iconPosition={"left"}>dsa</Button>

      <Icon className={"test"} onClick={(e)=>{
        console.log(e);}} name={"loader-2"} color={"general"}/>

      <Radio ref={ref} label={'hello'} name={'privet'} value={'111'} onChange={(e) => handleChange(e)} checked={checkedId === '111'}
      />
      <Radio readonly label={'hellow'} name={'privet'} value={'222'} onChange={(e) => handleChange(e)} checked={checkedId === '222'}/>

      <button onClick={() => console.log(ref)}>show me ref</button>

      <NxWelcome title="react-ui-core-app" />
      <div />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
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
