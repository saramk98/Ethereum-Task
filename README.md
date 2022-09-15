# Ethereum-Task

We have created this app using Next.js, Node and web 3. For registration user enters username,email address and password. A verification link will be sent to provided email. After verifying the link the user will be able to login to the dashboard by using email address and password. If a user has forgot his password he can reset it by providing his email. A link will be sent to the provided email to reset the password. User can reset the password and then login.


## Set Up

1. Run 'npm install' to install all of the dependencies
2. To run this project properly you need to run Next.js development server and Node API server at the same time
3. To run Next.js application run 'npm run dev' and open browser at localhost:3000
4. To run Node API server run 'npm run server' in new terminal window(servers has to run at the same time), it will run server at localhost:3001
5. Create a '.env' file in root folder by copying env[replace] or with values of:

## .env

GOOGLE_USER=your email // e.g abc@gmail.com
GOOGLE_PASSWORD=your gmail app password // 12345678
DOMAIN=your domain // e.g http://localhost:3000


## Gmail App Password Setup:
1. Sign in to your gmail account.
2. Go to Settings -> Security.
3. Set up 2 Step verification.
4. Set up app password.




