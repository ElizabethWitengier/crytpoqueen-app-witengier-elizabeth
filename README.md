This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Additional Information About this Project

CryptoQueen is a NextJS and React application designed to empower women by educating them about cryptocurrency. Its mission is to break down the barriers that have prevented women from entering the crypto space by providing them with the knowledge and tools they need to invest confidently and trade cryptocurrencies. By equipping women with access to the world of cryptocurrency, CryptoQeen aims to close the gender gap in this rapidly growing industry and promote financial equality. The app offers a user-friendly interface for cryptocurrency searching, saving coins to favorites, and educational resources.

CoinGecko is the API used for the CryptoQueen website. CoinGecko provides live data on different cryptocurrencies and allows testing on the documentation site. MongoDB Atlas hosts the database because it offers a user-friendly interface, automated security features, built-in replication, backups, point-in-time recovery, fine-grained monitoring, and automatic patching. MongoDB stores users' names, emails, passwords, and favorites. Users must create an account using the "favorites feature," which saves their preferred coins.

## Environmental Variables

- MONGODB_URI=mongodb+srv://admin:psOyf2CZIda9Iwsl@cluster0.cybisei.mongodb.net/
- MONGODB_DB=CryptoQueenDB
- BASE_URL=http://localhost:3000 (for local)
- BASE_URL=https://crytpoqueen-app-witengier-elizabeth.vercel.app (for Vercel deployment)

## API Routes & Page Information

Pages
- Login
- Signup
- Home
- Search
- Single Coin Page
- Learn
- Favorites

API Routes
* Login (/login)
* Signup (/signup)
* All Coins (/coins)
* Single Coin (/coin/single_coin))
* Favorites (/favorites/user_id/single_coin)

## Wireframe Evolution (Final Draft for Project)

![1](https://user-images.githubusercontent.com/97287195/233719310-473a7ea0-1c96-4146-b154-e32c15daf54d.svg)
![2](https://user-images.githubusercontent.com/97287195/233719348-2e600e23-6eff-41cb-b9d1-b0239864077d.svg)
![3](https://user-images.githubusercontent.com/97287195/233719355-ea9d6468-78aa-4c43-9311-781fe9633c83.svg)
![4](https://user-images.githubusercontent.com/97287195/233719357-ba120e62-6369-4175-a5f5-ac47e377a619.svg)
![5](https://user-images.githubusercontent.com/97287195/233719364-0284638f-1b2a-44c4-bc8b-a5591dc8f740.svg)
![6](https://user-images.githubusercontent.com/97287195/233719367-a1ffd0a3-d259-4bd9-8a24-3ac7adc975e7.svg)
![7](https://user-images.githubusercontent.com/97287195/233719371-29526e08-bff3-4846-99fe-d84f782c5a92.svg)
