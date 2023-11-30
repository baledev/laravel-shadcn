import { Icons } from '@/Components/icons';
import { Button } from '@/Components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                    A new verification link has been sent to the email address you provided during registration.
                </div>
            )}

            <form onSubmit={submit}>
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl">Email verification</CardTitle>
                        <CardDescription>
                            Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className='flex flex-col gap-y-4'>
                        <Button type="submit" className="w-full" disabled={processing}>
                            {processing && (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Resend Verification Email
                        </Button>
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="hover:underline text-sm text-primary hover:text-primary/90 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Log Out
                        </Link>
                    </CardFooter>
                </Card>
            </form>
        </GuestLayout>
    );
}
