import { InternalServerErrorException, createParamDecorator } from '@nestjs/common';

export const UserAndBody = createParamDecorator((field: null, req) => {
    if (!req.session?.passport?.user) throw new InternalServerErrorException("Couldn't fetch user information.");
    else return { user: req.session.passport.user, body: req.body }
})

