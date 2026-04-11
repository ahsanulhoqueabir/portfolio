export const apibaseUrl: string = process.env.NEXT_PUBLIC_API_SITE_URL!;

export const secretKey: string = process.env.JWT_SECRET!;

export const turnstileConfig = {
  siteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
  secretKey: process.env.TURNSTILE_SECRET_KEY!,
};

export const GTM_ID: string = process.env.NEXT_PUBLIC_GTM_ID!;
