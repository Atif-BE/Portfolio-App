import { Button, Navbar } from 'flowbite-react';
import React from 'react';

const Layout = ({children}:any) => {
    return(
        <>
            <Navbar fluid>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img
                        alt="Flowbite React Logo"
                        className="mr-3 h-6 sm:h-9"
                        src="/favicon.svg"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Atif Khalil
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button>
                        Contact
                    </Button>
                    {/* <Navbar.Toggle /> */}
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        active
                        href="#"
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        About Me
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Pricing
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout