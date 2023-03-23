import React from 'react';
import SidebarItem from './SidebarItem';
import { routes } from './routes';

//You can pass in the routes object as a prop
//but for simplicity it is being imported from another file here

function SidebarNav() {
    //Any type because too lazy to create route type
    const mapRoutes = (routes: any, path = 'navdemo') => {
        return routes.map((route: any) => {
            const thisPath = path + route.route;
            return (
                <SidebarItem
                    key={route.route}
                    name={route.name}
                    route={thisPath}
                >
                    {route.subroute
                        ? mapRoutes(route.subroute, thisPath)
                        : null}
                </SidebarItem>
            );
        });
    };

    const routesInSidebar = mapRoutes(routes);
    return <div>{routesInSidebar}</div>;
}

export default SidebarNav;
