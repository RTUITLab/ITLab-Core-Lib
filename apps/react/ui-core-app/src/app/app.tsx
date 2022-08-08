// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import {Button, Icon, Tabs} from '@itlab-core-lib/react/ui-core'
import React, {useEffect} from "react";

export function App() {

  const handleChange = (item: any) => {
    console.log(item)
  }

  return (
    <>
      <Checkbox label={'Ref is here'} ref={ref} />
      <Checkbox label={'disabled'} disabled={true} />
      <Checkbox label={'readonly'} readonly={true} />
      <Checkbox label={'ClassNames'} className={'prikol'} labelStyleClass={'classno'} />
      <Checkbox label={'Checked'} defaultChecked={true} />
      <Checkbox label={'icon'} checkboxIcon={<Icon size={20} name={"loader-2"} color={"green-light"}/>} />
      <button  onClick={() => handleClick(ref)}>show me your ref</button>

      <Input placeholder={'Without ico + onchange in console'} onChange={(e) => handleChange(e)} />
      <Input placeholder={'smol'} size={'small'}/>
      <Input icon={<Icon size={20} name={"loader-2"} color={"general"}/>} placeholder={'Hello'} />
      <Input iconPosition={'left'} icon={<Icon size={20} name={"loader-2"} color={"general"}/>} />
      <Input placeholder={'large blur'} onBlur={(e) => handleBlur(e)} icon={<Icon size={20} name={"loader-2"} color={"primary"}/>} size={'large'} />
      <Input icon={<Icon size={20} name={"loader-2"} color={"general"}/>} placeholder={'Disabled'} disabled={true} />
      <Input icon={<Icon size={20} name={"loader-2"} color={"general"}/>} placeholder={'readOnly'} readonly={true} />

      <Icon className={"test"} onClick={(e)=>{
        console.log(e);}} name={"loader-2"} color={"general"}/>
      <Button disabled={true} onClick={(e)=> console.log(e)} icon={<Icon name={"loader-2"} color={"general"}/>} >Dada</Button>
      <Button onClick={(e)=> console.log(e)} loadingIcon={<Icon name={"loader-2"} color={"general"}/>} loading={true} iconPosition={"left"}>loading</Button>

      <Icon className={"test"} onClick={(e) => {
        console.log(e);
      }} name={"loader-2"} color={"general"}/>

      <Radio ref={ref} label={'hello'} name={'privet'} value={'111'} onChange={(e) => handleChange(e)} checked={checkedId === '111'}
      />
      <Radio readonly label={'hellow'} name={'privet'} value={'222'} onChange={(e) => handleChange(e)} checked={checkedId === '222'}/>

      <button onClick={() => console.log(ref)}>show me ref</button>

      <Tabs onChange={handleChange} items={[{label: 'События', key: 'key3'},{label: 'Проекты', key: 'key4'},{label: 'Покупки', key: 'key5', badge: 66},{label: 'Сводка', key: 'key1', badge: 1},{label: 'Отчеты', key: 'key2', badge: 100},]} />
      <Tabs items={[{label: 'События', key: 'key6', badge: 1}]} defaultActiveItem={'key'} size={'large'} itemStyleClass={'Hello'} className={'privet'} />

      <NxWelcome title="react-ui-core-app" />
      <div />

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
