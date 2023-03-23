import React, { useState } from 'react';

interface ISidebarItemProps {
    name: string;
    route: string;
}

function SidebarItem({
    children,
    name,
    route,
}: React.PropsWithChildren<ISidebarItemProps>) {
    const [isActive, setIsActive] = useState(false);

    const dropdownIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            // fill="currentColor"
            fill={children ? 'currentColor' : 'white'}
            className="h-5 w-5"
            transform={isActive ? '' : 'rotate(270)'}
        >
            <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
            />
        </svg>
    );

    const dropdownIconDiv = (
        <div
            onClick={() => {
                setIsActive((prev) => !prev);
            }}
        >
            {dropdownIcon}
        </div>
    );

    return (
        <>
            <ul className="flex border-l-2 left-1/2">
                {dropdownIconDiv}
                <li>
                    <a
                        href={`${route}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setIsActive((prev) => !prev);
                        }}
                    >
                        {name}
                    </a>
                    {isActive ? <>{children}</> : null}
                </li>
            </ul>
        </>
    );
}

export default SidebarItem;
