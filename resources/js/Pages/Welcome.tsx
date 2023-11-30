import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import ApplicationLogo from '@/Components/application-logo';
import { Input } from '@/Components/ui/input';
import { UserNav } from '@/Components/user-nav';
import { Button } from '@/Components/ui/button';

export default function Welcome({ auth }: PageProps) {
    return (
        <>
            <Head title="Welcome" />

            <div className="border-b">
                <div className="flex h-16 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/">
                        <ApplicationLogo className="w-9 h-9" />
                    </Link>
                    <nav className="ml-4 flex items-center space-x-4 lg:space-x-6">
                        <Link
                            href="/examples/dashboard"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            Overview
                        </Link>
                        <Link
                            href="/examples/dashboard"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/examples/dashboard"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            About
                        </Link>
                        <Link
                            href="/examples/dashboard"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/examples/dashboard"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Contact
                        </Link>
                    </nav>
                    <div className="ml-auto flex items-center space-x-4">
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="md:w-[100px] lg:w-[300px]"
                        />

                        {auth.user ?
                            <UserNav user={auth.user} /> :
                            <>
                                <Button variant="link" asChild>
                                    <Link href={route('register')}>Sign up</Link>
                                </Button>
                                <Button asChild>
                                    <Link href={route('login')}>Log in</Link>
                                </Button>
                            </>
                        }
                    </div>
                </div>
            </div>

            <section className="px-4 py-24 mx-auto max-w-7xl">
                <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                    <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                        All your <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">customer feedback</span> in one single place.
                    </h1>
                    <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
                        Hellonext is a feature voting software where you can allow your users to vote on features, publish roadmap, and complete your customer feedback loop.
                    </p>
                    <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                        <Button size="lg">
                            Get Started
                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </Button>
                        <Button variant="outline" size="lg">
                            Book a Demo
                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
                <div className="w-full mx-auto mt-20 text-center md:w-10/12">
                    <img src="/img/hero.jpeg" alt="Hellonext feedback boards software screenshot" className="w-full rounded-lg shadow-2xl" />
                </div>
            </section>

        </>
    );
}
