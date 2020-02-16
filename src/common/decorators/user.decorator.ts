import { createParamDecorator, Request, InternalServerErrorException } from "@nestjs/common";

export const User = createParamDecorator((field: string, req) => {
    if (!req.session?.passport?.user) throw new InternalServerErrorException("Couldn't fetch user information.");

    return field ? req.session.passport.user[field] : req.session.passport.user
})

