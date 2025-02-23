import z from 'zod';

export const signupschema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {
        message:'Password must be at least 6 characters'
    }),
    name:z.string().min(4)
})

export type SignUpschema = z.infer<typeof signupschema>

