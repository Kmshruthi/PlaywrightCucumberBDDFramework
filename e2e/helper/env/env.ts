import * as dotenv from "dotenv"

export const getEnv = () => {
  dotenv.config({
    override: true,
    path: `e2e/helper/env/.env.${process.env.ENV}`
  })

}