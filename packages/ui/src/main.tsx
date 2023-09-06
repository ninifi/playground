import { StrictMode } from 'react';
import { render } from 'react-dom/';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DemosAdmin } from './app/demos-admin';
import { Demos } from './app/demos';

const root = document.getElementById('root');

render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Demos />} />
        <Route path="/admin" element={<DemosAdmin />} />
      </Routes>
        </BrowserRouter>
  </StrictMode>,
  root
);