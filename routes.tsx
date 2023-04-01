export const routes = [
    {
        name: 'Drinks',
        route: '/drinks',
    },
    {
        name: 'Food',
        route: '/food',
        subroute: [
            {
                name: 'Vegetarian',
                route: '/vegetarian',
            },
            {
                name: 'Meat',
                route: '/meat',
                subroute: [
                    {
                        name: 'Chicken',
                        route: '/chicken',
                        subroute: [
                            {
                                name: 'Thighs',
                                route: '/thighs',
                            },
                            {
                                name: 'Wings',
                                route: '/wings',
                                subroute: [
                                    {
                                        name: 'And wings and wings and wings..',
                                        route: '/wingsandwings',
                                        subroute: [
                                            {
                                                name: 'On and on forever and ever and ever...',
                                                route: '/forever',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: 'Beef',
                        route: '/beef',
                    },
                ],
            },
        ],
    },
    {
        name: 'Dessert',
        route: '/dessert',
    },
];

//To make Nextjs happy
export default function route() {
    return <div></div>;
}
