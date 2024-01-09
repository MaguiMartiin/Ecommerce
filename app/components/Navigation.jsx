import Link from "next/link"

const links = [{
    label: 'HOME', 
    route: '/'
}, {
    label: 'SHOP',
    route: '/shop'
}
]
export function Navigation () {
    return (
        <header className="border border-solid border-black p-[1rem]">
            <nav >
                <ul className="flex space-x-8">
                    {links.map(({label, route}) => (
                        <li key={route}>
                            <Link href={route}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}