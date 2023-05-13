import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <AppRouter/>
);
