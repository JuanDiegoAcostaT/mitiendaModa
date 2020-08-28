import { Application, Router } from "https://deno.land/x/oak/mod.ts"
import { oakCors } from "https://deno.land/x/cors/mod.ts"
import "https://deno.land/x/dotenv/load.ts"
import * as flags from 'https://deno.land/std/flags/mod.ts'

import { userMiddleware } from "./userMiddleware.ts"
import { authMiddleware } from "./authMiddleware.ts"
import {
  getCart,
  deleteCart,
  postCart,
  postLogin,
  postRegister
} from "./routes.ts"

const {args} = Deno

const DEFAULT_PORT = 8080
const portFromArgs = flags.parse(args).port
const port = portFromArgs ? Number(portFromArgs) : DEFAULT_PORT

const app = new Application()
const router = new Router()

app.use(userMiddleware, oakCors())

router
  .get('/cart', authMiddleware, getCart)
  .delete("/cart/:id", authMiddleware, deleteCart)
  .post("/cart/:id", authMiddleware, postCart)
  .post("/register", postRegister)
  .post("/login", postLogin)

app.addEventListener('error', evt => {
  console.log(evt.error)
})

app.use(router.routes())
app.use(router.allowedMethods())


app.listen({ port })
console.log(`Started listening on port: ${port}`)