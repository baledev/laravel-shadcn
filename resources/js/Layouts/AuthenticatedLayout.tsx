import { useState, PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/application-logo';
import { Link } from '@inertiajs/react';
import { User } from '@/types';
import { Search } from '@/Components/search';
import { UserNav } from '@/Components/user-nav';
import { MainNav } from '@/Components/main-nav';

export default function Authenticated({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {

    return (
        <div className="min-h-screen bg-white dark:bg-gray-800">
            <div className="flex-col md:flex">
                <div className="border-b">
                    <div className="flex h-16 items-center max-w-7xl mx-auto px-4">
                        <Link href="/">
                            <ApplicationLogo className='w-9 h-9' />
                        </Link>
                        <MainNav />
                        <div className="ml-auto flex items-center space-x-4">
                            <Search />
                            <UserNav user={user} />
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="max-w-7xl mx-auto p-4">
                        <div className="pb-4">
                            {header}
                        </div>

                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </div>
    );
}
