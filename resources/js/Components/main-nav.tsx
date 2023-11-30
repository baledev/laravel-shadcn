import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";

export function MainNav() {
    const active = (link: string) => route().current(link)

    return (
        <nav className="ml-4 flex items-center space-x-4 lg:space-x-6">
            <Link
                href={route('dashboard')}
                className={cn("text-sm font-medium transition-colors hover:text-primary", active('dashboard') || 'text-muted-foreground' )}
            >
                Dashboard
            </Link>
            <Link
                href={route('tasks')}
                className={cn("text-sm font-medium transition-colors hover:text-primary", active('tasks') || 'text-muted-foreground' )}
            >
                Tasks
            </Link>
            <Link
                href="/examples/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Customers
            </Link>
            <Link
                href="/examples/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Products
            </Link>
            <Link
                href="/examples/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                Settings
            </Link>
        </nav>
    )
}
