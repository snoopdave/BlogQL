import { jsx as _jsx } from "react/jsx-runtime";
import '@testing-library/jest-dom';
import '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { BlogList } from '../BlogList';
import { BLOGS_QUERY } from '../graphql/queries';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { screen, render } from "@testing-library/react";
it('renders without error', async () => {
    const now = new Date();
    const blogsMock = [{
            request: {
                query: BLOGS_QUERY,
            },
            result: {
                data: { blogs: { nodes: [
                            { id: 'dummy1', name: 'Blog One', handle: 'blog1', created: now, updated: now,
                                user: { id: 'user1', username: 'user1' } },
                            { id: 'dummy2', name: 'Blog Two', handle: 'blog2', created: now, updated: now,
                                user: { id: 'user2', username: 'user2' } },
                        ] } },
            },
        }];
    render(_jsx(MockedProvider, { mocks: blogsMock, addTypename: false, children: _jsx(Router, { children: _jsx(Route, { exact: true, path: '/', children: _jsx(BlogList, {}) }) }) }));
    expect(await screen.findByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByText('Blog One')).toBeInTheDocument();
    expect(await screen.findByText('Blog Two')).toBeInTheDocument();
});
export const a = 5;
