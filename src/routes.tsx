import React from 'react'
import Search from "./views/Search"
import Home from "./views/Home";

export interface IRoute {
    path: string
    exact: boolean
    child: () => any
}

export const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        child: Home
    },
    {
        path: '/search',
        exact: true,
        child: Search
    }
]