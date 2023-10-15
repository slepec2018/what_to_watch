import { AuthStatus, NameSpace } from '../../const';
import { UserData } from '../../types/data';
import { State } from '../../types/state';

export const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authStatus;
export const getCurrentUser = (state: State): UserData | null => state[NameSpace.User].user;
