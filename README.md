## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Terraform](https://www.terraform.io/)
* [Claudiajs](https://claudiajs.com/)
* [AWS Account](https://aws.amazon.com)
* [AWS Credentials with \[feeswise\] Profile](http://docs.aws.amazon.com/cli/latest/userguide/cli-config-files.html)
* Create [Transferwise](https://sandbox.transferwise.tech) sandbox account 
* Create a file named dev.json and prod.json add the environment variables

``` js
{
  "TRANSFERWISE_API_KEY": "YOUR_API_KEY",
  "TRANSFERWISE_URL": "TW_API_URL"
}
```

## Instalation 
* `npm install` install node modules

## Deploying
### Deploying dev

* `npm run api:create` create cladiajs api)
* `npm run api:deploy` deploy claudiajs api with dev environment
* `npm run api:load-from-json` set environment variables

### Deploying prod

* `npm run api:create` create cladiajs api)
* `npm run api:deploy:prod` deploy claudiajs api with dev environment
* `npm run api:load-from-json:prod` set environment variables
