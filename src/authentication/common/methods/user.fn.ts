import { InternalServerErrorException } from "@nestjs/common";

export const UserFn = (req, field?: string) => {
    if (!req.session?.passport?.user) throw new InternalServerErrorException("Couldn't fetch user information.");

    return field ? req.session.passport.user[field] : req.session.passport.user
}