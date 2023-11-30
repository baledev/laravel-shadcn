import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/input-error';
import { Head, useForm } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card';
import { Label } from '@/Components/ui/label';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';
import { Icons } from '@/Components/icons';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <form onSubmit={submit}>
                <Card>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl">Confirm password</CardTitle>
                        <CardDescription>
                            This is a secure area of the application. Please confirm your password before continuing.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input 
                                id="password"
                                type="password"
                                placeholder="email@example.com"
                                value={data.password}
                                autoComplete="password"
                                autoCapitalize="none"
                                autoCorrect="off"
                                disabled={processing}
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} />
                        </div>
                    </CardContent>
                    <CardFooter className='flex flex-col gap-y-4'>
                        <Button type="submit" className="w-full" disabled={processing}>
                            {processing && (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                            )}
                            Confirm
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </GuestLayout>
    );
}
