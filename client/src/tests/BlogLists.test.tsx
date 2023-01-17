/**
 * Copyright David M. Johnson (snoopdave@gmail.com).
 * Licensed under Apache Software License v2.
 */

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import {BlogList} from '../blogs/BlogList';
import {BrowserRouter as Router} from 'react-router-dom';
import {screen, render} from '@testing-library/react';
import {Routes, Route} from "react-router";
import {ApolloProvider} from '@apollo/client';
import {client} from '../setupTests';
import React from "react";

it('BlogList renders without error with Mocked Service Worker', async () => {
    const render1 = render(
        <ApolloProvider client={client}>
            <Router>
                <Routes>
                    <Route path='/' element={<BlogList />} />
                </Routes>
            </Router>
        </ApolloProvider>
    );
    expect(await screen.findByText('Blog One')).toBeInTheDocument();
    expect(await screen.findByText('Dave\s Blog')).toBeInTheDocument();
});