"use client"
import { SignInUser } from '@/app/actions/authAction';
import { loginSchema, LoginSchema } from '@/lib/schemas/loginSchema';
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Form, Input, Link
} from '@heroui/react';
import { addToast } from '@heroui/toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { error } from 'console';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { GiPadlock } from 'react-icons/gi';

export default function LoginForm() {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors, isValid ,isSubmitting} } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode:'onTouched'
    })
    const onSubmit = async (data: LoginSchema) => {
        const result = await SignInUser(data);
        if (result.status === 'success') {
            addToast({
              title: "Hi",
              description: result.data,
              // @ts-ignore
              variant: 'solid',
              color: "success",
            })

            router.push('/members');
            router.refresh();
        } else {
            if (Array.isArray(result.error)){
                result.error.forEach((error) => {
                    addToast({
                    title: "OOPS",
                    description: error.message,
                    // @ts-ignore
                    variant: 'solid',
                    color: "danger",
                    })
                });
            }
            else {
                addToast({
              title: "OOPS",
              description: result.error,
              // @ts-ignore
              variant: 'solid',
              color: "danger",
            })
            }
            console.log(result)
        }
    }
    return (
        <Card className="flex max-w-[400px] mx-auto items-center">
            <CardHeader className="flex flex-col gap-3u items-center ">
                <div className='text-blue-600 flex flex-row'>
                    <GiPadlock size={30} />
                    <h5 className=' text-3xl'>Log in</h5>
                </div>
                
                <p>Welcome to dating-app</p>
            </CardHeader>
            <Divider />
            <CardBody className=' items-center justify-center'>
                <Form 
                    className="w-full max-w-xs flex flex-col gap-4"
                    validationBehavior="native"
                    onSubmit={handleSubmit(onSubmit)}
                    >
                    <Input
                        defaultValue='john@email.com'
                        isRequired
                        errorMessage={errors.email?.message as string}
                        label="Email"
                        labelPlacement="inside"
                        placeholder="Enter your email"
                        type="email"
                        {...register('email')}
                        isInvalid={!!errors.email}
                    />
                    <Input
                        defaultValue='John@64'
                        isRequired
                        errorMessage={errors.password?.message as string}
                        label="Password"
                        labelPlacement='inside'
                        placeholder="Enter your password"
                        type="password"
                        {...register('password')}
                        isInvalid={!!errors.password}
                    />
                    <div className="w-full ">
                        <Button
                            isDisabled={!isValid}
                            isLoading={isSubmitting}
                            className="w-full " color="primary" type="submit"
                            spinner={
                                <svg
                                className="animate-spin h-5 w-5 text-current"
                                fill="none"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    fill="currentColor"
                                />
                                </svg>
                            }
                        >
                        Login
                        </Button>
                    </div>
                    </Form>
            </CardBody>
            <Divider />
            <CardFooter>

            </CardFooter>
    </Card>
        
    
  );
}
