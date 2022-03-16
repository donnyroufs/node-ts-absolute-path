import "dotenv/config"
import "reflect-metadata"

import express from "express"
import { add } from "@core/index"

export async function bootstrap() {
  const app = express()

  app.listen(5000, () => {
    console.log("server is running on: http://localhost:5000")
    console.log(add(1000, 337))
  })
}

bootstrap()
