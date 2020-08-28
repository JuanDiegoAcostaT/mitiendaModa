import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { hashSync, compareSync } from "https://deno.land/x/bcrypt@v0.2.1/mod.ts";
import { makeJwt, setExpiration, Jose } from "https://deno.land/x/djwt@v0.9.0/create.ts";
import {  User, users } from './users.ts';
import { cart } from './cart.ts'


const header: Jose = {
  alg: 'HS256',
  typ: 'JWT'
};

export const getCart = async (ctx: RouterContext) => {
  const {username} = ctx.state.currentUser
  ctx.response.status = 200
  ctx.response.body = { cart: cart[username] }
}

export const deleteCart = async (ctx: RouterContext) => {
  const {id} = ctx.params
  const {username} = ctx.state.currentUser
  cart[username] = cart[username].filter(
    (cartId : string) => cartId !== id
  )

  console.log({
    idRemoved: id,
    remainingCarts: cart[username],
    username,
  })

  ctx.response.body = { cart: cart[username] }
  ctx.response.status = 200
}

export const postCart = async (ctx: RouterContext) => {
  const {id} = ctx.params
  const {username} = ctx.state.currentUser

  const alreadyExist = cart[username].some(
    (cartId : string) => cartId === id
  )
  if (!alreadyExist) {
    cart[username].push(id)
  }

  console.log({
    alreadyExist,
    cart: cart[username],
    username,
  })

  ctx.response.body = { cart: cart[username] }
  ctx.response.status = 201
}

export const postLogin = async (ctx: RouterContext) => {
  const { value } = await ctx.request.body();

  const user: any = users.find((u: User) => u.username === value.username);

  if (!user) {
    ctx.response.status = 403
  } else if (!compareSync(value.password, user.password)) {
    ctx.response.status = 403
  } else {
    const payload = {
      iss: user.username,
      exp: setExpiration(Date.now() + 1000 * 60 * 60)
    };
    const jwt = makeJwt({
      key: Deno.env.get('JWT_KEY') || '',
      header,
      payload
    })
    ctx.response.status = 201
    ctx.response.body = {jwt}
  }
}

export const postRegister = async (ctx: RouterContext) => {
  const { value } = await ctx.request.body();
  const {username, password} = value

  const hashedPassword = hashSync(password);

  const user: User = {
    username,
    password: hashedPassword,
  };

  // TODO: Check it doesn't exist yet
  const alreadyExist = users.find(user => user.username === username)
  if (alreadyExist) {
    ctx.response.status = 409
  } else {
    users.push(user);
    // initialize the user cart
    cart[username] = [];
    ctx.response.status = 201
  }

}