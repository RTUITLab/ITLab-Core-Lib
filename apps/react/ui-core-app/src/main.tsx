import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import {Button} from "@itlab-core-lib/react/ui-core";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Button>Button</Button>
      <App />
    </BrowserRouter>
  </StrictMode>
);
