import { UserProvider } from '../providers/user.provider';

export default {
    Query: {
        users: (root: any, { id }: any, { injector }: any) => injector.get(UserProvider).getUserById(id),
    },
    User: {
        id: (user: any) => user._id,
        name: (user: any) => user.username,
    },
};