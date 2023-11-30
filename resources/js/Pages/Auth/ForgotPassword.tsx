import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/input-error';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';
import { Icons } from '@/Components/icons';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            {status && <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">{status}</div>}

            <form onSubmit={submit}>
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl">Forgot password</CardTitle>
                        <CardDescription>
                            Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                                id="email"
                                type="email"
                                placeholder="email@example.com"
                                value={data.email}
                                autoComplete="email"
                                autoCapitalize="none"
                                autoCorrect="off"
                                disabled={processing}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} />
                        </div>
                    </CardContent>
                    <CardFooter className='flex flex-col gap-y-4'>
                        <Button type="submit" className="w-full" disabled={processing}>
                            {processing && (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Email Password Reset Link
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </GuestLayout>
    );
}
