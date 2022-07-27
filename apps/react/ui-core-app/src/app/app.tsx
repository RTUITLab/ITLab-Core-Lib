// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import {Checkbox} from "@itlab-core-lib/react/ui-core";
import {Button, Icon} from "@itlab-core-lib/react/ui-core";
import React, {useRef} from 'react'

export function App() {

  const ref = useRef()
  const handleClick = (ref: any) => {
    console.log(ref.current.checked)
  }

  return (
    <>
      <Checkbox label={'Ref is here'} ref={ref} />
      <Checkbox label={'disabled'} disabled={true} />
      <Checkbox label={'readonly'} readonly={true} />
      <Checkbox label={'ClassNames'} className={'prikol'} labelStyleClass={'classno'} />
      <Checkbox label={'Checked'} defaultChecked={true} />
      <Checkbox label={'icon'} checkboxIcon={<Icon size={20} name={"loader-2"} color={"green-light"}/>} />
      <button onClick={() => handleClick(ref)}>show me your ref</button>

      <Icon className={"test"} onClick={(e)=>{
        console.log(e);}} name={"loader-2"} color={"general"}/>
      <Button onClick={(e)=> console.log(e)} icon={<Icon name={"loader-2"} color={"general"}/>} iconPosition={"left"}>Dada</Button>


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
